/*
 * Site settings
 * ----------------------------------------------------------------
 * The text between LIB.add("site", and the last ); is strict JSON.
 * - "dataFiles": every other data file. The site loads them in this
 *   order. When you add a course, add its file here.
 * - "hiddenSections": sections to hide from the menu, the home page,
 *   the topics page and related items. Allowed: "courses", "articles",
 *   "demystified", "talks", "projects". The pages still exist. Remove the name to show
 *   the section again.
 * - "tags": every tag that content can use, with its display label.
 *   A new tag must be added here first. tools/check_site.py checks this.
 * See PROJECT_CONTEXT.md for all fields.
 */
LIB.add("site", {
  "name": "LearnInBits",
  "tagline": "Tech, explained in small bits.",
  "description": "A learning hub by Abhishek. Understand how technology works, not just how to use it.",
  "url": "https://learninbits.in",
  "author": "Abhishek",
  "email": "abhishekbhardwaj090@gmail.com",
  "github": "https://github.com/bhardwajAbhi",
  "nav": [
    {
      "label": "Courses",
      "href": "courses/index.html"
    },
    {
      "label": "Articles",
      "href": "articles/index.html"
    },
    {
      "label": "Demystified",
      "href": "demystified/index.html"
    },
    {
      "label": "Talks",
      "href": "talks/index.html"
    },
    {
      "label": "Projects",
      "href": "projects/index.html"
    },
    {
      "label": "About",
      "href": "about.html"
    }
  ],
  "social": [
    {
      "label": "GitHub",
      "href": "https://github.com/bhardwajAbhi"
    },
    {
      "label": "Email",
      "href": "mailto:abhishekbhardwaj090@gmail.com"
    }
  ],
  "hiddenSections": [
    "projects",
    "talks"
  ],
  "dataFiles": [
    "courses/android.js",
    "courses/aosp-crash-course.js",
    "courses/langchain.js",
    "courses/ai-engineering.js",
    "courses/machine-learning.js",
    "posts.js",
    "projects.js"
  ],
  "tags": {
    "android": "Android",
    "aosp": "AOSP",
    "android-internals": "Android internals",
    "kernel": "Linux kernel",
    "hal": "HAL",
    "build-system": "Build system",
    "mobile-security": "Mobile security",
    "app-security": "App security",
    "secure-coding": "Secure coding",
    "privacy": "Privacy",
    "data-protection": "Data protection",
    "dpdp": "DPDP Act",
    "gdpr": "GDPR",
    "google-play": "Google Play",
    "research-writing": "Research writing",
    "malware-analysis": "Malware analysis",
    "reverse-engineering": "Reverse engineering",
    "ai": "AI",
    "llm": "LLM",
    "prompt-engineering": "Prompt engineering",
    "langchain": "LangChain",
    "langgraph": "LangGraph",
    "rag": "RAG",
    "agents": "Agents",
    "ml": "Machine learning",
    "python": "Python",
    "linux": "Linux",
    "tools": "Tools",
    "embedded": "Embedded systems",
    "operating-systems": "Operating systems"
  }
});
