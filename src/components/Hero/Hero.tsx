"use client";

import Launcher from "@/components/Launcher/Launcher";
import Link from "next/link";
import {DOWNLOADS_LINK, GITHUB_LINK} from "@/configs/constants";
import {useTranslations} from "next-intl";
import getPlatformName from "@/utils/Helpers/getPlatformName";
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";

export default function Hero() {
    const [definedNavigator, setDefinedNavigator] = useState<Navigator | null>(null);
    const info = useTranslations('Info');
    const locale = info('locale');
    const translate = useTranslations('Translations');
    const platform = definedNavigator?.platform.toLowerCase();
    const displayPlatform = getPlatformName(platform ?? '');

    let icon;

    switch (displayPlatform.toLowerCase()) {
        case 'windows':
            icon = (
                <Icon height={24} icon='mdi:microsoft-windows' />
            );
            break;
        case 'linux':
            icon = (
                <Icon height={24} icon='mdi:linux' />
            );
            break;
        case 'macos':
            icon = (
                <Icon height={24} icon='mdi:apple' />
            );
            break;
        default:
            icon = (
                <Icon height={24} icon="mdi:devices" />
            );
            break;
    }

    useEffect(() => {
        setDefinedNavigator(navigator);
    }, []);

    return (
        <div className="flex flex-col gap-8 pt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-5xl text-white sm:text-7xl">
                {translate('hero.title')}{' '}
                <span className="text-[#cba6f7]">
                    {displayPlatform}
                </span>
            </p>
            <p className="text-center text-balance text-lg sm:text-2xl text-gray-400">
                {translate('hero.description')}
            </p>
            <div className="flex gap-2 justify-center">
                <Link href={`/${locale}${DOWNLOADS_LINK}`} className="text-center text-balance bg-[#cba6f7] flex gap-2 items-center py-2 px-4 rounded-md font-bold text-[18px] text-black transition hover:bg-[#8839ef] hover:text-white">
                    {icon}
                    {translate('hero.download-now')}
                </Link>
                <Link target="_blank" href={GITHUB_LINK} className="text-center text-balance transition border-white border-[1px] bg-transparent py-2 px-4 rounded-md font-bold text-[18px] text-white hover:text-[#cba6f7] hover:border-[#cba6f7]">
                    Github
                </Link>
            </div>
            <Launcher />
        </div>
    )
}