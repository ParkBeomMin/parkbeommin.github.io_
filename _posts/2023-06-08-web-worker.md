---
title: '웹워커와 서비스워커'
date: 2023-06-08 09:23:00+09:00
categories: web frontend
---

> Web Worker와 Service Worker는 Web API 중 하나이다.  
> Web Worker와 Service Worker는 웹 애플리케이션에서 백그라운드 작업을 수행하기 위한 기술이다.

## Web Worker API

> 웹 워커(Web worker)는 스크립트 연산을 웹 어플리케이션의 주 실행 스레드와 분리된 별도의 백그라운드 스레드에서 실행할 수 있는 기술입니다. 웹 워커를 통해 무거운 작업을 분리된 스레드에서 처리하면 주 스레드(보통 UI 스레드)가 멈추거나 느려지지 않고 동작할 수 있습니다.  
> \- MDN web docs -

### 웹 애플리케이션의 반응성 향상에 도움을 주는 Web Worker

자바스크립트는 싱글 스레드이며 call stack에 task를 담아 one by one으로 처리하기 때문에 부하가 많은 작업에 취약합니다.

브라우저 런타임 시 이러한 취약점을 보완하기 위해 Web Worker API가 등장하게 되었습니다. Web Worker는 주 스레드와 별도의 백그라운드 스레드에서 실행되어, 주 스레드가 차단되지 않고 다른 작업을 수행할 수 있어 웹 애플리케이션의 반응성 향상에 도움을 줍니다.

그리고 Web Worker는 메시지 전달을 통해 주 스레드와 통신하고 작업 결과를 반환할 수 있어서 웹 애플리케이션의 다른 부분과 상호작용할 수 있습니다.

### Web Worker에게 일 시키기

Web Worker도 자바스크립트 실행환경을 제공하는 런타임 스레드이기에 어떠한 작업이든 수행할 수 있습니다. 다만 DOM을 직접 조작을 하거나 window객체의 일부 메서드와 속성은 사용이 불가합니다.

[참고자료1]: https://velog.io/@oneook/Web-Worker%EC%99%80-Service-Worker%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0
[참고자료2]: https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API
[참고자료3]: https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API
