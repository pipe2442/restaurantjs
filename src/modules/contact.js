import nav from './../index'

function contactfile() {
    document.getElementById('content').innerHTML = "";
    nav();
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML += 
    '<div class="contactpage">'+
    '<h1>ASIA DRAGON</h1>'+
    '</div>'+
    '<div class="description">'+
        '<div class="innerText">'+
            '<h1>ABOUT US</h1>'+
            '<p>'+
                'ASIA DRAGON made its debut on Sunset Blvd in Los Angeles in 1983, introducing dim sum and other'+ 
                'Chinese favorites prepared using traditional Cantonese cooking techniques. Each dish is made with'+ 
                'premium ingredients, fresh-to-order, without adding any MSG, and served in a contemporary environment'+ 
                'with friendly and efficient service.'+
            '</p>'+
        '</div>'+
    '</div>'+
    '<div class="frame">'+
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.11795169839'+
        '07!2d-118.38170898478383!3d34.09211868059511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'+
        '!3m3!1m2!1s0x80c2bebce8c3b145%3A0x286ed0680cf6ca91!2s8618%20Sunset%20Blvd%2C%20West%2'+
        '0Hollywood%2C%20CA%2090069%2C%20USA!5e0!3m2!1sen!2sco!4v1623288518059!5m2!1sen!2sco"'+ 
        'width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'+
    '</div>'
    document.getElementById('content').appendChild(contactDiv);

};

export default contactfile;