module.exports = (mongoose, Schema, relationship) => {
  const deparmentSchema = new Schema({
    deparmentName: { type: String, required: true, unique: true },
    HOD: String,
    student: [{ type: Schema.ObjectId, ref: "User" }]
  });
  var Departments = mongoose.model("Departments", deparmentSchema);

    // let dep = [
    //   "Computer Science",
    //   "Education",
    //   "Health Sciences",
    //   "Islamic Studies",
    //   "Law",
    //   "Engineering & Technology",
    //   "Economics and Management Sciences"
    // ];

    // dep.map((de)=>{
    //   let departmen = {
    //       deparmentName: de,
    //       HOD: "Some HOD"
    //     };
    //     let newDepartment = new Departments(departmen);
    //     newDepartment.save()
    // })

  return Departments;
};
