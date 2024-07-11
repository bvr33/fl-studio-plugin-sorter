import { readFileSync } from 'fs'

export function getVendorName(nfoFileFolderPath: string, fileName: string): string {
  let openFile = readFileSync(`${nfoFileFolderPath}/${fileName}`, 'utf-8')
  const fileLines = openFile.split('\r\n')
  return fileLines.filter((line) => line.includes('vendorname'))[0].split('_0=')[1]
}

export function getPluginName(fileName: string): string {
  return fileName.split('.')[0]
}
