const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var fs = require("fs");
const mongoose = require("mongoose");
relationship = require("mongoose-relationship");
const path = require("path");

/** creating Express Instance *******/
const app = express();

/** Appling Middlewares *******/
require("./middleware")(app, express, path, cors, bodyParser, mongoose);

/** Connecting Mongo Db *******/
require("./middleware/connectMongoose")(mongoose);

/** Listning Requests on Port 3000 *******/
app.listen(3000, () => console.log("server is running on port 3000"));

/** defining Schema for users and creating mongo db model *******/
var Schema = mongoose.Schema;
Users = require("./models/UserModel")(mongoose, Schema, relationship);
Departments = require("./models/DepartmentModel")(
  mongoose,
  Schema,
  relationship
);
// *****************************
Events = require("./models/EventModel")(mongoose, Schema, relationship);

// let someEvent = {
//   eventName: "someEvent",
//   eventShotDesc: "desc",
//   eventType: "sports",
//   eventDetails: {
//     organizers: ["ali", "maryam"],
//     matches: [
//       {
//         matchName: "match One",
//         matchType: "circket Match",
//         matchDetails: {
//           organizers: ["ali", "maryam"],
//           teamDetails: [
//             {
//               teamName: "aligators",
//               teamMembers: [
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" },
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" },
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" }
//               ]
//             },
//             {
//               teamName: "crocodils",
//               teamMembers: [
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" },
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" },
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" }
//               ]
//             }
//           ]
//         }
//       },
//       {
//         matchName: "match One",
//         matchType: "circket Match",
//         matchDetails: {
//           organizers: ["ali", "maryam"],
//           teamDetails: [
//             {
//               teamName: "aligators",
//               teamMembers: [
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" },
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" },
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" }
//               ]
//             },
//             {
//               teamName: "crocodils",
//               teamMembers: [
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" },
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" },
//                 { name: "ali", GoodAt: "batting" },
//                 { name: "naveed", GoodAt: "keeper" }
//               ]
//             }
//           ]
//         }
//       }
//     ]
//   }
// };
// let newEvent = new Events(someEvent);
// newEvent.save().then(d => console.log(d));
// Events.findById("5cc007dcb7b72e3c116aafbf").then(de => {
//   Events.findByIdAndUpdate(
//     "5cc007dcb7b72e3c116aafbf",
//     {
//       eventDetails: {
//         ...de.eventDetails,
//         organizers: ["ali", "maryam"],
//         matches:
//           {
//             matchName: "match One",
//             matchType: "circket Match",
//             matchDetails: {
//               organizers: ["ali", "maryam"]
//             }
//           }

//       }
//     },
//     { new: true }
//   ).then(d=>console.log(d));
// });

// Matches = require("./models/MatcheModel")(mongoos, Schema, relationship);
// Teams = require("./models/TeacherModel")(mongoos, Schema, relationship);
// Sponsors = require("./models/SponsorsModel")(mongoos, Schema, relationship);

/** listning  login request on /api/login *******/
require("./apis/LoginApi")(app, Users);

/** Listning register request on /api/register *******/
require("./apis/RegisterApi")(app, Users);

/****** ************
 * listning to update profileDetail updates on /api/updateProfileDetails/:type
 * :type is param tha tells the api what to update.
 * ******************/
require("./apis/ProfileDetilsUpdate")(app, Users);


require("./apis/AddEventApi")(app, Events);

// var date = new Date()

// var te = date.now
// console.log(te)
