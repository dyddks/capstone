import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 2rem;
  background-color: #eeeeee;
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Items = styled.ul`
  font-size: 0.8rem;
`;

const Item = styled.li`
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Shortcuts = () => {
  return(
    <>
    <Container>
      <Area>
        <Label>수도권</Label>
        <Items>
          <Item onClick={() => window.open('https://www.skens.com/koone/main/index.do')}>코원에너지서비스(주)</Item>
          <Item onClick={() => window.open('https://www.lsyesco.com')}>(주)예스코</Item>
          <Item onClick={() => window.open('https://www.seoulgas.co.kr')}>서울도시가스(주)</Item>
          <Item onClick={() => window.open('https://kituramienergy.co.kr')}>(주)귀뚜라미에너지</Item>
          <Item onClick={() => window.open('https://www.samchully.co.kr')}>삼천리(주)</Item>
          <Item onClick={() => window.open('https://www.daeryunens.com')}>대륜E&S</Item>
        </Items>
      </Area>
      <Area>
        <Label>인천광역시</Label>
        <Items>
          <Item onClick={() => window.open('https://www.icgas.co.kr')}>인천도시가스(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>충청북도</Label>
        <Items>
          <Item onClick={() => window.open('https://www.ccbgas.co.kr')}>참빛충북도시가스(주)</Item>
          <Item onClick={() => window.open('https://www.cces.co.kr')}>충청에너지서비스(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>충청남도</Label>
        <Items>
          <Item onClick={() => window.open('https://www.shgas.co.kr')}>미래엔서해에너지(주)</Item>
          <Item onClick={() => window.open('https://www.jbcorporation.com')}>JB(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>대전광역시</Label>
        <Items>
          <Item onClick={() => window.open('https://www.cncityenergy.com')}>CNCITY에너지</Item>
        </Items>
      </Area>
      <Area>
        <Label>전라북도</Label>
        <Items>
          <Item onClick={() => window.open('https://www.kscg.co.kr')}>군산도시가스(주)</Item>
          <Item onClick={() => window.open('https://www.jeonbukes.co.kr')}>전북에너지서비스(주)</Item>
          <Item onClick={() => window.open('https://www.jbcitygas.co.kr')}>전북도시가스(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>광주광역시</Label>
        <Items>
          <Item onClick={() => window.open('https://www.hyenergy.co.kr')}>(주)해양에너지</Item>
        </Items>
      </Area>
      <Area>
        <Label>전라남도</Label>
        <Items>
          <Item onClick={() => window.open('https://www.skens.com/chonnam/index.jsp')}>전남도시가스(주)</Item>
          <Item onClick={() => window.open('https://www.dhgas.com')}>대화도시가스(주)</Item>
          <Item onClick={() => window.open('https://www.mokpocitygas.co.kr')}>목포도시가스(주)</Item>
        </Items>
      </Area>
    </Container>
    <Container>
      <Area>
        <Label>강원도</Label>
        <Items>
          <Item onClick={() => window.open('https://www.kangwoncitygas.co.kr')}>강원도시가스(주)</Item>
          <Item onClick={() => window.open('https://www.cscgas.co.kr')}>참빛도시가스(주)</Item>
          <Item onClick={() => window.open('https://www.cwjgas.co.kr')}>참빛원주도시가스(주)</Item>
          <Item onClick={() => window.open('https://www.cydgas.co.kr')}>참빛영동도시가스(주)</Item>
          <Item onClick={() => window.open('https://www.myungsungpower.com')}>명성파워그린(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>경상북도</Label>
        <Items>
          <Item onClick={() => window.open('https://www.daesungcleanenergy.co.kr/')}>대성청정에너지(주)</Item>
          <Item onClick={() => window.open('https://www.skens.com/gumi/main/index.do')}>영남에너지서비스(주)(구미)</Item>
          <Item onClick={() => window.open('https://www.skens.com/pohang/main/index.do')}>영남에너지서비스(주)(포항)</Item>
          <Item onClick={() => window.open('https://www.srbgas.co.kr')}>서라벌도시가스(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>경상남도</Label>
        <Items>
          <Item onClick={() => window.open('https://www.knenergy.co.kr')}>경남에너지(주)</Item>
          <Item onClick={() => window.open('https://www.yesgse.com')}>(주)지에스이</Item>
        </Items>
      </Area>
      <Area>
        <Label>대구광역시</Label>
        <Items>
          <Item onClick={() => window.open('https://www.daesungenergy.com')}>대성에너지(주)</Item>
        </Items>
      </Area>
      <Area>
        <Label>울산광역시</Label>
        <Items>
          <Item onClick={() => window.open('https://www.kdgas.co.kr')}>(주)경동도시가스</Item>
        </Items>
      </Area>
      <Area>
        <Label>부산광역시</Label>
        <Items>
          <Item onClick={() => window.open('https://www.busangas.co.kr')}>(주)부산도시가스</Item>
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
          <Item onClick={() => window.open('https://www.jejucitygas.com')}>(주)제주도시가스</Item>
        </Items>
      </Area>
    </Container>
  </>
  );
}