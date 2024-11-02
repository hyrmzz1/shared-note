# 1. 과제 안내

## 과제 진행 가이드

- [사전 과제 및 API 안내 레포지토리](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)는 본 과제 진행을 위해 제공된 간단한 Todolist CRUD 서버입니다. 이를 활용해 **Todo App의 클라이언트를 구현**하는 것이 과제입니다.
  - _원래는 위의 레포지토리를 이 레포지토리의 하위 디렉토리(server/)로 통합해 client/와 server/ 디렉토리를 포함하는 구조로 구성하려 했다. 그러나 서브모듈 설정으로 인해 위 레포지토리를 일반 디렉토리로 변환할 수가 없어, 본 레포지토리에는 client에 해당하는 코드만 위치하게 되었다._
- 반드시 `Vite`, `React Router v6`, `React 함수 컴포넌트(Hooks)` 기반으로 개발해주세요.
- 코드의 일관성, 가독성, 함수 분리, 컴포넌트 설계, 코드 퀄리티 등을 염두에 두고 과제를 진행해주세요.

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [ ] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [ ] 이메일 조건 : 최소 `@`, `.` 포함
  - [ ] 비밀번호 조건 : 8자 이상 입력
  - [ ] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [ ] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요.
  - [ ] 목록 / 상세 영역으로 나누어 구현해주세요.
  - [ ] Todo 목록을 볼 수 있습니다.
  - [ ] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [ ] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [ ] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [ ] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요.
  - [ ] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다.

## 과제 참고 사항

1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 갖습니다.)

3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.

# 2. API 실행법 및 스펙

## 2-1. API 실행법

[사전 과제 및 API 안내 레포지토리](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)를 클론해 아래와 같이 실행하면 됩니다.

```bash
> yarn

> yarn start # http://localhost:8080
```

## 2-2. Todos 스펙

### getTodos

**URL**

- GET `/todos`
- Headers
  - Authorization: login token

**응답 예시**

```json
{
  "data": [
    {
      "title": "hi",
      "content": "hello",
      "id": "z3FGrcRL55qDCFnP4KRtn",
      "createdAt": "2022-07-24T14:15:55.537Z",
      "updatedAt": "2022-07-24T14:15:55.537Z"
    },
    {
      "title": "hi",
      "content": "hello",
      "id": "z3FGrcRL55qDCFnP4KRtn",
      "createdAt": "2022-07-24T14:15:55.537Z",
      "updatedAt": "2022-07-24T14:15:55.537Z"
    }
  ]
}
```

### getTodoById

**URL**

- GET `/todos/:id`
- Headers
  - Authorization: login token

**응답 예시**

```json
{
  "data": {
    "title": "hi",
    "content": "hello",
    "id": "z3FGrcRL55qDCFnP4KRtn",
    "createdAt": "2022-07-24T14:15:55.537Z",
    "updatedAt": "2022-07-24T14:15:55.537Z"
  }
}
```

### createTodo

**URL**

- POST `/todos`
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token

**응답 예시**

```json
{
  "data": {
    "title": "hi",
    "content": "hello",
    "id": "z3FGrcRL55qDCFnP4KRtn",
    "createdAt": "2022-07-24T14:15:55.537Z",
    "updatedAt": "2022-07-24T14:15:55.537Z"
  }
}
```

### updateTodo

**URL**

- PUT `/todos/:id`
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token

**응답 예시**

```json
{
  "data": {
    "title": "제목 변경",
    "content": "내용 변경",
    "id": "RMfi3XyOKoI5zd0A_bsPL",
    "createdAt": "2022-07-24T14:25:48.627Z",
    "updatedAt": "2022-07-24T14:25:48.627Z"
  }
}
```

### deleteTodo

**URL**

- DELETE `/todos/:id`
- Headers
  - Authorization: login token

**응답 예시**

```json
{
  "data": null
}
```

## 2-3. Auth 스펙

### login

**URL**

- POST `/users/login`
- Parameter
  - email: string
  - password: string

**응답 예시**

```json
{
  "message": "성공적으로 로그인 했습니다",
  "token": "eyJhbGciOiJIUzI1NiJ9.YXNkZkBhc2RmYXNkZi5jb20.h-oLZnV0pCeNKa_AM3ilQzerD2Uj7bKUn1xDft5DzOk"
}
```

### signUp

**URL**

- POST `/users/create`
- Parameter
  - email: string
  - password: string

**응답 예시**

```json
{
  "message": "계정이 성공적으로 생성되었습니다",
  "token": "eyJhbGciOiJIUzI1NiJ9.YXNkZkBhc2RmYXNkZi5jb20.h-oLZnV0pCeNKa_AM3ilQzerD2Uj7bKUn1xDft5DzOk"
}
```