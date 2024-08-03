import React, { useState, useEffect } from 'react';
import './ControlPanel.css';
import images from '../main/boxes/Images';
import summary from './Dados'; // Verifique se o caminho está correto

const ControlPanel = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('');
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    console.log('Summary:', summary); // Adicione este log para verificar o conteúdo de summary

    const elements = document.querySelectorAll('.accessible-text');
    elements.forEach((el) => {
      if (isHighContrast) {
        document.body.classList.add('high-contrast');
        if (el.textContent.trim() !== "") {
          el.style.backgroundColor = 'black';
          el.style.color = 'white';
        }
      } else {
        document.body.classList.remove('high-contrast');
        el.style.backgroundColor = '';
        el.style.color = '';
      }
    });
  }, [isHighContrast]);

  useEffect(() => {
    const elements = document.querySelectorAll('.accessible-text');
    elements.forEach((el) => {
      if (el.textContent.trim() !== "") {
        if (fontSize) {
          const currentFontSize = window.getComputedStyle(el).fontSize;
          const currentFontSizeValue = parseFloat(currentFontSize);
          const newFontSizeValue = currentFontSizeValue + parseFloat(fontSize);
          el.style.fontSize = `${newFontSizeValue}px`;
        } else {
          el.style.fontSize = ''; // Reseta para o tamanho original
        }
      }
    });
  }, [fontSize]);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleSummary = () => {
    setIsSummaryVisible(!isSummaryVisible);
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const changeFontSize = (size) => {
    const newSize = fontSize === size ? '' : size;
    setFontSize(newSize);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
    }
  };

  return (
    <div className={`control-panel ${isPanelOpen ? 'open' : ''}`}>
      <button className="main-button" onClick={togglePanel}>
        <img className="icons" src={images.iconAccess} alt="Acessar painel" />
      </button>
      {isPanelOpen && (
        <div className="panel-options">
          <button onClick={() => changeFontSize('10rem')}>
            <img className="icons" src={images.textoGrande} alt="Mudar tamanho do texto" />
          </button>
          <button onClick={toggleHighContrast}>
            <img className="icons" src={images.contrast} alt="Mudar contraste" />
          </button>
          <button onClick={toggleSummary}>
            <img className="icons" src={images.sumario} alt="Sumário" />
          </button>
          {isSummaryVisible && (
            <div className="summary-overlay visible">
              <div className="summary-content">
                {Array.isArray(summary) ? (
                  summary.map((section) => (
                    <div key={section.id}>
                      <a
                        href={section.link}
                        onClick={(e) => handleLinkClick(e, section.id)}
                        className={activeLink === section.id ? 'active' : ''}
                      >
                        {section.title}
                      </a>
                    </div>
                  ))
                ) : (
                  <p>Summary data is not an array</p>
                )}
              </div>
              <button onClick={toggleSummary}>Fechar Sumário</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
