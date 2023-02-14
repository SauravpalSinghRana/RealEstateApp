import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "saurav",
  database: "test",
});



app.get("/", (req, res) => {
  const q = "SELECT * FROM task";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/task", (req, res) => {
  const q = "INSERT INTO task (`task`,`desc`) VALUES (?)";
  const values = [req.body.task, req.body.desc];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("task added");
  });
});

app.delete("/task:id", (req,res)=>{
    const taskID =req.params.id;
    const q= "DELETE FROM task WHERE id=? ";

    db.query(q,[taskID], (err,data)=>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.put("/task:id", (req,res)=>{
  const taskId =req.params.id;
  const q= "UPDATE task SET `task`=?, `desc`=? WHERE id =?";

  const values = [req.body.task, req.body.desc];

  db.query(q,[...values,taskId], (err,data)=>{
      if (err) return res.json(err);
      return res.json(data);
  })
})



app.listen(8800, () => {
  console.log("BACKEND CONNECTED");
});
