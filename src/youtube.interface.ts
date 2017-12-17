import {} from '@types/youtube';
import { EventEmitter } from '@angular/core';

export interface PlayerConfig {
    elementId: string,
    width: number,
    height: number,
    videoId?: string,
    outputs: {
        ready: EventEmitter<YT.Player>,
        change: EventEmitter<YT.PlayerEvent>
    }
}
