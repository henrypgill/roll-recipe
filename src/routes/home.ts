import { Router } from "express";
import { getSomeData } from "../database/getSomeData";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await getSomeData();
    res.json({ message: "Welcome to the template bun api!", data: data });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error, check server logs" });
  }
});

export const homeRouter = router;
