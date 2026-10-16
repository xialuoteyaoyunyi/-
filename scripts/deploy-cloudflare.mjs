import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const config = 'dist/server/wrangler.json';
const built = JSON.parse(readFileSync(config, 'utf8'));
if (built.name !== 'embodied-research-studio' ||
    !built.d1_databases?.some(db => db.binding === 'DB' && db.database_id === '079976a0-0e0a-40bc-badd-5402ac4221b0')) {
  throw new Error('Build configuration does not target the independent Studio deployment.');
}
for (const args of [
  ['d1', 'migrations', 'apply', 'DB', '--remote', '--config', config],
  ['deploy', '--config', config],
]) {
  const result = spawnSync(process.execPath, ['node_modules/wrangler/bin/wrangler.js', ...args], { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
