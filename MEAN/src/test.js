function tong(){
    let a = "5000000", b = "1000000"
    let result = parseInt(a)+parseInt(b);
    console.log(numberWithCommas(result));
    
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

tong();
