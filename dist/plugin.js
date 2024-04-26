var capacitorSoundEffects = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
