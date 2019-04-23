module.exports = (app, Users) => {
  app.post("/api/login", (req, res) => {
    Users.find({ email: req.body.email, password: req.body.password })
      .then(data => {
        if (data.length !== 0) {
          data = data[0];
          let user = {
            id: data._id,
            firstName: data.firstName,
            lastName: data.lastName,
            fullName: `${data.firstName} ${data.lastName}`,
            email: data.email,
            role: data.role,
            details:data.details
          };
          res
            .status(200)
            .json({ status: 1, message: "login successfull", user });
        } else {
          res.json({
            status: 0,
            message: "Inncorrect User Name Or Password"
          });
        }
      })
      .catch(e => console.log("error", e));
  });
};
