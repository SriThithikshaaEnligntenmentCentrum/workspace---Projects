function changeBackground(){  
   var d = new Date();
   var hours = d.getHours();
   
   var e = document.getElementById("body");    
   var e1 = document.getElementById("div1");   
   var e2 = document.getElementById("div2");
   var e3 = document.getElementById("div3");
   var e4 = document.getElementById("div4");  
   var emp = document.getElementById("empty");
   
   var e5 = document.getElementById("btnimg1");
   var e6 = document.getElementById("text1");   
   var e7 = document.getElementById("btnimg2");
   var e8 = document.getElementById("text2");   
   var e9 = document.getElementById("btnimg3");
   var e10 = document.getElementById("text3");   
   var e11 = document.getElementById("btnimg4");
   var e12 = document.getElementById("text4");  
   
  //  1. Midnight to early morning - 12 AM to 3.59 AM
  //   Blue Sky with Moon - Bird Flickering
   if(hours>=0 && hours<4){  
		e.style.background = "url('images/night.jpg')";		
		e.style.backgroundRepeat = "no-repeat";
		e.style.backgroundSize = "125%";		
		e2.style.visibility = "hidden";
		e3.style.visibility = "hidden";
		e4.style.visibility = "hidden";
		emp.style.visibility = "hidden";		
		e1.style.position = "fixed";
		e1.style.left = "5%";
		e1.style.top = "20%";
		e1.style.height = "20%";
		e1.style.width = "50%";
		e1.style.color = "white";
		e1.style.fontFamily = "French Script MT";
		e1.style.fontSize = "20pt";
		e1.style.fontWeight = "bold";        
		e5.style.position = "fixed";		
		e5.style.height = "20%";
		e5.style.width = "20%";	
		e5.style.top = "25%";
		e5.style.left = "15%";
		e5.style.background = "url('images/bird11.gif')";
		e5.style.backgroundRepeat = "no-repeat";
    e5.style.backgroundSize = "40%";		
		e6.style.position = "relative";
		e6.style.top = "50%";
		e6.style.left = "-30%";
    e6.style.fontSize = "12pt";
		e6.style.textAlign = "center";
		e6.style.fontFamily = "calibri";
		e6.style.color = "ghostwhite";		
    e5.style.cursor = "pointer";
	}
	
  // 2. Early Morning to Morning - 4 AM to 7.59 AM
  // Yellow Sky with Sun and Violet bird turning its head
	else if(hours>=4 && hours<8){
		e.style.background = "url('images/sunrise.jpg')";
		e.style.backgroundRepeat = "no-repeat";
		e.style.backgroundSize = "120%";		
		e2.style.visibility = "hidden";
		e3.style.visibility = "hidden";
		e4.style.visibility = "hidden";
		emp.style.visibility = "hidden";		
		e1.style.position = "fixed";
		e1.style.left = "10%";
		e1.style.top = "10%";
		e1.style.height = "20%";
		e1.style.width = "50%";
		e1.style.color = "white";
		e1.style.fontFamily = "French Script MT";
		e1.style.fontSize = "25pt";
		e1.style.fontWeight = "bold";	        
		e5.style.position = "fixed";		
		e5.style.height = "20%";
		e5.style.width = "20%";	
		e5.style.top = "16%";
		e5.style.left = "30%";
		e5.style.background = "url('images/sparrow.gif')";
		e5.style.backgroundRepeat = "no-repeat";
    e5.style.backgroundSize = "40%";       
		e6.style.position = "relative";
		e6.style.top = "40%";
		e6.style.left = "-28%";
    e6.style.fontSize = "12pt";
		e6.style.textAlign = "center";
		e6.style.fontFamily = "calibri";
		e6.style.color = "ghostwhite";	
    e5.style.cursor = "pointer";	
	}
	
  //  3. Morning to till Noon - 8 AM to 11.59 AM
  //  Sun penetrating through green trees and bee flickering
	else if(hours>=8 && hours<12){
		e.style.background = "url('images/morn.jpg')";
		e.style.backgroundRepeat = "no-repeat";
		e.style.backgroundSize = "110%";		
		e2.style.visibility = "hidden";
		e3.style.visibility = "hidden";
		e4.style.visibility = "hidden";
		emp.style.visibility = "hidden";		
		e1.style.position = "fixed";
		e1.style.left = "5%";
		e1.style.top = "80%";
		e1.style.height = "20%";
		e1.style.width = "50%";
		e1.style.color = "white";
		e1.style.fontFamily = "French Script MT";
		e1.style.fontSize = "25pt";
		e1.style.fontWeight = "bold";           
		e5.style.position = "fixed";		
		e5.style.height = "20%";
		e5.style.width = "20%";	
		e5.style.top = "85%";
		e5.style.left = "20%";
		e5.style.background = "url('images/bee.gif')";
		e5.style.backgroundRepeat = "no-repeat";
    e5.style.backgroundSize = "40%";		
		e6.style.position = "relative";
		e6.style.top = "40%";
		e6.style.left = "-28%";
    e6.style.fontSize = "12pt";
		e6.style.textAlign = "center";
		e6.style.fontFamily = "chiller";
		e6.style.color = "ghostwhite";	
    e5.style.cursor = "pointer";	
	}

   //  4. Noon to Evening - 12 PM to 03.59 PM
   //   Green Grass with Red butterfly flickering
	else if(hours>=12 && hours<16){
		e.style.background = "url('images/noon.jpg')";
		e.style.backgroundRepeat = "no-repeat";
		e.style.backgroundSize = "110%";		
		e1.style.visibility = "hidden";
		e3.style.visibility = "hidden";	
    e4.style.visibility = "hidden";	
		emp.style.visibility = "hidden";		
		e2.style.position = "fixed";
		e2.style.left = "50%";
		e2.style.top = "15%";
		e2.style.height = "20%";
		e2.style.width = "50%";
		e2.style.color = "ghostwhite";
		e2.style.fontFamily = "French Script MT";
		e2.style.fontSize = "25pt";
		e2.style.fontWeight = "bold";		
		e7.style.position = "fixed";		
		e7.style.height = "20%";
		e7.style.width = "30%";	
		e7.style.top = "23%";
		e7.style.left = "70%";
		e7.style.background = "url('images/butterfly.gif')";
		e7.style.backgroundRepeat = "no-repeat";
    e7.style.backgroundSize = "35%";		
		e8.style.position = "relative";
		e8.style.top = "50%";
		e8.style.left = "-30%";
    e8.style.fontSize = "10pt";
		e8.style.textAlign = "center";
		e8.style.fontFamily = "arial";	
    e7.style.cursor = "pointer";	
	}
	
  //  5. Evening to Night - 4 PM to 06.59 PM
  //  Sun Set on Mountains with White bird waving its feathers
	else if(hours>=16 && hours<19){	    
		e.style.background = "url('images/evening.jpg')";
		e.style.backgroundRepeat = "no-repeat";
		e.style.backgroundSize = "125%";		
		e1.style.visibility = "hidden";
		e2.style.visibility = "hidden";	
		e4.style.visibility = "hidden";
		emp.style.visibility = "hidden";		
		e3.style.position = "fixed";
		e3.style.left = "50%";
		e3.style.top = "15%";
		e3.style.height = "20%";
		e3.style.width = "50%";
		e3.style.color = "ghostwhite";
		e3.style.fontFamily = "French Script MT";
		e3.style.fontSize = "25pt";
		e3.style.fontWeight = "bold";	   
		e9.style.position = "fixed";	
		e9.style.height = "20%";
		e9.style.width = "30%";	
		e9.style.top = "23%";
		e9.style.left = "65%";
		e9.style.background = "url('images/bird7.gif')";
		e9.style.backgroundRepeat = "no-repeat";
    e9.style.backgroundSize = "35%";		
		e10.style.position = "relative";
		e10.style.top = "40%";
		e10.style.left = "-30%";
    e10.style.fontSize = "9pt";
		e10.style.textAlign = "center";
		e10.style.fontFamily = "algerian";
    e9.style.cursor = "pointer";		
	}
		
	//  6. Night to Midnight - 7 PM to 11.59 PM
  //  Dark night with White bird flickering
	else if(hours>=19 && hours<24){	
		e.style.background = "url('images/moon.jpg')";
		e.style.backgroundRepeat = "no-repeat";
		e.style.backgroundSize = "110%";		
		e1.style.visibility = "hidden";
		e2.style.visibility = "hidden";	
		e3.style.visibility = "hidden";
		emp.style.visibility = "hidden";		
		e4.style.position = "fixed";
		e4.style.left = "55%";
		e4.style.top = "15%";
		e4.style.height = "20%";
		e4.style.width = "50%";
		e4.style.color = "ghostwhite";
		e4.style.fontFamily = "French Script MT";
		e4.style.fontSize = "25pt";
		e4.style.fontWeight = "bold";	
		e11.style.position = "fixed";		
		e11.style.height = "20%";
		e11.style.width = "30%";	
		e11.style.top = "20%";
		e11.style.left = "60%";
		e11.style.background = "url('images/bird4.gif')";
		e11.style.backgroundRepeat = "no-repeat";
		e11.style.backgroundSize = "35%";		
		e12.style.position = "relative";
		e12.style.top = "40%";
		e12.style.left = "-15%";
		e12.style.fontSize = "13pt";
		e12.style.textAlign = "center";
		e12.style.fontFamily = "arial narrow";
		e12.style.color = "ghostwhite";	
    e11.style.cursor = "pointer";	
	}	
}

function changePage(){
   var e = document.getElementById("empty");
   
   if(e.style.visibility == "hidden")
	e.style.visibility = "visible";
   
   e.style.position = "fixed";
   e.style.top = "-0%";
   e.style.left = "-0%";
   e.style.height = "100%";
   e.style.width = "100%";   
   e.style.background = "url('images/balloons.jpg') no-repeat";
   e.style.backgroundSize = "cover";
}
