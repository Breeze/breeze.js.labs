import { EntityManager } from '../breeze-client';

declare module '../breeze-client' {
    interface EntityManager {
        enableSaveQueuing(enable?: boolean);
    }
}