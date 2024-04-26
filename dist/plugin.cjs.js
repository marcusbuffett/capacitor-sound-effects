'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const SoundEffects = core.registerPlugin('SoundEffects', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SoundEffectsWeb()),
});

class SoundEffectsWeb extends core.WebPlugin {
    async playSound(_options) {
        // unimplemented
        return "unimplemented";
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SoundEffectsWeb: SoundEffectsWeb
});

exports.SoundEffects = SoundEffects;
//# sourceMappingURL=plugin.cjs.js.map
