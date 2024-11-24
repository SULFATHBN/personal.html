document.ready( function(){
    $("#submit-form").validate({
        rules:{
            fname:{
                required:true
            },
            messages:{
                fname:"enter name"
                   
                
            }
        }
    })
})