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
  min-height: 100vh;
  background-color: #c7d2dc;
  @media (max-width: 1068px) {
    align-items: flex-start;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`; 
 
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 400px;
  h2 {
    color: #303651;
    margin-bottom: 32px;
  }
  @media (max-width: 1068px) {
    margin-top: 32px;
  }
  @media (max-width: 250px) {
    margin-top: 70px;
    h2 {
      margin-bottom: 24px;
    }
  }
`;
 
export const Projetos = styled.div`
  max-width: 900px;
  @media (max-width: 1268px) {
    width: 668px;
  }
  @media (max-width: 1168px) {
    width: 638px;
  }
  @media (max-width: 1068px) {
    max-width: 668px;
  }
  @media (max-width: 968px) {
    max-width: 368px;
  }
  @media (max-width: 868px) {
    max-width: 320px;
  }
  @media (max-width: 468px) {
    max-width: 250px;
  }
  @media (max-width: 320px) {
    max-width: 185px;
  }
  @media (max-width: 250px) {
    max-width: 140px;
  }
`;