
var card1 = document.getElementById("card1")
var card2 = document.getElementById('card2')
var card3 = document.getElementById('card3')
var card4 = document.getElementById('card4')
var card5 = document.getElementById('card5')
const cityArray = {'Beijing,China': [39.55, 116.25], 'Barcelona,Spain':[41.23, 2.9], 'Berlin,Germany': [52.30, 13.25], 'Cairo,Egypt':[30.2, 31.21], 'Havana,Cuba':[23.8,82.23], 'Helsinki,Finland':[60.10,25.0], 'Milan,Italy':[45.27, 9.10], 'Osaka,Japan':[34.32, 135.30], 'Vladivostok, Russia':[43.10,132],'Roma,Italy':[41.54,12.27]}

var d = new Date();
var date = d.getDate();
var d1= date+1
var d2 = d1+1
var d3= d2+1
var d4 = d3+1
var month = d.getMonth()+1;
$(document).ready(function () {
    $('#but_read').click(function () {
        var c = document.getElementById("selUser");
        var userChoice = c.options[c.selectedIndex].text;
        window.localStorage.setItem("userchoice", userChoice);
        var cryptoselected = $('#selUser option:selected').text();
        weatherUrl = 'https://api.openweathermap.org/data/2.5/weather/'
        lat = cityArray[userChoice][0]
        lon = cityArray[userChoice][1]
        params = '?lat='+lat+'&lon='+lon+'&appid=1316525b69383e9c66930b4226c70a01'
        
        var standard ='https://api.openweathermap.org/data/2.5/forecast'+params
        var indexnum = 0
        fetch(standard)
            .then(function (response){
                return response.json();
            })
            .then (function (data){
                console.log(data)
                var cityname = userChoice;
                var temp1 = KtoF(data.list[0].main.temp)
                var temp2 = KtoF(data.list[8].main.temp)
                var temp3 = KtoF(data.list[16].main.temp)
                var temp4 = KtoF(data.list[24].main.temp)
                var temp5 = KtoF(data.list[32].main.temp)
                console.log(temp1, temp2, temp3, temp4, temp5)

                var wind1 = data.list[0].wind.speed
                var wind2 = data.list[8].wind.speed
                var wind3 = data.list[16].wind.speed
                var wind4 = data.list[24].wind.speed
                var wind5 = data.list[32].wind.speed

                var description1 = data.list[0].weather[0].description
                var description2 = data.list[8].weather[0].description
                var description3 = data.list[16].weather[0].description
                var description4 = data.list[24].weather[0].description
                var description5 = data.list[32].weather[0].description
                
                var humidity1 = data.list[0].main.humidity
                var humidity2 = data.list[8].main.humidity
                var humidity3 = data.list[16].main.humidity
                var humidity4 = data.list[24].main.humidity
                var humidity5 = data.list[32].main.humidity
                console.log(humidity1, humidity2, humidity3, humidity4, humidity5)
                
                

                card1.setAttribute('style', 'white-space: pre;');
                card2.setAttribute('style', 'white-space: pre;');
                card3.setAttribute('style', 'white-space: pre;');
                card4.setAttribute('style', 'white-space: pre;');
                card5.setAttribute('style', 'white-space: pre;');

                card2.textContent = month + ' / ' + d1 + '\r\n';
                card2.textContent += 'Weather: '+description2+ '\r\n';
                card2.textContent +='Temperature: '+temp2 +' F' + '\r\n';
                card2.textContent +='Wind: '+ wind2 +' m/s' + '\r\n'
                card2.textContent += 'Humidity: ' +humidity2 + ' %'
                
                card1.textContent = month + ' / ' + date+ '\r\n';
                card1.textContent += 'Weather: '+description1+ '\r\n';
                card1.textContent +='Temperature: '+temp1 +' F' + '\r\n';
                card1.textContent +='Wind: '+ wind1 +' m/s' + '\r\n'
                card1.textContent += 'Humidity: ' +humidity1 + ' %'

                card3.textContent = month + ' / ' + d2+ '\r\n';
                card3.textContent += 'Weather: '+description3+ '\r\n';
                card3.textContent +='Temperature: '+temp3 +' F' + '\r\n';
                card3.textContent +='Wind: '+ wind3 +' m/s' + '\r\n'
                card3.textContent += 'Humidity: ' +humidity3 + ' %'

                card4.textContent = month + ' / ' + d3+ '\r\n';
                card4.textContent += 'Weather: '+description4+ '\r\n';
                card4.textContent +='Temperature: '+temp4 +' F' + '\r\n';
                card4.textContent +='Wind: '+ wind4 +' m/s' + '\r\n'
                card4.textContent += 'Humidity: ' +humidity4 + ' %'

                card5.textContent = month + ' / ' + d4+ '\r\n';
                card5.textContent += 'Weather: '+description5+ '\r\n';
                card5.textContent +='Temperature: '+temp5 +' F' + '\r\n';
                card5.textContent +='Wind: '+ wind5 +' m/s' + '\r\n'
                card5.textContent += 'Humidity: ' +humidity5 + ' %'
                }
                
                
            )
    
        })})

        function KtoF(n) {
            f = (n - 273.15)* 9/5 + 32 
            return Math.round(f*100)/100
        }