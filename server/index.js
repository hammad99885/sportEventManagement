const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var fs = require("fs");
const mongoos = require("mongoose");
relationship = require("mongoose-relationship");
const path = require("path");

/** creating Express Instance *******/
const app = express();

/** Appling Middlewares *******/
require("./middleware")(app, express, path, cors, bodyParser, mongoos);

/** Connecting Mongo Db *******/
require("./middleware/connectMongoose")(mongoos);

/** Listning Requests on Port 3000 *******/
app.listen(3000, () => console.log("server is running on port 3000"));

/** defining Schema for users and creating mongo db model *******/
var Schema = mongoos.Schema;
Users = require("./models/UserModel")(mongoos, Schema, relationship);
Departments = require("./models/DepartmentModel")(
  mongoos,
  Schema,
  relationship
);

/** listning  login request on /api/login *******/
require("./apis/LoginApi")(app, Users);

/** Listning register request on /api/register *******/
require("./apis/RegisterApi")(app, Users);


/****** ************
 * listning to update profileDetail updates on /api/updateProfileDetails/:type 
 * :type is param tha tells the api what to update,
 * ******************/
require("./apis/ProfileDetilsUpdate")(app, Users)

