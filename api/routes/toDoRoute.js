const { Router } = require("express");
const { saveToDo, 
        getToDos ,
        updateToDo,
        deleteToDo,
      } = require("../controllers/toDoController");

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;
