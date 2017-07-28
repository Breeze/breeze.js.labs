import { config } from '../breeze-client';

declare module '../breeze-client' {
    namespace config {
        export function ajaxpost(ajaxAdapter?: Object): void;
    }
}