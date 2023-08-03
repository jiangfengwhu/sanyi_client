// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useRef} from 'react';
// import {useImmer} from 'use-immer';
// import 'react-native-reanimated';
// import CameraKit, {Camera, CameraScreen} from 'react-native-camera-kit';
// function ScanPage() {
//   const [loading, updateLoading] = useImmer(false);
//   const cameraRef = useRef<CameraScreen>(null);
//   useEffect(() => {
//     // CameraKit.requestCameraPermission().then((result: any) => {
//     //   if (result === true) {
//     //     updateLoading(false);
//     //   }
//     // });
//   }, []);
//   const onCodeRead = event => {
//     console.log(event.nativeEvent);
//   };
//   return !loading ? (
//     <CameraScreen
//       scanBarcode={true}
//       ref={cameraRef}
//       // style={StyleSheet.absoluteFill}
//       onReadCode={onCodeRead}
//       showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
//       laserColor="red" // (default red) optional, color of laser in scanner frame
//       frameColor="white"
//     />
//   ) : (
//     <View style={{backgroundColor: 'green', height: 200}} />
//   );
// }
// export {ScanPage};
