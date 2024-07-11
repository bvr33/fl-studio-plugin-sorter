import { existsSync, readdirSync, rmSync } from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createPluginNameWithExtension } from './createPluginNameWithExtension.js'
import { createVendorFolder } from './createVendorFolder.js'
import { getPluginName, getVendorName } from './getVendorName.js'
import { movePlugin } from './movePlugin.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
//

export const INPUT_FILES_PATH = `${__dirname}/../input_files`
export const OUTPUT_FILES_PATH = `${__dirname}/../output_files`

function start() {
  createVendorFolder(OUTPUT_FILES_PATH, '@byVendor')

  const filterFIles = readdirSync(INPUT_FILES_PATH).filter(
    (file) => path.extname(file).toLowerCase() == '.nfo'
  )

  filterFIles.forEach((nfoFile) => {
    const pluginName = createPluginNameWithExtension(getPluginName(nfoFile))
    const vendorName = getVendorName(INPUT_FILES_PATH, nfoFile).replace(',', ' ').replace('.', ' ')

    if (!createVendorFolder(`${OUTPUT_FILES_PATH}/@byVendor`, vendorName)) return
    if (!existsSync(`${INPUT_FILES_PATH}/${pluginName}`)) return
    movePlugin(`${`${OUTPUT_FILES_PATH}/@byVendor`}/${vendorName}`, pluginName)
    rmSync(`${INPUT_FILES_PATH}/${nfoFile}`)
  })
}

start()
