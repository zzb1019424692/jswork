let year = new Date().getFullYear()
// //调用calender函数，设置cal内容显示年历
document.getElementById("cal").innerHTML = calender(year)

function setCalender(year) {
   
    document.getElementById('cal').innerHTML = '<div calss="box" id="cal" ></div>'

    var year = parseInt(year)
    var pre = year - 1
    var next = year + 1

    document.getElementById('curyear').setAttribute('data-year', year);
    document.getElementById('preyear').setAttribute('data-year', pre);
    document.getElementById('nextyear').setAttribute('data-year', next);
    document.getElementById('curyear').innerText = year
    document.getElementById('preyear').innerText = "<<" + pre
    document.getElementById('nextyear').innerText = next + ">>"
    

    document.getElementById("cal").innerHTML = calender(year)
}

