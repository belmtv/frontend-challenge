import path from 'path'
import { buildWebpackConfig } from './config/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/types/config'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        dist: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })
}
