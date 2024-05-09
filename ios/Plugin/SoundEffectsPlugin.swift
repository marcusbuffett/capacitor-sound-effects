import Foundation
import Capacitor
import AVFoundation
import SwiftySound

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SoundEffectsPlugin)
public class SoundEffectsPlugin: CAPPlugin {

    @objc func playSound(_ call: CAPPluginCall) {
        try? AVAudioSession.sharedInstance().setCategory(.ambient)

        let filename = call.getString("filename")!
        let components = filename.components(separatedBy: ".")

        // Extract the name and file type
        let name = components[0]
        let fileType = components.last

        print("name: \(name) fileType: \(String(describing: fileType))")

        guard let path = Bundle.main.path(forResource: name, ofType: fileType) else {
            print("File not found: \(filename) \(String(describing: fileType))")
            return
        }

        let url = URL(fileURLWithPath: path)
        Sound.category = .ambient
        Sound.play(url: url)

        call.resolve([
            "value": "success"
        ])
    }
}
