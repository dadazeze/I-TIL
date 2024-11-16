# 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [배포 사이트 주소](#배포-사이트-주소)
3. [기술 스택](#기술-스택)
4. [폴더 구조](#폴더-구조)
5. [데모 영상](#데모-영상)
6. [상세 기능](#상세-기능)
7. [개발 과정](#개발-과정)
8. [트러블 슈팅](#트러블-슈팅)
9. [개선 예정 사항](#개선-예정-사항)
10. [회고록](#회고록)

<br>

# 프로젝트 개요
- iTIL - 개발자들의 TIL(Today I Learned) SNS 플랫폼
- 개발자들이 분야와 년차에 맞게 TIL을 올리며 공유하는 SNS 플랫폼
- 프론트엔드 개발자 2인이서 팀 프로젝트로 진행
    - 김다빈
        - 마이페이지, PostModal 구현
        - 기획 및 디자인 (Figma)
    - 황성재
        - 피드페이지, PostDetail 구현
        - 백엔드 설계 (Supabase)
- 개발 소요기간 2달

<br>

# 프로젝트의 실행 방법

> npm install<br>npm run dev

<br>

# 배포 사이트 주소



<br>

# 기술 스택

<div align=left>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/shadcn-000000?style=for-the-badge&logo=shadcnui&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/zustand-3B66BC?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>

<br>

# 폴더 구조
```bash
📦src
 ┣ 📂app
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂(pages)
 ┃ ┃ ┃ ┣ 📂sign-in
 ┃ ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂sign-up
 ┃ ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜error.tsx
 ┃ ┃ ┣ 📂callback
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📂confirm
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂post
 ┃ ┃ ┗ 📂[postId]
 ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┃ ┣ 📜not-found.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂assets
 ┃ ┣ 📜github@2x.svg
 ┃ ┗ 📜radix-icon.tsx
 ┣ 📂shared
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📂bar
 ┃ ┃ ┃ ┃ ┣ 📜AppBarUI.tsx
 ┃ ┃ ┃ ┃ ┣ 📜BottomNavBarUI.tsx
 ┃ ┃ ┃ ┃ ┣ 📜DmAppBarUI.tsx
 ┃ ┃ ┃ ┃ ┗ 📜MainAppBarUI.tsx
 ┃ ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┃ ┣ 📜AvatarProfileUI.tsx
 ┃ ┃ ┃ ┃ ┗ 📜AvatarUI.tsx
 ┃ ┃ ┃ ┣ 📂dialog
 ┃ ┃ ┃ ┃ ┗ 📜ModalUI.tsx
 ┃ ┃ ┃ ┣ 📂dropdown
 ┃ ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┃ ┣ 📜FormUI.tsx
 ┃ ┃ ┃ ┃ ┗ 📜SelectUI.tsx
 ┃ ┃ ┃ ┗ 📂loading
 ┃ ┃ ┃ ┃ ┣ 📜AvatarSkeletonUI.tsx
 ┃ ┃ ┃ ┃ ┣ 📜CardSkeletonUI.tsx
 ┃ ┃ ┃ ┃ ┗ 📜LoadingSpinnerUI.tsx
 ┃ ┃ ┗ 📂ui
 ┃ ┃ ┃ ┣ 📜accordion.tsx
 ┃ ┃ ┃ ┣ 📜avatar.tsx
 ┃ ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┃ ┣ 📜dialog.tsx
 ┃ ┃ ┃ ┣ 📜drawer.tsx
 ┃ ┃ ┃ ┣ 📜dropdown-menu.tsx
 ┃ ┃ ┃ ┣ 📜form.tsx
 ┃ ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┃ ┣ 📜Label.tsx
 ┃ ┃ ┃ ┣ 📜menubar.tsx
 ┃ ┃ ┃ ┣ 📜select.tsx
 ┃ ┃ ┃ ┣ 📜skeleton.tsx
 ┃ ┃ ┃ ┗ 📜typography.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📂modal
 ┃ ┃ ┃ ┣ 📜useAlertModal.tsx
 ┃ ┃ ┃ ┗ 📜usePostModal.tsx
 ┃ ┣ 📂lib
 ┃ ┃ ┣ 📂style
 ┃ ┃ ┃ ┗ 📜utils.ts
 ┃ ┃ ┣ 📂supabase
 ┃ ┃ ┃ ┣ 📜client.ts
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜middleware.ts
 ┃ ┃ ┃ ┗ 📜server.ts
 ┃ ┃ ┣ 📜constants.ts
 ┃ ┃ ┗ 📜utils.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜comment.ts
 ┃ ┃ ┣ 📜commentClien.ts
 ┃ ┃ ┣ 📜post.ts
 ┃ ┃ ┗ 📜profiles.ts
 ┃ ┗ 📂types
 ┃ ┃ ┣ 📜domain.ts
 ┃ ┃ ┣ 📜enum.ts
 ┃ ┃ ┗ 📜index.ts
 ┗ 📂widgets
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜AuthAppBarUI.tsx
 ┃ ┃ ┃ ┣ 📜SignInForm.tsx
 ┃ ┃ ┃ ┣ 📜SignUpFomContent.tsx
 ┃ ┃ ┃ ┗ 📜SignUpForm.tsx
 ┃ ┃ ┣ 📂lib
 ┃ ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┃ ┗ 📜utils.ts
 ┃ ┃ ┗ 📂types
 ┃ ┃ ┃ ┗ 📜parameter.ts
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜CardDescriptionUI.tsx
 ┃ ┃ ┃ ┣ 📜CardDetailUI.tsx
 ┃ ┃ ┃ ┣ 📜CardUI.tsx
 ┃ ┃ ┃ ┗ 📜PostList.tsx
 ┃ ┃ ┗ 📂types
 ┃ ┃ ┃ ┗ 📜view.ts
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Filter.tsx
 ┃ ┃ ┃ ┣ 📜MainBottomNavBarUI.tsx
 ┃ ┃ ┃ ┣ 📜MainBottomNavBarWrapper.tsx
 ┃ ┃ ┃ ┣ 📜PostAppBartUI.tsx
 ┃ ┃ ┃ ┣ 📜PostModalUI.tsx
 ┃ ┃ ┃ ┗ 📜TextEditor.tsx
 ┃ ┃ ┣ 📂lib
 ┃ ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┃ ┗ 📜utils.ts
 ┃ ┃ ┗ 📂types
 ┃ ┃ ┃ ┣ 📜parameter.ts
 ┃ ┃ ┃ ┗ 📜view.ts
 ┃ ┣ 📂mypage
 ┃ ┃ ┗ 📂components
 ┃ ┃ ┃ ┣ 📜Feed.tsx
 ┃ ┃ ┃ ┣ 📜MyPageAppBar.tsx
 ┃ ┃ ┃ ┣ 📜MyPageCard.tsx
 ┃ ┃ ┃ ┗ 📜Profile.tsx
 ┃ ┗ 📂post
 ┃ ┃ ┣ 📂actions
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜CommentBottomBarUI.tsx
 ┃ ┃ ┃ ┣ 📜CommentBottomBarWrapper.tsx
 ┃ ┃ ┃ ┣ 📜CommentDropdownUI.tsx
 ┃ ┃ ┃ ┣ 📜CommentUI.tsx
 ┃ ┃ ┃ ┣ 📜CommentWrapper.tsx
 ┃ ┃ ┃ ┣ 📜PostAppBar.tsx
 ┃ ┃ ┃ ┣ 📜PostAppBarWrapper.tsx
 ┃ ┃ ┃ ┣ 📜PostSkeletonUI.tsx
 ┃ ┃ ┃ ┗ 📜SubComment.tsx
 ┃ ┃ ┗ 📂types
 ┃ ┃ ┃ ┗ 📜parameter.ts
```
<br>

# 데모 영상

![]()
![]()

<br>

# 상세 기능
- 메인페이지에서 사용자들이 포스트한 피드 확인 가능
    - 드롭다운 UI로 분야 및 경력으로 필터 가능
    - 포스트 카드 클릭하여 상세 페이지로 이동 가능
    - 좋아요 및 북마크 기능 (추가예정)
    - 무한 스크롤로 스크롤 가능 (추가예정)
- 하단 Navbar로 포스트 생성 가능
    - 팝업 된 모달로 포스트 생성 가능
    - 임시저장 가능 (추가예정)
- 포스트 상세 페이지에서 상세 글 확인 및 댓글 작성 가능
    - 댓글 생성 및 삭제 가능
    - 댓글 수정 가능 (추가예정)
    - 포스트 수정 및 삭제 가능 (추가예정)
- 마이페이지에서 계정 정보 및 월별 TIL 잔디 확인 가능
    - 특정 TIL 클릭시 해당 포스트 상세 페이지로 이동
    - 무한 스크롤로 스크롤 가능 (추가예정)
- 채팅 페이지에서 1:1 채팅 가능 (추가예정)

<br>

# 기획 및 디자인
![](https://github.com/user-attachments/assets/bbe68102-5b13-45cb-b150-3c0b0283b412) 
![](https://github.com/user-attachments/assets/3626cd05-0574-49c1-835c-0d14abf8adaf)

# 협업 툴

- Notion을 사용하여 협업 진행
![](https://github.com/user-attachments/assets/ef560a5c-b8df-40c7-a4b9-d71841df6d5c)

# 개발 과정

**💡 기술 스택 선정 과정**

- SEO 및 성능을 고려하여 Next로 제작
- 간결함, 성능, 재사용성, 컨트롤 향상을 위하여 tailwind 기반의 shadcn을 사용
- 최초 로딩 속도 향상과 점진적 렌더링을 위하여 SSR과 Server action 사용
- 안정성, 가독성 및 성능 향상의 목적으로 TypeScript 적용
- 생산성 증가를 위해 react-hook-form, supabase, react-quill 등 라이브러리 사용
- 경제적인 이유로 인해 무료 배포 서비스인 Vercel 이용

<br>

# 트러블 슈팅

**💡 서버 액션 사용 여부 고민**

- Server action과 React-Hook-Form의 결합을 위한 공통 컴포넌트 설계시 타입 관련 문제
    - useFormState와 연결시 Boiler Plate 코드 발생
    - 점진적 렌더링을 위해 도입하였으나 서버 액션의 경우 사용시 적합성 고려 필요

**💡 구조 및 패턴 관련 고민**

- FSD 폴더 구조를 커스텀하여 사용하여 폴더 구조 설계
    - FSD layout의 app과 pages 부분을 합쳐 Next의 app으로 통일
    - entities, features, widgets를 widgets 하나로 통일
    - 공통적으로 사용할 수 있는 Widget들인 common을 만들었으나 shared로 이전 고민
        - common의 코드를 다른 레벨의 widget들이 사용하므로 slice 원칙 위배
- Compound Component Pattern을 이용하여 컴포넌트 재사용성과 유연성 증가
    - 일부 Boiler Plate 코드 발생하여 사용시 적합성 고려 필요

<br>

# Github commit convention

* Feat : implement new features
* Init : set initial state or change style (esLint, formatter, ...etc)
* Fix : fix bugs or change feature
* Style: adjust markup and css
* Refactor : code refactoring
* Docs : add or modify documentations
* Chore : minor fixes that doesn't include above

<br>

# 개선 예정 사항

**💡 폴더 구조 수정**

- FSD 커스텀 방식으로 폴더 구조를 형성 했으나 Widget 부분에서 Slice 원칙 위배
- 공통적으로 적용될 수 있는 Widget을 위해 위배하였으나 구조를 다시 수정할 예정

**💡 추가 페이지 및 기능**

- Post, Comment 수정 기능 구현
- 피드 페이지 무한 스크롤 및 가상화 구현
- 채팅 기능 구현
- 좋아요 북마크 기능 구현

**💡 성능 개선**

- 메모이제이션 적용 여부 검토

<br>

# 회고록

- [링크]()