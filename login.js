function login() {
  var userId = document.getElementById('user-id').value;
  var userPassword = document.getElementById('user-password').value;
  var errorMessage = document.getElementById('error-message');

  if (userId === '' || userPassword === '') {
    //password안보이게하기기
    errorMessage.style.display = 'block'; // 경고 메시지 표시
  } else {
    errorMessage.style.display = 'none'; // 경고 메시지 숨김
    alert('로그인 성공!');
  }
}
