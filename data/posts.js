/*
 * Posts: articles, talks and Demystified
 * ----------------------------------------------------------------
 * The text between LIB.add("posts", and the last ); is strict JSON.
 * One list holds all three kinds:
 *   "kind": "article"  - the page is articles/<id>.html
 *   "kind": "talk"     - the page is talks/<id>.html
 *   "kind": "demystified" - the page is demystified/<id>.html
 * Talks also have "event", "place" and optional "slides" (a PDF path)
 * and "video" (a URL).
 * Demystified posts have "sources": the things that the post explains.
 * "pinned": true shows the item in "Pinned" on the home page and first
 * in its list. "pinOrder" (1, 2, 3 ...) sets the order of pinned items.
 * Never put sample or placeholder content here. Every item is public.
 * See PROJECT_CONTEXT.md for all fields.
 */
LIB.add("posts", [
  {
    "id": "dpdp-gdpr-and-google-play",
    "kind": "article",
    "title": "DPDP Act, GDPR and Google Play for Android apps",
    "summary": "A guide to the DPDP Act for Android apps in India, with the GDPR differences for users in Europe and the Google Play rules that apply to both.",
    "date": "2026-10-22",
    "minutes": 30,
    "tags": [
      "privacy",
      "data-protection",
      "dpdp",
      "gdpr",
      "google-play",
      "android"
    ],
    "featured": true
  },
  {
    "id": "android-app-security-best-practices",
    "kind": "article",
    "title": "Android app security best practices",
    "summary": "Practices that keep an Android app strong against modern threats, from code and storage to components, devices and the network.",
    "date": "2026-10-14",
    "minutes": 25,
    "tags": [
      "android",
      "mobile-security",
      "app-security",
      "secure-coding"
    ],
    "featured": true
  },
  {
    "id": "privacy-in-data-and-ai-pc-dpo-360",
    "kind": "article",
    "title": "Learnings from PC DPO 360 on privacy in data and AI",
    "summary": "Privacy in data and AI, from the DPDP Act and consent to anonymization, differential privacy and private AI.",
    "date": "2026-10-13",
    "minutes": 95,
    "tags": [
      "privacy",
      "data-protection",
      "dpdp",
      "ai",
      "llm",
      "rag"
    ],
    "featured": true,
    "pinned": true,
    "pinOrder": 1
  },
  {
    "id": "writing-a-research-paper",
    "kind": "article",
    "title": "Writing a research paper, from idea to publication",
    "summary": "A practical guide from the first idea and the right venue to evidence, structure, ethics and submission.",
    "date": "2026-10-13",
    "minutes": 22,
    "tags": [
      "research-writing",
      "ml",
      "mobile-security"
    ],
    "featured": true,
    "pinned": true,
    "pinOrder": 2
  },
  {
    "id": "android-secure-coding-practices",
    "kind": "article",
    "title": "Android secure coding practices",
    "summary": "Ten habits that keep the data of your users safe, with code that you can copy.",
    "date": "2026-10-12",
    "minutes": 12,
    "tags": [
      "android",
      "mobile-security",
      "app-security",
      "secure-coding"
    ],
    "featured": true,
    "pinned": true,
    "pinOrder": 3
  },
  {
    "id": "what-is-agentic-reasoning",
    "kind": "demystified",
    "title": "What is agentic reasoning?",
    "summary": "How a language model turns into an agent that plans, acts and learns, with a guided tour of a large survey of the field.",
    "date": "2026-10-29",
    "minutes": 30,
    "tags": [
      "ai",
      "llm",
      "agents",
      "rag"
    ],
    "sources": [
      {
        "type": "Paper",
        "title": "A Survey of Agentic Reasoning for Large Language Models: Towards Recursively Self-Improving and Collective Agents",
        "author": "Tianxin Wei, Ting-Wei Li, Zhining Liu and others",
        "publisher": "arXiv",
        "date": "2026-01-18",
        "url": "https://arxiv.org/abs/2601.12538"
      }
    ]
  },
  {
    "id": "android-or-linux-for-a-device",
    "kind": "demystified",
    "title": "Android or Linux for a device?",
    "summary": "When a device maker must choose Android, and when plain embedded Linux is the better choice.",
    "date": "2026-10-12",
    "minutes": 11,
    "tags": [
      "android",
      "linux",
      "embedded",
      "operating-systems",
      "aosp",
      "mobile-security"
    ],
    "sources": [
      {
        "type": "Article",
        "title": "Android vs. Linux as an Embedded Operating System",
        "author": "",
        "publisher": "HSC blog",
        "date": "2013-11-22",
        "url": "https://www.hsc.com/resources/blog/android-vs-linux-as-an-embedded-operating-system/"
      }
    ]
  }
]);
