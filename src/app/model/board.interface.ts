import { Iset } from ".";

export interface Iboard {
    id: string;
    name: string;
    description:string
    previewImg:string
    topGroups: any[];
    bottomGroups: any[];
}