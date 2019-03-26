$(document).ready(function(){
    // $(document).on("input",'input,select,textarea',function()
	// {
    //     if($(this).val() == ''){
    //         $(this).after('<p id="space">'+this.name+'cannot be empty</p>');
    //     }
    // });
    $("#name").on("input",function()
	{
        console.log(this)
       if($(this).val() == '' || $(this).val().length<2){
            $(this).css("border","1px solid red");
        }else{
            $(this).css("border","none")
        }
    });
});