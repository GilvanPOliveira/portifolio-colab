import Menu from "../../components/Menu/Menu";
import Perfil from "../../assets/perfil.jpg";
import * as S from "./styled";

export default function Inicio() {
  return (
    <S.MainBg>
      <Menu />
      <S.Main>
        <S.Texto>
          <p>Olá, me chamo Gilvan Oliveira, sou um desenvolvedor Front-End. </p>
          <S.Frase>
            <p>
              “ Não é a linguagem de programação que define o programador, mas
              sim sua lógica. ”
            </p>
          </S.Frase>
        </S.Texto>
        <img src={Perfil} alt="Perfil" />
      </S.Main>
    </S.MainBg>
  );
}
