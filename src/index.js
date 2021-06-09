import homefile from './modules/home';
import menufile from './modules/menu';

function nav() {
    document.getElementById('content').innerHTML += 
    '<nav>'+
        '<ul>'+
            '<li><a href="#">Home</a></li>'+
            '<li><a href="#">Menu</a></li>'+
            '<li><a href="#">Contact</a></li>'+
        '</ul>'+
    '</nav>'
};

nav();
//homefile();
menufile();