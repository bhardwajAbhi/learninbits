/*
 * Course data: AI Engineering
 * ----------------------------------------------------------------
 * The text between LIB.add("course", and the last ); is strict JSON:
 *   - keys and strings in "double quotes"
 *   - no comments and no comma after the last item of a list
 * The tools in tools/ read this JSON. See PROJECT_CONTEXT.md, section
 * "Data files", for every field.
 */
LIB.add("course", {
  "id": "ai-engineering",
  "title": "AI Engineering",
  "short": "AI engineering",
  "hook": "From your first prompt to AI agents in production, with a security view.",
  "summary": "A code-first course on real AI applications: prompts, RAG, agents, guardrails, evaluations and operations.",
  "status": "active",
  "color": "#7a4fc2",
  "order": 4,
  "featured": true,
  "tags": [
    "ai",
    "llm",
    "langchain",
    "langgraph",
    "rag",
    "agents",
    "prompt-engineering",
    "python"
  ],
  "map": "journey",
  "sources": [
    {
      "role": "code",
      "label": "Lesson code",
      "repo": "bhardwajAbhi/ai-engineering",
      "branch": "main",
      "path": "src/",
      "include": [
        "*.py"
      ],
      "lastSynced": {
        "commit": "96d2afcfebdf0ad95aae39da5981dff253ddfceb",
        "date": "2026-09-11"
      }
    }
  ],
  "teaser": [
    {
      "title": "Why does the same prompt give a different answer each time?",
      "text": "Temperature decides how much the model varies. Chapter 3 shows it in code.",
      "chapter": "03-temperature"
    },
    {
      "title": "Can a model sort text with no examples at all?",
      "text": "Yes, with a clear instruction and a strict output rule. That is zero-shot.",
      "chapter": "05-zero-shot-prompts"
    },
    {
      "title": "How do you make a model answer from your own documents?",
      "text": "Find the right pieces first, then give them to the model. That is RAG.",
      "chapter": "34-basic-rag"
    },
    {
      "title": "What makes an agent different from a chatbot?",
      "text": "An agent can use tools and decide its next step by itself.",
      "chapter": "41-agent-loop"
    },
    {
      "title": "Can a web page take control of your AI agent?",
      "text": "Yes, with prompt injection. Guardrails stop it.",
      "chapter": "45-guardrails"
    }
  ],
  "parts": [
    {
      "id": "I",
      "title": "Getting started",
      "layer": "across"
    },
    {
      "id": "II",
      "title": "Talk to the model well",
      "layer": "across"
    },
    {
      "id": "III",
      "title": "Make the model think",
      "layer": "across"
    },
    {
      "id": "IV",
      "title": "Build chains",
      "layer": "across"
    },
    {
      "id": "V",
      "title": "Manage the context",
      "layer": "across"
    },
    {
      "id": "VI",
      "title": "Answer from your documents",
      "layer": "across"
    },
    {
      "id": "VII",
      "title": "Agents and tools",
      "layer": "across"
    },
    {
      "id": "VIII",
      "title": "Guardrails",
      "layer": "across"
    },
    {
      "id": "IX",
      "title": "MCP",
      "layer": "across"
    },
    {
      "id": "X",
      "title": "Measure quality",
      "layer": "across"
    },
    {
      "id": "XI",
      "title": "LangGraph",
      "layer": "across"
    },
    {
      "id": "XII",
      "title": "Many agents",
      "layer": "across"
    },
    {
      "id": "XIII",
      "title": "Production",
      "layer": "across"
    },
    {
      "id": "APP",
      "title": "Learn More",
      "layer": "across"
    }
  ],
  "chapters": [
    {
      "id": "00-start-here",
      "n": "0",
      "title": "Start here",
      "part": "I",
      "level": "Beginner",
      "status": "published",
      "summary": "How this course works, and how to set up your project.",
      "minutes": 25,
      "date": "2026-10-13",
      "codeKey": "00"
    },
    {
      "id": "01-talk-to-a-model",
      "n": "1",
      "title": "Talk to a model",
      "part": "I",
      "level": "Beginner",
      "status": "published",
      "summary": "Send your first message to a model and read the answer.",
      "codeKey": "01",
      "lessons": [
        {
          "title": "Talk to a model",
          "files": [
            "src/01_basic_invoke_google.py",
            "src/01_basic_invoke_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 20,
      "date": "2026-10-13"
    },
    {
      "id": "02-your-first-chain",
      "n": "2",
      "title": "Your first chain",
      "part": "I",
      "level": "Beginner",
      "status": "published",
      "summary": "Join a prompt, a model and a parser into one chain.",
      "codeKey": "01_b",
      "lessons": [
        {
          "title": "Your first chain",
          "files": [
            "src/01_b_basic_chain_google.py",
            "src/01_b_basic_chain_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 18,
      "date": "2026-10-13"
    },
    {
      "id": "03-temperature",
      "n": "3",
      "title": "Temperature: why answers change",
      "part": "I",
      "level": "Beginner",
      "status": "published",
      "summary": "Control how much the answers of a model vary.",
      "codeKey": "02",
      "lessons": [
        {
          "title": "Temperature: why answers change",
          "files": [
            "src/02_temperature_google.py",
            "src/02_temperature_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 20,
      "date": "2026-10-13"
    },
    {
      "id": "04-system-messages",
      "n": "4",
      "title": "System messages and roles",
      "part": "II",
      "level": "Beginner",
      "status": "published",
      "summary": "Give the model a role and see the answers change.",
      "codeKey": "03",
      "lessons": [
        {
          "title": "System messages and roles",
          "files": [
            "src/03_system_messages_google.py",
            "src/03_system_messages_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 18,
      "date": "2026-10-13"
    },
    {
      "id": "05-zero-shot-prompts",
      "n": "5",
      "title": "Zero-shot prompts",
      "part": "II",
      "level": "Beginner",
      "status": "published",
      "summary": "Ask a model to sort text, with no examples.",
      "codeKey": "04",
      "lessons": [
        {
          "title": "Zero-shot prompts",
          "files": [
            "src/04_zero_shot_google.py",
            "src/04_zero_shot_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 20,
      "date": "2026-10-13"
    },
    {
      "id": "06-few-shot-prompts",
      "n": "6",
      "title": "Few-shot prompts",
      "part": "II",
      "level": "Beginner",
      "status": "published",
      "summary": "Teach the model your rules with a few examples.",
      "codeKey": "05",
      "lessons": [
        {
          "title": "Few-shot prompts",
          "files": [
            "src/05_few_shot_google.py",
            "src/05_few_shot_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 18,
      "date": "2026-10-13"
    },
    {
      "id": "07-structured-output",
      "n": "7",
      "title": "Structured output",
      "part": "II",
      "level": "Medium",
      "status": "published",
      "summary": "Get answers as clean data that your code can use.",
      "codeKey": "06",
      "lessons": [
        {
          "title": "Structured output",
          "files": [
            "src/06_pydantic_structured_output_google.py",
            "src/06_pydantic_structured_output_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 22,
      "date": "2026-10-13"
    },
    {
      "id": "08-chain-of-thought",
      "n": "8",
      "title": "Chain of thought",
      "part": "III",
      "level": "Medium",
      "status": "published",
      "summary": "Let the model think step by step before it answers.",
      "codeKey": "07",
      "lessons": [
        {
          "title": "Chain of thought",
          "files": [
            "src/07_chain_of_thought_google.py",
            "src/07_chain_of_thought_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 17,
      "date": "2026-10-13"
    },
    {
      "id": "09-tree-of-thought",
      "n": "9",
      "title": "Tree of thought",
      "part": "III",
      "level": "Medium",
      "status": "published",
      "summary": "Explore more than one path, then select the best one.",
      "codeKey": "08",
      "lessons": [
        {
          "title": "Tree of thought",
          "files": [
            "src/08_tree_of_thought_google.py",
            "src/08_tree_of_thought_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 17,
      "date": "2026-10-13"
    },
    {
      "id": "10-graph-of-thought",
      "n": "10",
      "title": "Graph of thought",
      "part": "III",
      "level": "Deep",
      "status": "published",
      "summary": "Connect ideas that depend on each other.",
      "codeKey": "09",
      "lessons": [
        {
          "title": "Graph of thought",
          "files": [
            "src/09_graph_of_thought_google.py",
            "src/09_graph_of_thought_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 17,
      "date": "2026-10-13"
    },
    {
      "id": "11-step-back-prompting",
      "n": "11",
      "title": "Step-back prompting",
      "part": "III",
      "level": "Medium",
      "status": "published",
      "summary": "Find the general rule first, then solve the case.",
      "codeKey": "10",
      "lessons": [
        {
          "title": "Step-back prompting",
          "files": [
            "src/10_step_back_google.py",
            "src/10_step_back_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 18,
      "date": "2026-10-13"
    },
    {
      "id": "12-least-to-most",
      "n": "12",
      "title": "Least-to-most prompting",
      "part": "III",
      "level": "Medium",
      "status": "published",
      "summary": "Break a hard problem into small problems.",
      "codeKey": "11",
      "lessons": [
        {
          "title": "Least-to-most prompting",
          "files": [
            "src/11_least_to_most_google.py",
            "src/11_least_to_most_openrouter.py"
          ]
        }
      ],
      "codeDate": "2026-09-11",
      "minutes": 18,
      "date": "2026-10-13"
    },
    {
      "id": "13-program-of-thought",
      "n": "13",
      "title": "Program of thought",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "Let the model write code to find the answer.",
      "codeKey": "12",
      "lessons": [
        {
          "title": "Program of thought",
          "files": []
        }
      ]
    },
    {
      "id": "14-self-consistency",
      "n": "14",
      "title": "Self-consistency",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "Ask many times, then take the most common answer.",
      "codeKey": "13",
      "lessons": [
        {
          "title": "Self-consistency",
          "files": []
        }
      ]
    },
    {
      "id": "15-chain-of-verification",
      "n": "15",
      "title": "Chain of verification",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "Let the model check its own facts.",
      "codeKey": "14",
      "lessons": [
        {
          "title": "Chain of verification",
          "files": []
        }
      ]
    },
    {
      "id": "16-self-reflection",
      "n": "16",
      "title": "Draft, critique and revise",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "Write, find the problems, then write again.",
      "codeKey": "15",
      "lessons": [
        {
          "title": "Draft, critique and revise",
          "files": []
        }
      ]
    },
    {
      "id": "17-negative-prompting",
      "n": "17",
      "title": "Negative prompting",
      "part": "III",
      "level": "Beginner",
      "status": "planned",
      "summary": "Tell the model what not to do.",
      "codeKey": "16",
      "lessons": [
        {
          "title": "Negative prompting",
          "files": []
        }
      ]
    },
    {
      "id": "18-contrastive-prompting",
      "n": "18",
      "title": "Contrastive prompting",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "Show a good and a bad answer side by side.",
      "codeKey": "17",
      "lessons": [
        {
          "title": "Contrastive prompting",
          "files": []
        }
      ]
    },
    {
      "id": "19-skeleton-of-thought",
      "n": "19",
      "title": "Skeleton of thought",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "Plan the outline first, then fill in each part.",
      "codeKey": "18",
      "lessons": [
        {
          "title": "Skeleton of thought",
          "files": []
        }
      ]
    },
    {
      "id": "20-react-prompting",
      "n": "20",
      "title": "ReAct prompting",
      "part": "III",
      "level": "Medium",
      "status": "planned",
      "summary": "Think, act, observe and repeat.",
      "codeKey": "19",
      "lessons": [
        {
          "title": "ReAct prompting",
          "files": []
        }
      ]
    },
    {
      "id": "21-chain-composition",
      "n": "21",
      "title": "Join steps with pipes",
      "part": "IV",
      "level": "Beginner",
      "status": "planned",
      "summary": "Build longer chains with the pipe operator.",
      "codeKey": "20",
      "lessons": [
        {
          "title": "Join steps with pipes",
          "files": []
        }
      ]
    },
    {
      "id": "22-passthrough",
      "n": "22",
      "title": "RunnablePassthrough",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Carry data through a chain and add new data to it.",
      "codeKey": "21",
      "lessons": [
        {
          "title": "RunnablePassthrough",
          "files": []
        }
      ]
    },
    {
      "id": "23-parallel",
      "n": "23",
      "title": "Run steps in parallel",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Run more than one step at the same time.",
      "codeKey": "22",
      "lessons": [
        {
          "title": "Run steps in parallel",
          "files": []
        }
      ]
    },
    {
      "id": "24-lambda",
      "n": "24",
      "title": "Your own functions in a chain",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Put any Python function inside a chain.",
      "codeKey": "23",
      "lessons": [
        {
          "title": "Your own functions in a chain",
          "files": []
        }
      ]
    },
    {
      "id": "25-branch",
      "n": "25",
      "title": "Branches",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Send the input to a different path by a rule.",
      "codeKey": "24",
      "lessons": [
        {
          "title": "Branches",
          "files": []
        }
      ]
    },
    {
      "id": "26-reliability",
      "n": "26",
      "title": "Retries, streaming and batches",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Make chains reliable and fast.",
      "codeKey": "25",
      "lessons": [
        {
          "title": "Retries, streaming and batches",
          "files": []
        }
      ]
    },
    {
      "id": "27-itemgetter",
      "n": "27",
      "title": "Clean inputs with itemgetter",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Pick the fields that each step needs.",
      "codeKey": "26",
      "lessons": [
        {
          "title": "Clean inputs with itemgetter",
          "files": []
        }
      ]
    },
    {
      "id": "28-bind",
      "n": "28",
      "title": "Runtime settings with bind",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Fix settings for one step of a chain.",
      "codeKey": "27",
      "lessons": [
        {
          "title": "Runtime settings with bind",
          "files": []
        }
      ]
    },
    {
      "id": "29-configurable",
      "n": "29",
      "title": "Configurable fields",
      "part": "IV",
      "level": "Medium",
      "status": "planned",
      "summary": "Change the settings of a chain when it runs.",
      "codeKey": "28",
      "lessons": [
        {
          "title": "Configurable fields",
          "files": []
        }
      ]
    },
    {
      "id": "30-context-budget",
      "n": "30",
      "title": "The token budget",
      "part": "V",
      "level": "Medium",
      "status": "planned",
      "summary": "Fit the most useful text into the context window.",
      "codeKey": "29",
      "lessons": [
        {
          "title": "The token budget",
          "files": []
        }
      ]
    },
    {
      "id": "31-selective-retrieval",
      "n": "31",
      "title": "Select the right context",
      "part": "V",
      "level": "Medium",
      "status": "planned",
      "summary": "Keep only the text that matters for the question.",
      "codeKey": "30",
      "lessons": [
        {
          "title": "Select the right context",
          "files": []
        }
      ]
    },
    {
      "id": "32-memory-window",
      "n": "32",
      "title": "A memory window",
      "part": "V",
      "level": "Medium",
      "status": "planned",
      "summary": "Remember the last part of a conversation.",
      "codeKey": "31",
      "lessons": [
        {
          "title": "A memory window",
          "files": []
        }
      ]
    },
    {
      "id": "33-context-chat-app",
      "n": "33",
      "title": "A context-aware chat app",
      "part": "V",
      "level": "Medium",
      "status": "planned",
      "summary": "Put the context ideas together in one app.",
      "codeKey": "31_b",
      "lessons": [
        {
          "title": "A context-aware chat app",
          "files": []
        }
      ]
    },
    {
      "id": "34-basic-rag",
      "n": "34",
      "title": "Your first RAG pipeline",
      "part": "VI",
      "level": "Medium",
      "status": "planned",
      "summary": "Answer questions from your own documents.",
      "codeKey": "32",
      "lessons": [
        {
          "title": "Your first RAG pipeline",
          "files": []
        }
      ]
    },
    {
      "id": "35-rag-with-chroma",
      "n": "35",
      "title": "RAG with ChromaDB",
      "part": "VI",
      "level": "Medium",
      "status": "planned",
      "summary": "Store and search documents in a vector database.",
      "codeKey": "33",
      "lessons": [
        {
          "title": "RAG with ChromaDB",
          "files": []
        }
      ]
    },
    {
      "id": "36-hybrid-retrieval",
      "n": "36",
      "title": "Hybrid retrieval",
      "part": "VI",
      "level": "Medium",
      "status": "planned",
      "summary": "Join keyword search and vector search.",
      "codeKey": "34",
      "lessons": [
        {
          "title": "Hybrid retrieval",
          "files": []
        }
      ]
    },
    {
      "id": "37-code-rag",
      "n": "37",
      "title": "RAG over a codebase",
      "part": "VI",
      "level": "Deep",
      "status": "planned",
      "summary": "Ask questions about source code.",
      "codeKey": "35",
      "lessons": [
        {
          "title": "RAG over a codebase",
          "files": []
        }
      ]
    },
    {
      "id": "38-reranking",
      "n": "38",
      "title": "Reranking",
      "part": "VI",
      "level": "Medium",
      "status": "planned",
      "summary": "Put the best results first.",
      "codeKey": "36",
      "lessons": [
        {
          "title": "Reranking",
          "files": []
        }
      ]
    },
    {
      "id": "39-documentation-assistant",
      "n": "39",
      "title": "A documentation assistant",
      "part": "VI",
      "level": "Deep",
      "status": "planned",
      "summary": "A complete RAG app for your documents.",
      "codeKey": "36_b",
      "lessons": [
        {
          "title": "A documentation assistant",
          "files": []
        }
      ]
    },
    {
      "id": "40-tools",
      "n": "40",
      "title": "Tools for a model",
      "part": "VII",
      "level": "Medium",
      "status": "planned",
      "summary": "Define tools and give them to a model.",
      "codeKey": "37",
      "lessons": [
        {
          "title": "Tools for a model",
          "files": []
        }
      ]
    },
    {
      "id": "41-agent-loop",
      "n": "41",
      "title": "The agent loop",
      "part": "VII",
      "level": "Medium",
      "status": "planned",
      "summary": "Let the model decide the next step until the work is done.",
      "codeKey": "38",
      "lessons": [
        {
          "title": "The agent loop",
          "files": []
        }
      ]
    },
    {
      "id": "42-langgraph-agent",
      "n": "42",
      "title": "An agent with LangGraph",
      "part": "VII",
      "level": "Medium",
      "status": "planned",
      "summary": "Build a tool agent as a graph.",
      "codeKey": "39",
      "lessons": [
        {
          "title": "An agent with LangGraph",
          "files": []
        }
      ]
    },
    {
      "id": "43-human-in-the-loop",
      "n": "43",
      "title": "Human in the loop",
      "part": "VII",
      "level": "Medium",
      "status": "planned",
      "summary": "Ask a person before an important action.",
      "codeKey": "40",
      "lessons": [
        {
          "title": "Human in the loop",
          "files": []
        }
      ]
    },
    {
      "id": "44-dynamic-agents",
      "n": "44",
      "title": "Dynamic agents",
      "part": "VII",
      "level": "Deep",
      "status": "planned",
      "summary": "Agents that change their plan when they run.",
      "codeKey": "41",
      "lessons": [
        {
          "title": "Dynamic agents",
          "files": []
        }
      ]
    },
    {
      "id": "45-guardrails",
      "n": "45",
      "title": "Guardrails",
      "part": "VIII",
      "level": "Medium",
      "status": "planned",
      "summary": "Check what goes in and what comes out.",
      "codeKey": "42",
      "lessons": [
        {
          "title": "Guardrails",
          "files": []
        }
      ]
    },
    {
      "id": "46-unified-guardrails",
      "n": "46",
      "title": "One guardrail system",
      "part": "VIII",
      "level": "Deep",
      "status": "planned",
      "summary": "Join many guardrails into one system.",
      "codeKey": "43",
      "lessons": [
        {
          "title": "One guardrail system",
          "files": []
        }
      ]
    },
    {
      "id": "47-middleware",
      "n": "47",
      "title": "Middleware for agents",
      "part": "VIII",
      "level": "Deep",
      "status": "planned",
      "summary": "Add authentication and guardrails around an agent.",
      "codeKey": "44",
      "lessons": [
        {
          "title": "Middleware for agents",
          "files": []
        }
      ]
    },
    {
      "id": "48-mcp-server",
      "n": "48",
      "title": "Build an MCP server",
      "part": "IX",
      "level": "Medium",
      "status": "planned",
      "summary": "Offer your tools in a standard way.",
      "codeKey": "45",
      "lessons": [
        {
          "title": "Build an MCP server",
          "files": []
        }
      ]
    },
    {
      "id": "49-mcp-client",
      "n": "49",
      "title": "Use MCP tools",
      "part": "IX",
      "level": "Medium",
      "status": "planned",
      "summary": "Connect an agent to MCP tools.",
      "codeKey": "46",
      "lessons": [
        {
          "title": "Use MCP tools",
          "files": []
        }
      ]
    },
    {
      "id": "50-mcp-database-server",
      "n": "50",
      "title": "A database MCP server",
      "part": "IX",
      "level": "Deep",
      "status": "planned",
      "summary": "Give an agent safe access to a database.",
      "codeKey": "46_b",
      "lessons": [
        {
          "title": "A database MCP server",
          "files": []
        }
      ]
    },
    {
      "id": "51-text-evaluations",
      "n": "51",
      "title": "Evaluate text answers",
      "part": "X",
      "level": "Medium",
      "status": "planned",
      "summary": "Measure the quality of written answers.",
      "codeKey": "47",
      "lessons": [
        {
          "title": "Evaluate text answers",
          "files": []
        }
      ]
    },
    {
      "id": "52-classification-metrics",
      "n": "52",
      "title": "Classification metrics",
      "part": "X",
      "level": "Medium",
      "status": "planned",
      "summary": "Measure how often labels are correct.",
      "codeKey": "48",
      "lessons": [
        {
          "title": "Classification metrics",
          "files": []
        }
      ]
    },
    {
      "id": "53-persistence",
      "n": "53",
      "title": "Persistence and checkpoints",
      "part": "XI",
      "level": "Medium",
      "status": "planned",
      "summary": "Save the state of a graph and continue later.",
      "codeKey": "49",
      "lessons": [
        {
          "title": "Persistence and checkpoints",
          "files": []
        }
      ]
    },
    {
      "id": "54-streaming",
      "n": "54",
      "title": "Streaming",
      "part": "XI",
      "level": "Medium",
      "status": "planned",
      "summary": "Show results while the graph runs.",
      "codeKey": "50",
      "lessons": [
        {
          "title": "Streaming",
          "files": []
        }
      ]
    },
    {
      "id": "55-interrupts",
      "n": "55",
      "title": "Interrupts",
      "part": "XI",
      "level": "Medium",
      "status": "planned",
      "summary": "Stop a graph and wait for a person.",
      "codeKey": "51",
      "lessons": [
        {
          "title": "Interrupts",
          "files": []
        }
      ]
    },
    {
      "id": "56-time-travel",
      "n": "56",
      "title": "Time travel",
      "part": "XI",
      "level": "Deep",
      "status": "planned",
      "summary": "Go back to an earlier state and try again.",
      "codeKey": "52",
      "lessons": [
        {
          "title": "Time travel",
          "files": []
        }
      ]
    },
    {
      "id": "57-memory-store",
      "n": "57",
      "title": "Memory across sessions",
      "part": "XI",
      "level": "Deep",
      "status": "planned",
      "summary": "Remember facts from one conversation to the next.",
      "codeKey": "53",
      "lessons": [
        {
          "title": "Memory across sessions",
          "files": []
        }
      ]
    },
    {
      "id": "58-subgraphs",
      "n": "58",
      "title": "Subgraphs",
      "part": "XI",
      "level": "Deep",
      "status": "planned",
      "summary": "Build large graphs from small graphs.",
      "codeKey": "54",
      "lessons": [
        {
          "title": "Subgraphs",
          "files": []
        }
      ]
    },
    {
      "id": "59-multi-agent-patterns",
      "n": "59",
      "title": "Multi-agent patterns",
      "part": "XII",
      "level": "Deep",
      "status": "planned",
      "summary": "Supervisor, hierarchy and network teams of agents.",
      "codeKey": "55",
      "lessons": [
        {
          "title": "Multi-agent patterns",
          "files": []
        }
      ]
    },
    {
      "id": "60-deep-agents",
      "n": "60",
      "title": "Deep agents",
      "part": "XII",
      "level": "Deep",
      "status": "planned",
      "summary": "Agents that plan long tasks with a to-do list.",
      "codeKey": "56",
      "lessons": [
        {
          "title": "Deep agents",
          "files": []
        }
      ]
    },
    {
      "id": "61-subagents",
      "n": "61",
      "title": "Subagents",
      "part": "XII",
      "level": "Deep",
      "status": "planned",
      "summary": "Let one agent start and guide other agents.",
      "codeKey": "57",
      "lessons": [
        {
          "title": "Subagents",
          "files": []
        }
      ]
    },
    {
      "id": "62-observability",
      "n": "62",
      "title": "Observability",
      "part": "XIII",
      "level": "Medium",
      "status": "planned",
      "summary": "Track tokens, time and cost.",
      "codeKey": "58",
      "lessons": [
        {
          "title": "Observability",
          "files": []
        }
      ]
    },
    {
      "id": "63-production-safeguards",
      "n": "63",
      "title": "Production safeguards",
      "part": "XIII",
      "level": "Deep",
      "status": "planned",
      "summary": "Control what an agent can do in production.",
      "codeKey": "59",
      "lessons": [
        {
          "title": "Production safeguards",
          "files": []
        }
      ]
    },
    {
      "id": "64-production-reliability",
      "n": "64",
      "title": "Production reliability",
      "part": "XIII",
      "level": "Deep",
      "status": "planned",
      "summary": "Circuit breakers and gateways for AI services.",
      "codeKey": "60",
      "lessons": [
        {
          "title": "Production reliability",
          "files": []
        }
      ]
    },
    {
      "id": "A-future-of-agents",
      "n": "A",
      "title": "The present and future of agents",
      "part": "APP",
      "level": "Beginner",
      "status": "planned",
      "summary": "Small models, agentic thinking and what comes next."
    },
    {
      "id": "B-interview-preparation",
      "n": "B",
      "title": "Interview preparation",
      "part": "APP",
      "level": "Beginner",
      "status": "planned",
      "summary": "Questions, system design and real scenarios."
    },
    {
      "id": "C-rag-architectures",
      "n": "C",
      "title": "RAG architectures",
      "part": "APP",
      "level": "Medium",
      "status": "planned",
      "summary": "Reference designs for RAG in production."
    },
    {
      "id": "D-knowledge-graphs",
      "n": "D",
      "title": "Knowledge graphs",
      "part": "APP",
      "level": "Deep",
      "status": "planned",
      "summary": "Neo4j, Cypher, GraphRAG and graph agents."
    },
    {
      "id": "E-vector-databases",
      "n": "E",
      "title": "Vector databases",
      "part": "APP",
      "level": "Deep",
      "status": "planned",
      "summary": "How vector storage, indexes and search work inside."
    }
  ]
});
