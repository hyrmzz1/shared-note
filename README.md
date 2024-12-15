# Shared Note

## Introduce

- 이 프로젝트는 제공된 [Todolist CRUD 서버](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)를 활용하여 Todo App의 클라이언트를 구현한 과제입니다.
  - **제공된 서버 레포지토리를 프로젝트의 server/ 디렉토리로 복사하여 사용했습니다.**
  - **구현된 클라이언트(Todo App)는 프로젝트의 client/ 디렉토리에 위치합니다.**
- 모든 유저가 하나의 Todo list를 공유하며(유저별로 분리된 Todo list 관리 기능을 제공하지 않습니다.), 전형적인 Todo list의 기능인 토글 기능이 요구사항에 포함되지 않아 프로젝트명을 **Shared Note**로 변경했습니다.

### 주요 화면

<table>
  <tr>
    <td align="center">
      <img alt="로그인 화면" src="https://github.com/user-attachments/assets/2bcb5b78-083c-4683-9063-b4cf50d45469">
    </td>
    <td align="center">
      <img alt="로그인 비활성화 화면" src="https://github.com/user-attachments/assets/fed9f9c8-b04c-410d-8121-dd43772bdf44">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center"><b>로그인 페이지 (<code>/auth/login</code>)</b></td>
  </tr>
  <tr>
    <td colspan="2" align="center">입력 필드가 비어 있거나 형식이 맞지 않으면 폼이 비활성화됩니다.<br>로그인 성공 시 토큰을 로컬 스토리지에 저장하고 루트 경로로 이동합니다.</td>
  </tr>
</table>

<table>
  <tr>
    <td align="center">
      <img width="1552" alt="회원가입 화면" src="https://github.com/user-attachments/assets/91c89df5-2b0e-4ad2-b675-1138329d204a">
    </td>
    <td align="center">
      <img width="1552" alt="회원가입 비활성화 화면" src="https://github.com/user-attachments/assets/e217314f-a560-490a-9933-50cc14ffdd05">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center"><b>회원가입 페이지 (<code>/auth/signup</code>)</b></td>
  </tr>
  <tr>
    <td colspan="2" align="center">입력 필드가 비어 있거나 형식이 맞지 않으면 폼이 비활성화됩니다.<br>비밀번호 확인 값이 일치하지 않을 경우에도 폼이 비활성화됩니다.</td>
  </tr>
</table>

<table>
  <tr>
    <td align="center">
      <img width="1552" alt="글 목록" src="https://github.com/user-attachments/assets/9824d809-3f09-4989-8c5b-eeff51e15786">
    </td>
    <td align="center">
      <img width="1552" alt="글 작성 화면" src="https://github.com/user-attachments/assets/516f2ad4-d776-446a-9845-7d7caecacc59">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center"><b>Todo 목록 및 추가 페이지 (<code>/todos</code>)</b></td>
  </tr>
  <tr>
    <td colspan="2" align="center">Todo 목록을 조회하거나, 새 Todo를 추가할 수 있습니다.<br>추가된 Todo는 실시간으로 목록에 반영됩니다.</td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <img width="1552" alt="글 상세보기 화면" src="https://github.com/user-attachments/assets/42448532-904f-4f51-a695-e878c7eda1cd">
    </td>
    <td>
      <img width="1552" alt="글 수정 화면" src="https://github.com/user-attachments/assets/da0e1cd8-f29e-4bc3-80da-96a3f0297fd5">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center"><b>글 상세보기 (<code>/todos/:id</code>)</b></td>
  </tr>
  <tr>
    <td colspan="2" align="center">Todo의 제목과 내용을 확인할 수 있습니다.<br>수정하거나 삭제한 내용은 목록에 실시간으로 반영됩니다.</td>
  </tr>
</table>
  
### 기술 스택

| **분류**               | **기술**                                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------------------|
| **언어 / 프레임워크 및 라이브러리**               | <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> |
| **라우팅**             | <img src="https://img.shields.io/badge/react router v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> |
| **상태 관리**          | <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/zustand-DD6620?style=for-the-badge&logo=zustand&logoColor=white">     |
| **폼 관리 및 유효성 검사** | <img src="https://img.shields.io/badge/react hook form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white"> |
| **스타일링**           | <img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> |
| **빌드 도구**           | <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">            |
| **HTTP 클라이언트**     | <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">          |

### What I Learned

> 프로젝트 구현 과정에서 배운 것들에 대해 작성한 포스팅입니다.

- [React-hook-form 적용기 : 공통 컴포넌트 설계 및 상태 동기화 문제 해결](https://hyrmzz1.tistory.com/169)
- [server state 관리 방식을 Zustand에서 React Query로 마이그레이션해보았답니다](https://hyrmzz1.tistory.com/171)
- [두유노 '리액트 에러 바운더리'?: ErrorBoundary, Suspense 적용하기](https://hyrmzz1.tistory.com/168)
- [왜 뒤로가기가 한 단계밖에 안될까?]()
- [렌더링 최적화: React memo를 적용해 리렌더링이 필요없는 컴포넌트 골라내기]()

## 요구사항

> `server/db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

### Login / Signup

- [x] `/auth` 경로에 로그인 / 회원가입 기능을 개발합니다
  - [x] 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- [x] 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
- [x] 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.

## Todo List

- [x] Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요.
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요.
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- [x] 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- [x] 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요.
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다.

## 프로젝트 구조

```js
📦server  // 과제 수행을 위해 제공된 Todolist CRUD 서버
📦client  // 수행 과제
 ┣ 📂public // 정적 파일 (favicon)
 ┣ 📂src  // 소스 코드 디렉터리
 ┃ ┣ 📂api  // API 요청 함수 모음
 ┃ ┣ 📂assets // 이미지 및 SVG 파일
 ┃ ┣ 📂components // 재사용 가능한 공통 컴포넌트
 ┃ ┣ 📂hooks  // 커스텀 훅
 ┃ ┣ 📂pages  // 페이지 컴포넌트
 ┃ ┣ 📂router // 라우팅 관련 코드
 ┃ ┣ 📂stores // Zustand 상태 관리
 ┃ ┣ 📂types  // 타입 정의 파일
 ┃ ┣ 📜App.tsx  // 앱 루트 컴포넌트
 ┃ ┣ 📜index.css  // 전역 스타일
 ┃ ┣ 📜main.tsx
 ┃ ┗ 📜vite-env.d.ts
 ┣ 📜.env // 환경 변수 파일
 ┣ 📜index.html
 ┣ 📜.gitignore
 ┣ 📜package.json
 ┗ 📜vite.config.ts
```

## 프로젝트 실행 방법

1. 프로젝트 복제

   ```bash
   git clone https://github.com/hyrmzz1/shared-note.git

   # 루트 디렉터리로 이동
   cd shared-note
   ```

2. 백엔드 서버 설치 및 실행

   ```bash
    # server 디렉터리로 이동
    cd server

    # 의존성 설치 및 개발 서버 실행
    yarn
    yarn start # http://localhost:8080
   ```

3. 환경변수 파일 생성

   ```bash
   # `/client` 디렉터리에 `.env` 파일 생성 후 아래 내용 추가
   VITE_API_URL=http://localhost:8080
   ```

4. 프론트엔드 설치 및 실행

   ```bash
    # 현재 server 디렉터리에 있다면 상위 디렉터리로 이동
    cd ..

    # client 디렉터리로 이동
    cd client

    # 의존성 설치 및 개발 서버 실행
    npm install
    npm run dev
   ```
