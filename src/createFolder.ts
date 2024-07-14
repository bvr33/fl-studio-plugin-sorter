import { existsSync, mkdirSync } from 'fs'

export function createFolder(path: string, folderName: string): boolean {
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
