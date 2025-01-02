import {HandleActionType} from "@/types/HandleAction.type";

export default function handleLaunch({
    launched,
    updateCurrentInstance,
    currentInstance,
}: HandleActionType): void {
    updateCurrentInstance({
        ...currentInstance,
        launched: launched ?? currentInstance.launched,
    });
}