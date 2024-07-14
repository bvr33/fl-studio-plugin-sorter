import { existsSync, readdirSync, rmSync } from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createFolder } from './createFolder.js'
import { createPluginNameWithExtension } from './createPluginNameWithExtension.js'
import { getPluginName, getVendorName } from './getVendorName.js'
import { movePlugin } from './movePlugin.js'
import { normalizeVendorNameString } from './normalizeVendorNameString.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
//

export const BASE_PATH = `${__dirname}/..`
export const INPUT_FILES_PATH = `${BASE_PATH}/input_files`
export const OUTPUT_FILES_PATH = `${BASE_PATH}/output_files`

function start() {
  createFolder(BASE_PATH, 'input_files')
  createFolder(BASE_PATH, 'output_files')
  createFolder(OUTPUT_FILES_PATH, '@byVendor')

  readdirSync(INPUT_FILES_PATH)
    .filter((file) => path.extname(file).toLowerCase() == '.nfo')
    .forEach((nfoFile) => {
      const vendorName = normalizeVendorNameString(getVendorName(INPUT_FILES_PATH, nfoFile))

      if (!createFolder(`${OUTPUT_FILES_PATH}/@byVendor`, vendorName)) return
      const pluginName = createPluginNameWithExtension(getPluginName(nfoFile))
      if (existsSync(`${INPUT_FILES_PATH}/${pluginName}`)) {
        movePlugin(`${`${OUTPUT_FILES_PATH}/@byVendor`}/${vendorName}`, pluginName)
      }
      rmSync(`${INPUT_FILES_PATH}/${nfoFile}`)
    })
}

start()
