
function Events(dateofEvent){
    this.dateofEvent=dateofEvent;
}
Events.prototype.bookEvent = function (){
    console.log("booking event");
    
}

function Movie(name){
    this.name=name;
    
}

Movie.prototype

//method-1
// Movie.prototype.__proto__

// Movie.prototype.__proto__ = Events.prototype

// new Movie("Avengers");


// c=new Movie("Avengers");
// c.bookEvent()


//method-2
Movie.prototype=Object.create(Events.prototype);
c=new Movie("Avengers");
c.bookEvent()




