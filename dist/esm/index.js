import { registerPlugin } from '@capacitor/core';
const SoundEffects = registerPlugin('SoundEffects', {
    web: () => import('./web').then(m => new m.SoundEffectsWeb()),
});
export * from './definitions';
export { SoundEffects };
//# sourceMappingURL=index.js.map