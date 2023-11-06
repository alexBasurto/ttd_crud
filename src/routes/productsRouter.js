import { Router } from "express";

import productsViewController from "../controllers/products/productsViewController.js";

const router = Router();

router.get("/", (req, res) => {
    productsViewController.getAll(req, res);
});

router.get("/new", productsViewController.createForm);

router.get("/:id", (req, res) => {
    productsViewController.getById(req, res);
});

router.post("/", (req, res) => {
    productsViewController.create(req, res);
});

router.get("/:id/edit", productsViewController.updateForm);

router.post("/:id", (req, res) => {
    productsViewController.update(req, res);
});

router.get("/:id/delete", (req, res) => {
    productsViewController.remove(req, res);
})

export default router;