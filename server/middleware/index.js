module.exports = (app, express, path, cors, bodyParser) => {
  app.use(express.static(path.resolve(__dirname, "../../build")));
  app.use(cors());
  app.use(bodyParser.json());
};
