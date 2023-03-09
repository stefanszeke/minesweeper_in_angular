import { Timestamp } from "rxjs";

 export interface Score {
    id?: number;
    game: string;
    player: string;
    points: number;
    playedon?: Timestamp<any>
 } 