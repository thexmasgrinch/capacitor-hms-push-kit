'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

class PushKitWeb extends core.WebPlugin {
    constructor() {
        super({
            name: 'PushKit',
            platforms: ['web'],
        });
    }
    async getToken() {
        throw new Error('Not supported in the Web.');
    }
    async subscribe(_options) {
        throw new Error('Not supported in the Web.');
    }
    async unsubscribe(_options) {
        throw new Error('Not supported in the Web.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PushKitWeb: PushKitWeb
});

const PushKit = core.registerPlugin('PushKit', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PushKitWeb()),
});

exports.PushKit = PushKit;
exports.PushKitWeb = PushKitWeb;
//# sourceMappingURL=plugin.cjs.js.map
