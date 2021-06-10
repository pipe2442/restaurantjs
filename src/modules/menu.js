import nav from './../index'

function menufile() {
    document.getElementById('content').innerHTML = ""
    nav();
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML += 
    '<div class="menu">'+
        '<div class="dish">'+ 
            '<img src="https://images.rappi.com/products/2091744430-1593818637627.jpg?d=400x400" alt="monster">'+ 
            '<div class="dishDescription">'+ 
                '<h1>Monster Roll</h1>'+ 
                '<p>'+ 
                    'Tempura white fish sushi and crumbled crab palm with our special Teriyaki.'+ 
                '</p>'+ 
            '</div>'+ 
       ' </div>'+ 

        '<div class="dish">'+ 
            '<img src="https://images.rappi.com/products/2091744437-1593818719473.jpg?d=400x400" alt="Yasai Tempura Roll">'+ 
            '<div class="dishDescription">'+ 
                '<h1>Yasai Tempura Roll </h1>'+ 
                '<p>'+ 
                    'Vegetable sushi in tempura katsura, classic avocado and special Teriyaki.'+ 
                '</p>'+ 
            '</div>'+ 
        '</div>'+ 

        '<div class="dish">'+ 
            '<img src="https://images.rappi.com/products/2091744431-1593818510075.jpg?d=400x400" alt="Ceviche Roll ">'+ 
            '<div class="dishDescription">'+ 
                '<h1>Ceviche Roll </h1>'+ 
                '<p>'+ 
                    'Peruvian style fish sushi in tiger milk, avocado and shrimp.'+  
                '</p>'+ 
            '</div>'+ 
        '</div>'+ 

        '<div class="dish">'+ 
            '<img src="https://images.rappi.com/products/2090645015-1563035613.png?d=128x90" alt="Tiger Eye Roll ">'+ 
            '<div class="dishDescription">'+ 
                '<h1>Tiger Eye Roll </h1>'+ 
                '<p>'+ 
                    'Tempura sushi with tuna, salmon, crab palm, avocado and sesame in dynamite sauce, 6 Bites.'+  
                '</p>'+ 
            '</div>'+ 
        '</div>'+ 

        '<div class="dish">'+ 
            '<img src="https://images.rappi.com/products/2090644962-1563037158.png?d=400x400" alt="Spicy Tuna Maki">'+ 
            '<div class="dishDescription">'+ 
                '<h1>Spicy Tuna Maki</h1>'+ 
                '<p>'+ 
                    'Yellow fin tuna sushi, avocado and dynamite sauce 9 pieces.'+ 
                '</p>'+ 
            '</div>'+ 
        '</div>'+ 

        '<div class="dish">'+ 
            '<img src="https://images.rappi.com/products/2090645018-1563217418.png?d=400x400" alt="Teriyaki Roll">'+ 
            '<div class="dishDescription">'+ 
                '<h1>Teriyaki Roll</h1>'+ 
                '<p>'+ 
                    'Teriyaki sushi philadelphia tempura, in teriyaki sauce 9 bites.'+ 
                '</p>'+ 
            '</div>'+ 
        '</div>'+ 

    '</div>' 
    document.getElementById('content').appendChild(menuDiv);

};

export default menufile;