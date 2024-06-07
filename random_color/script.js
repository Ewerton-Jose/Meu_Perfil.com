

function action(){
    var Color_a = Math.floor( Math.random() * (257 - 1) + 1);
    var Color_b = Math.floor( Math.random() * (257 - 1) + 1);
    var Color_c = Math.floor( Math.random() * (257 - 1) + 1);
    var randomColor = `rgb(${Color_a},${Color_b},${Color_c})`;

    document.documentElement.style.setProperty('--new-color2', randomColor);
    
    var Color_a = Math.floor( Math.random() * (257 - 1) + 1);
    var Color_b = Math.floor( Math.random() * (257 - 1) + 1);
    var Color_c = Math.floor( Math.random() * (257 - 1) + 1);
    var randomColor = `rgb(${Color_a},${Color_b},${Color_c})`;
    
    document.documentElement.style.setProperty('--new-color', randomColor);


    document.body.style.animation = 'none'; // Reset the animation
    void document.body.offsetWidth; // Trigger reflow
    document.body.style.animation = 'changeColor 4s forwards';

}