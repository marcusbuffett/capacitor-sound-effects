export interface SoundEffectsPlugin {
	playSound(options: { filename: string }): Promise<string>;
}
