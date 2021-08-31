$(document).ready(function(){
    var data = [
{"id":"1",
"product_name":"The Volume Arrival Profile (VAP)",
"product_description":"Real-Time visualization provides insight into how an Area, District, Site, Operation, or Machine is aligned to meet the 24-hour clock core metrics.",
"href":"https://www.usps.com"
},

{"id":"2",
"product_name":"Surface Planning for Peak Season",
"product_description":"This video shows how Surface Planners conduct Peak Planning for the upcoming Peak Season. Peak Planning is conducted in the late spring to early summer. Covered in this video are two essential tools, the Transportation Contract Support System (TCSS) and the Peak Season Heatmap.",
"href":"https://www.usps.com"
},

{"id":"3",
"product_name":"Cant find mail",
"product_description":"Trying to find lost package",
"href":"https://www.usps.com"
},

{"id":"4",
"product_name":"Late mail arriving",
"product_description":"Locate late arriving mail coming from plant.",
"href":"https://www.usps.com"
},

{"id":"5",
"product_name":"Sort plan failure",
"product_description":"Machine failed to run sort plan on time",
"href":"https://www.usps.com"
},

{"id":"6",
"product_name":"Plant mail volume arrival tool",
"product_description":"Helps determine amount of volume coming to facility",
"href":"https://www.usps.com"
},

{"id":"7",
"product_name":"Staffing issues",
"product_description":"Staffing shortage, can not process mail volume on time. Need extra trips.",
"href":"https://www.usps.com"
},

{"id":"8",
"product_name":"How can I locate mail trip?",
"product_description":"Tracking dashboard help staff locate incoming mail trips via, etc.",
"href":"https://www.usps.com"
},

{"id":"9",
"product_name":"DPS errors",
"product_description":"A deep view of DPS mail errors processed by plant",
"href":"https://www.usps.com"
}];

$('#txt-search').keyup(function(){
            var searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}
			
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.product_description.search(regex) != -1) || (val.product_name.search(regex) != -1)) {
				  output += '<div class="col-md-6 well">';
				  
				  output += '<div class="col">';
				  output += '<h5>' + val.product_name + '</h5>';
				  output += '<p>' + val.product_description + '</p>'
				  output += '<a href="' + val.href + '" target="_blank">' + val.href + '</a>'
				  output += '<hr>';
				  output += '</div>';
				  output += '</div>';
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('#filter-records').html(output);
        });
  });