import Foundation
import Capacitor
import AVFoundation

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SoundEffectsPlugin)
public class SoundEffectsPlugin: CAPPlugin {
    private var playerCache: [String: AVAudioPlayer] = [:]

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
        print(url)

        if let player = playerCache[path] {
            // Use the cached player if available
            player.play()
        } else {
            do {
                let player = try AVAudioPlayer(contentsOf: url)
                playerCache[path] = player
                player.play()
            } catch let error {
                print(error.localizedDescription)
            }
        }

        call.resolve([
            "value": "success"
        ])
    }
}
