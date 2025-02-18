/* class Events{
    constructor(dateOfEvent){
        this.dateOfEvent=dateOfEvent;
    }
    bookEvent(){
        console.log("Event booked");
        
    }
}
class Movie extends Events{
    constructor(movieName,movieDate){
        super(movieDate);
        //movieDate=super.dateOfEvent;
        this.movieName=movieName;
    }
}

let dp = new Movie("deadpool","2026-07-18");

*/


function Events(dateOfEvent){
    this.dateOfEvent=dateOfEvent;
}
Events.prototype.bookEvent = function(){
    console.log("booking events");  
}

function Movie(movieName,movieDate){

    //super(movieDate); // this wont work
    Events.call(this,movieDate)
    this.movieName=movieName;
}
let dp = new Movie("deadpool","2026-07-18");
dp;