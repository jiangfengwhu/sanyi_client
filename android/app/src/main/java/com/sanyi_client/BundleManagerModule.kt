package com.sanyi_client

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class BundleManagerModule internal constructor(context: ReactApplicationContext?) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "BundleManagerModule"
    }

    @ReactMethod
    fun loadRNBundle(path: String?, promise: Promise) {
        reactApplicationContext.catalystInstance.loadSplitBundleFromFile(path, path)
        promise.resolve(true)
    }
}