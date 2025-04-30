function login() {
  var userId = document.getElementById('user-id').value;
  var userPassword = document.getElementById('user-password').value;
  var errorMessage = document.getElementById('error-message');

  if (userId === '' || userPassword === '') {
    //password안보이게하기
    errorMessage.style.display = 'block'; 
  } else {
    errorMessage.style.display = 'none'; 
    alert('로그인 성공!');
  }
}
