<template>
   <div id="container">
      <div class="cost">
          <ul class="cost_list" bgcolor="#BDBDBD" font color="white">
              <li>누적거래액</li>
              <li class="point_text">450.000.000</li>
              <li>내거래액</li>
              <li class="point_text">50.000.000</li>
              <li>복대리최고가</li>
              <li class="point_text">300.000</li>
              <li>기록등사 최고가</li>
              <li class="point_text">500.000</li>
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
                    <td><b-button variant="outline-primary">상세보기</b-button></td>
                </tr>
                <tr>
                    <td>조사참여</td>
                    <td class="text">
                      법  원 : 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      진행설정 : 종결<br>
                      희망비용 :120,000원</td>
                    <td><b-button variant="outline-primary">상세보기</b-button></td>
                </tr>
                <tr>
                    <td>리서치</td>
                    <td class="text">
                      법  원 : 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      진행설정 : 종결<br>
                      희망비용 :120,000원</td>
                    <td><b-button variant="outline-primary">상세보기</b-button></td>
                </tr>
                <tr>
                    <td>기록등사</td>
                    <td class="text">
                      보  관  처 :: 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      기본비용 : 120,000원<br>
                    <td><b-button variant="outline-primary">상세보기</b-button></td>
                </tr>
                <tr>
                    <td>조사참여</td>
                    <td class="text">
                      법  원 : 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      진행설정 : 종결<br>
                      희망비용 :120,000원</td>
                    <td><b-button variant="outline-primary">상세보기</b-button></td>
                </tr>
                 <tr>
                    <td>기록등사</td>
                    <td class="text">
                      법  원 : 서울동부지방법원<br>
                      일       시 :2021-12-28 13:00<br>
                      진행설정 : 종결<br>
                      희망비용 :120,000원</td>
                    <td><b-button variant="outline-primary">상세보기</b-button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  *{margin:0;padding:0}
  ul li{list-style: none;}
  ul{float:left;width: 100%;margin:0 auto;padding: 0;}
  li{float:left;width:20%;line-height:auto;text-align:left;}
  li:hover{background-color: #093687;color:white}
  table {
    width: 100%;
    border-collapse: collapse;
  }
  td {
    text-align: center;
    border-bottom: 1px solid #444444;
    padding: .7em 0 .7em 0;
    width:33%;font-size:12px;background-color: #ffffff
  }
  .text{text-align: left;}
  .cost{float:left;width:100%; padding: .7em 0 .7em 0;box-sizing: border-box;}
  .cost_list{width:100%;font-size: 0.9em;;text-align:center}
  .cost_list>li{float:left;width:25%;line-height:auto}
  .point_text{color:#f44336;font-weight: bold;}
</style>