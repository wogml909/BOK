<template>
   <div id="container">
      <div id="bok_title">
          <ul class="bok_title_txt">
            <li class="bok_main_txt">복대리 상세보기(진행완료)</li>
            <li class="bok_main_txt_button"><button>삭제</button> </li>
            <li class="bok_main_txt_button"> <button>재공고</button></li>
         </ul>
      </div>
        <table>
            <tbody id="bok_content" class="bok_content">
                <tr>
                    <td>일시</td>
                    <td class="text">2022-01-12 13:00</td>
                </tr>
                <tr>
                    <td>사건유형</td>
                    <td class="text">속행</td>
                </tr>
                 <tr>
                    <td>법원</td>
                    <td class="text">강릉</td>
                </tr>
                 <tr>
                    <td>유의사항</td>
                    <td class="text">12</td>
                </tr>
                  <tr>
                    <td>비용</td>
                    <td class="text">12원</td>
                </tr>
                  <tr>
                    <td>등록일</td>
                    <td class="text">2022-01-12 13:00</td>
                </tr>
            </tbody>
        </table>
    <div id="bok_sub_title" class="bok_sub_title">
      <div>
       <h4 class="bok_sub_title_main"> 신청된 내용</h4>
       <ul class="bok_sub_title_txt">
           <li class="bok_sub_title_subtxt">2022.01.12  13:00</li>
           <li class="bok_sub_title_text"><button>승락</button></li>
           <li class="bok_sub_title_text"><button>거절</button></li>
       </ul>
        <p>비용:1,000 추가: 기본1시간 초과시(시간무관) 일괄2원</p>
      </div>
        <div>

       <ul class="bok_sub_title_txt">
           <li class="bok_sub_title_subtxt">2022.01.12  13:00</li>
           <li class="bok_sub_title_text"><button>승락</button></li>
           <li class="bok_sub_title_text"><button>거절</button></li>
       </ul>
        <p>비용:1,000 추가: 기본1시간 초과시(시간무관) 일괄2원</p>
      </div>
        <div>
       <ul class="bok_sub_title_txt">
           <li class="bok_sub_title_subtxt">2022.01.12  13:00</li>
           <li class="bok_sub_title_text"><button>승락</button></li>
           <li class="bok_sub_title_text"><button>거절</button></li>
       </ul>
        <p>비용:1,000 추가: 기본1시간 초과시(시간무관) 일괄2원</p>
      </div>
   </div>
    <button class="bok_botton">복대리신청 마감</button>
    <button class="bok_botton">동료변호사님께 추천</button>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  *{margin:0;padding:0}
  ul li{list-style: none;}
  #bok_title{width:100%;height: 40px;border-bottom:1px solid red}
.bok_title_txt{font-size:15px;width:100%}
.bok_main_txt{float:left;font-size: 15px;width:60%}
.bok_main_txt_button{float: right;width:20%;line-height:auto;font-size: 8px;}
.bok_content{border-bottom:1px solid red}
.bok_sub_title{float:left;width:100%;font-size: 15px;}
.bok_sub_title_main{border-bottom: 1px solid red;}
.bok_sub_title_txt{border-bottom:1px solid #cccccc;}
.bok_sub_title_subtxt{float: left;width:60%;}
.bok_sub_title_text{float:right}
.bok_botton{margin:0 auto;width:90%}



</style>