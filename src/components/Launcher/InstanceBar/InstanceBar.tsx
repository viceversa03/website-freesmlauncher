import {useInstanceStore, useLauncherBarsStore} from "@/utils/stores";
import {LauncherBarType} from "@/types/LauncherBar.type";
import {LAUNCHER_INSTANCE_BAR_ITEMS, LAUNCHER_INSTANCES} from "@/configs/launcher";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {useTranslations} from "next-intl";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import Image from "next/image";
import {Icon} from "@iconify/react";

export default function InstanceBar() {
    const translate = useTranslations('Translations');

    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;

    const launcherBarsStore = useLauncherBarsStore((state) => state);
    const instanceBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.instance-toolbar');
    const lastIndex = launcherBarsStore.entries.length - 1;
    const hasLockBars = launcherBarsStore.entries[lastIndex].opened;

    return (
        <div className="w-full min-h-40 items-stretch flex flex-nowrap gap-0 bg-white">
            {
                instanceBar?.opened && (
                    <div className="p-2.5 flex flex-col gap-2 w-[168px] bg-[#0a0a10]">
                        {
                            !hasLockBars && (
                                <div className="cursor-move rounded-full h-[5px] w-full bg-[#dbcafe]" />
                            )
                        }
                        <div className="select-none flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <Image width={80} src={currentInstance.icon} alt="Grass svg icon" />
                        </div>
                        <div className="select-none flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <p className="text-center text-[13px] text-[#CDD6F4]">
                                {currentInstance.name}
                            </p>
                        </div>
                        {
                            LAUNCHER_INSTANCE_BAR_ITEMS.map((item: LauncherInstanceBarItemType) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="select-none px-1 py-0.5 flex gap-1 items-center rounded-md hover:bg-[#1b1825] text-[#CDD6F4]"
                                    >
                                        {item.icon}
                                        <p className="text-[13px]">
                                            {translate(item.name)}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                )
            }
            <div className="w-full flex flex-col p-4 gap-2 bg-[#0c0c13]">
                <div className="select-none flex gap-2 items-center text-[#80859A] text-[12px]">
                    <Icon height={28} icon="fluent:chevron-down-16-filled" />
                    <div className="flex-shrink-0 font-bold">
                        Без группы
                    </div>
                    <div className="w-full h-[2px] bg-[#15161e]" />
                </div>
                <div className="flex gap-2">
                    {
                        LAUNCHER_INSTANCES.map((instance: LauncherInstanceType) => {
                            return (
                                <button
                                    className="cursor-default flex flex-col items-center justify-start gap-2 w-[100px]"
                                    key={instance.name}
                                    onClick={() => updateCurrentInstance(instance)}
                                >
                                    <Image width={48} src={instance.icon} alt="Grass svg icon" />
                                    <p
                                        className="text-[13px] text-[#CDD6F4] text-center w-full"
                                        style={{
                                            background: instance.name === currentInstance.name ? "#a285c6" : "#040407"
                                        }}
                                    >
                                        {instance.name}
                                    </p>
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}