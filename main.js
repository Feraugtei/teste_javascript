var velocidade = 7;

window.setInterval(correndo, velocidade)

var r = document.querySelector(':root')

var top_ = 0;
var left_ = 0;

function correndo() {
    if(left_ < 100 && top_ == 0) {
        left_ = left_ + 0.25
        r.style.setProperty('--position-left', left_ + '%' )
    }
    else if (top_ < 100 && left_ == 100){
        top_ = top_ + 0.50
        r.style.setProperty('--position-top', top_ + '%' )
    }
    else if (left_ > 0 && top_ == 100) {
        left_ = left_ - 0.25
        r.style.setProperty('--position-left', left_ + '%' )
    }
    else if (top_ > 0 && left_ == 0) {
        top_ = top_ - 0.50
        r.style.setProperty('--position-top', top_ + '%' )
    }
}

function mudaVelocidade() {
    velocidade--;
    window.setInterval(correndo, velocidade)
}