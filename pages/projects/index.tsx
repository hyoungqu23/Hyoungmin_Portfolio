import type { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-full mx-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl border-b-4">포트폴리오</h2>
        <div>
          <a href="">Page</a>
          <a href="https://github.com/hyoungqu23/Hyoungmin_Portfolio">GitHub</a>
          <a href="https://www.notion.so/hyoungmin/Hyoungmin-148ffdf1a5fe480b865ff6a0de802444">
            Notion
          </a>
        </div>
        <div>
          <p className="text-gray-400">Next.js를 활용한 포트폴리오 사이트</p>
          <p className="text-xs text-gray-400">2022.09.15 - 2022.09.20</p>
          <p className="text-sm text-gray-400">개인 프로젝트</p>
        </div>
        <ul>
          <li>Next.js를 활용해 페이지 기반 Route를 쉽게 구현했습니다.</li>
          <li>TypeScript를 배워 적용하면서 익숙해지고 있습니다.</li>
          <li>
            명시적으로 디자인을 확인할 수 있는 TailWind CSS를 통해 반응형 디자인과 전체적인 커스텀
            디자인을 구현했습니다.
          </li>
          <li>Notion과 Figma를 활용해 기본 구조와 디자인을 기획했습니다.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl border-b-4">CFD - Community For Developers</h2>
        <div>
          <a href="https://github.com/hyoungqu23/CFD">GitHub</a>
        </div>
        <div>
          <p className="text-gray-400">개발자를 위한 커뮤니티, CFD</p>
          <p className="text-xs text-gray-400">2022.07.04 - 2022.07.22</p>
          <p className="text-sm text-gray-400">팀 프로젝트, 프론트엔드</p>
        </div>
        <ul>
          <li>
            Next.js Server Side Rendering을 활용해 보다 빠른 응답 속도의 페이지를 구현하고, SEO를
            향상시켰으며, 파일 기반 라우트를 활용했습니다.
          </li>
          <li>질문, 답변, 댓글 CRUD를 구현했습니다.</li>
          <li>
            실제 유저의 흐름에 따라 버튼의 위치, 답변하기 Form에 자동 포커스 등 UI를 개선했습니다.
          </li>
          <li>
            더 나은 UX를 위해 좋아요 기능을 구현하여 높은 평가를 받은 답변을 상단에 배치하고, 반응형
            디자인을 적용했습니다.
          </li>
          <li>
            무한 스크롤과 검색을 적용해 수많은 질문 중 유저가 필요로하는 질문을 원활하게 검색할 수
            있도록 구현했습니다.
          </li>
          <li>emotion과 함께 UI Framework를 활용해 쉽고 깔끔하게 웹 페이지를 디자인했습니다.</li>
          <li>Notion과 Figma를 활용해 기본 구조와 디자인을 기획했습니다.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl border-b-4">Collector's</h2>
        <div>
          <a href="https://collectors-twenty.herokuapp.com/">Page</a>
          <a href="https://github.com/Elice-Team-20/Collectors">GitHub</a>
          <a href="https://www.figma.com/file/MmTalHhD88uGEyQJGJKyoe/Pet-Shop?node-id=637%3A49">
            Figma
          </a>
        </div>
        <div>
          <p className="text-gray-400">수많은 사람들의 상상을 실현시켜줄 수 있는 쇼핑몰</p>
          <p className="text-xs text-gray-400">2022.06.13 - 2022.06.24</p>
          <p className="text-sm text-gray-400">팀 프로젝트 - 프론트엔드</p>
        </div>
        <ul>
          <li>쇼핑몰 서비스의 프론트엔드 파트를 담당했습니다.</li>
          <li>
            홈 화면과 유저 정보 페이지, 상품 목록 페이지를 구현하고, 반응형 웹 디자인을
            추가했습니다.
          </li>
          <li>UX 개선을 위한 최근 본 상품 목록 기능, 매진 임박 상품 알림 기능을 추가했습니다.</li>
          <li>비즈니스 측면에서 소비자 구매 유도를 위한 유저 Stat UI를 구현했습니다.</li>
          <li>ES6 문법에 익숙해지기 위해 활용했습니다.</li>
          <li>Figma를 활용해 와이어프레임과 프로토타입을 제작했습니다.</li>
          <li>
            fetch API를 활용해 비동기적으로 서버와 통신하여 데이터를 가져와 UI를 구현했습니다.
          </li>
          <li>
            백엔드 개발자와 api 등 필요한 명세에 관한 문서화를 기반으로 원활히 소통하면서 협업에서의
            문서화와 소통의 중요성을 깨달았습니다.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
