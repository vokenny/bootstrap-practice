(function (global) {

  // namespace for ajax utilities
  var ajax = {};
  
  function getRequestObject() {
    if (window.XMLHttpRequest) {
      return (new XMLHttpRequest());
    } else {
      global.alert('Ajax is not supported!');
      return(null); 
    }
  }
  
  ajax.sendGetRequest = 
    function (requestUrl, responseHandler, isJsonResponse) {
      var request = getRequestObject();
      request.onreadystatechange = 
        function() { 
          handleResponse(request, 
                         responseHandler,
                         isJsonResponse); 
        };

      request.open('GET', requestUrl, true); // asynchronous request = true
      request.setRequestHeader('SameSite', 'Lax')
      request.send(null); // null body
    };
  
  // Only calls user provided 'responseHandler'
  // function if response is ready
  // and not an error
  function handleResponse(request,
                          responseHandler,
                          isJsonResponse) {
    // readyState 4 = DONE
    if ((request.readyState == 4) &&
       (request.status == 200)) {
  
      // Default to isJsonResponse = true
      if (isJsonResponse == undefined) {
        isJsonResponse = true;
      }
  
      if (isJsonResponse) {
        responseHandler(JSON.parse(request.responseText));
      }
      else {
        responseHandler(request.responseText);
      }
    }
  }

  // Expose utility to the global object
  global.$ajax = ajax;
  
})(window);
