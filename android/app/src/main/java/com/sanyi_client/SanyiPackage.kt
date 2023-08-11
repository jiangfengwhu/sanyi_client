package com.sanyi_client

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class SanyiPackage : ReactPackage {
    override fun createViewManagers(reactApplicationContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList()
    }

    override fun createNativeModules(reactApplicationContext: ReactApplicationContext): List<NativeModule> {
        val modules: MutableList<NativeModule> = ArrayList()
        modules.add(BundleManagerModule(reactApplicationContext))
        return modules
    }
}