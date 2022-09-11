import { WebPlugin } from '@capacitor/core';
export class PushKitWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map