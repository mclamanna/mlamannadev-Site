window.onload = populateSelect();
function populateSelect() {

    // Create XMLHttpRequest object, with GET method.
    var xhr = new XMLHttpRequest(), 
        method = 'GET',
        overrideMimeType = 'application/json',
        url = '/js/peakSearchDropData.json';  // Add the file URL.

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

      // Parse JSON data.
      var learn = JSON.parse(xhr.responseText);

      var ele = document.getElementById('sel');
      for (var i = 0; i < learn.length; i++) {
      
        // learn data to <select> element.
        ele.innerHTML = ele.innerHTML +
          '<option value="' + learn[i].Answer + '">' + learn[i].Question + '</option>';
      }
    }
  };
  xhr.open(method, url, true);
  xhr.send();
}

function show(ele) {
    // Get the selected value from <select> element and show it.
    var msg = document.getElementById('msg');
    msg.innerHTML = '<b>Answer:</b> ' + ele.value + ' </br>' +
        '<b>Link: </b>' + ele.Link + '</b>';
}


