function time () {
    date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
  
    h = (h < 10) ? '0' + h : h,
    m = (m < 10) ? '0' + m : m,
    s = (s < 10) ? '0' + s : s;
  
    hours  = document.getElementById("id_H");
    minutes = document.getElementById("id_M");
    seconds = document.getElementById("id_S");
              
    hours.innerHTML = h;   
    minutes.innerHTML = m;
    seconds.innerHTML = s;
  };
    
  setInterval(time, 1000);