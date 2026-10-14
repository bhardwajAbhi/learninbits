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
  "hook": "Build your first AI app, one small step at a time.",
  "summary": "Start with one call to a model. Finish with a chatbot that has a web page and a memory. Each lesson adds one new idea.",
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
      "title": "Can you talk to an AI model in ten lines of Python?",
      "text": "Yes. Lesson 1 shows you how, with Gemini.",
      "chapter": "01-using-gemini"
    },
    {
      "title": "Can you change from Gemini to a model on your own laptop?",
      "text": "LangChain gives each provider the same interface. You change one line.",
      "chapter": "03-using-ollama"
    },
    {
      "title": "What does the | in LangChain code do?",
      "text": "It joins small parts into one chain, like pipes in a Linux shell.",
      "chapter": "06-lcel"
    },
    {
      "title": "How does a chatbot remember what you said?",
      "text": "It keeps the history and sends it with each new question.",
      "chapter": "08-memory"
    }
  ],
  "parts": [
    {
      "id": "I",
      "title": "Talk to a model",
      "layer": "across"
    },
    {
      "id": "II",
      "title": "Build an app",
      "layer": "across"
    },
    {
      "id": "III",
      "title": "Prompts and chains",
      "layer": "across"
    },
    {
      "id": "IV",
      "title": "Memory",
      "layer": "across"
    }
  ],
  "chapters": [
    {
      "id": "01-using-gemini",
      "n": "1",
      "title": "Talk to Gemini",
      "part": "I",
      "level": "Beginner",
      "status": "code",
      "summary": "Your first call to a large language model, with the Gemini API.",
      "lessons": [
        {
          "title": "Talk to Gemini",
          "files": [
            "code/01_using_gemini/app_gemini.py"
          ]
        }
      ]
    },
    {
      "id": "02-using-openai",
      "n": "2",
      "title": "Talk to OpenAI",
      "part": "I",
      "level": "Beginner",
      "status": "code",
      "summary": "The same program with a different provider.",
      "lessons": [
        {
          "title": "Talk to OpenAI",
          "files": [
            "code/02_using_openAI/app_openAI.py"
          ]
        }
      ]
    },
    {
      "id": "03-using-ollama",
      "n": "3",
      "title": "Run a model on your own computer",
      "part": "I",
      "level": "Beginner",
      "status": "code",
      "summary": "Use Ollama to run an open model locally, with no API key.",
      "lessons": [
        {
          "title": "Run a model on your own computer",
          "files": [
            "code/03_using_ollama/app_ollama.py"
          ]
        }
      ]
    },
    {
      "id": "04-streamlit-gui",
      "n": "4",
      "title": "Add a web interface",
      "part": "II",
      "level": "Beginner",
      "status": "code",
      "summary": "Put a simple Streamlit page in front of your model.",
      "lessons": [
        {
          "title": "Add a web interface",
          "files": [
            "code/04_adding_streamlit_GUI/app_ollama.py"
          ]
        }
      ]
    },
    {
      "id": "05-prompt-templates",
      "n": "5",
      "title": "Prompt templates",
      "part": "III",
      "level": "Beginner",
      "status": "code",
      "summary": "Write a prompt once and fill in the values each time.",
      "lessons": [
        {
          "title": "Prompt templates",
          "files": [
            "code/05_using_prompt_template/app_ollama.py"
          ]
        }
      ]
    },
    {
      "id": "06-lcel",
      "n": "6",
      "title": "LangChain Expression Language (LCEL)",
      "part": "III",
      "level": "Beginner",
      "status": "code",
      "summary": "Join a prompt, a model and a parser with the pipe operator.",
      "lessons": [
        {
          "title": "LangChain Expression Language (LCEL)",
          "files": [
            "code/06_lang_chain_expression_language_LCEL/app_ollama.py"
          ]
        }
      ]
    },
    {
      "id": "07-sequential-chains",
      "n": "7",
      "title": "Sequential chains",
      "part": "III",
      "level": "Beginner",
      "status": "code",
      "summary": "Send the output of one step into the next step.",
      "lessons": [
        {
          "title": "Sequential chains",
          "files": [
            "code/07_sequential_chain/app_ollama.py"
          ]
        }
      ]
    },
    {
      "id": "08-memory",
      "n": "8",
      "title": "Add memory",
      "part": "IV",
      "level": "Beginner",
      "status": "code",
      "summary": "Make the chatbot remember the conversation.",
      "lessons": [
        {
          "title": "Add memory",
          "files": [
            "code/08_adding_memory/app_ollama.py",
            "code/08_adding_memory/chat_history_example.py"
          ]
        }
      ]
    }
  ]
});
