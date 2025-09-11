function About() {
  return (
    <section className="about">
      {/* 인사말 */}
      <div className="box">
        <h3 className="tit">🖐 Hello</h3>
        <p>안녕하세요. 코딩하는 디자이너 <b>이아현</b>입니다.</p>
        <p>
          (<b>Simple</b>) 간결한 코드를 추구합니다. 웹 표준을 준수하며 
          구조화 된 마크업으로 개발에 용이하도록 늘 고민합니다.
        </p>
        <p>
          문제 발생 시 유연하게 대응하며 <b>HTML·CSS·JavaScript</b>를 깊이 이해하고 있습니다.
        </p>
        <p>
          (<b>Minimal</b>) 미니멀한 디자인을 추구합니다. 심미성과 사용성, 
          두 요소의 균형을 늘 생각합니다.
        </p>
      </div>

      {/* 스킬 */}
      <div className="box">
        <h3 className="tit">🚗 Skills</h3>
        <ul>
          <li>
            <span className="date">
              Web/Frontend
            </span>
            <p>HTML, CSS, JavaScript, jQuery</p>
          </li>
          <li>
            <span className="date">
              UI/UX Tools
            </span>
            <p>Figma</p>
          </li>
          <li>
            <span className="date">
              Graphic Tools
            </span>
            <p>Photoshop, Illustrator</p>
          </li>
        </ul>
      </div>

      {/* 자격증 */}
      <div className="box">
        <h3 className="tit">✨ Certificate</h3>
        <ul>
          <li>
            <span className="date">
              웹디자인기능사
              <small>2021.04 | 한국산업인력공단</small>
            </span>
          </li>
          <li>
            <span className="date">
              GTQ일러스트 1급
              <small>2020.11 | 한국생산성본부(KPC)</small>
            </span>
          </li>
          <li>
            <span className="date">
              GTQ포토샵 1급
              <small>2020.09 | 한국생산성본부(KPC)</small>
            </span>
          </li>
        </ul>
      </div>

      {/* 경력 */}
      <div className="box">
        <h3 className="tit">👓 Experience</h3>
        <ul>
          <li>
            <span className="date">
              에스이코리아 <small>2022.03 - Now</small>
            </span>
            <p>
              다양한 SI 프로젝트에 참여해 UI/UX를 기획하고 디자인 및 마크업 개발을 담당하고 있습니다.
              <br />
              또 홈페이지 운영을 위한 유지보수 업무 진행을 함께 하고있습니다.
            </p>
          </li>
          <li>
            <span className="date">
              아이티팩토리 <small>2021.08 - 2022.02</small>
            </span>
            <p>
              스마트 HACCP 솔루션의 UI/UX를 기획하고 마크업 개발을 담당했습니다.
              <br />
              개발팀과 함께 검토하여 UI/UX의 사용성을 개선하였고, 마케팅에 필요한 디자인물도 산출하였습니다.
            </p>
          </li>
          <li>
            <span className="date">
              플로우 <small>2020.11 - 2021.07</small>
            </span>
            <p>
              카페24, 그누보드를 기반으로 한 홈페이지를 기획하고 마크업 개발을 담당했습니다.
              <br />
              쇼핑몰이나 기업 홈페이지를 위주로 작업하였고, 그에 필요한 상세페이지, 썸네일, 배너, 카드뉴스 제작을 하였습니다.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
