---
title: '[Vanilla JS] About Me 프로젝트 - 페이지 구성하기'
date: 2023-06-27 09:16:00+09:00
categories: web frontend
---

> About Me  
> 친구들이 생각하는 나는 어떤 사람일까? 친구들의 마음이 모여 나의 새싹을 키워보세요!

지난 [SPA 구조 만들기](https://parkbeommin.github.io/web/frontend/vanillajs-project_1/)에 이어서 프로젝트의 페이지 및 컴포넌트 구성에 대해 이야기해보겠습니다.

About Me 컨셉은 나의 새싹을 만들어 키우는 것입니다.  
나의 새싹을 만들면, 색상 및 종류가 랜덤하게 정해지고 id가 부여됩니다.  
id를 통해 링크가 생성되며 링크를 친구들에게 공유하여 나에 대한 생각을 받습니다.  
친구들에게 입력받은 단어/문장들이 비가 되어 나의 새싹을 키우게 됩니다.

## 📃페이지 및 컴포넌트 구성

```
...

├── components
│   ├── Hader.js
│   ├── AboutMe.js
│   ├── MoneyLayer.js
│   └── PasswordLayer.js
├── pages
│   ├── New.js
│   ├── About.js
│   └── Home.js

...
```

### 페이지

-   생성 페이지(New.js): 새싹을 생성하는 페이지, 모든 사용자들이 입력했던 값들이 보여진다.
-   작성 페이지(About.js): 공유받은 링크로 들어와 친구에 대해 작성하는 페이지
-   메인 페이지(Home.js): 만든 새싹과 친구들에게 입력받은 단어/문장들이 보여지는 페이지

### 컴포넌트

-   헤더 컴포넌트(Header.js): 공유, 기부 버튼이 있는 헤더
-   메인 컴포넌트(AboutMe.js): 새싹이 보여지고, 단어/문장들이 비처럼 떨어지는 컴포넌트
-   기부 컴포넌트(MoneyLayer.js): 카카오 송금하기로 링크되는 레이어
-   비밀번호 컴포넌트(PasswordLayer.js): 비밀번호를 입력받는 레이어

## 생성 페이지

## 작성 페이지

## 메인 페이지

먼저 index.html 파일에 SPA로 동작하기 위한 js파일을 삽입해줍니다.  
그리고 동작을 컨트롤할 수 있도록 div 태그에 app이라는 id를 지정해줍니다.

```index.html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Me</title>
    </head>
    <body>
        <div id="app"></div>
        <script type="module" src="./src/index.js"></script>
    </body>
</html>
```

이제 app.js에 SPA가 되도록 코드를 작성해줍니다.

```app.js
export default class App {
    constructor({ $target }) {
        this.$target = $target;
    }

    render() {
        const $main = document.createElement('main');
        $main.setAttribute('id', 'page_content');
        this.$target.appendChild($main);
    }
}
```

index.js에서 app.jss가 html에 붙을 수 있도록 해줍니다.

```index.js
import App from "./App.js";
new App({ $target: document.querySelector("#app") }).render();
```

이제 SPA를 위한 기본적인 틀이 생성이 되었습니다.

## 🖥실행하기

SPA로만 프로젝트를 진행하여 따로 서버용 파일을 만들지 않았습니다.  
serve를 install 받아서 실행시키도록 하겠습니다.

```
npm install serve
```

serve 패키지가 install되고나면 package.json에 명령어 스크립트를 추가해줍니다.

```package.json
{
    "name": "aboutme",
    "version": "1.0.0",
    "description": "",
    "main": "./src/index.js",
    "scripts": {
        "start": "serve", // 이 부분 추가
    },
    "author": "",
    "license": "ISC",
    ...
}
```

이제 터미널창에서 `npm run start`로 프로젝트를 실행시켜 main 태그가 잘 붙었는지 확인하시면 됩니다.
