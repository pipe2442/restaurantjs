function homefile() {
    document.getElementById('content').innerHTML += 
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
};

export default homefile;
