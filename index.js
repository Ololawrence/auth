let express = require('express')
let app = express();

const port = 5001 || process.env.PORT;

app.get("this is the app entry point and thank you for all of this!");
app.listen(port, (req, res) => {
  console.log(`app runing on port ${port}`);
});
