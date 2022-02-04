<template>
   <div id="nav">
      <div class="contaner">
          <ul class="main_list" bgcolor="#BDBDBD" font color="white">
              <li>전체</li>
              <li>복대리</li>
              <li>기록등사</li>
              <li>조사참여</li>
              <li>구치소 접견</li>
              <li>강제집행</li>
              <li>리서치 의뢰</li>
          </ul>
      </div>
      <div class="cost_contaner">
          <ul class="cost_list" bgcolor="#BDBDBD" font color="white">
              <li>누적거래액</li>
              <li>450.000.000</li>
              <li>내거래액</li>
              <li>50.000.000</li>
              <li>복대리최고가</li>
              <li>300.000</li>
              <li>기록등사 최고가</li>
              <li>500.000</li>
          </ul>
      </div>
        <table>
            <tbody>
                <tr>
                    <td>복대리</td>
                    <td class="text">
                      법  원 : 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      진행설정 : 종결<br>
                      희망비용 :120,000원</td>
                    <td><button>상세보기</button></td>
                </tr>
                <tr>
                    <td>조사참여</td>
                    <td class="text">
                      법  원 : 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      진행설정 : 종결<br>
                      희망비용 :120,000원</td>
                    <td><button>상세보기</button></td>
                </tr>
                <tr>
                    <td>리서치</td>
                    <td class="text">
                      법  원 : 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      진행설정 : 종결<br>
                      희망비용 :120,000원</td>
                    <td><button>상세보기</button></td>
                </tr>
                <tr>
                    <td>기록등사</td>
                    <td class="text">
                      보  관  처 :: 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      기본비용 : 120,000원<br>
                    <td><button>상세보기</button></td>
                </tr>
                <tr>
                    <td>조사참여</td>
                    <td class="text">
                      법  원 : 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      진행설정 : 종결<br>
                      희망비용 :120,000원</td>
                    <td><button>상세보기</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  ul li{list-style: none;}
  ul{float:left;width: 100%;text-align: center;}
  li{float:left;width:20%;line-height:auto}
  li:hover{background-color: #093687;color:white}
  table{width: 100%; text-align: center;}
  tr{border-bottom: 1px solid red;}
  td{width: 30%;font-size:12px;background-color: #ffffff}
  td:hover{background-color: #cccccc;}
  .text{text-align: left;}
  .contaner{width:100%}
  .cost{float:left;width:100%;text-align: center;}
  .cost>li{float:left;max-width:25%;line-height:auto}
  .cost>li:hover{background-color: #093687;color:white}
</style>