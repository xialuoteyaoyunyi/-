import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';
export default defineConfig({root:resolve(process.cwd(),'showcase'),publicDir:resolve(process.cwd(),'public'),plugins:[react()],resolve:{alias:{'@':process.cwd()}},build:{outDir:resolve(process.cwd(),'showcase-dist'),emptyOutDir:true}});
