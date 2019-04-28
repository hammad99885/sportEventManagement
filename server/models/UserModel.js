module.exports = (mongoose, Schema, relationship) => {
  //   var Schema = mongoose.Schema;
  const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    gender: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    userType: { type: String, default: "student" },
    department: {
      type: Schema.ObjectId,
      ref: "Departments",
      childPath: "user"
    },
    details: {
      profileImgUrl: {
        type: String,
        default:
          "https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-512.png"
      },
      CoverImgUrl: {
        type: String,
        default: "http://pandata.co/wp-content/uploads/2018/01/black-hero.jpg"
      },
      phoneNo:String,
      socialAccounts:{
        facebook:{default:"http://www.facebook.com", type:String},
        twitter: {default:"http://wwww.twitter.com", type:String},
        linkedIn: {default:"http://wwww.linkedIn.com", type:String}
      },
      website:{type:String, default:"#"},
    },
    // RegisteredTeams:[{type:Schema.ObjectId, ref:"teamMembers"}]
  });


  userSchema.plugin(relationship, { relationshipPathName: "department" });
  var Users = mongoose.model("Users", userSchema);
  
  return Users;
};
