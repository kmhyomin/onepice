# 2025.03.27. (5일차)

어제 정리 못한거 정리

## 받은 일
>처음 받은 일은 자료 정리였다.
> [swgger](https://qt2-kic.lggalleryplus.com/swagger-ui/index.html?urls.primaryName=DigitalCanvas%20App%20API%20v1.0)에 있는 실행모듈 같은 것과 공유해주신 드라이브 속 자료를 대조하여 옮겨적고, 정리하는 일이였다.

> ### 배운 것
> 1. URL 속 쿼리 읽기
> 예를 들어 `https://qt2-kic.lggalleryplus.com/dc/api/1.0/app/account/checkUserAuthentication?empUserId=KRTEST2&deviceId=DEVICE-00001'` 이런 URL이 있다고 했을 때 <br>
> ? 뒷부분 부터가 쿼리이다. &단위로 끊어 읽으며 이 URL속 쿼리는 empUserId(: KRTEST2), deviceId(: DEVICE-00001)이 있다.
>
> 2. header와 request body의 존재.
> **curl -X 'POST' \
  'https://qt2-kic.lggalleryplus.com/dc/api/1.0/app/account/usePaidToken' \
  -H 'accept: application/json' \
  -H 'x-account-auth-token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCIsInJlZ0RhdGUiOjE3NDMwMzUxMjE5NDV9.eyJleHAiOjE3NDMwMzg3MjEsImFjY291bnRJZCI6IklEXzIwMjUwMDAwMDAwMDAxIiwiZW1wVXNlcklkIjoiS1JURVNUIiwiZGV2aWNlSWQiOiJERVZJQ0UtMDAwMDEiLCJ2ZXJzaW9uSWQiOiJ2MTBfMV8wIiwicHJvZHVjdFBsYXRmb3JtSWQiOiJXRUJPU1RWXzI1X1cyNU8iLCJjb3VudHJ5SWQiOiJLUiIsInRpbWVab25lIjoiQXNpYS9TZW91bCIsInJlZ2lvbiI6IktJQyIsImxhbmd1YWdlIjoia28tS1IifQ.s6EcJZbtMLfi9OWD0xvJCABAb9VaXU55jT9mmLfZprqgHKpUoTDdVEDacc5mGPA1' \
  -H 'Content-Type: application/json' \
  -d '{
  "accountId": "ID_20250000000004"**
}' <br>
>여기 보이는 URL코드 중 H와 D가 보이는가? 앞에 H가 붙은것은 알다시피 header이고, d는 request body이다.
> request body는 swgger에서 값이 입력된 곳이라고 생각하면 된다. (수정가능) 그래서 이 URL에 입력된 값은 accountId": "ID_20250000000004이고, header에 들어가는 값은 accept: application/json과 Content-Type: application/json이다.
> 참고로 이건 따로 입력 된 key다. ->"**x-account-auth-token**"
>
> 3. 만약 전달받은 ***문서***와  ***swgger***(스웨거)가 다르다면 일단 팀장님께 알리고 swgger를 기준으로 작업한다.
>
> 4. 무언가를 지우려 하는 기능를 만들려면 delete Methode를를 써야 하지만 favorite_controller 파일의 /dc/api/1.0/app/favorite/create는 Methode가 POST로 되어있다. <br>
> 이는 특수한 경우지만 T-win에게 하청을 맡긴 LG 쪽에서 디스플레이에서 그건 호환되지 않는다. 라는 걸 알려줘서 부득이하게 POST를 썼다고 한다.
>
># 5. 없는게 아니라 니가 못찾는거다. 특히 입력란이 있다면 부가설명, 회색글씨 빠뜨리지 말고 봐라. path 놓쳤다.
