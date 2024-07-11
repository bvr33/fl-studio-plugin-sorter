import { renameSync } from 'fs'
import { INPUT_FILES_PATH } from './index.js'

export function movePlugin(path: string, pluginFileName: string): void {
  renameSync(`${INPUT_FILES_PATH}/${pluginFileName}`, `${path}/${pluginFileName}`)
}
