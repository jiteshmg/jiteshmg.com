$(document).ready(
function()
{   
   var name=$("#ContactForm #cname");
   var email=$("#ContactForm #cemail");
   var subject=$("#ContactForm #csubject");
   var msg=$("#ContactForm #cmsg");
   var form=$("#ContactForm");
   
//   name.blur(function(){validatename(name)});
//   email.blur(function(){validateEmail(email)});
//   subject.blur(function(){validatesubject(subject)});
//   msg.blur(function(){validatedis(msg)});
   
   name.focus(function(){
       if(name.val()=="Name can't be empty" || name.val()=="Name can't be a Number" || name.val()=="Length must be atleast 3 letters")
           {
              name.val(""); 
           }
       });
    email.focus(function(){email.val("")});
    
    subject.focus(function(){
        if( subject.val()=="Subject can't be empty" || subject.val()=="Subject can't be Number" || subject.val()=="subject length must be 5 atleast")
            {
                subject.val("");
            }
    });
    msg.focus(function(){
        if( msg.val()=="please type in a Message" || msg.val()=="please type in a Message")
            {
                msg.val("");
            }
    });
           
    
   
 form.submit(function(){
     if(validatename(name) & validateEmail(email) & validatesubject(subject) & validatedis(msg))
         {
             var datastring="fullname=" + name.val() + "&email="+email.val() + "&subject="+subject.val()+ "&message="+msg.val() ;
             $.ajax({type:"POST",url:"send.php",data:datastring,success:function(result){
                                 // Loading icon
          $('.loading').fadeOut('slow');  


          //hide the error message
          $('.error-message').fadeOut('slow');

          //show the success message
          $('.success-message').slideDown('slow');
                      
          // Disable send button
          $('#send').attr('disabled',true);
                        }  
             });
             
            return false; 
         }
         else
             {
              $('.loading').fadeOut('slow')
              //hide the success message
          $('.success-message').fadeOut('slow');
          //show the error message
          $('.error-message').slideDown('slow');
                 return false;
             }
     
 });
 
 
 
});

 //all functions
    function validatesubject(x)
    {
        var a=x;
            
          // var a=  $(this).val();
           if(a.val()=="" || a.val()=="Subject can't be empty" || a.val()=="Subject can't be Number" || a.val()=="subject length must be 5 atleast")
               {
                    a.css({"color":"red","border":"1px solid red"});
                   a.val("Subject can't be empty");
                   
                   return false;
               }
           else if(!isNaN(a.val()))
            {
                 a.css({"color":"red","border":"1px solid red"});
                   a.val("Subject can't be Number");
                return false;
            }
            
        else if((a.val()).length<5)
            {
              a.css({"color":"red","border":"1px solid red"});
                   a.val("subject length must be 5 atleast");
               return false;
            }
        
        else
            {
                 a.css({"color":"#333333","border":"1px solid white"});
                  
                   return true;
            }    
          
       
    }
    
    
    function validatename(x)
    {
        var a=x;
           
          
           if(a.val()=="" || a.val()=="Name can't be empty" || a.val()=="Name can't be a Number" || a.val()=="Length must be atleast 3 letters")
               {
                  a.css({"color":"red","border":"1px solid red"});
                   a.val("Name can't be empty");
                  //alert("hi");
                   return false;
               }
           else if(!isNaN(a.val()))
            {
              a.css({"color":"red !important","border":"1px solid red"});
               a.val("Name can't be a Number");
                return false;
            }
            
        else if((a.val()).length<3)
            {
             a.css({"color":"red !important","border":"1px solid red"});
               a.val("Length must be atleast 3 letters");
               return false;
            }
        
        else
            {
               a.css({"color":"#333333","border":"1px solid white"});
              
                return true;
            }    
          
       
    }
    
     
    
    
    function validateEmail(x)
    {
        var a=x;
            
             //   var a = $(this).val();
		var filter = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
		//if it's valid email
                if(a.val()=="")
                    {
                        a.css({"color":"red","border":"1px solid red"});
                    a.val("Email can't be empty");
                      return false;
                    }
		else{
                    if(filter.test(a.val())){
			   a.css({"color":"#333333","border":"1px solid white"});
                            
			return true;
                            }
		//if it's NOT valid
		else{
		  a.css({"color":"red","border":"1px solid red"});
                   a.val("Invalid Email");
			return false;
                    } 
                 }           
    }
    
    
    
   
    
    
    function validatedis(x)
    {
        var a=x;
            
        //var a=$(this).val();
        
         if((a.val()).length==0 || a.val()=="please type in a Message" || a.val()=="messege shold have 10 characters aleast")
               {
                    a.css({"color":"red","border":"1px solid red"});
                   a.val("please type in a Message");
                   return false;
                   
               }
          
            
        else if((a.val()).length<10)
            {
                a.css({"color":"red","border":"1px solid red"});
                   a.val("messege shold have 10 characters aleast");
               return false;
            }
        
        else
            {
                 a.css({"color":"#333333","border":"1px solid white"});
                   
                return true;
            }    
          
    }
    
    
    
    
    
    
  