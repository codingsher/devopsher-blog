import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://devopsher.com/",
    title: "DevOps Sher",
    description: "Backend engineer with a CS background. I write about distributed systems, Go, DevOps, and cloud-native infrastructure. Theory-first, no fluff.",
    author: "Sher",
    profile: "https://github.com/codingsher",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Karachi",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/codingsher" },
    { name: "linkedin", url: "https://www.linkedin.com/in/devopsher/" },
    { name: "mail",     url: "mailto:devopsher@yahoo.com" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
