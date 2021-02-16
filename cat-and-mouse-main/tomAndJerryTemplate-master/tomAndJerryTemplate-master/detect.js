function detect(sprite1,sprite2){
    if(sprite1.x-sprite2.x<=sprite1.width/2+sprite2.width/2)
      {
  
        return true;
        
  
       }
       else{
         return false;
       }
  }