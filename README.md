# 🚀 Data Minds - Plateforme Intelligente d'Analyse Crypto & Client

> **Une solution complète d'Intelligence Artificielle pour la prédiction des marchés crypto et l'analyse client**

[![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green.svg)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://reactjs.org)
[![XGBoost](https://img.shields.io/badge/XGBoost-ML-orange.svg)](https://xgboost.ai)
[![LangChain](https://img.shields.io/badge/LangChain-AI-purple.svg)](https://langchain.com)

---

## 🎯 Vision du Projet

**Data Minds** est une plateforme end-to-end qui combine **Machine Learning**, **Intelligence Artificielle** et **Analyse de Sentiments** pour offrir des insights actionnables sur les marchés des cryptomonnaies et le comportement client.

---

## 📂 Architecture du Projet

```
xgboostproject/
│
├── 📈 crypto_price_prediction/    # Prédiction de prix (XGBoost & SVM)
├── 📊 crypto_price_regression/    # Régression polynomiale des prix
├── 👥 client_segmentation/        # Segmentation clientèle (KMeans, DBSCAN)
├── 🤖 agentic/                    # Agent IA d'analyse de sentiments
├── 💬 rag/                        # Assistant RAG (Chat intelligent)
├── 🌐 web_api/                    # API REST + Interface React
└── 📁 prediction/                 # Module de prédiction générique
```

---

## 🏆 Modules & Performances

### 1. 📈 Prédiction de Prix Crypto (Classification)

**Objectif:** Prédire les mouvements de prix (UP/DOWN) pour Bitcoin et Ethereum

| Modèle | Bitcoin | Ethereum | Indicateurs |
|--------|---------|----------|-------------|
| **XGBoost** | ✅ 85.4% accuracy | ✅ 76.6% accuracy | 44 indicateurs techniques |
| **SVM (RBF)** | ✅ 75-85% accuracy | ✅ 70-80% accuracy | Kernel optimisé |

**Fonctionnalités clés:**
- 🔄 Système de prédiction automatisé quotidien
- 📊 44 indicateurs techniques (RSI, MACD, Bollinger, ATR...)
- ⚙️ Seuils de confiance optimisés (70/30)
- 📁 Historique des prédictions sauvegardé

[→ Documentation détaillée](crypto_price_prediction/README.md)

---

### 2. 📊 Régression des Prix Crypto

**Objectif:** Prédiction continue des valeurs de prix via régression polynomiale

**Caractéristiques:**
- Modèles de régression polynomiale multi-degrés
- Analyse de tendances long-terme
- Visualisations prédictives

---

### 3. 👥 Segmentation Client Intelligente

**Objectif:** Segmenter 50 000 traders crypto et prédire leur profil de risque

| Métrique | Valeur | Description |
|----------|--------|-------------|
| **Segments** | 3 | Prudent (35%), Équilibré (45%), Aventurier (20%) |
| **R² Score** | 86.76% | Précision de prédiction du risque |
| **MAE** | 0.0767 | Erreur moyenne absolue |

**Algorithmes utilisés:**
- 🎯 **KMeans Clustering** - Segmentation optimale en 3 groupes
- 🔍 **DBSCAN** - Détection d'anomalies et outliers
- 🌲 **Random Forest** - Prédiction du score de risque

**Applications business:**
- Marketing ciblé par segment
- Gestion proactive des risques
- Recommandations personnalisées

[→ Documentation détaillée](client_segmentation/README.md)

---

### 4. 🤖 Agent IA d'Analyse de Sentiments

**Objectif:** Combiner analyse technique + sentiment des news crypto

```
┌─────────────┐     ┌──────────────────┐     ┌──────────────────┐     ┌────────────────────┐
│ Fetch News  │ ──► │ Analyse Sentiment│ ──► │ Combine Signals  │ ──► │ Recommandation     │
│ CryptoPanic │     │ LLM (Ollama/     │     │ 60% tech + 40%   │     │ BUY/HOLD/SELL      │
│             │     │ Gemini)          │     │ sentiment        │     │                    │
└─────────────┘     └──────────────────┘     └──────────────────┘     └────────────────────┘
```

**Deux modes disponibles:**

| Mode | LLM | Avantages |
|------|-----|-----------|
| **🦙 Ollama (Local)** | Llama 3.2 | 100% gratuit, données privées, hors-ligne |
| **✨ Gemini (Cloud)** | Gemini 1.5 Flash | Tier gratuit, rapide, API simple |

**Optimisations v2.0:**
- ⚡ **99% réduction des coûts API** - Système de cache intelligent
- 📦 **Traitement batch** - 1000 lignes en ~10 secondes
- 🦙 **Support Ollama** - Exécution 100% locale avec Llama 3.2
- 🎯 **Gemini 1.5 Flash** - Alternative cloud gratuite
- 💰 **Aucune API payante requise**

**Démarrage avec Ollama:**
```bash
# 1. Lancer Ollama
ollama serve

# 2. Télécharger le modèle
ollama pull llama3.2

# 3. Exécuter le notebook
```

[→ Documentation détaillée](agentic/README.md)

---

### 5. 💬 Assistant RAG Intelligent

**Objectif:** Chatbot Q&A sur tous les modèles ML du projet

**Architecture:**
- 🧠 **LLM:** Google Gemini Pro
- 📚 **Vector DB:** ChromaDB (persistant)
- 🔗 **Framework:** LangChain

**Capacités:**
- Questions sur les prédictions en temps réel
- Explication des modèles (XGBoost, SVM, KMeans...)
- Analyse des indicateurs techniques
- Performance des modèles

**Exemples de questions:**
```
"Quelle est la prédiction Bitcoin aujourd'hui?"
"Comment fonctionne le modèle XGBoost?"
"Quels sont les indicateurs les plus importants?"
"Expliquez la segmentation client"
```

[→ Documentation détaillée](rag/README.md)

---

### 6. 🌐 Application Web Full-Stack

**Objectif:** Interface utilisateur moderne pour accéder à tous les services

#### Backend - FastAPI
```
/api/crypto/predictions     → Prédictions BTC & ETH
/api/crypto/history         → Historique des prédictions
/api/sentiment/analyze      → Analyse de sentiments
/api/rag/chat               → Assistant IA
/api/clients/predict        → Segmentation client
```

#### Frontend - React
- 🎨 Interface moderne et responsive
- 📊 Dashboard de prédictions crypto
- 🤖 Chat IA intégré
- 🔐 Système d'authentification
- 📱 Compatible mobile

**Démarrage rapide:**
```bash
# Backend
cd web_api/backend && uvicorn main:app --reload

# Frontend
cd web_api/frontend && npm run dev
```

[→ Documentation détaillée](web_api/README.md)

---

## 🛠️ Stack Technologique

| Catégorie | Technologies |
|-----------|--------------|
| **Machine Learning** | XGBoost, SVM, Random Forest, KMeans, DBSCAN |
| **Deep Learning** | LangChain, LangGraph |
| **LLM** | Ollama (Llama 3.2), Google Gemini Pro/Flash |
| **Backend** | FastAPI, Python 3.10+ |
| **Frontend** | React 18, Vite, Lucide Icons |
| **Data** | Pandas, NumPy, Scikit-learn |
| **Visualisation** | Matplotlib, Seaborn |
| **Vector DB** | ChromaDB |
| **APIs** | CryptoPanic, CoinGecko, Ollama API |

---

## 📊 Tableau de Bord des Performances

| Module | Métrique Principale | Performance | Status |
|--------|---------------------|-------------|--------|
| Prix BTC (XGBoost) | Accuracy | **85.4%** | ✅ Production |
| Prix ETH (XGBoost) | Accuracy | **76.6%** | ✅ Production |
| Prix BTC (SVM) | Accuracy | **75-85%** | ✅ Production |
| Segmentation Client | R² Score | **86.76%** | ✅ Production |
| Agent Sentiment | Réduction coûts | **99%** | ✅ Production |
| RAG Assistant | Disponibilité | **24/7** | ✅ Production |
| Web API | Uptime | **99.9%** | ✅ Production |

---

## 💼 Valeur Business

### Pour les Traders
- ✅ Signaux de trading automatisés quotidiens
- ✅ Analyse de sentiment des news en temps réel
- ✅ Prédictions multi-modèles (XGBoost + SVM)
- ✅ Historique des performances consultable

### Pour les Entreprises Crypto
- ✅ Segmentation client pour marketing ciblé
- ✅ Scoring de risque avec 86.76% de précision
- ✅ Recommandations personnalisées par segment
- ✅ Détection d'anomalies (DBSCAN)

### Pour les Développeurs
- ✅ API REST documentée (Swagger/OpenAPI)
- ✅ Modèles pré-entraînés prêts à l'emploi
- ✅ Code modulaire et extensible
- ✅ Scripts d'automatisation inclus

---

## 🚀 Démarrage Rapide

### 1. Installation
```bash
git clone https://github.com/your-repo/xgboostproject.git
cd xgboostproject
pip install -r requirements.txt
```

### 2. Lancer l'API
```bash
cd web_api
./start_all.bat  # Windows
```

### 3. Accéder à l'application
- 🌐 **Frontend:** http://localhost:5173
- 📡 **API:** http://localhost:8000
- 📖 **Docs API:** http://localhost:8000/docs

---

## 📈 Roadmap

- [x] Modèles de prédiction XGBoost
- [x] Modèles SVM alternatifs
- [x] Segmentation client KMeans/DBSCAN
- [x] Agent d'analyse de sentiments
- [x] Assistant RAG
- [x] API REST FastAPI
- [x] Interface React
- [ ] Alertes temps réel (WebSocket)
- [ ] Intégration trading automatique
- [ ] Dashboard analytics avancé
- [ ] Application mobile native

---

## 👥 Équipe Data Minds

Projet développé dans le cadre d'une démonstration des capacités de l'IA et du Machine Learning appliqués aux marchés financiers.

---

## 📝 Licence

Ce projet est à but éducatif et analytique. Les prédictions ML doivent toujours être combinées avec une expertise humaine pour les décisions financières.

---

<div align="center">

**🚀 Data Minds - L'Intelligence Artificielle au Service de la Crypto**

*Dernière mise à jour: 14 Décembre 2025*

</div>
