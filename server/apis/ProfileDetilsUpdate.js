module.exports = (app, User) => {
  app.post("/api/updateProfileDetails/:type", (req, res) => {
    let type = req.params.type;
    User.findById(req.body._id).then(user => {
      User.findByIdAndUpdate(
        req.body._id,
        { details: { ...user.details, [type]: req.body.data } },
        { new: true }
      ).then(data => {
        console.log(data);
        res.json(data);
      });
    });
  });
};


/***  Documentation
 * api accetps body of json obj with two keys {_id, data}, where _id is the id * of user and data is the data to be updated
 * api accepts params :type (required)  avaliable params are below
 * phoneNo
 * profileImgUrl
 * CoverImgUrl
 * website
 * socialAccounts (note for social account the data must be object structured as following )
 * {facebook, twitter, linkedIn}
 */

 /****
  * 
  */