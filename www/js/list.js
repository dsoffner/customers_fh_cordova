document.getElementById('get_list').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Retrieving data.....</p>";
  $fh.cloud(
      {
        path: 'list',
        method: "GET",
      },
      function (res) {
        var list = res.list;
        var rows = '';

        for( var i = 0; i < list.length; i++ )
        {
            rows += '<tr><td>'+ list[i].company +'</td><td>'+ list[i].name +'</td><td><input type="hidden" name="userId" value="'+ list[i].id +'"><button type="button" class="get_details_btn small-green-button">View</button></a></td></tr>';
        }
        
        document.getElementById('cloudResponse').innerHTML = "<p>Customer List</p>";
        document.getElementById( 'table' ).innerHTML = rows;

        //Bind new event listener
        $(".get_details_btn").click(function(el){
            handleViewDetails(el.target.parentNode.childNodes[0].value);
        });
    
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};