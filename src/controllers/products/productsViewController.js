import productsController from "./productsController.js";

const getAll = async (req, res) => {
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, products] = await productsController.getAll(q);
    res.render("products/list", {
        error: error || errorMessage,
        products,
        session: req.session,
    });
};

const getById = async (req, res) => {
    const id = req.params.id;
    const [error, product] = await productsController.getById(id);
    res.render("products/show", { error, product, session: req.session });
};

const createForm = async (req, res) => {
    const error = req.query.error;
    if (error) {
        res.redirect("/products");
    }
    res.render("products/new", { error });
};

const create = async (req, res) => {
    const { name, brand, price, category, stock } =
        req.body;

    const [error, product] = await productsController.create(
        name, brand, price, category, stock
    );
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/products/new?error=${uriError}`);
    }
    res.redirect("/products");
};

const updateForm = async (req, res) => {
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error, product] = await productsController.getById(id);
    if (error) {
        res.redirect("/products");
    }
    res.render("products/edit", {
        error: errorMessage,
        product,
        session: req.session,
    });
};

const update = async (req, res) => {
    const id = req.params.id;
    const { name, brand, price, category, stock } =
        req.body;
    const [error, product] = await productsController.update(
        id, name, brand, price, category, stock 
    );
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/products/${id}/edit?error=${uriError}`);
    }
    res.redirect("/products");
};

const remove = async (req, res) => {
    const id = req.params.id;
    const [error, product] = await productsController.getById(id);
    if (error) {
        // Maneja el error
        return res.redirect("/products?error=" + encodeURIComponent(error));
    }

    const [deleteError, deletedproduct] = await productsController.remove(id);
    if (deleteError) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/products?error=${uriError}`);
    }
    res.redirect("/products");
};

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
};
