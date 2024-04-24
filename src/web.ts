import { WebPlugin } from '@capacitor/core';

import type { SoundEffectsPlugin } from './definitions';

export class SoundEffectsWeb extends WebPlugin implements SoundEffectsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
