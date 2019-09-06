
function fill(data){
   
	$.each(data, function(i, obj) {
	   updateDom(obj);
    });

}

function fillLatest(data){
   
    var allLatest='<p style="opacity:0.6;background-color:red;color:white" class="well">Trending Posts</p>';
	$.each(data, function(i, obj) {
	     var latest=templateLatest.replace(/x-title/g,obj.title);
		 allLatest+=latest.replace(/x-date/g,obj.date);
	     
    });
	document.getElementById('latest').innerHTML=allLatest;

}

function fillUsers(data){
 
           var part1='<div id="myusers" class="flex-container">';
	       var part2=' </div>';	
		   var allUsers='';
		   var users=[];
		   
		   
		   
		 
		 
		   
var cnt=0; 
 var userRows='';
var pair=[]; 
	$.each(data, function(i, obj) {
		 pair.push(obj);
		 if (pair.length==2){
		
	      userRows=userRows+
			 '<div class="userRow">'+
			   '<div class="userItem" style="background-image: url(\'img/'+pair[0].picture+'\')">'+
				'<p class="blogtitle1" >'+obj.name+'</p>'+ 
			    '<p class="blogtitle2" >'+obj.title+'</p>'+ 
				'</div>'+
			 
			   '<div class="userItem" style="background-image: url(\'img/'+pair[1].picture+'\')">'+
				'<p class="blogtitle1" >'+obj.name+'</p>'+ 
			    '<p class="blogtitle2" >'+obj.title+'</p>'+ 
				'</div>'+
			 '</div>';  
			 pair=[];
		 }
		 else if (pair.length==1 && i==data.length-1){
			 userRows=userRows+
			 '<div class="userRow">'+
			   '<div class="userItem" style="background-image: url(\'img/'+pair[0].picture+'\')">'+
				'<p class="blogtitle1" >'+obj.name+'</p>'+ 
			    '<p class="blogtitle2" >'+obj.title+'</p>'+ 
				'</div>'+
			 '</div>'; 
		 }
			 
		 document.getElementById('mycenter').innerHTML=userRows;
		 	 
		   alert(obj.name);
		     alert(obj.title);
			 
			    alert(obj.picture);
			 
			 
		   cnt++;
		  
		
          	 
         });
	
       

}

function fillCat(data){
  	
		var json=[];
		
		$.each(data, function(i, obj) {
	       var item={};
           item.id='link-'+obj.id;	
           item.name=obj.name;		   
		    json.push(item);
           			
         });
		
		 var t = {'<>':'p','id':'${id}','html':'<a href="#">${name}</a>'};
         var d = data;
		
         document.getElementById('myside').innerHTML=json2html.transform(d,t) ; 
		
	   
	

}

function fillOne(data){
   updateDom(data);
   updateEdit(data);
}

function doPayLoad(){


 const characterInfo = {
	id:         $('#newid').val(),
    name:       $('#newname').val(),
    occupation: $('#newoccupation').val(),
    weapon:     $('#newweapon').val(),
	cartoon:    $('#newcartoon').prop("checked")
  };

 return characterInfo;

}

function doPayLoadEdit(){


 const characterInfo = {
	id:         $('#editid').val(),
    name:       $('#editname').val(),
    occupation: $('#editoccupation').val(),
    weapon:     $('#editweapon').val(),
	cartoon:    $('#editcartoon').prop("checked")
  };

  
 return characterInfo;

}


function updateDom(data){
	let myclass='.myitem-'+data.id+' div';
	$(myclass).each(function(){
     	  if ($(this).attr('class')==='id')         $(this).text('id:           '+data.id);
		  if ($(this).attr('class')==='name')       $(this).text('name:         '+data.name);
		  if ($(this).attr('class')==='occupation') $(this).text('occupation:   '+data.occupation);
		  if ($(this).attr('class')==='weapon')     $(this).text('weapon:       '+data.weapon);
		  if ($(this).attr('class')==='cartoon')    $(this).text('cartoon:       '+data.cartoon);
  });
  
}

function updateEdit(data){
	let myclass='.myedit input';
	
	$(myclass).each(function(){
     	  if ($(this).attr('class')==='id')         $(this).val(data.id);
		  if ($(this).attr('class')==='name')       $(this).val(data.name);
		  if ($(this).attr('class')==='occupation') $(this).val(data.occupation);
		  if ($(this).attr('class')==='weapon')     $(this).val(data.weapon);
		  if ($(this).attr('class')==='cartoon')    $(this).val(data.cartoon);
  });
  
}


$(document).ready( () => {
	
	
	
  let api=new APIHandler('http://localhost:8000/');	
  api.getCat();
  api.getUsers();
  api.getLatest();
  
  
  $('#fetch-all').click(function(){
  api.getFullList();
	  

 });
  
  $('#fetch-one').click(function(){
     api.getOneRegister($('#character-id').val());
	 
  });
  
  $('#delete-one').click(function(){
     
    api.deleteOneRegister($('#character-id-delete').val());
	
  });
  
  
  $('a').click( function(e) {e.preventDefault(); 
   $('#newblog').click();
  return false; } );
  
  
  /*
  document.getElementById('edit-character-form').onsubmit = function(){
	   let data=doPayLoadEdit();
	   api.updateOneRegister ($('#editid').val(),data);
        
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
	 	event.preventDefault();  
	
        let data=doPayLoad();
		
        api.createOneRegister(data);		
  }
  */
  
})
