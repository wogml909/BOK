<template>
  <div id="login_main" class="login_main">
    <h2 class="login_main_title">로그인</h2>
    <div class="login_main_container">
      <div class="login_submain_id_box">
        <p>아이디</p>
        <p class="login_main_txt_id">이메일을 입력해주세요</p>
      </div>
      <div class="login_submain_id_box">
        <p>비밀번호</p>
        <p class="login_main_txt_pass">비밀번호를 입력해주세요</p>
      </div>
    </div>
     <button class="login_main_button">로그인</button>
     <p class="login_main_button_txt">아이디(이메일)찾기 비밀번호찾기</p>
     <p class="login_main_button_subtxt">아직 계정이 없으신가요?회원가입하기</p>
  </div>
</template>

<script>
  export default {}
</script>
<style>
.login_main_title{
    width:100%;
    font-size: 18px;
    border-bottom:1px solid #cccccc;
  }
  .login_main_container{
    width:100%;
    padding-top: 5%;
    padding-bottom: 5%;
    line-height: auto;
    background-color:#f4f4f4;
  }
  .login_submain_id_box{
    margin:0 auto;
    width:90%;
    background-color: white;
  };
  .login_main_txt_id{
    width:100%;
    font-size: 10px;
    line-height: auto;
    color:#aaaaaa;
    background-color: red;
  }
  .login_main_button{
    margin-top:10%;
    width:100%;
    background-color: #093687;
    color:white;
    font-weight: bold;
  }
</style>

