package com.sanyi_client;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BundleManagerModule extends ReactContextBaseJavaModule {
    BundleManagerModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "BundleManagerModule";
    }

    @ReactMethod
    public void loadRNBundle(String path, Promise promise) {
        getReactApplicationContext().getCatalystInstance().loadSplitBundleFromFile(path, path);
        promise.resolve(true);
    }
}
