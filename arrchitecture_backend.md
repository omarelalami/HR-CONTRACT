rh-assistant-app/
├── app/
│   ├── main.py                  # Point d'entrée FastAPI
│   ├── api/                     # Routes REST
│   │   ├── legal_watch.py
│   │   ├── contracts.py
│   │   ├── compliance.py
│   │   ├── assistant.py
│   │   └── salary.py
│   ├── agents/                  # Agents IA
│   │   ├── legal_watch_agent.py
│   │   ├── contract_agent.py
│   │   ├── compliance_agent.py
│   │   └── assistant_agent.py
│   ├── services/                # Logique métier (non IA)
│   │   ├── salary_rules.py
│   │   └── remuneration_calc.py
│   ├── models/                  # Modèles Pydantic
│   │   ├── contract.py
│   │   ├── compliance.py
│   │   ├── query.py
│   │   └── salary.py
│   ├── utils/                   # Utils : IA, RAG, parsing, etc.
│   │   ├── llm.py
│   │   ├── rag.py
│   │   └── document_parser.py
│   └── config.py                # Paramètres (API key, base, etc.)
├── tests/
│   ├── test_contracts.py
│   ├── test_compliance.py
│   └── ...
├── requirements.txt
└── README.md

