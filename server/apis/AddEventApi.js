module.exports = (app, Event) => {
    app.post("/api/addEvent", (req, res)=>{
        console.log(req.body);
        let newEvent = new Event(req.body)
        newEvent.save().then(d=>res.json(d))
    })
}

