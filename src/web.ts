import { WebPlugin } from "@capacitor/core";

import type { SoundEffectsPlugin } from "./definitions";

export class SoundEffectsWeb extends WebPlugin implements SoundEffectsPlugin {
	async playSound(_options: { filename: string }): Promise<string> {
		// unimplemented
		return "unimplemented";
	}
}
