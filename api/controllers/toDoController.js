const ToDoModel = require("../models/toDoModel");

module.exports.getToDos = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then((data) => {
      console.log("Saved Successfully...");
      console.log(data)
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateToDo = async (req, res) => {
    const { id } = req.params; 
    const { text } = req.body; 

    try {
        const updatedToDo = await ToDoModel.findByIdAndUpdate(id, { text }, { new: true });
        res.send(updatedToDo);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err, msg: "Something went wrong!" });
    }
};


module.exports.deleteToDo = (req, res) => {
    const { id } = req.params;
  
    ToDoModel.findByIdAndDelete(id)
      .then(() => {
        res.send("Deleted Successfully....");
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
      });
  };