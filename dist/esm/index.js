export * from './definitions';
export * from './web';
import { registerPlugin } from '@capacitor/core';
const PushKit = registerPlugin('PushKit', {
    web: () => import('./web').then(m => new m.PushKitWeb()),
});
export * from './definitions';
export { PushKit };
//# sourceMappingURL=index.js.map