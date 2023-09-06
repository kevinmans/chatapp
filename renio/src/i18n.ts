import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "end": ".", // end of sentence
      "not-found": "Page not found",
      "home": "Home",
      "login": "Login",
      "logout": "Logout",
      "quota": "Quota",
      "try-again": "Try again",
      "invalid-token": "Invalid token",
      "invalid-token-prompt": "Please try again.",
      "login-failed": "Login failed",
      "login-failed-prompt": "Login failed! Please check your token expiration and try again.",
      "login-success": "Login successful",
      "login-success-prompt": "You have been logged in successfully.",
      "server-error": "Server error",
      "server-error-prompt": "There was an error logging you in. Please try again.",
      "request-failed": "Request failed. Please check your network and try again.",
      "conversation": {
        "title": "Conversation",
        "refresh-failed": "Refresh failed",
        "refresh-failed-prompt": "There was an error during your request. Please try again.",
        "remove-title": "Are you absolutely sure?",
        "remove-description": "This action cannot be undone. This will permanently delete the conversation ",
        "cancel": "Cancel",
        "delete": "Delete",
        "delete-success": "Conversation deleted",
        "delete-success-prompt": "Conversation has been deleted.",
        "delete-failed": "Delete failed",
        "delete-failed-prompt": "Failed to delete conversation. Please check your network and try again.",
      },
      chat: {
        "web": "web searching feature",
        "web-aria": "Toggle web searching feature",
        "placeholder": "Write something...",
      }
    }
  },
  cn: {
    translation: {
      "end": "",
      "not-found": "页面未找到",
      "home": "首页",
      "login": "登录",
      "logout": "登出",
      "quota": "配额",
      "try-again": "重试",
      "invalid-token": "无效的令牌",
      "invalid-token-prompt": "请重试。",
      "login-failed": "登录失败",
      "login-failed-prompt": "登录失败！请检查您的令牌过期时间并重试。",
      "login-success": "登录成功",
      "login-success-prompt": "您已成功登录。",
      "server-error": "服务器错误",
      "server-error-prompt": "登录出错，请重试。",
      "request-failed": "请求失败，请检查您的网络并重试。",
      "conversation": {
        "title": "会话",
        "refresh-failed": "刷新失败",
        "refresh-failed-prompt": "请求出错，请重试。",
        "remove-title": "是否确定？",
        "remove-description": "此操作无法撤消。这将永久删除会话 ",
        "cancel": "取消",
        "delete": "删除",
        "delete-success": "会话已删除",
        "delete-success-prompt": "会话已删除。",
        "delete-failed": "删除失败",
        "delete-failed-prompt": "删除会话失败，请检查您的网络并重试。",
      },
      chat: {
        "web": "联网搜索功能",
        "web-aria": "切换网络搜索功能",
        "placeholder": "写点什么...",
      }
    }
  }
};

export const supportedLanguages = ["en", "cn"];

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getStorage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  }).then(() => console.debug(`[i18n] initialized (language: ${i18n.language})`));

export default i18n;

export function getStorage(): string {
  const storage = localStorage.getItem("language");
  if (storage && supportedLanguages.includes(storage)) {
    return storage;
  }
  return "cn";
}
export function setLanguage(i18n: any, lang: string): void {
  if (supportedLanguages.includes(lang)) {
    i18n.changeLanguage(lang)
      .then(() => console.debug(`[i18n] language changed (language: ${i18n.language})`));
    localStorage.setItem("language", lang);
    return;
  }
  console.warn(`[i18n] language ${lang} is not supported`);
}
