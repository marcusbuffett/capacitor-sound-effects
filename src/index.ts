import { registerPlugin } from '@capacitor/core';

import type { SoundEffectsPlugin } from './definitions';

const SoundEffects = registerPlugin<SoundEffectsPlugin>('SoundEffects', {
  web: () => import('./web').then(m => new m.SoundEffectsWeb()),
});

export * from './definitions';
export { SoundEffects };
