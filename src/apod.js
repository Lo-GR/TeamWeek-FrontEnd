export default class APIReturn {
  static testAPI() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const api = `http://localhost:5000/api/Cards`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", api, true);
      request.send();
    });
  }

  //Fetch Prompts
  static promptAPI() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const api = `http://localhost:5000/api/Prompts/random`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", api, true);
      request.send();
    });
  }

  //Submit Prompts
  static submitAPI() {
    return new Promise(function (resolve, reject) {
      let answer = document.getElementById("answer").value;
      let id = 1; // This will need to be the PlayerId

      var http = new XMLHttpRequest();
      var url = 'http://localhost:5000/api/Cards';
      // var url = '/server';
      // var params = `answer=${answer}&playerID=${id}`;
      http.open('POST', url, true);
      

      //Send the proper header information along with the request
      http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
      
      http.onreadystatechange = function () {
        // Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
        }
      }

      var params = new Object();
      params.answer = answer;
      params.playerID = id;

      // Turn the data object into an array of URL-encoded key/value pairs.
      let urlEncodedDataPairs = [], name;
      for (name in params) {
        urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(params[name]));
      }

      http.send(JSON.stringify(params));
      console.log(JSON.stringify(params));
    });
  }
}