$(function(){

    $(function(){ 			
        $(document).ready(function() { 				
            $('#fullpage').fullpage({
                v2compatible:true,				
                //options here 					
                autoScrolling:true, 					
                scrollHorizontally: true, 					
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE', 					
                scrollingSpeed: 700, 					
                autoScrolling:true, 					
                scrollOverflow:true, 					
                navigation: true, 					
                ecordHistory:true, 					
                //responsiveSlides:true, 					
                navigationPosition: 'right',
                //other options here		
                onLeave: function(origin, destination, direction){ 				 
                    if((origin == 1 && direction == 'down')){ 					
                        $('.header').addClass('top');
                        $('.header_hid').addClass('top'); 									 
                    } 
                    
                    else if
                    
                    (
                        (origin == 2 && direction == 'up')){ 					
                            $('.header').removeClass('top');
                            $('.header_hid').removeClass('top'); 									 
                        } 
                        
                        else if 
                        
                        (
                            (origin == 2 && direction == 'down')){ 					 				 
    
                            } 
                            
                            else if 
                            
                            (
                                (origin == 3 && direction == 'up')){ 					 				 
    
                                } 
                                
                                else if 
                                
                                (
                                    (origin == 3 && direction == 'down')){ 					 				 
    
                                    } 			
                                } 		
            }); 			
            //methods 			
            //$.fn.fullpage.setAllowScrolling(false); 
        });
    });

}); 