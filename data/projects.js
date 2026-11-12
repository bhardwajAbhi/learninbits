/*
 * Projects
 * ----------------------------------------------------------------
 * The text between LIB.add("projects", and the last ); is strict JSON.
 * Each project has a page at projects/<id>/index.html.
 * "status": "Active" | "Stable" | "Experimental" | "Archived"
 * "repo" is "owner/name" on GitHub. tools/sync_sources.py can also
 * check projects for new commits.
 * See PROJECT_CONTEXT.md for all fields.
 */
LIB.add("projects", [
  {
    "id": "apk-inspector",
    "title": "APK Inspector",
    "tagline": "Right-click any APK. Get a full malware-analysis breakdown in seconds.",
    "summary": "A desktop tool for Ubuntu. It adds an APK analysis window to the right-click menu of the file manager.",
    "status": "Stable",
    "year": "2026",
    "stack": [
      "Python",
      "GTK 3",
      "aapt",
      "apksigner",
      "OpenSSL"
    ],
    "tags": [
      "android",
      "malware-analysis",
      "mobile-security",
      "tools",
      "python",
      "linux"
    ],
    "repo": "bhardwajAbhi/apk-inspector",
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/bhardwajAbhi/apk-inspector"
      },
      {
        "label": "Project website",
        "href": "https://bhardwajabhi.github.io/apk-inspector/"
      }
    ],
    "image": "assets/img/projects/apk-inspector/main-window-light.png",
    "featured": true,
    "lastSynced": {
      "commit": "1cafc98acd38ec4ba801c7ec1bef8c86c2f2319a",
      "date": "2026-06-15"
    }
  }
]);
