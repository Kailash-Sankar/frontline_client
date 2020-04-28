import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_en from './translations/en/common.json';
import common_kn from './translations/kn/common.json';

i18n.use(LanguageDetector).init({
    resources: {
        kn: {
            common: common_kn,
        },

        en: {
            common: common_en, // 'common' is our custom namespace
        },
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "common",

    // keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }

})
export default i18n;