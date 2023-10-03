const router = require("express").Router();
const userRouter = require("../modules/users/user.routes.js");
const authRouter = require("../modules/auth/auth.routes.js");

router.get("/", () => {
  res.json({ data: "", msg: "Api is working" });
});

router.use("/auth", authRouter);
router.use("/users", userRouter);

router.use("*", () => {
  res.json({ data: "", msg: "Routes not found" });
});

module.exports = router;
