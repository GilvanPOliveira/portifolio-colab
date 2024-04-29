import * as S from "./styled";
import PortifolioCarrossel from "../../components/Portifolio/PortifolioCarrossel";
import Menu from "../../components/Menu/Menu";

export default function Projetos() {
  return (
    <S.MainBg>
      <Menu />
      <S.Main>
        <h2>Projetos </h2>
        <S.Projetos>
          <PortifolioCarrossel/>
        </S.Projetos>
      </S.Main> 
    </S.MainBg>
  );
}
 