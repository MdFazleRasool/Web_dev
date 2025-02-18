class Events{
    bookEvent(){
        console.log("booking event");
        
    }
}
class Movie extends Events{
    showtime(){
        console.log("showtime");
        
    }
}
class Comedy extends Events{
    showtime(){
        console.log("showtime");
        
    }
}
class Concert extends Events{
    showtime(){
        console.log("showtime");
        
    }
}
Movie.prototype.__proto__
m=new Movie()
m.showtime()
m.bookEvent()