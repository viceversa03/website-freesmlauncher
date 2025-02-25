import {LauncherInstanceType} from "@/types/LauncherInstance.type";

export type HandleActionType = {
    launched?: string | null;
    deleted?: string;
    updateCurrentInstance: (instance: LauncherInstanceType) => void;
    currentInstance: LauncherInstanceType;
};