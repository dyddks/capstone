import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 2%; 0;
  background-color: #232323;
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  margin-bottom: 0.5rem;
  color: #eeeeee;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

const Item = styled.a`
  color: #aaaaaa;
  text-decoration: none;

  :hover {
    cursor: pointer;
    
    color: #1672fc;
  }
`;

export const Shortcuts = () => {
  return(
    <>
    <Container>
      <Area>
        <Label>수도권</Label>
        <Items>
          <Item href={'https://www.skens.com/koone/main/index.do'} target='_blank' rel='noopener noreferrer'>코원에너지서비스(주)</Item>
          <Item href={('https://www.lsyesco.com')} target='_blank' rel='noopener noreferrer'>(주)예스코</Item>
          <Item href={('https://www.samchully.co.kr')} target='_blank' rel='noopener noreferrer'>삼천리(주)</Item>
          <Item href={('https://www.seoulgas.co.kr')} target='_blank' rel='noopener noreferrer'>서울도시가스(주)</Item>
          <Item href={('https://kituramienergy.co.kr')} target='_blank' rel='noopener noreferrer'>(주)귀뚜라미에너지</Item>
          <Item href={('https://www.daeryunens.com')} target='_blank' rel='noopener noreferrer'>대륜E&S</Item>
        </Items>
      </Area>
      <Area>
        <Label>인천광역시</Label>
        <Items>
          <Item href={('https://www.icgas.co.kr')} target='_blank' rel='noopener noreferrer'>인천도시가스(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>충청북도</Label>
        <Items>
          <Item href={('https://www.ccbgas.co.kr')} target='_blank' rel='noopener noreferrer'>참빛충북도시가스(주)</Item>
          <Item href={('https://www.cces.co.kr')} target='_blank' rel='noopener noreferrer'>충청에너지서비스(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>충청남도</Label>
        <Items>
          <Item href={('https://www.shgas.co.kr')} target='_blank' rel='noopener noreferrer'>미래엔서해에너지(주)</Item>
          <Item href={('https://www.jbcorporation.com')} target='_blank' rel='noopener noreferrer'>JB(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>대전광역시</Label>
        <Items>
          <Item href={('https://www.cncityenergy.com')} target='_blank' rel='noopener noreferrer'>CNCITY에너지</Item>
        </Items>
      </Area>
      <Area>
        <Label>전라북도</Label>
        <Items>
          <Item href={('https://www.kscg.co.kr')} target='_blank' rel='noopener noreferrer'>군산도시가스(주)</Item>
          <Item href={('https://www.jeonbukes.co.kr')} target='_blank' rel='noopener noreferrer'>전북에너지서비스(주)</Item>
          <Item href={('https://www.jbcitygas.co.kr')} target='_blank' rel='noopener noreferrer'>전북도시가스(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>광주광역시</Label>
        <Items>
          <Item href={('https://www.hyenergy.co.kr')} target='_blank' rel='noopener noreferrer'>(주)해양에너지</Item>
        </Items>
      </Area>
      <Area>
        <Label>전라남도</Label>
        <Items>
          <Item href={('https://www.skens.com/chonnam/index.jsp')} target='_blank' rel='noopener noreferrer'>전남도시가스(주)</Item>
          <Item href={('https://www.dhgas.com')} target='_blank' rel='noopener noreferrer'>대화도시가스(주)</Item>
          <Item href={('https://www.mokpocitygas.co.kr')} target='_blank' rel='noopener noreferrer'>목포도시가스(주)</Item>
        </Items>
      </Area>
    </Container>
    <Container>
      <Area>
        <Label>강원도</Label>
        <Items>
          <Item href={('https://www.kangwoncitygas.co.kr')} target='_blank' rel='noopener noreferrer'>강원도시가스(주)</Item>
          <Item href={('https://www.cscgas.co.kr')} target='_blank' rel='noopener noreferrer'>참빛도시가스(주)</Item>
          <Item href={('https://www.cwjgas.co.kr')} target='_blank' rel='noopener noreferrer'>참빛원주도시가스(주)</Item>
          <Item href={('https://www.cydgas.co.kr')} target='_blank' rel='noopener noreferrer'>참빛영동도시가스(주)</Item>
          <Item href={('https://www.myungsungpower.com')} target='_blank' rel='noopener noreferrer'>명성파워그린(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>경상북도</Label>
        <Items>
          <Item href={('https://www.daesungcleanenergy.co.kr/')} target='_blank' rel='noopener noreferrer'>대성청정에너지(주)</Item>
          <Item href={('https://www.skens.com/gumi/main/index.do')} target='_blank' rel='noopener noreferrer'>영남에너지서비스(주)(구미)</Item>
          <Item href={('https://www.skens.com/pohang/main/index.do')} target='_blank' rel='noopener noreferrer'>영남에너지서비스(주)(포항)</Item>
          <Item href={('https://www.srbgas.co.kr')} target='_blank' rel='noopener noreferrer'>서라벌도시가스(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>경상남도</Label>
        <Items>
          <Item href={('https://www.knenergy.co.kr')} target='_blank' rel='noopener noreferrer'>경남에너지(주)</Item>
          <Item href={('https://www.yesgse.com')} target='_blank' rel='noopener noreferrer'>(주)지에스이</Item>
        </Items>
      </Area>
      <Area>
        <Label>대구광역시</Label>
        <Items>
          <Item href={('https://www.daesungenergy.com')} target='_blank' rel='noopener noreferrer'>대성에너지(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>울산광역시</Label>
        <Items>
          <Item href={('https://www.kdgas.co.kr')} target='_blank' rel='noopener noreferrer'>(주)경동도시가스</Item>
        </Items>
      </Area>
      <Area>
        <Label>부산광역시</Label>
        <Items>
          <Item href={('https://www.busangas.co.kr')} target='_blank' rel='noopener noreferrer'>(주)부산도시가스</Item>
        </Items>
      </Area>
      <Area>
        <Label>세종특별시</Label>
        <Items>
        </Items>
      </Area>
      <Area>
        <Label>제주도</Label>
        <Items>
          <Item href={('https://www.jejucitygas.com')} target='_blank' rel='noopener noreferrer'>(주)제주도시가스</Item>
        </Items>
      </Area>
    </Container>
  </>
  );
}