import React, { useState, useEffect } from "react";
import "./style.css";
import moon from "../../assets/icon/moon.svg";
import sun from "../../assets/icon/sun.svg";
import projetos from "../../assets/icon/projetos.svg";
import vnw from "../../assets/favicon/vnw.svg";
import perfil from "../../assets/perfil.jpg";
import home from "../../assets/icon/home.svg";
import curriculo from "../../assets/icon/curriculo.svg";
import whatsapp from "../../assets/social/whatsapp.svg";
import sobre from "../../assets/icon/sobre.svg";
import btnExpandir from "../../assets/icon/btnExpandir.svg";
import curriculoPDF from "../../assets/curriculo.pdf";

export default function Menu() {
  
  // Menu visível - esconde e mostra o menu
  const [menu, setMenu] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 680) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  //Menu Colapsado - esconde e mostra o menu
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 680) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  // Dark Mode - muda imagem e cor do menu (por hora)
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  // Código para mostrar o alerta e baixar o Currículo
  const handleDownload = (e) => {
    const confirmDownload = window.confirm(
      "Deseja efetuar o download do currículo?"
    );
    if (!confirmDownload) {
      e.preventDefault();
      alert("Quando desejar, basta clicar em currículo novamente!");
    }
    alert("Obrigado pela oportunidade!");
  };

  // Abre o WhatsApp em uma janela no meio da tela
  const openWhatsApp = (e) => {
    e.preventDefault();
    // tamanho da janela
    const width = 800;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    window.open(
      "https://web.whatsapp.com/send?phone=5581992581741&text=Olá,%20vamos%20conversar?",
      "popup",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  return (
    <main className="main-bg">
    <header className={`menuHamburguer ${menu ? "menuAberto" : "menuFechado"}`}>
      <button onClick={() => setMenu(!menu)}>{menu ? "X" : "☰"}</button>
    </header>
      {menu && (
        <nav className={`menu ${collapsed ? "collapsed" : ""}`}>
          <div className="menu-bg">
            {/* Logo - Titulo */}
            <div className="menu-top">
              <a href="https://vainaweb.com.br/" className="logo-bg">
                <img src={vnw} alt="Logo" className="logo" />
                <span className="menu-titulo hide">Ficha Técnica</span>
              </a>
            </div>
            {/* Botão Expandir */}
            <div className="btnExpandir" onClick={toggleCollapse}>
              <img src={btnExpandir} alt="Botão Expandir" />
            </div>
          </div>
          {/* Perfil do Usuário - Foto, Nome e Cargo */}
          <div className="menu-perfil">
            <div className="perfil-bg">
              <img
                src={perfil}
                alt="Perfil do Usuário"
                className="perfil-img"
              />
            </div>
            <section className="perfil-dados hide">
              <div className="perfil-nome"> Gilvan Oliveira </div>
              <div className="perfil-cargo">Front-End Developer</div>
            </section>
          </div>
          {/* Links(Opções) do Menu */}
          <div className="menu-links">
            <ul>
              {/* Início */}
              <li>
                <a href="/" title="Início" className="colapsar">
                  <img src={home} alt="Início da página" />
                  <span className="link hide">Início</span>
                  <span className="colapsar-item">Início</span>
                </a>
              </li>
              <li>
                <h2>Meus Dados</h2>
              </li>
              {/* Projetos */}
              <li>
                <a href="/projetos" title="Projetos" className="colapsar">
                  <img src={projetos} alt="Projetos do portifólio" />
                  <span className="link hide">Projetos</span>
                  <span className="colapsar-item">Projetos</span>
                </a>
              </li>
              {/* Sobre */}
              <li>
                <a href="/sobre" title="Sobre" className="colapsar">
                  <img src={sobre} alt="Descrição sobre o usuário" />
                  <span className="link hide">Sobre</span>
                  <span className="colapsar-item">Sobre</span>
                </a>
              </li>
              <li>
                <h2>Contato</h2>
              </li>
              {/* Currículo - com opção de download e mensagem de alerta */}
              <li>
                <a
                  href={curriculoPDF}
                  download="curriculo.pdf"
                  title="Curriculo"
                  className="colapsar"
                  onClick={handleDownload}
                >
                  <img src={curriculo} alt="Currículo em pdf para donwload" />
                  <span className="link hide">Currículo</span>
                  <span className="colapsar-item">Currículo</span>
                </a>
              </li>
              {/* WhatsApp - com opção de abrir uma conversa com mensagem em uma janela no meio da tela */}
              <li>
                <a
                  href="https://web.whatsapp.com/send?phone=5581992581741&text=Olá,%20vamos%20conversar?"
                  title="Whatsapp"
                  className="colapsar"
                  onClick={openWhatsApp}
                >
                  <img src={whatsapp} alt="Abre uma conversa no Whatsapp" />
                  <span className="link hide">Whatsapp</span>
                  <span className="colapsar-item">Whatsapp</span>
                </a>
              </li>
              <li>
                <h2>Modo de Exibição</h2>
              </li>
              {/* Dark Mode - com opção de mudar a imagem e a cor do menu */}
              <li className="dark">
                <a
                  href="#dark"
                  title="Dark Mode"
                  className="colapsar"
                  onClick={handleDarkModeToggle}
                >
                  <img
                    src={darkMode ? moon : sun}
                    alt={darkMode ? "dark" : "light"}
                  />
                  <span className="link hide">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                  <span className="colapsar-item">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </main>
  );
}
