document.getElementById('get_details').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Retrieving data.....</p>";

    cloudGetDetails(document.getElementById('userId').value, function(res){
        var details = res.details[0];
        var row ='<tr><td>Company:</td><td>'+ details.company +'</td></tr><tr><td>Name:</td><td>'+ details.name +'</td></tr><tr><td>Address:</td><td>'+ details.address +'</td></tr><tr><td>Phone:</td><td>'+ details.phone +'</td></tr><tr><td>E-Mail:</td><td>'+ details.email +'</td></tr>';
        document.getElementById('cloudResponse').innerHTML = "<p>Customer Details</p>";
        document.getElementById( 'table' ).innerHTML = row;
    });
};

function handleViewDetails(userId){
    cloudGetDetails(userId,function(cloudResponse){
        var details = cloudResponse.details[0];
        var row ='<tr><td>Company:</td><td>'+ details.company +'</td></tr><tr><td>Name:</td><td>'+ details.name +'</td></tr><tr><td>Address:</td><td>'+ details.address +'</td></tr><tr><td>Phone:</td><td>'+ details.phone +'</td></tr><tr><td>E-Mail:</td><td>'+ details.email +'</td></tr>';
        document.getElementById('cloudResponse').innerHTML = "<p>Customer Details</p>";
        document.getElementById( 'table' ).innerHTML = row;

    });
}

function cloudGetDetails(userId, callback){
     $fh.cloud(
      {
        path: 'details',
        method: "POST",
        data: {
          userId: userId
        }
      },
      function (res) {
        return callback(res);
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
}