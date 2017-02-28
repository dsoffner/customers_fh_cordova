document.getElementById('get_single').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Retrieving data.....</p>";
  $fh.cloud(
      {
        path: 'hello',
        method: "POST",
        data: {
          userId: document.getElementById('userId').value
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p> User is: " + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};