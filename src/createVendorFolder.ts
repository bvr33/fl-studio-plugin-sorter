import { existsSync, mkdirSync } from 'fs'
import { createMainFolder } from './createMainFolder.js'

export function createVendorFolder(path: string, folderName: string): boolean {
  createMainFolder()
  try {
    if (!existsSync(`${path}/${folderName}`)) {
      mkdirSync(`${path}/${folderName}`)
    }
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
