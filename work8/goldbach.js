function isgobh(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {//表示是偶数
            sum++;
        }
    }
    if (sum == 2) {
        return true;
    } else {
        return false;
    }
}

function goldbach(odd) {
      odd = document.getElementById('odd').value
      odd = parseInt(odd);
    let str = '';
    for (var i = 2; i < odd; i++) {
        var c = odd - i;
        if (isgobh(i) && isgobh(c) && i <= c) {
            str += ("偶数" + odd + "可以拆分成质数" + i + "和" + c + '<br>')
        }
        
    }
    document.getElementById('goldbach').innerHTML = str;
}