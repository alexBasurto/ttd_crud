import { productsModel } from "../../models/productsModel.js";
import { Op } from "sequelize";


const getAll = async (q = null) => {
    const options = {};
    if (q) {
        options.where = {
            nameproduct: { [Op.like]: `%${q}%` },
        };
    }
    try {
        const products = await productsModel.findAll(options);
        return [null, products];
    } catch (e) {
        return [e.message, null];
    }
};

const getById = async (id) => {
    const options = {};
    try {
        const product = await productsModel.findByPk(id, options);
        return [null, product];
    } catch (e) {
        return [e.message, null];
    }
};

const create = async (
    name, brand, price, category, stock
) => {
    if (
        name === undefined ||
        brand === undefined ||
        price === undefined ||
        category === undefined ||
        stock === undefined
    ) {
        const error = "Rellene todos los campos obligatorios.";
        return [error, null];
    }
    try {
        const product = await productsModel.create({
            name, brand, price, category, stock
        });
        return [null, product];
    } catch (e) {
        return [e.message, null];
    }
};

const update = async (
    id,name, brand, price, category, stock
) => {
    if (id == undefined) {
        const error = "Tienes que especificar un ID válido";
        return [error, null];
    }
    if (
        name === undefined ||
        brand === undefined ||
        price === undefined ||
        category === undefined ||
        stock === undefined
    ) {
        const error =
            "Los campos nombre, marca, precio, categoria y stock son obligatorios.";
        return [error, null];
    }
    try {
        const product = await productsModel.findByPk(id);
        product.name = name;
        product.brand = brand;
        product.price = price;
        product.category = category;
        product.stock = stock;
        product.save();
        return [null, product];
    } catch (e) {
        console.log(e);
        return [e.message, null];
    }
};

const remove = async (id) => {
    try {
        const product = await productsModel.findByPk(id);
        if (!product) {
            const error = "No se ha encontrado ningún perro con ese ID.";
            return [error, null];
        }
        product.destroy();
        return [null, product];
    } catch (e) {
        return [e.message, null];
    }
};


export default {
    getAll,
    getById,
    create,
    update,
    remove
};
