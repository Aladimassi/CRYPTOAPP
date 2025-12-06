import React, { useState } from 'react'
import { TrendingUp, Users, Menu, X } from 'lucide-react'
import CryptoPredictions from './components/CryptoPredictions'
import ClientSegmentation from './components/ClientSegmentation'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('crypto')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <TrendingUp size={28} />
            <span>ML Analytics</span>
          </div>
          
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <button 
              className={`nav-btn ${activeTab === 'crypto' ? 'active' : ''}`}
              onClick={() => { setActiveTab('crypto'); setMenuOpen(false); }}
            >
              <TrendingUp size={20} />
              <span>Crypto Predictions</span>
            </button>
            <button 
              className={`nav-btn ${activeTab === 'clients' ? 'active' : ''}`}
              onClick={() => { setActiveTab('clients'); setMenuOpen(false); }}
            >
              <Users size={20} />
              <span>Client Segmentation</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'crypto' ? <CryptoPredictions /> : <ClientSegmentation />}
      </main>

      <footer className="footer">
        <p>© 2025 ML Analytics | Powered by XGBoost & Random Forest</p>
      </footer>
    </div>
  )
}

export default App
