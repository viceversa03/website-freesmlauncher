import {useTranslations} from "next-intl";

export default function SuccessfulLogin() {
    const translate = useTranslations('Translations');

    return (
        <div className="flex flex-col gap-8 mt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-5xl sm:text-7xl text-white">
                {translate('successful-login.title')}
            </p>
            <p className="text-center text-balance text-lg sm:text-2xl text-gray-400">
                {translate('successful-login.description')}
            </p>
        </div>
    );
}