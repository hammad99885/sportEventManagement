let users = [
    {
        fname : "Test",
        lname: "Name1",
        email: "testEmail1",
        password: "123abc",
        profile: {
            profileInfo : "info",
        }
    }
]

const register =  (fname, lname, email, password)=>{
    users.push({
        fname: name,
        lname: lname,
        email:email,
        password:password,
        profile:{}
    })
}