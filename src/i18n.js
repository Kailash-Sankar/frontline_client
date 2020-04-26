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
                women_helpline: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ",
                name: "ಹೆಸರು",
                confirm_mobile_number: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ದೃಢೀಕರಿಸಿ",
                submit: "ಸಲ್ಲಿಸು",
                request_for_help_form:{
                
                    point_of_contact_name: "ಸಂಪರ್ಕದ ಸ್ಥಳ - ಹೆಸರು",
                    point_of_contact_mobile: "ಸಂಪರ್ಕದ ಸ್ಥಳ - ಮೊಬೈಲ್",
                    description: "ವಿವರಣೆ",
                    area: "ಪ್ರದೇಶ",
                    request_raised_by: "ವಿನಂತಿಯನ್ನು ಹೆಚ್ಚಿಸಲಾಗಿದೆ",
                    help_required_at: "ಸಹಾಯ ಅಗತ್ಯವಿದೆ",

                    placeholder: {
                        enter_point_of_contacts_name: "ಸಂಪರ್ಕದ ಹೆಸರಿನ ಬಿಂದುವನ್ನು ನಮೂದಿಸಿ",
                        enter_point_of_contacts_mobile: "ಸಂಪರ್ಕದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯ ಬಿಂದುವನ್ನು ನಮೂದಿಸಿ",
                        description: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ದ್ವಿತೀಯ ಸಂಪರ್ಕ ಮಾಹಿತಿಯೊಂದಿಗೆ ವಿವರಿಸಿ",
                        area: "ಪ್ರದೇಶ / ಪ್ರದೇಶವನ್ನು ನಮೂದಿಸಿ",
                    },

                },

                validation_messages:{
                    description: "ವಿವರಣೆ ಅಗತ್ಯವಿದೆ.",
                    area: "ಪ್ರದೇಶ ಅಗತ್ಯವಿದೆ.",

                },

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
                women_helpline: "Women Helpline",
                name: "Name",
                confirm_mobile_number: "Confirm Mobile Number",
                submit: "Submit",
                request_for_help_form:{
                
                    point_of_contact_name: "Point of Contact - Name",
                    point_of_contact_mobile: "Point of Contact - Mobile",
                    description: "Description",
                    area: "Area",
                    request_raised_by: "Request Raised By",
                    help_required_at: "Help Required At",

                    placeholder: {
                        enter_point_of_contacts_name: "Enter point of contact's name",
                        enter_point_of_contacts_mobile: "Enter point of contact's mobile number",
                        description: "Please describe your request along with secondary contact info if any",
                        area: "Enter area/locality",
                    },


                },
                validation_messages:{
                    description: "Description is required.",
                    area: "Area is required.",
                    mobile_number_required: "Mobile number is required",

                },
            }
        },


    },
    fallbackLng: "kn",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",

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