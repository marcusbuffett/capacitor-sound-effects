package com.chessbook.soundeffects;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SoundEffects")
public class SoundEffectsPlugin extends Plugin {

    private SoundEffects implementation = new SoundEffects();

    @PluginMethod
    public void playSound(PluginCall call) {
        // String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", "unimplemented");
        // call.resolve("blah");
    }
}
