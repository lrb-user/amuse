$(document).ready(function(){
    

    // 시간
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    sale_time(hour,minute,second);
    setInterval(function(){
        sale_time(hour,minute,second);
    },1000);

    function sale_time(hour,minute,second){
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        hour.innerHTML = zero(24-h-1);
        minute.innerHTML = zero(60-m-1);
        second.innerHTML = zero(60-s);
    }

    function zero(num){
        if(num < 10){
            num = "0"+num
        }
        return num;
    }

})