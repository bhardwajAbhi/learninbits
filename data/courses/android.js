/*
 * Course data: Inside Android
 * ----------------------------------------------------------------
 * The text between LIB.add("course", and the last ); is strict JSON:
 *   - keys and strings in "double quotes"
 *   - no comments and no comma after the last item of a list
 * The tools in tools/ read this JSON. See PROJECT_CONTEXT.md, section
 * "Data files", for every field.
 */
LIB.add("course", {
  "id": "android",
  "title": "Inside Android",
  "short": "Android",
  "hook": "Want to know how the OS of your phone works? Dive in here.",
  "summary": "How Android works inside. From the first instruction at boot to the app on your screen, in simple words.",
  "status": "active",
  "color": "#2f7d55",
  "order": 1,
  "featured": true,
  "tags": [
    "android",
    "aosp",
    "android-internals",
    "mobile-security"
  ],
  "map": "stack",
  "basedOn": {
    "title": "AOSP Internals",
    "href": "https://github.com/aospbooks/aosp-internal-book",
    "read": "https://aospbooks.github.io/aosp-internal-book/",
    "license": "Apache License 2.0"
  },
  "sources": [
    {
      "role": "upstream",
      "label": "AOSP Internals book",
      "repo": "aospbooks/aosp-internal-book",
      "branch": "main",
      "path": "",
      "include": [
        "*.md"
      ],
      "lastSynced": {
        "commit": "fc0b48b6e575c7ee8b0c6d740fd31572786fd04a",
        "date": "2026-10-05"
      }
    }
  ],
  "teaser": [
    {
      "title": "What happens in the first second after you press the power button?",
      "text": "Five programs start, one after the other. Each one checks the next one.",
      "chapter": "04-boot-and-init"
    },
    {
      "title": "How does an app ask the system for your location?",
      "text": "It sends a parcel through a post office in the kernel. Its name is Binder.",
      "chapter": "09-binder-ipc"
    },
    {
      "title": "Why can one app not read the files of a different app?",
      "text": "Each app gets its own Linux user. The kernel keeps the doors locked.",
      "chapter": "40-security"
    },
    {
      "title": "What happens when you tap an app icon?",
      "text": "The tap travels through all five layers of Android in less than one second.",
      "chapter": "01-introduction"
    },
    {
      "title": "How does a system update install without breaking your phone?",
      "text": "Android keeps two copies of the system and switches only when the new one is good.",
      "chapter": "55-ota-updates"
    }
  ],
  "layers": [
    {
      "id": "apps",
      "label": "Apps",
      "note": "Launcher, Settings, SystemUI and your apps"
    },
    {
      "id": "framework",
      "label": "Java API framework",
      "note": "system_server and the system services"
    },
    {
      "id": "runtime",
      "label": "Android Runtime (ART)",
      "note": "Runs the app code"
    },
    {
      "id": "native",
      "label": "Native libraries and HAL",
      "note": "C and C++ code, hardware interfaces"
    },
    {
      "id": "kernel",
      "label": "Linux kernel",
      "note": "Drivers, memory, processes"
    }
  ],
  "parts": [
    {
      "id": "I",
      "title": "Foundations",
      "layer": "across"
    },
    {
      "id": "II",
      "title": "Boot and kernel",
      "layer": "kernel"
    },
    {
      "id": "III",
      "title": "Native foundations",
      "layer": "native"
    },
    {
      "id": "IV",
      "title": "Native services and media",
      "layer": "native"
    },
    {
      "id": "V",
      "title": "Android Runtime",
      "layer": "runtime"
    },
    {
      "id": "VI",
      "title": "Framework core",
      "layer": "framework"
    },
    {
      "id": "VII",
      "title": "System services",
      "layer": "framework"
    },
    {
      "id": "VIII",
      "title": "Connectivity",
      "layer": "across"
    },
    {
      "id": "IX",
      "title": "Security",
      "layer": "across"
    },
    {
      "id": "X",
      "title": "App platform features",
      "layer": "framework"
    },
    {
      "id": "XI",
      "title": "System apps",
      "layer": "apps"
    },
    {
      "id": "XII",
      "title": "AI and devices",
      "layer": "framework"
    },
    {
      "id": "XIII",
      "title": "Updates, tests and debugging",
      "layer": "across"
    },
    {
      "id": "XIV",
      "title": "Hardware and form factors",
      "layer": "across"
    },
    {
      "id": "XV",
      "title": "Hands-on projects",
      "layer": "across"
    },
    {
      "id": "APP",
      "title": "Learn More",
      "layer": "across"
    }
  ],
  "paths": [
    {
      "id": "student",
      "label": "Student",
      "note": "The core ideas, in a sensible order.",
      "chapters": [
        "01-introduction",
        "02-source-and-build",
        "04-boot-and-init",
        "05-kernel",
        "09-binder-ipc",
        "18-art-runtime",
        "20-system-server",
        "21-intent-system",
        "22-activity-and-window",
        "26-package-manager",
        "40-security",
        "48-systemui"
      ]
    },
    {
      "id": "appdev",
      "label": "App developer",
      "note": "What happens under the APIs you use every day.",
      "chapters": [
        "01-introduction",
        "09-binder-ipc",
        "21-intent-system",
        "22-activity-and-window",
        "25-view-system",
        "26-package-manager",
        "27-content-providers",
        "28-notifications",
        "29-power-management",
        "30-background-tasks",
        "33-location",
        "45-webview"
      ]
    },
    {
      "id": "security",
      "label": "Security",
      "note": "Sandboxes, trust boundaries and the attack surface.",
      "chapters": [
        "01-introduction",
        "04-boot-and-init",
        "05-kernel",
        "09-binder-ipc",
        "10-hal",
        "26-package-manager",
        "31-multi-user",
        "40-security",
        "41-credential-manager",
        "43-lfi-sandbox",
        "54-mainline-modules",
        "55-ota-updates",
        "56-virtualization",
        "61-device-policy"
      ]
    }
  ],
  "chapters": [
    {
      "id": "01-introduction",
      "n": "1",
      "title": "What is AOSP?",
      "part": "I",
      "level": "Beginner",
      "status": "published",
      "summary": "Android, AOSP and the five layers of the stack.",
      "minutes": 10,
      "date": "2026-10-12",
      "original": "https://aospbooks.github.io/aosp-internal-book/01-introduction/"
    },
    {
      "id": "02-source-and-build",
      "n": "2",
      "title": "Source code and build system",
      "part": "I",
      "level": "Beginner",
      "status": "published",
      "summary": "How to get the code and how the build system turns it into images.",
      "original": "https://aospbooks.github.io/aosp-internal-book/02-source-and-build/",
      "minutes": 14,
      "date": "2026-10-12"
    },
    {
      "id": "03-feature-flags",
      "n": "3",
      "title": "Feature flags",
      "part": "I",
      "level": "Medium",
      "status": "published",
      "summary": "How Android turns new features on and off.",
      "original": "https://aospbooks.github.io/aosp-internal-book/03-feature-flags/",
      "minutes": 40,
      "date": "2026-10-13"
    },
    {
      "id": "04-boot-and-init",
      "n": "4",
      "title": "Boot and init",
      "part": "II",
      "level": "Beginner",
      "status": "published",
      "summary": "From power button to home screen.",
      "original": "https://aospbooks.github.io/aosp-internal-book/04-boot-and-init/",
      "minutes": 60,
      "date": "2026-10-14"
    },
    {
      "id": "05-kernel",
      "n": "5",
      "title": "The kernel",
      "part": "II",
      "level": "Medium",
      "status": "published",
      "summary": "The Linux kernel in Android and GKI.",
      "original": "https://aospbooks.github.io/aosp-internal-book/05-kernel/",
      "minutes": 60,
      "date": "2026-10-22"
    },
    {
      "id": "06-system-properties",
      "n": "6",
      "title": "System properties",
      "part": "II",
      "level": "Beginner",
      "status": "planned",
      "summary": "The global settings of the device.",
      "original": "https://aospbooks.github.io/aosp-internal-book/06-system-properties/"
    },
    {
      "id": "07-bionic-and-linker",
      "n": "7",
      "title": "Bionic and the linker",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "The C library of Android.",
      "original": "https://aospbooks.github.io/aosp-internal-book/07-bionic-and-linker/"
    },
    {
      "id": "08-memory-management",
      "n": "8",
      "title": "Memory management",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "How Android shares and frees memory.",
      "original": "https://aospbooks.github.io/aosp-internal-book/08-memory-management/"
    },
    {
      "id": "09-binder-ipc",
      "n": "9",
      "title": "Binder",
      "part": "III",
      "level": "Medium",
      "status": "published",
      "summary": "How Android processes call each other, from proxies and Parcels to AIDL, the service manager and stability.",
      "minutes": 50,
      "date": "2026-10-27",
      "original": "https://aospbooks.github.io/aosp-internal-book/09-binder-ipc/"
    },
    {
      "id": "10-hal",
      "n": "10",
      "title": "Hardware abstraction layer",
      "part": "III",
      "level": "Medium",
      "status": "published",
      "summary": "How Android talks to hardware from many vendors, from legacy HALs and HIDL to AIDL HALs and VINTF.",
      "original": "https://aospbooks.github.io/aosp-internal-book/10-hal/",
      "minutes": 40,
      "date": "2026-10-27"
    },
    {
      "id": "11-ndk",
      "n": "11",
      "title": "The NDK",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "Native code in apps.",
      "original": "https://aospbooks.github.io/aosp-internal-book/11-ndk/"
    },
    {
      "id": "12-native-services",
      "n": "12",
      "title": "Native services",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "The C++ services under the framework.",
      "original": "https://aospbooks.github.io/aosp-internal-book/12-native-services/"
    },
    {
      "id": "13-graphics-render-pipeline",
      "n": "13",
      "title": "Graphics and rendering",
      "part": "IV",
      "level": "Deep",
      "status": "planned",
      "summary": "How pixels get to the screen.",
      "original": "https://aospbooks.github.io/aosp-internal-book/13-graphics-render-pipeline/"
    },
    {
      "id": "14-animation-system",
      "n": "14",
      "title": "Animation",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "How smooth motion works.",
      "original": "https://aospbooks.github.io/aosp-internal-book/14-animation-system/"
    },
    {
      "id": "15-audio-system",
      "n": "15",
      "title": "Audio",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "From app to speaker.",
      "original": "https://aospbooks.github.io/aosp-internal-book/15-audio-system/"
    },
    {
      "id": "16-media-and-camera",
      "n": "16",
      "title": "Media and camera",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Video, codecs and the camera.",
      "original": "https://aospbooks.github.io/aosp-internal-book/16-media-and-camera/"
    },
    {
      "id": "17-sensors",
      "n": "17",
      "title": "Sensors",
      "part": "IV",
      "level": "Beginner",
      "status": "planned",
      "summary": "Motion, light and other sensors.",
      "original": "https://aospbooks.github.io/aosp-internal-book/17-sensors/"
    },
    {
      "id": "18-art-runtime",
      "n": "18",
      "title": "ART, the Android Runtime",
      "part": "V",
      "level": "Medium",
      "status": "planned",
      "summary": "How app code runs.",
      "original": "https://aospbooks.github.io/aosp-internal-book/18-art-runtime/"
    },
    {
      "id": "19-native-bridge",
      "n": "19",
      "title": "Native bridge",
      "part": "V",
      "level": "Deep",
      "status": "planned",
      "summary": "Code for a different CPU.",
      "original": "https://aospbooks.github.io/aosp-internal-book/19-native-bridge/"
    },
    {
      "id": "20-system-server",
      "n": "20",
      "title": "system_server",
      "part": "VI",
      "level": "Beginner",
      "status": "planned",
      "summary": "The heart of the framework.",
      "original": "https://aospbooks.github.io/aosp-internal-book/20-system-server/"
    },
    {
      "id": "21-intent-system",
      "n": "21",
      "title": "Intents",
      "part": "VI",
      "level": "Beginner",
      "status": "planned",
      "summary": "How apps ask for actions.",
      "original": "https://aospbooks.github.io/aosp-internal-book/21-intent-system/"
    },
    {
      "id": "22-activity-and-window",
      "n": "22",
      "title": "Activities and windows",
      "part": "VI",
      "level": "Medium",
      "status": "planned",
      "summary": "How screens start and stop.",
      "original": "https://aospbooks.github.io/aosp-internal-book/22-activity-and-window/"
    },
    {
      "id": "23-window-system",
      "n": "23",
      "title": "The window system",
      "part": "VI",
      "level": "Medium",
      "status": "planned",
      "summary": "Who draws where.",
      "original": "https://aospbooks.github.io/aosp-internal-book/23-window-system/"
    },
    {
      "id": "24-display-system",
      "n": "24",
      "title": "The display system",
      "part": "VI",
      "level": "Medium",
      "status": "planned",
      "summary": "Screens, sizes and refresh rates.",
      "original": "https://aospbooks.github.io/aosp-internal-book/24-display-system/"
    },
    {
      "id": "25-view-system",
      "n": "25",
      "title": "The view system",
      "part": "VI",
      "level": "Beginner",
      "status": "planned",
      "summary": "Buttons, text and layouts.",
      "original": "https://aospbooks.github.io/aosp-internal-book/25-view-system/"
    },
    {
      "id": "26-package-manager",
      "n": "26",
      "title": "Package manager",
      "part": "VII",
      "level": "Beginner",
      "status": "planned",
      "summary": "How apps are installed.",
      "original": "https://aospbooks.github.io/aosp-internal-book/26-package-manager/"
    },
    {
      "id": "27-content-providers",
      "n": "27",
      "title": "Content providers",
      "part": "VII",
      "level": "Beginner",
      "status": "planned",
      "summary": "How apps share data.",
      "original": "https://aospbooks.github.io/aosp-internal-book/27-content-providers/"
    },
    {
      "id": "28-notifications",
      "n": "28",
      "title": "Notifications",
      "part": "VII",
      "level": "Beginner",
      "status": "planned",
      "summary": "From app to the status bar.",
      "original": "https://aospbooks.github.io/aosp-internal-book/28-notifications/"
    },
    {
      "id": "29-power-management",
      "n": "29",
      "title": "Power management",
      "part": "VII",
      "level": "Medium",
      "status": "planned",
      "summary": "How Android saves battery.",
      "original": "https://aospbooks.github.io/aosp-internal-book/29-power-management/"
    },
    {
      "id": "30-background-tasks",
      "n": "30",
      "title": "Background tasks",
      "part": "VII",
      "level": "Medium",
      "status": "planned",
      "summary": "Jobs, alarms and limits.",
      "original": "https://aospbooks.github.io/aosp-internal-book/30-background-tasks/"
    },
    {
      "id": "31-multi-user",
      "n": "31",
      "title": "Multiple users",
      "part": "VII",
      "level": "Medium",
      "status": "planned",
      "summary": "Users and work profiles.",
      "original": "https://aospbooks.github.io/aosp-internal-book/31-multi-user/"
    },
    {
      "id": "32-account-sync",
      "n": "32",
      "title": "Accounts and sync",
      "part": "VII",
      "level": "Medium",
      "status": "planned",
      "summary": "How accounts and sync work.",
      "original": "https://aospbooks.github.io/aosp-internal-book/32-account-sync/"
    },
    {
      "id": "33-location",
      "n": "33",
      "title": "Location",
      "part": "VII",
      "level": "Beginner",
      "status": "planned",
      "summary": "How the phone knows where it is.",
      "original": "https://aospbooks.github.io/aosp-internal-book/33-location/"
    },
    {
      "id": "34-storage",
      "n": "34",
      "title": "Storage",
      "part": "VII",
      "level": "Medium",
      "status": "planned",
      "summary": "Files, partitions and scoped storage.",
      "original": "https://aospbooks.github.io/aosp-internal-book/34-storage/"
    },
    {
      "id": "35-networking",
      "n": "35",
      "title": "Networking",
      "part": "VIII",
      "level": "Medium",
      "status": "planned",
      "summary": "Wi-Fi, mobile data and VPN.",
      "original": "https://aospbooks.github.io/aosp-internal-book/35-networking/"
    },
    {
      "id": "36-telephony",
      "n": "36",
      "title": "Telephony",
      "part": "VIII",
      "level": "Deep",
      "status": "planned",
      "summary": "Calls, SMS and the modem.",
      "original": "https://aospbooks.github.io/aosp-internal-book/36-telephony/"
    },
    {
      "id": "37-bluetooth",
      "n": "37",
      "title": "Bluetooth",
      "part": "VIII",
      "level": "Medium",
      "status": "planned",
      "summary": "The Bluetooth stack.",
      "original": "https://aospbooks.github.io/aosp-internal-book/37-bluetooth/"
    },
    {
      "id": "38-nfc",
      "n": "38",
      "title": "NFC",
      "part": "VIII",
      "level": "Medium",
      "status": "planned",
      "summary": "Tap to pay and more.",
      "original": "https://aospbooks.github.io/aosp-internal-book/38-nfc/"
    },
    {
      "id": "39-usb-adb",
      "n": "39",
      "title": "USB and ADB",
      "part": "VIII",
      "level": "Beginner",
      "status": "planned",
      "summary": "How your computer talks to the phone.",
      "original": "https://aospbooks.github.io/aosp-internal-book/39-usb-adb/"
    },
    {
      "id": "40-security",
      "n": "40",
      "title": "Security",
      "part": "IX",
      "level": "Medium",
      "status": "published",
      "summary": "Sandboxes, SELinux, the TEE, Keystore and attestation.",
      "original": "https://aospbooks.github.io/aosp-internal-book/40-security/",
      "minutes": 75,
      "date": "2026-10-22"
    },
    {
      "id": "41-credential-manager",
      "n": "41",
      "title": "Credential manager",
      "part": "IX",
      "level": "Medium",
      "status": "planned",
      "summary": "Passwords and passkeys.",
      "original": "https://aospbooks.github.io/aosp-internal-book/41-credential-manager/"
    },
    {
      "id": "42-drm",
      "n": "42",
      "title": "DRM",
      "part": "IX",
      "level": "Deep",
      "status": "planned",
      "summary": "Protected media.",
      "original": "https://aospbooks.github.io/aosp-internal-book/42-drm/"
    },
    {
      "id": "43-lfi-sandbox",
      "n": "43",
      "title": "In-process sandbox",
      "part": "IX",
      "level": "Deep",
      "status": "planned",
      "summary": "A sandbox inside one process.",
      "original": "https://aospbooks.github.io/aosp-internal-book/43-lfi-sandbox/"
    },
    {
      "id": "44-widgets-remoteviews",
      "n": "44",
      "title": "Widgets and RemoteViews",
      "part": "X",
      "level": "Medium",
      "status": "planned",
      "summary": "Small app views on the home screen.",
      "original": "https://aospbooks.github.io/aosp-internal-book/44-widgets-remoteviews/"
    },
    {
      "id": "45-webview",
      "n": "45",
      "title": "WebView",
      "part": "X",
      "level": "Medium",
      "status": "planned",
      "summary": "A browser inside apps.",
      "original": "https://aospbooks.github.io/aosp-internal-book/45-webview/"
    },
    {
      "id": "46-accessibility",
      "n": "46",
      "title": "Accessibility",
      "part": "X",
      "level": "Beginner",
      "status": "planned",
      "summary": "Android for every person.",
      "original": "https://aospbooks.github.io/aosp-internal-book/46-accessibility/"
    },
    {
      "id": "47-internationalization",
      "n": "47",
      "title": "Languages and regions",
      "part": "X",
      "level": "Beginner",
      "status": "planned",
      "summary": "Text, dates and numbers for the world.",
      "original": "https://aospbooks.github.io/aosp-internal-book/47-internationalization/"
    },
    {
      "id": "48-systemui",
      "n": "48",
      "title": "SystemUI",
      "part": "XI",
      "level": "Medium",
      "status": "planned",
      "summary": "Status bar, lock screen and more.",
      "original": "https://aospbooks.github.io/aosp-internal-book/48-systemui/"
    },
    {
      "id": "49-launcher3",
      "n": "49",
      "title": "Launcher3",
      "part": "XI",
      "level": "Medium",
      "status": "planned",
      "summary": "The home screen app.",
      "original": "https://aospbooks.github.io/aosp-internal-book/49-launcher3/"
    },
    {
      "id": "50-settings-app",
      "n": "50",
      "title": "Settings",
      "part": "XI",
      "level": "Beginner",
      "status": "planned",
      "summary": "The Settings app inside.",
      "original": "https://aospbooks.github.io/aosp-internal-book/50-settings-app/"
    },
    {
      "id": "51-ai-appfunctions",
      "n": "51",
      "title": "AI and AppFunctions",
      "part": "XII",
      "level": "Medium",
      "status": "planned",
      "summary": "How agents use apps.",
      "original": "https://aospbooks.github.io/aosp-internal-book/51-ai-appfunctions/"
    },
    {
      "id": "52-companion-virtual-device",
      "n": "52",
      "title": "Companion and virtual devices",
      "part": "XII",
      "level": "Medium",
      "status": "planned",
      "summary": "Watches, cars and virtual screens.",
      "original": "https://aospbooks.github.io/aosp-internal-book/52-companion-virtual-device/"
    },
    {
      "id": "53-npu-manager",
      "n": "53",
      "title": "NPU manager",
      "part": "XII",
      "level": "Deep",
      "status": "planned",
      "summary": "AI hardware in the phone.",
      "original": "https://aospbooks.github.io/aosp-internal-book/53-npu-manager/"
    },
    {
      "id": "54-mainline-modules",
      "n": "54",
      "title": "Mainline modules",
      "part": "XIII",
      "level": "Medium",
      "status": "planned",
      "summary": "Updates through the Play Store.",
      "original": "https://aospbooks.github.io/aosp-internal-book/54-mainline-modules/"
    },
    {
      "id": "55-ota-updates",
      "n": "55",
      "title": "OTA updates",
      "part": "XIII",
      "level": "Medium",
      "status": "planned",
      "summary": "How system updates install.",
      "original": "https://aospbooks.github.io/aosp-internal-book/55-ota-updates/"
    },
    {
      "id": "56-virtualization",
      "n": "56",
      "title": "Virtualization",
      "part": "XIII",
      "level": "Deep",
      "status": "planned",
      "summary": "Virtual machines on the phone.",
      "original": "https://aospbooks.github.io/aosp-internal-book/56-virtualization/"
    },
    {
      "id": "57-testing",
      "n": "57",
      "title": "Testing",
      "part": "XIII",
      "level": "Medium",
      "status": "planned",
      "summary": "CTS, VTS and more.",
      "original": "https://aospbooks.github.io/aosp-internal-book/57-testing/"
    },
    {
      "id": "58-debugging-tools",
      "n": "58",
      "title": "Debugging tools",
      "part": "XIII",
      "level": "Beginner",
      "status": "planned",
      "summary": "logcat, dumpsys and Perfetto.",
      "original": "https://aospbooks.github.io/aosp-internal-book/58-debugging-tools/"
    },
    {
      "id": "59-architecture-support",
      "n": "59",
      "title": "CPU architectures",
      "part": "XIV",
      "level": "Deep",
      "status": "planned",
      "summary": "ARM, x86 and RISC-V.",
      "original": "https://aospbooks.github.io/aosp-internal-book/59-architecture-support/"
    },
    {
      "id": "60-emulator",
      "n": "60",
      "title": "The emulator",
      "part": "XIV",
      "level": "Beginner",
      "status": "planned",
      "summary": "Android without a phone.",
      "original": "https://aospbooks.github.io/aosp-internal-book/60-emulator/"
    },
    {
      "id": "61-device-policy",
      "n": "61",
      "title": "Device policy",
      "part": "XIV",
      "level": "Medium",
      "status": "planned",
      "summary": "How companies manage phones.",
      "original": "https://aospbooks.github.io/aosp-internal-book/61-device-policy/"
    },
    {
      "id": "62-form-factors",
      "n": "62",
      "title": "Form factors",
      "part": "XIV",
      "level": "Beginner",
      "status": "planned",
      "summary": "TV, car, watch and foldables.",
      "original": "https://aospbooks.github.io/aosp-internal-book/62-form-factors/"
    },
    {
      "id": "63-print-services",
      "n": "63",
      "title": "Print services",
      "part": "XIV",
      "level": "Beginner",
      "status": "planned",
      "summary": "Printing from Android.",
      "original": "https://aospbooks.github.io/aosp-internal-book/63-print-services/"
    },
    {
      "id": "64-camera2-pipeline",
      "n": "64",
      "title": "Camera2 pipeline",
      "part": "XIV",
      "level": "Deep",
      "status": "planned",
      "summary": "The camera in detail.",
      "original": "https://aospbooks.github.io/aosp-internal-book/64-camera2-pipeline/"
    },
    {
      "id": "65-custom-rom",
      "n": "65",
      "title": "Build your own ROM",
      "part": "XV",
      "level": "Medium",
      "status": "planned",
      "summary": "A step-by-step project.",
      "original": "https://aospbooks.github.io/aosp-internal-book/65-custom-rom/"
    },
    {
      "id": "66-windows-games",
      "n": "66",
      "title": "Windows games on Android",
      "part": "XV",
      "level": "Deep",
      "status": "planned",
      "summary": "A fun deep project.",
      "original": "https://aospbooks.github.io/aosp-internal-book/66-windows-games/"
    },
    {
      "id": "A-appendix-key-files",
      "n": "A",
      "title": "Key files",
      "part": "APP",
      "level": "Beginner",
      "status": "planned",
      "summary": "Where things live in the source tree.",
      "original": "https://aospbooks.github.io/aosp-internal-book/A-appendix-key-files/"
    },
    {
      "id": "B-appendix-glossary",
      "n": "B",
      "title": "Glossary",
      "part": "APP",
      "level": "Beginner",
      "status": "planned",
      "summary": "Every term, in one line.",
      "original": "https://aospbooks.github.io/aosp-internal-book/B-appendix-glossary/"
    },
    {
      "id": "C-appendix-kotlin-public-api",
      "n": "C",
      "title": "Why Kotlin is not on the public API",
      "part": "APP",
      "level": "Medium",
      "status": "planned",
      "summary": "A short history note.",
      "original": "https://aospbooks.github.io/aosp-internal-book/C-appendix-kotlin-public-api/"
    },
    {
      "id": "D-appendix-android-17-updates",
      "n": "D",
      "title": "Android 17 updates",
      "part": "APP",
      "level": "Medium",
      "status": "planned",
      "summary": "What is new in Android 17.",
      "original": "https://aospbooks.github.io/aosp-internal-book/D-appendix-android-17-updates/"
    }
  ]
});
