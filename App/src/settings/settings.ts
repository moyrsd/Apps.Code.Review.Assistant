import {
    ISetting,
    SettingType,
} from "@rocket.chat/apps-engine/definition/settings";

export enum AppSettingsEnum {
    LLM_PROVIDER_ID = "llm_provider_id",
    LLM_PROVIDER_LABEL = "LLM Provider URL",
    LLM_PROVIDER_PACKAGE_VALUE = "https://api.deepinfra.com/v1/openai/chat/completions",
    LLM_MODEL_ID = "llm_model_id",
    LLM_MODEL_LABEL = "LLM Model Name",
    LLM_MODEL_PACKAGE_VALUE = "meta-llama/Llama-3.3-70B-Instruct",
    LLM_API_KEY_ID = "llm_api_key_id",
    LLM_API_KEY_LABEL = "LLM Api Key",
    GITHUB_APP_ID_ID = "github_app_id",
    GITHUB_APP_ID_LABEL = "GitHub App ID",
    GITHUB_APP_PRIVATE_KEY_ID = "github_app_private_key",
    GITHUB_APP_PRIVATE_KEY_LABEL = "GitHub App Private Key",
    GITHUB_APP_SECRET_ID = "github_app_Secret_id",
    GITHUB_APP_SECRET_LABEL = "GitHub App Secret",
}

export const settings: ISetting[] = [
    {
        id: AppSettingsEnum.LLM_PROVIDER_ID,
        i18nLabel: AppSettingsEnum.LLM_PROVIDER_LABEL,
        type: SettingType.STRING,
        required: true,
        public: false,
        packageValue: AppSettingsEnum.LLM_PROVIDER_PACKAGE_VALUE,
    },
    {
        id: AppSettingsEnum.LLM_MODEL_ID,
        i18nLabel: AppSettingsEnum.LLM_MODEL_LABEL,
        type: SettingType.STRING,
        required: true,
        public: false,
        packageValue: AppSettingsEnum.LLM_MODEL_PACKAGE_VALUE,
    },
    {
        id: AppSettingsEnum.LLM_API_KEY_ID,
        i18nLabel: AppSettingsEnum.LLM_API_KEY_LABEL,
        type: SettingType.PASSWORD,
        required: true,
        public: false,
        packageValue: "",
    },
    {
        id: AppSettingsEnum.GITHUB_APP_ID_ID,
        i18nLabel: AppSettingsEnum.GITHUB_APP_ID_LABEL,
        type: SettingType.STRING,
        required: true,
        public: false,
        packageValue: "",
    },
    {
        id: AppSettingsEnum.GITHUB_APP_PRIVATE_KEY_ID,
        i18nLabel: AppSettingsEnum.GITHUB_APP_PRIVATE_KEY_LABEL,
        type: SettingType.PASSWORD,
        required: true,
        public: false,
        packageValue: "",
    },
    {
        id: AppSettingsEnum.GITHUB_APP_SECRET_ID,
        i18nLabel: AppSettingsEnum.GITHUB_APP_SECRET_LABEL,
        type: SettingType.STRING,
        required: false,
        public: false,
        packageValue: "",
    },
];
