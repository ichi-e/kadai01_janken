$(".start_btn").on("click", function () {
  var pc = Math.floor(Math.random() * 3);
  var user = null;
  var result = "";
  
  // リセット
  $(".result_text").html("");
  $("#your_box").removeClass("bg_yellow");
  $("#com_box").removeClass("bg_yellow");
  $(".btn").removeClass("not_active");
  $(".count").html("じゃん");
  $(".myImg").attr("src", "");
  $(".comImg").attr("src", "");

  setTimeout(() => $(".count").html("けん"), 1000);
  setTimeout(() => {
    $(".count").html("ぽん!");
    $(".comImg").attr("src", "img/janken_" + pc + ".png");
  }, 2000);
  
  // ボタンを選択した場合の処理
  $(".btn").off("click").on("click", function () {
    user = Number($(this).attr('data-choice'));
    $(".myImg").attr("src", "img/janken_" + user + ".png");
      console.log(user);
      console.log(pc);
    if (user === pc) {
      result = "Draw";
    } else if ((user - pc + 3) % 3 === 2) {
      result = "Win!!";
      $("#your_box").addClass("bg_yellow");
    } else {
      result = "Lose...";
      $("#com_box").addClass("bg_yellow");
    }
    $(".result_text").html(result);
    $(".btn").addClass("not_active");
  });
  
  // ボタンを押すのが遅れた場合の処理
  setTimeout(() => {
    if (user === null) {
      $(".result_text").html("Lose...");
      $(".btn").addClass("not_active");
    }
  }, 2100);
});


//  原型
  // $(document).on("click", ".btn0", function () {
  //   $(".myImg").attr("src","img/janken_0.png");
  //   var num = Math.floor(Math.random() * 3);
  //     $(".comImg").attr("src", "img/janken_" + num + ".png");
  //     if (num === 0){
  //       result = "Draw";
  //     } else if (num === 1) {
  //       result = "Win!!";
  //       $("#your_box").addClass("bg_yellow");
  //     } else if (num === 2) {
  //       result = "Lose";
  //     }
  //   $(".result_text").html(result);
  // });

  // $(document).on("click", ".btn1", function(){
  //   $(".myImg").attr("src","img/janken_1.png");
  //   var num = Math.floor(Math.random() * 3);
  //   $(".comImg").attr("src", "img/janken_" + num + ".png");
  //   if (num === 0){
  //       result = "Lose";
  //   } else if (num === 1){
  //       result = "Draw";
  //   } else if (num === 2){
  //       result = "Win!!";
  //     $("#your_box").addClass("bg_yellow");
  //   }
  // $(".result_text").html(result);
  // });

  // $(document).on("click", ".btn2", function () {
  //   $(".myImg").attr("src","img/janken_2.png");
  //   var num = Math.floor(Math.random() * 3);
  //   $(".comImg").attr("src", "img/janken_" + num + ".png");
  //   if (num === 0){
  //       result = "Win!!";
  //     $("#your_box").addClass("bg_yellow");
  //   } else if (num === 1){
  //       result = "Lose";
  //   } else if (num === 2){
  //       result = "Draw";
  //   }
  // $(".result_text").html(result);
  // });