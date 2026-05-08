const app = require("./src/app");
const connectDB = require("./src/db/db");

const port = 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Failed", err);
  });