PROJ_NAME=$1

npx react-native@latest init "$PROJ_NAME"
cd "$PROJ_NAME" || exit
yarn add @react-navigation/native \
 @react-navigation/native-stack \
 lottie-react-native \
 react-native-gesture-handler \
 react-native-reanimated \
 react-native-safe-area-context \
 react-native-screens \
 react-native-svg \
 react-native-webview \
 react-native-bootsplash \

sed -i "" "s/react-native run-android/react-native run-android --active-arch-only --port=8088/g" package.json
sed -i "" "s/react-native start/react-native start --port=8088/g" package.json
sed -i "" "s/newArchEnabled=false/newArchEnabled=true/g" android/gradle.properties
echo "module.exports = {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: ['react-native-reanimated/plugin'],
      };
" > babel.config.js

# manual execute
# yarn react-native generate-bootsplash ab2d116049.svg --logo-width=180 // 闪屏
# 配置styles:
#<style name="BootTheme" parent="Theme.SplashScreen">
#        <item name="windowSplashScreenBackground">@color/bootsplash_background</item>
#        <item name="windowSplashScreenAnimatedIcon">@mipmap/bootsplash_logo</item>
#        <item name="postSplashScreenTheme">@style/AppTheme</item>
#    </style>
#    android:theme="@style/BootTheme"> <!-- Replace @style/AppTheme with @style/BootTheme -->





# build release
# waiting for watchman watch-project (00s), 重新安装watchman
