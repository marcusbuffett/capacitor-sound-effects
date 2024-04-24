export interface SoundEffectsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
