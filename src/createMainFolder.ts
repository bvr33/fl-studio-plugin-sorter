import { existsSync, mkdirSync } from 'fs'
import { OUTPUT_FILES_PATH } from './index.js'

export function createMainFolder() {
  try {
    if (!existsSync(OUTPUT_FILES_PATH)) {
      mkdirSync(OUTPUT_FILES_PATH)
    }
  } catch (error) {
    console.log(error)
  }
}
