function showTime() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const session = "AM"

    if(h==0){
        h=12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const time = h + ":" + m + ":" + s + " " + session;
    
}