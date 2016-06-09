function startClick(){
	
	var name = document.getElementById("div5_name").value;
	var phone = document.getElementById("div5_phone").value;
	var email = document.getElementById("div5_email").value;
	var affiliation = document.getElementById("div5_affiliation").value;
	var city = document.getElementById("div5_city").value;
	var state = document.getElementById("div5_state").value;
	var zipcode = document.getElementById("div5_zipcode").value;
	
	
	var details = name + "#" +  phone + "#" +  email + "#" +  affiliation + "#" +  city + "#" +  state + "#" +  zipcode;
	
	if (name == "" || phone == "" || email == "" || affiliation == "" || city == "" || state == "" || zipcode == ""){
		alert('Please fill all the mandatory fields to continue. All the data will be for internal use only!');
	}
	else {
		pass(details);
		location.href = "table.html";
	}
	

}


function pass(details) {
   localStorage.setItem("storageName", details);
   console.log(details);
}