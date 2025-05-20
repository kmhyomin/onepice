- www => 브라우저에 들어갔을때 (이게 붙어있으면 오픈 소스)
- 라이센스 => 복붙

# git 설치
제일 먼저 해야하는 기초
>- cunpig (컨피그) : 설정창 같은 것. 
>- 터미널에  git config --list 치고 user.name 회사 이메일 앞자리 숫자 허용(kmh83029) 치고 엔터
>- 터미널에  git config --list 치고 user.emil 이건 이메일 치고 엔터
>- git config --global --list

--의 의미는 option의 이름

# 깃 클론 만드는 법
## 클론 형식
>1. 통 째로 다운로드 받기
>2. http 이용 (인터넷 연결이랑 패스 키가 같으면 됨)
>3. ssh 이용 (깃 랩의 인증키랑 내 인증키랑 같아야지 터미널에서 연결 가능 => 안전띠)


## 클론하는 방법
1. **ZIP 파일 다운로드**
   - GitLab 리포지토리 페이지에서 `Download` 버튼 클릭해 압축 파일로 받기
   - 단, 이 방식은 Git 히스토리(커밋 이력)를 포함하지 않음

2. **HTTP(S) 방식** 
   - `git clone http://...` 명령어 사용
   - 인증을 위해 사용자 계정의 **Access Token**이 필요함 (비밀번호 대신 사용됨)

3. **SSH 방식**
   - `git@...` 형식의 주소로 클론
   - SSH 키 설정 필요 (보안성과 편의성 ↑)


## **HTTP(S) 방식**으로 클론
### 1. 파일 만들기
  >- 원하는 곳에 만들면 된다.
  >- 파일 경로는 복사해두기 (설치할 곳에 파일 만들기 -> 빈 파일 들어가기 -> 위에 있는 **경로 복사 해서 메모장에 복붙**해두기)
### 2. git의 사용자 정보 설정 확인
  >- git config --list 엔터
  >- 밑으로 스크롤하며 user.name과 user.email이 있는지 확인
  >- **없다면** <br>
  **git config --global user.name 이름**<br>
  **git config --global user.email "이메일 .com까지 확실히 적기"**<br>
  **--** 의 의미는 option의 이름 <br>
  **--global**은 Git 설정을 모든 프로젝트에 적용하려는 경우 사용하는 옵션이다. 한 번 설정하면 컴퓨터 전체에서 동일한 설정을 사용하게 된다.
  >- git config --global --list 엔터해서 잘 기입 됐는지 확인
### 3. 저장소 클론을 위한 디렉토리 이동 및 클론 *(내 컴퓨터에 프로젝트 파일 가져오기)*
  >- cd 1-1에서 복붙한 파일 경고 붙여넣기 **ex : (cd C:\samliHighSchool)**
  >- 경로로 재대로 들어가 졌다면 **git clone (클론하고 싶은 git의 http 링크)** 엔터
  >- HTTP 주소를 사용했기 때문에 *사용자명과 비밀번호 입력 필요*
  >- **Username for** 이 뜨면 사용자 명은 아까 입력한 것 그대로 기입
  >- **Password for** 이 뜨면 비밀번호는 본인의 git 비밀번호(쳐도 보안 때문에 출력되어 나오진 않음)
### 4. git 상태 확인
  >- cd (클론한 파일명) **ex : (cd react_movie_web)**
  >- **git status**(이건 스테이터스 라고  읽는 것이다.) 엔터
  - On branch main<br>Your branch is up to date with 'origin/main'.<br><br>nothing to commit, working tree clean <br> 이 문구가 나왔다면 잘 된 것.
  >-  추가 질문 사항 => [chat GPT](https://chatgpt.com/)

### 5. 최종확인
>- vsCode로 파일 열기
>- 터미널 열어서 npm start 엔터
>- 안되면 npm install


## 추가 정리본
git statu 후
git add 할 때 

.은 내 현재 폴더에 접근 후 전부 업데이트 혹은 수정 저장 완료
./ 후 경로를 올리면 ㄱ

git commit -m "" :메세지 입력
git log는 커밋의 히스토리를 보는 것

빨간 색이 원격 브렌치
git push를 하면 변경사항 모든게 랩에 올라감.
안전을 위해 git push origin/mian

git pull 원격 브랜치와 내 pc의 작업 환경을 최신화 시키는 것.

## 작업 종료후 저장하는 법. (git bash기준)
띄어쓰기 욘니 중요하다는거임;
>### git add (저장)
>1. git add . : .(점)의 의미 => 모두
>2. git add ./ : /(슬래시) 뒤에 저장하고픈 폴더의 경로를 작성.

>### git commit (부가설명 추가)
>1. git commit -m "" : 내가 이런걸 했다. 는 메세지를 붙이는 것. 간결하고 의도가 명확히 드러나야함.
> ex1. index.js파일의 오류를 수정했다 => git commit -m "fix: index.js"
> ex2. index.js파일에 기능을 추가했다 => git commit -m "add: index.js"
커밋은 하나하나 id를 갖고 있음
### git push
>1. 일반적인 명령어 : git push
>2. 안전을 위한 명령어 (권장) : git push origin khm83029


하면 안되는거
  강제 삭제: 전의 커밋 id를 덮어 씌우는 것.
  git reset 전에 있던 걸 강제로 밀어 씌우는것
  소프트 : 강제로 밀되 변경점을 그대로 가지면서 푸쉬 하지 직전의 상황으로 돌림
  하드 : 죽어.
  ~1은 git log의 하나 뒤로 가는 것
  문제가 생기면 위에 쌓아라. ㅇㅈㄹ로 하면 내 뒤에 올린 코드들도 삭 다 날라감

**커밋 id가 다르면 push를 햇을때 올라가지 않음**


# 잘못 했을 때 원복하는 방법
git revert (돌리다, 부활시키다, 복귀 시키다.) 커밋 하나를 취소함
그래서 git revert 뒤에 복귀할 커밋의 id(최소한 7자리 이상) 을 적으면 됨

## 아무것도 안 적히고 커서만 깜빡일 때
:w 저장
:q 저장 후 종료

i를 누르면 인서트 상태가 됨

거기서 커밀 앞에 아무거나 : 를 쓴 뒤 :W :q를 누른 뒤 log를 쓰고 재대로 덮어 씌워졌는지 확인



### git bash 복붙
복 : shift + ctrl+ insert <br>
붙 : shift + insert


## git 옮기는 법
> git switch {바꾸고 싶은 브랜치 이름} : 오직 브랜치를 바꾸기 위한 명령어.(v 2.13보다 커야 작동됨)<br>
> git checkout {옮길 파일 이름} : branch 바꾸는 명령어임 <br>
> git branch 삭제 : git branch -d {id} (뭔가 위험해보이니까 하지 말자.)<br>
