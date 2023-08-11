package com.sanyi_client

import android.app.Activity
import androidx.core.splashscreen.SplashScreen
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SplashScreenModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SplashScreenModule"

    @ReactMethod
    fun hide() {
        loading = false
    }

    companion object {
        private lateinit var mSplashScreen: SplashScreen
        private var loading: Boolean = true

        fun init(activity: Activity) {
            mSplashScreen = activity.installSplashScreen()
            mSplashScreen.setKeepOnScreenCondition {
                loading
            }
        }
    }

}

