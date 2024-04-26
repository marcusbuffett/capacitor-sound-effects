import { WebPlugin } from "@capacitor/core";
import type { SoundEffectsPlugin } from "./definitions";
export declare class SoundEffectsWeb extends WebPlugin implements SoundEffectsPlugin {
    playSound(_options: {
        filename: string;
    }): Promise<string>;
}
