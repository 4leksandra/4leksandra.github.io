// When the document is ready, do everything.

$(document).ready(function(){
    $("button").click(testPost);
  });

    function findBeer2() {
        //1. get city name and brew name from input
        //2. create url
        //3. send a request
    
        let city = getCityName();
        let name = getName();
        let urlStr = createURL(city, name);
        // console.log(city);
        // console.log(urlStr);
        sendRequest(urlStr);
    
    }

    function testPost(){

        let payload = {
            token = "{API_KEY}",
            data:{
                name: "firstName",
                email: "email",
                phone: "phoneHome",
                _repeat: 300
            }
        }

        $.ajax{
            type: "POST";
            url: 
            data: ;
        }

    }
    
    function getCityName() {
        // this is jquery. 
        let city = $("#city").val();
        //same as document.querySelector("#city").value;
        return city;
        // console.log(city);
    }
    
    function getName(){
        let name = document.querySelector("#name").value;
        return name;
    }
    
    function createURL(city, name) {
        // instead of using single quote, you use this. Inside of it, you can inject values. 
        return `https://api.openbrewerydb.org/breweries?by_city=${city}&by_name=${name}`;
        //TEMPLATING =  (putting a variable in a link)
    }
    
    
    function showResult(list) {
        let result = '';
        list.forEach((item) => {
            result += `<div>
            <span>${item.name}</span><br/>
            <a href="${item.website_url}">${item.name}</a>
          </div>`
          // result += '<li>' + item.name + '</li>';`
        });
        $('#beers').html(result);

        // adding 
        // let test = $("div").html('blah');
        // $('#beers').add(test);
      
    }
    
    function sendRequest(urlStr) {
        // var oReq = new XMLHttpRequest();
        // oReq.addEventListener("load", reqListener);
        // oReq.open("GET", urlStr);
        // oReq.send()

        $.ajax({
            type: 'GET',
            url: urlStr,
            // prints the query result 
            // success: showResult,
            success: showResult,  
            //Inside AJAX, success is passed a callback function ShowResult and passes this argument, inside this ajax function. function expects a callback and passes an argument to it. That argument is the response. 
            error: () =>{
                console.log("fail");
            }
        });
    }

    

