
jQuery(document).ready(function($) {
    var district = geoplugin_city();
	switch(district){
	 case 'Mashhad':
	 trn_district = "مشهد";
	 break;
	 
	 case 'Tehran':
	 trn_district = "تهران";
	 break;
	 
	 default:
	 trn_district = district;
	 break;
	 
	 	
	}

    $("#zone").append( " "+ trn_district );
});