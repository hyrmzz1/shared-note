# :: 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제 안내 & API

# 1) 사전과제 진행 가이드

- [본 레포지토리](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)는 간단한 `Todolist CRUD 서버`를 제공한 것입니다.
  - **위의 레포지토리(서버)를 auth-todo 레포지토리의 server/ 디렉토리로 복사하여 사용했습니다.**
- 제공해드리는 API Repository를 활용하여 가이드에 따라 `Todo App`을 작성하고 본인 Github에 업로드해주세요.
  - **완성된 과제(가이드에 따라 작성된 Todo App)는 auth-todo 레포지토리 내의 client/ 디렉토리에 위치해 있습니다.**

## 과제 참고 사항

1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)

3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.

# 2-1) API 실행

```bash
> yarn

> yarn start # http://localhost:8080
```

# 2-2) API 스펙

## [Todos](#todos)

- [getTodos](#getTodos)
- [getTodoById](#getTodoById)
- [createTodo](#createTodo)
- [updateTodo](#updateTodo)
- [deleteTodo](#deleteTodo)

## [Auth](#auth)

- [login](#login)
- [signUp](#signUp)

# <span id="todos">1-3) Todos</span>

## getTodos

### URL

- GET `/todos`
- Headers
  - Authorization: login token

### 응답 예시

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

## getTodoById

### URL

- GET `/todos/:id`
- Headers
  - Authorization: login token

### 응답 예시

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

## createTodo

### URL

- POST `/todos`
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token

### 응답 예시

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

## updateTodo

### URL

- PUT `/todos/:id`
- Parameter
  - title: string
  - content: string
- Headers
  - Authorization: login token

### 응답 예시

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

## deleteTodo

### URL

- DELETE `/todos/:id`
- Headers
  - Authorization: login token

### 응답 예시

```json
{
  "data": null
}
```

# <span id="auth">1-4) Auth</span>

## login

### URL

- POST `/users/login`
- Parameter
  - email: string
  - password: string

### 응답 예시

```json
{
  "message": "성공적으로 로그인 했습니다",
  "token": "eyJhbGciOiJIUzI1NiJ9.YXNkZkBhc2RmYXNkZi5jb20.h-oLZnV0pCeNKa_AM3ilQzerD2Uj7bKUn1xDft5DzOk"
}
```

## signUp

### URL

- POST `/users/create`
- Parameter
  - email: string
  - password: string

### 응답 예시

```json
{
  "message": "계정이 성공적으로 생성되었습니다",
  "token": "eyJhbGciOiJIUzI1NiJ9.YXNkZkBhc2RmYXNkZi5jb20.h-oLZnV0pCeNKa_AM3ilQzerD2Uj7bKUn1xDft5DzOk"
}
```
