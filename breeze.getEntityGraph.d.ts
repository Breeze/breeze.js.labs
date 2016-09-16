import { EntityManager } from '../breeze-client';

declare module '../breeze-client' {
    interface EntityManager {
        getEntityGraph(roots: Entity | Array<Entity>, expand: string): Array<Entity>;
    }
}