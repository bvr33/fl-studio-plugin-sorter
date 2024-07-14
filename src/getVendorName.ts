import { readFileSync } from 'fs'

export function getVendorName(nfoFileFolderPath: string, fileName: string): string {
  let openFile = readFileSync(`${nfoFileFolderPath}/${fileName}`, 'utf-8')
  const fileLines = openFile.split('\r\n')
  const vendorName = fileLines.filter((line) => line.includes('vendorname_0'))
  if(vendorName.length == 0) return '#Unknown Vendor'
  return vendorName[0].split('=')[1]
}

export function getPluginName(fileName: string): string {
  return fileName.split('.')[0]
}
