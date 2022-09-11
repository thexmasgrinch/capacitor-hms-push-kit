import { WebPlugin } from '@capacitor/core';
import type { PushKitPlugin } from './definitions';
export declare class PushKitWeb extends WebPlugin implements PushKitPlugin {
    constructor();
    getToken(): Promise<{
        token: string;
    }>;
    subscribe(_options: {
        topic: string;
    }): Promise<void>;
    unsubscribe(_options: {
        topic: string;
    }): Promise<void>;
}
