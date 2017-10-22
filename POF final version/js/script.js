$.ajax({
	method: 'GET',
	url:'https://webdxd-student-api.herokuapp.com/student',
})

.done(function(studentList) {
	for (var i = 0; i < studentList.length; i++){
		$('#sList').append($('<li class="showSkills" id="'+ studentList[i]._id + '">').html('<p>' + studentList[i].firstName + '</p>'));
	}
})

$('#sList').on('click', '.showSkills', function (){
	var sid = $(this).attr('id')
	$.ajax({
		method:'GET',
		url:'https://webdxd-student-api.herokuapp.com/student/' + sid
	})
	.done(function(studentDetail){
		var skillList = studentDetail.skills
		for(var i = 0 ; i < studentDetail.length; i++){
			$('#' + studentDetail._id).append($('<span>').addClass('tag').text(skillList[i]))
		}
	})
})
// var userArray = [
// {
// 	name: "Zhuofan Wei",
// 	age:22,
// 	school: "SFU",
// 	tags:["HTML","CSS","JavaScript"]
// },

// {
// 	name: "Site Li",
// 	age:22,
// 	school: "SFU",
// 	tags:["C++","PHP","Java"]
// },

// {
// 	name: "Yilun Qian",
// 	age:22,
// 	school: "SFU",
// 	tags:["C++","PHP","Java"]
// },

// {
// 	name: "Ben Sun",
// 	age:25,
// 	school: "UBC",
// 	tags:["C++","PHP","Java"]
// },
// ];

// var findUser = function(user, query){
// 	// if(user.name.toLowerCase() == query.toLowerCase()){
// 	// 	return true;
// 	// }
// 	if(user.school.toLowerCase() == query.toLowerCase()){
// 		return true;
// 	}
// 	if(user.name.toLowerCase().includes(query.toLowerCase())){
// 		return true;
// 	}
// 	if(user.tags.indexOf(query) > -1){
// 		return true;
// 	}
// 	return !query;
// }

// $('.search-input').keyup(function(){
// 	var query = $('.search-input').val();
// 	$('.user-container').html(''); // 每次进来都刷新页面
// 	if (query == ""){
// 		return false;
// 	}
// 	for(var j=0; j < userArray.length; j++){
// 		if (findUser(userArray[j],query)){
// 				var currentUser = $('<div>').addClass('user');
// 				var appendEle = function (tag,attr) {
// 					$(tag).text(userArray[j][attr]).appendTo(currentUser);
// 				}

// 				appendEle('<h1>','name');
// 				appendEle('<h2>','age');
// 				appendEle('<h2>','school');

// 				var skillSet = $('<p>').appendTo(currentUser);

// 				for(var i=0; i < userArray[j].tags.length; i++){
// 					$('<span>').text(userArray[j].tags[i]).appendTo(skillSet);
// 				} 

// 				$('.user-container').append(currentUser);

// 			}
// 		}


// });


// // $('.search-btn').click(function(e){

// // 	var query = $('.search-input').val();
// // 	$('.user-container').html(''); // 每次进来都刷新页面

// // 	for(var j=0; j < userArray.length; j++){
// // 		if (findUser(userArray[j],query)){
// // 				var currentUser = $('<div>').addClass('user');
// // 				var appendEle = function (tag,attr) {
// // 					$(tag).text(userArray[j][attr]).appendTo(currentUser);
// // 				}

// // 				appendEle('<h1>','name');
// // 				appendEle('<h2>','age');
// // 				appendEle('<h2>','school');

// // 				var skillSet = $('<p>').appendTo(currentUser);

// // 				for(var i=0; i < userArray[j].tags.length; i++){
// // 					$('<span>').text(userArray[j].tags[i]).appendTo(skillSet);
// // 				} 

// // 				$('.user-container').append(currentUser);

// // 			}
// // 		}
// // 	});
			



// // var currentUser = $('<div>').addClass('user');
// // var appendEle = function (tag,attr) {
// // 	$(tag).text(userArray[j][attr]).appendTo(currentUser)
// // }
// // appendEle('<h1>','name');
// // appendEle('<h2>','age');
// // appendEle('<h2>','school');


// // for(var j=0; j < userArray.length; j++){
// // 	var currentUser = $('<div>').addClass('user');
// // 	var appendEle = function (tag,attr) {
// // 		$(tag).text(userArray[j][attr]).appendTo(currentUser);
// // 	}
// // 	appendEle('<h1>','name');
// // 	appendEle('<h2>','age');
// // 	appendEle('<h2>','school');

// // 	var skillSet = $('<p>').appendTo(currentUser);

// // 	for(var i=0; i < userArray[j].tags.length; i++){
// // 		$('<span>').text(userArray[j].tags[i]).appendTo(skillSet);
// // 	} 

// // 	$('.user-container').append(currentUser);

// // }


// // $(function(){
// // 	var currentUser = $('<div>').addClass('user');
// // 	$('.user-container').append(currentUser);
// // })

