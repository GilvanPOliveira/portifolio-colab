/* Paleta de cores:
#19182d (Índigo Escuro) Menu
#303651 (Azul-petróleo) Borda / Texto
#5a61ff (Azul Elétrico) Hover img
#8a8cff (Azul Pálido) Selecionado
#c7d2dc (Azul Pastel) Background
#e6e8f0 (Cinza Azulado) Texto 
*/

import styled from "styled-components";

export const MainBg = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: 100vh; 
  width: 100%;
  background-color: #c7d2dc;
  @media (max-width: 620px) {
    align-items: flex-start;
  }
  @media (max-width: 320px) {
    flex-direction: column;
  }
  `;

export const Main = styled.div`
  padding: 24px 32px 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 32px;
  img {
    width: 350px;
    border-radius: 50%;
  }
  @media (max-width: 820px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 620px) {
    img {
      width: 250px;
    }
  }
  @media (max-width: 420px) {
    img {
      width: 200px;
    }
  }
  @media (max-width: 320px) {
    img {
      width: 150px;
    }
    margin-top: 50px;
    padding: 12px;
  }
`;

export const Frase = styled.div`
  display: flex;
  margin-top: 24px;
  font-style: italic;
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #e6e8f0;
  color: #303651;
  border-radius: 12px;
`;

