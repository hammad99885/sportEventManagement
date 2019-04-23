module.exports = (app, Users) => {
  app.post("/api/register", (req, res) => {
    Users.find({ email: req.body.email }).then(data => {
      return data[0]
        ? res.json({
            status: 0,
            message: "User already exist with this email"
          })
        : (() => {
            let userData = {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: req.body.password
            };
            let newUser = new Users(userData);
            newUser.save().then(data => {
              return res.json({
                status: 1,
                message: "Account Created Succesfully",
                user: {
                  id: data._id,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  fullName: `${data.firstName} ${data.lastName}`,
                  email: data.email,
                  role: data.role,
                  details:data.details
                }
              });
            });
          })();
    });
  });
};