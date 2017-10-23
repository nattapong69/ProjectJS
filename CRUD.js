function deletepost(id) {
    alert('delete ' + id);

    //Delete from back end
    $.ajax({
        url: "http://localhost:3000/data/" + id, // post id
        type: "DELETE" // Use DELETE
    })

    //Delete from front end
    $("#show" + id).empty();
}

function editpost(id) {
    console.log(id);
    //alert('Edit ' + id);
    var url = "http://localhost:3000/data";

    $("#fname" + id).prop('readonly', false);
    $("#lname" + id).prop('readonly', false);
    $.ajax({
        type: 'PUT',
        //data: {name: 'Billy Bob', age: 28},
        url: url + "/" + id,
        success: function () {
            //no data...just a success (200) status code
            console.log(id);
        }
    });
}

function savepost(id, fname, lname) {
    // console.log(id,title);
    var fname = fname;
    var lname = lname;
    //var title = title;

    //console.log(text);
    var newposts = {};

    newposts.id = id;
    newposts.fname = $("#fname" + id).val();
    newposts.lname = $("#lname" + id).val();
    //newposts.title = text;

    //console.log(newposts);
    // console.log(newposts.title);
    //$("#title" + id).prop('readonly', true);
    // console.log(newposts);
    var url = "http://localhost:3000/data/" + id;
    // $("#title" + id).prop("");
    $.ajax({
        type: 'PUT',
        data: newposts,
        url: url,
        success: function () {
            //no data...just a success (200) status code
            console.log(newposts);
        }
    });
}


$(function () {

    $("#show").click(function () {
        console.log("Hello");
        $("#posts").empty();
        var url = "http://localhost:3000/data";
        $.get(url, function (data) {
            console.log(data);
            var template = $('#template').html();
            for (var i = 0; i < data.length; i++) {
                var rendered = Mustache.render(template, data[i]);
                $("#posts").append(rendered);
                //  $("#text").val("");
            }
        });
    });

    $("#add").click(function () {
        // $("#posts").empty();
        var newposts = {};
        newposts.id = null;
        newposts.fname = $("#fname").val();
        newposts.lname = $("#lname").val();
        // console.log(newposts);
        var url = "http://localhost:3000/data";
        $.post(url, newposts, function (data, status) {
            console.log("Inserted " + data);
            $("#fname").val("");
            $("#lname").val("");
        });

        // var template = $('#template').html();
        // var mytext = $("#text").val();
        // console.log("mytext : " + mytext);
        // var rendered = Mustache.render(template, mytext);
        // $("#posts").append(rendered);
        var url = "http://localhost:3000/data";
        $.get(url, function (data) {
            console.log(data.length);
            var template = $('#template').html();
            for (var i = data.length; i <= data.length; i++) {
                var rendered = Mustache.render(template, data[i - 1]);
                $("#show1").append(rendered);
            }
        });
    });
    $("#clear").click(function () {
        $("#show1").empty();

    });

});

$("#edit").click(function () {
    $("#posts").empty();

});



/*function deleteEmpty(clear){
        for(var k in clear)
         if(k == "children"){
             if(obj[k]){
                     deleteEmpty(obj[k]);
             }else{
                   delete clear.children;
              } 
         }
    }

    for(var i=0;i<data.length;i++){
        deleteEmpty(a.children[i])
}*/


/*function myFunction() {
                          var x = document.createElement("INPUT");
                          x.setAttribute("type", "text");
                          x.setAttribute("value", "Hello World!");
                          document.body.appendChild(x);
                      }*/