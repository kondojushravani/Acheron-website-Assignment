$(document).ready(function () {
  // $(window).scroll(function() {
  //     if( $(this).scrollTop() < 90 ) {
  //         $("#logo").attr("src","./images/Logo.fw.png").removeClass("applogo1").addClass("applogo");
  //     } else {
  //         $("#logo").attr("src","./images/Logo.fw3.png").removeClass("applogo").addClass("applogo1")
  //     }
  //   });
  
  var user = sessionStorage.getItem("user");
  // if(user){
  //   $("#applynowbtn").addClass("d-none");
  // }
  //add active class
  $("#icons-container-panel li").click(function () {
    $("#icons-container-panel li").removeClass("active");
    $(this).addClass("active");
  })

  //display selected file name
  $("#myFile").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings("#myFile").addClass("selected").html(fileName);
  });
  // $("#applicationsubmit").on('click',function(){
  //   $('#applicationformModal').modal('hide');
  //   $("#appliedinfo").removeClass("d-none");
  //   $("#applynowbtn").addClass("d-none")
  // })
  $("#mpmpdf").on('click',function(){
    
  })

});