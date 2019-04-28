module.exports = mongoose => {
  mongoose
    .connect(
      "mongodb://hammad:zxcvasdf@sportseventapp-shard-00-00-7a4gc.mongodb.net:27017,sportseventapp-shard-00-01-7a4gc.mongodb.net:27017,sportseventapp-shard-00-02-7a4gc.mongodb.net:27017/test?ssl=true&replicaSet=SportsEventApp-shard-0&authSource=admin&retryWrites=true",
      { useNewUrlParser: true }
    )
    .then(() => console.log("db server connected"))
    .catch(e => console.log("error in db", e));
};
