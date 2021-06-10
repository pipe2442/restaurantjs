import homefile from './modules/home';
import menufile from './modules/menu';
import contactfile from './modules/contact';

function nav() {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = 
    '<nav>'+
        '<ul>'+
            '<button id="homeBtn">Home</button>'+
            '<button id="menuBtn">Menu</button>'+
            '<button id="contactBtn">Contact</button>'+
        '</ul>'+
    '</nav>'
    document.getElementById('content').appendChild(newDiv);

    document.getElementById("homeBtn").onclick = showHome;
    document.getElementById("menuBtn").onclick = showMenu;
    document.getElementById("contactBtn").onclick = showContact;
      
    function showHome() {  
        homefile()  
    }
    function showMenu() { 
        menufile()  
    }
    function showContact() { 
        contactfile()
    }
};


document.getElementById('content').innerHTML = ""
nav();
const homeDiv = document.createElement('div');
homeDiv.innerHTML += 
'<div class="mainpage">'+
'<h1>ASIA DRAGON</h1>'+
'</div>'+
'<div class="description">'+
    '<img src="./assets/images/salmon.jpg" alt="salmon">'+
    '<div class="innerText">'+
        '<h1>ABOUT US</h1>'+
        '<p>'+
            'ASIA DRAGON made its debut on Sunset Blvd in Los Angeles in 1983, introducing dim sum and other'+ 
            'Chinese favorites prepared using traditional Cantonese cooking techniques. Each dish is made with'+ 
            'premium ingredients, fresh-to-order, without adding any MSG, and served in a contemporary environment'+ 
            'with friendly and efficient service.'+
        '</p>'+
    '</div>'+
'</div>'
document.getElementById('content').appendChild(homeDiv);
const footDiv = document.createElement('div');
footDiv.innerHTML = 
'<div class="footer">'+
    '<p>© Copyright Luis Felipe Angulo Torres</p>'+
'</div>'
document.getElementById('content').appendChild(footDiv);


export default nav