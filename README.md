# 이화담 Padlet
## 📍프로젝트 개요

* 이화담 padlet은 2025년 11월 행사 **'이화담 강연회'에서 학생들의 질문을 받는 사이트**입니다.
* 약 2주간 **45명의 가입자와 41개의 질문**을 해당 사이트를 이용해 강연회에서 질의응답을 했습니다.
  

## 👥 Members

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/Jade0728.png" width="80"/><br/>
      <b>서영</b><br/>
      팀장 / BE / 배포
    </td>
    <td align="center">
      <img src="https://github.com/sung-eun2376015.png" width="80"/><br/>
      <b>곽성은</b><br/>
      BE 
    </td>
    <td align="center">
      <img src="https://github.com/bbandm.png" width="80"/><br/>
      <b>황지은</b><br/>
      BE
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/topograp2.png" width="80"/><br/>
      <b>홍지형</b><br/>
      FE / 배포
    </td>
    <td align="center">
      <img src="https://github.com/laurenjung03.png" width="80"/><br/>
      <b>정채원</b><br/>
      FE
    </td>
    <td align="center">
      <img src="https://github.com/jiyu1103.png" width="80"/><br/>
      <b>김지유</b><br/>
      FE
    </td>
  </tr>
</table>

## 💡 주요 기능
![alt text](<padlet site readme-1.jpg>)


## 🔧사용 기술

<img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=white" />

## 💡How to Build / install

* git으로 프로젝트 클론

```
git clone https://github.com/Ewhaian-WebEngineering/padlet.git
```

* 라이브러리 설치

```
cd front
npm i
cd ../back
npm i
```

* frontend/.env 설정

```
VITE_API_BASE_UR={백엔드 서버 base url}
VITE_PORT=5000
```

* backend/.env 설정

```
PORT=5000
FRONTEND_URL={프론트엔드 배포 주소}
MONGO_URI={mongo db 주소}
KAKAO_REST_API_KEY={카카오 rest api key}
SESSION_SECRET={세션 키}
REDIRECT_URI={카카오 로그인용 redirect uri}
```

* frontend 실행

```
cd front
npm run dev
```

* backend 실행

```
cd back
npm run dev
```
