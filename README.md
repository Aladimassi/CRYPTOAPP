# 🚀 XGBoost Cryptocurrency Analysis Project

This repository contains two comprehensive machine learning projects focused on cryptocurrency trading and customer analytics.

## 📂 Project Structure

```
xgboostproject/
├── crypto_price_prediction/     # Bitcoin & Ethereum price prediction
│   ├── crypto_price_prediction.ipynb
│   ├── combined_crypto_dataset.csv
│   ├── bitcoin_best_model.pkl
│   ├── ethereum_best_model.pkl
│   ├── *_scaler.pkl
│   └── README.md
│
└── client_segmentation/         # Customer segmentation & risk prediction
    ├── client.ipynb
    ├── crypto_users_50000.csv
    └── README.md
```

## 🎯 Projects Overview

### 1. 📈 Crypto Price Prediction
Machine learning models that predict Bitcoin and Ethereum price movements using 44 technical indicators.

**Key Results:**
- Bitcoin: 85.4% accuracy, 60.3% recall
- Ethereum: 76.6% accuracy, 43.2% recall
- XGBoost classifier with optimized confidence thresholds

[→ View detailed documentation](crypto_price_prediction/README.md)

### 2. 👥 Client Segmentation
Customer segmentation and risk prediction system for 50,000 cryptocurrency traders.

**Key Results:**
- 3 customer segments (Prudent, Équilibré, Aventurier)
- 86.76% R² score for risk prediction
- KMeans, DBSCAN, and Random Forest models

[→ View detailed documentation](client_segmentation/README.md)

## 🛠️ Technologies Used

- **Python 3.x**
- **Machine Learning:** XGBoost, scikit-learn (KMeans, DBSCAN, Random Forest)
- **Data Processing:** pandas, numpy
- **Visualization:** matplotlib, seaborn
- **Feature Engineering:** Technical indicators, interaction features

## 📊 Combined Impact

These projects provide:
1. **Trading Signals** - Predict market movements with high accuracy
2. **Customer Intelligence** - Understand user behavior patterns
3. **Risk Management** - Predict and monitor risk across portfolio
4. **Personalization** - Tailor services to different user segments

## 🚀 Getting Started

1. Navigate to the project folder you're interested in
2. Open the Jupyter notebook (`.ipynb` file)
3. Run cells sequentially
4. Pre-trained models are included for immediate use

## 📈 Performance Summary

| Project | Main Metric | Value | Description |
|---------|-------------|-------|-------------|
| Price Prediction (Bitcoin) | Accuracy | 85.4% | Price movement prediction |
| Price Prediction (Ethereum) | Accuracy | 76.6% | Price movement prediction |
| Client Segmentation | R² Score | 86.76% | Risk prediction accuracy |
| Client Segmentation | Segments | 3 | Customer clusters identified |

## 💡 Business Value

- **Automated Trading Signals** from price prediction models
- **Customer Segmentation** for targeted marketing (3 distinct groups)
- **Risk Scoring** with 86.76% accuracy for proactive management
- **Personalized Recommendations** based on user segment and risk profile

## 📝 License & Usage

These projects are designed for educational and analytical purposes. Always combine ML predictions with human expertise for financial decisions.

---

*Last Updated: December 4, 2025*
