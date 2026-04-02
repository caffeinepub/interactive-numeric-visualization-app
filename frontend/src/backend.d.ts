import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    addSequence(id: string, sequence: string): Promise<void>;
    getAllSequences(): Promise<Array<[string, string]>>;
    getSequence(id: string): Promise<string | null>;
}
