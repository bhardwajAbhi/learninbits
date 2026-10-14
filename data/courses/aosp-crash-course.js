/*
 * Course data: AOSP Crash Course
 * ----------------------------------------------------------------
 * The text between LIB.add("course", and the last ); is strict JSON:
 *   - keys and strings in "double quotes"
 *   - no comments and no comma after the last item of a list
 * The tools in tools/ read this JSON. See PROJECT_CONTEXT.md, section
 * "Data files", for every field.
 */
LIB.add("course", {
  "id": "aosp-crash-course",
  "title": "AOSP Crash Course",
  "short": "AOSP lab",
  "hook": "Stop reading about Android. Build it, change it and run it.",
  "summary": "A hands-on lab course. Build Android and the kernel, write a kernel module and walk through every generation of the HAL.",
  "status": "active",
  "color": "#c2552d",
  "order": 2,
  "featured": true,
  "tags": [
    "aosp",
    "android-internals",
    "kernel",
    "hal",
    "build-system"
  ],
  "map": "journey",
  "sources": [],
  "teaser": [
    {
      "title": "Can you build Android from source on your own computer?",
      "text": "Yes. You get the same system images that a phone maker gets.",
      "chapter": "01-build-system-and-kernel"
    },
    {
      "title": "How do you add your own code to the kernel?",
      "text": "Write a kernel module, load it and watch it in the kernel log.",
      "chapter": "03-kernel-module"
    },
    {
      "title": "Why did Android change the HAL four times?",
      "text": "Each change made updates faster and the system safer. We build each one.",
      "chapter": "04-legacy-hal"
    },
    {
      "title": "HIDL or AIDL?",
      "text": "Both describe how the framework talks to hardware. Only one is the future.",
      "chapter": "08-aidl-for-hals"
    }
  ],
  "parts": [
    {
      "id": "I",
      "title": "Build",
      "layer": "across"
    },
    {
      "id": "II",
      "title": "Kernel",
      "layer": "kernel"
    },
    {
      "id": "III",
      "title": "The HAL, generation by generation",
      "layer": "native"
    }
  ],
  "chapters": [
    {
      "id": "01-build-system-and-kernel",
      "n": "1",
      "title": "Build Android system and kernel images",
      "part": "I",
      "level": "Medium",
      "status": "planned",
      "summary": "Download the source, build the images and boot them."
    },
    {
      "id": "02-aosp-build-notes",
      "n": "2",
      "title": "AOSP build notes",
      "part": "I",
      "level": "Beginner",
      "status": "planned",
      "summary": "Tips, fixes and the commands that you use every day."
    },
    {
      "id": "03-kernel-module",
      "n": "3",
      "title": "Kernel module",
      "part": "II",
      "level": "Medium",
      "status": "planned",
      "summary": "Write, build and load your own kernel module."
    },
    {
      "id": "04-legacy-hal",
      "n": "4",
      "title": "Legacy HAL",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "The first HAL: shared libraries that the framework loads."
    },
    {
      "id": "05-conventional-hal",
      "n": "5",
      "title": "Conventional HAL",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "The hw_module_t standard for HAL libraries."
    },
    {
      "id": "06-hal-interface-definition-language",
      "n": "6",
      "title": "HAL Interface Definition Language",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "HIDL: a fixed interface between the framework and the vendor code."
    },
    {
      "id": "07-binderized-hal-hidl",
      "n": "7",
      "title": "Binderized HAL (HIDL)",
      "part": "III",
      "level": "Deep",
      "status": "planned",
      "summary": "A HAL in its own process, reached through hwbinder."
    },
    {
      "id": "08-aidl-for-hals",
      "n": "8",
      "title": "AIDL for HALs",
      "part": "III",
      "level": "Deep",
      "status": "planned",
      "summary": "The modern HAL: one interface language for the whole system."
    }
  ]
});
