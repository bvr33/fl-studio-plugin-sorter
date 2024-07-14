export function createPluginNameWithExtension(pluginFileName: string): string {
  const PLUGIN_EXTENSION = 'fst'
  return `${pluginFileName}.${PLUGIN_EXTENSION}`
}
