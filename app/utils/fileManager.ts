import RNFS from 'react-native-fs';
interface DownloadConfig {
  url: string;
  path: string;
}
function downloadFile(config: DownloadConfig) {
  RNFS.downloadFile({
    fromUrl: config.url,
    toFile: config.path,
  });
}

export {downloadFile};
