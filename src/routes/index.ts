import { Router } from "https://deno.land/x/attain/mod.ts";

// import {
//   getUsers,
//   getUserDetails,
//   createUser,
//   updateUser,
//   deleteUser,
// } from "../controllers/users.ts";

const router = new Router();

router.use("/users", async (req, res) => {
  await res.send({ data: "has received" });
});

// router
//   .get("/users", getUsers)
//   .get("/users/:id", getUserDetails)
//   .post("/users", createUser)
//   .put("/users/:id", updateUser)
//   .delete("/users/:id", deleteUser);

export default router;
