import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        kn: {
            translations: {
                donate_funds: "ಹಣವನ್ನು ದಾನ ಮಾಡಿ",
                support_in_kind: "ರೀತಿಯ ಬೆಂಬಲ",
                volunteer: "ಸ್ವಯಂಸೇವಕ",
                request_for_help: "ಸಹಾಯಕ್ಕಾಗಿ ವಿನಂತಿ",
                content_about_ktk: "ಕರ್ನಾಟಕ! ನಾವು ನಮ್ಮ ರಾಷ್ಟ್ರಕ್ಕೆ ಜಾಗತಿಕ ಪೀಠವನ್ನು ಮತ್ತು ಲಕ್ಷಾಂತರ ಜನರಿಗೆ ಅವರ ಕನಸಿನ ಉದ್ಯೋಗಗಳನ್ನು ನೀಡಿದಾಗ,ಯಾರೂ ಹಸಿವಿನಿಂದ ಮಲಗುವುದಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನಾವು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ,ಯಾರಿಗೂ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳು ಮತ್ತು ಆರೋಗ್ಯ ರಕ್ಷಣೆ ನಿರಾಕರಿಸಲಾಗುವುದಿಲ್ಲ, ಯಾರೂ ಅಸಹಾಯಕರಾಗಿ ಭಾವಿಸುವುದಿಲ್ಲ. ಇದು ಮಾನವೀಯತೆಯ ಕರೆ ನಾವು ಪ್ರತಿದಿನ ಉತ್ತರಿಸುತ್ತೇವೆ. ಇಂದು, ಜಗತ್ತು ಉಳಿವಿಗಾಗಿ ಅಭೂತಪೂರ್ವ ಹೋರಾಟವನ್ನು ನಡೆಸುತ್ತಿರುವಾಗ ಕರೆ ಈಗ ಜೋರಾಗಿ ಬಂದಿದೆ. ಅದನ್ನು ಮತ್ತೊಮ್ಮೆ ಮಾಡೋಣ, ನಮ್ಮ ದಾರಿ -ಮಾನವೀಯ! ವಿಶಿಷ್ಟ! ಪರಿಣಾಮಕಾರಿ!",
                get_involved: "ತೊಡಗಿಸಿಕೊಳ್ಳಿ",
                donate: "ದಾನ.",
                support: "ಬೆಂಬಲ.",

            }
        },

        en: {
            translations: {
                donate_funds: "Donate Funds",
                support_in_kind: "SUPPORT IN KIND",
                volunteer: "VOLUNTEER",
                request_for_help: "Request For Help",
                content_about_ktk: "Karnataka! While we gave our nation a global pedestal and millions their dream jobs, we also strive to make sure that no one sleeps hungry, no one is denied basic amenities and healthcare, no one feels helpless. This is the call of humanity we answer every single day. Today, when the world is fighting an unprecedented fight for survival, the call just got louder. Let&apos;s do it yet again, our way - Humane! Unique! Effective!",
                get_involved: "Get Involved",
                donate: "Donate.",
                support: "Support.",
                
            }
        },


    },
    fallbackLng: "kn",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }

})
export default i18n;