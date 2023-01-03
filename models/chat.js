const moongose = require("mongoose");
const chatSchema = moongose.Schema({
  name: String,
  message: String,
});

module.exports = moongose.model("chatData", chatSchema);
