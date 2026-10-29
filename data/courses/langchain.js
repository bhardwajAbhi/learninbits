/*
 * Course data: LangChain, Step by Step
 * ----------------------------------------------------------------
 * The text between LIB.add("course", and the last ); is strict JSON:
 *   - keys and strings in "double quotes"
 *   - no comments and no comma after the last item of a list
 * The tools in tools/ read this JSON. See PROJECT_CONTEXT.md, section
 * "Data files", for every field.
 */
LIB.add("course", {
  "id": "langchain",
  "title": "LangChain, Step by Step",
  "short": "LangChain",
  "hook": "Build AI apps in Python with LangChain and Streamlit.",
  "summary": "Each chapter adds one part to a working app. You start with a single question to a model, then add a web page, prompt templates, chains and a chat history. Later chapters add agents, documents and deployment.",
  "status": "active",
  "color": "#2f62c8",
  "order": 3,
  "featured": true,
  "tags": [
    "ai",
    "llm",
    "langchain",
    "python"
  ],
  "map": "journey",
  "sources": [
    {
      "role": "code",
      "label": "Lesson code",
      "repo": "bhardwajAbhi/learning-langchain",
      "branch": "master",
      "path": "code/",
      "include": [
        "*.py"
      ],
      "lastSynced": {
        "commit": "83bf192c4613d4ba0685fd686b07c9a0e4adcbc3",
        "date": "2026-07-02"
      }
    }
  ],
  "teaser": [
    {
      "title": "Talk to a model from Python",
      "text": "LangChain gives every model the same method, so that one line of code sends a question and returns the answer.",
      "chapter": "03-using-ollama"
    },
    {
      "title": "Fill in only what changes",
      "text": "A prompt template keeps your instructions in one place, so that each request needs only a few values from a form.",
      "chapter": "05-prompt-templates"
    },
    {
      "title": "Join steps into a chain",
      "text": "The pipe symbol passes the output of one step to the next, so that one call runs a task with several steps.",
      "chapter": "06-lcel"
    },
    {
      "title": "Remember the conversation",
      "text": "The app sends the earlier messages with each new question, so that the model can answer follow-up questions.",
      "chapter": "08-memory"
    }
  ],
  "parts": [
    {
      "id": "START",
      "title": "Start here",
      "layer": "across",
      "noNum": true
    },
    {
      "id": "I",
      "title": "Talk to a model",
      "layer": "across"
    },
    {
      "id": "II",
      "title": "Build the app",
      "layer": "across"
    },
    {
      "id": "III",
      "title": "Remember the conversation",
      "layer": "across"
    },
    {
      "id": "IV",
      "title": "Agents and documents",
      "layer": "across"
    },
    {
      "id": "V",
      "title": "Go live",
      "layer": "across"
    }
  ],
  "chapters": [
    {
      "id": "start-here",
      "ref": true,
      "icon": "start",
      "title": "Start here",
      "part": "START",
      "level": "Beginner",
      "status": "published",
      "summary": "What a language model and LangChain are, how an AI app fits together, and how to set up your project.",
      "minutes": 15,
      "date": "2026-10-27"
    },
    {
      "id": "01-using-gemini",
      "n": "1",
      "title": "Your first LangChain app, with Gemini",
      "part": "I",
      "level": "Beginner",
      "status": "planned",
      "summary": "Send your first question to a cloud model through LangChain.",
      "lessons": [
        {
          "title": "Your first LangChain app, with Gemini",
          "files": []
        }
      ]
    },
    {
      "id": "02-using-openai",
      "n": "2",
      "title": "Use OpenAI",
      "part": "I",
      "level": "Beginner",
      "status": "planned",
      "summary": "Change the provider, so that the same app runs on an OpenAI model.",
      "lessons": [
        {
          "title": "Use OpenAI",
          "files": []
        }
      ]
    },
    {
      "id": "03-using-ollama",
      "n": "3",
      "title": "Use open-source models with Ollama",
      "part": "I",
      "level": "Beginner",
      "status": "published",
      "summary": "Run a model on your own computer, so that you need no API key and your data stays with you.",
      "lessons": [
        {
          "title": "Run a model on your own computer",
          "files": [
            "code/03_using_ollama/app_ollama.py"
          ]
        }
      ],
      "minutes": 10,
      "date": "2026-10-27"
    },
    {
      "id": "04-streamlit-gui",
      "n": "4",
      "title": "Add a web page with Streamlit",
      "part": "II",
      "level": "Beginner",
      "status": "published",
      "summary": "Put a web page in front of the model, so that anyone can use it without the terminal.",
      "lessons": [
        {
          "title": "Add a web interface",
          "files": [
            "code/04_adding_streamlit_GUI/app_ollama.py"
          ]
        }
      ],
      "minutes": 9,
      "date": "2026-10-27"
    },
    {
      "id": "05-prompt-templates",
      "n": "5",
      "title": "Prompt templates",
      "part": "II",
      "level": "Beginner",
      "status": "published",
      "summary": "Write the instructions once and fill in only the parts that change.",
      "lessons": [
        {
          "title": "Prompt templates",
          "files": [
            "code/05_using_prompt_template/app_ollama.py"
          ]
        }
      ],
      "minutes": 12,
      "date": "2026-10-27"
    },
    {
      "id": "06-lcel",
      "n": "6",
      "title": "The LangChain Expression Language (LCEL)",
      "part": "II",
      "level": "Beginner",
      "status": "published",
      "summary": "Join a prompt, a model and a parser into one chain, and chains into bigger chains.",
      "lessons": [
        {
          "title": "LangChain Expression Language (LCEL)",
          "files": [
            "code/06_lang_chain_expression_language_LCEL/app_ollama.py"
          ]
        }
      ],
      "minutes": 13,
      "date": "2026-10-27"
    },
    {
      "id": "07-sequential-chains",
      "n": "7",
      "title": "Sequential chains with structured output",
      "part": "II",
      "level": "Beginner",
      "status": "published",
      "summary": "Pass structured data from one step to the next, so that each step does one clear job.",
      "lessons": [
        {
          "title": "Sequential chains",
          "files": [
            "code/07_sequential_chain/app_ollama.py"
          ]
        }
      ],
      "minutes": 13,
      "date": "2026-10-27"
    },
    {
      "id": "08-memory",
      "n": "8",
      "title": "Chat history",
      "part": "III",
      "level": "Beginner",
      "status": "published",
      "summary": "Send the earlier messages with each question, so that the app can follow a conversation.",
      "lessons": [
        {
          "title": "Add memory",
          "files": [
            "code/08_adding_memory/app_ollama.py",
            "code/08_adding_memory/chat_history_example.py"
          ]
        }
      ],
      "minutes": 14,
      "date": "2026-10-27"
    },
    {
      "id": "09-agents-and-tools",
      "n": "9",
      "title": "AI agents and tools",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Let the model decide which tool to use, so that it can do more than write text.",
      "lessons": [
        {
          "title": "AI agents and tools",
          "files": []
        }
      ]
    },
    {
      "id": "10-chat-with-documents",
      "n": "10",
      "title": "Chat with a document",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Answer questions from your own document, with memory and streamed answers.",
      "lessons": [
        {
          "title": "Chat with a document",
          "files": []
        }
      ]
    },
    {
      "id": "11-document-types",
      "n": "11",
      "title": "Upload different document types",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Read PDF, Word and text files with the same app.",
      "lessons": [
        {
          "title": "Upload different document types",
          "files": []
        }
      ]
    },
    {
      "id": "12-video-transcripts",
      "n": "12",
      "title": "Chat with video transcripts",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Ask questions about a video through its transcript.",
      "lessons": [
        {
          "title": "Chat with video transcripts",
          "files": []
        }
      ]
    },
    {
      "id": "13-images",
      "n": "13",
      "title": "Work with images",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Send images with text to a model that understands both.",
      "lessons": [
        {
          "title": "Work with images",
          "files": []
        }
      ]
    },
    {
      "id": "14-deploy",
      "n": "14",
      "title": "Deploy your app",
      "part": "V",
      "level": "Beginner",
      "status": "planned",
      "summary": "Put your app online, so that other people can use it.",
      "lessons": [
        {
          "title": "Deploy your app",
          "files": []
        }
      ]
    }
  ]
});
