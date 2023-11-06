import {
    getAll,
    getById,
    create,
    update,
    remove
} from "../src/controllers/products/productsController.js";

import { productsModel } from "../src/models/productsModel.js";

describe('Pruebas para funciones de productos', () => {
  // Mock de productos ficticios
  const fakeProduct = {
    id: 1,
    name: 'Producto de prueba',
    brand: 'Marca de prueba',
    price: 10,
    category: 'Categoría de prueba',
    stock: 50,
  };

  beforeEach(() => {
    // Configurar mocks para productosModel
    productsModel.findAll = jest.fn(() => Promise.resolve([fakeProduct]));
    productsModel.findByPk = jest.fn((id) => Promise.resolve(id === fakeProduct.id ? fakeProduct : null));
    productsModel.create = jest.fn((product) => Promise.resolve({ ...fakeProduct, ...product }));
    productsModel.destroy = jest.fn(() => Promise.resolve({}));

    // Limpiar los mocks después de cada prueba
    jest.clearAllMocks();
  });

  describe('getAll', () => {
    it('debería obtener todos los productos', async () => {
      const [error, products] = await getAll();
      expect(error).toBeNull();
      expect(products).toEqual([fakeProduct]);
    });

    it('debería buscar productos por nombre', async () => {
      const [error, products] = await getAll('prueba');
      expect(error).toBeNull();
      expect(products).toEqual([fakeProduct]);
    });
  });

  describe('getById', () => {
    it('debería obtener un producto por su ID', async () => {
      const [error, product] = await getById(1);
      expect(error).toBeNull();
      expect(product).toEqual(fakeProduct);
    });

    it('debería manejar el caso en que no se encuentra el producto', async () => {
      const [error, product] = await getById(999);
      expect(error).not.toBeNull();
      expect(product).toBeNull();
    });
  });

  describe('create', () => {
    it('debería crear un nuevo producto', async () => {
      const [error, product] = await create('Nuevo Producto', 'Nueva Marca', 20, 'Nueva Categoría', 30);
      expect(error).toBeNull();
      expect(product).toEqual(fakeProduct); // Comprobar que los campos coinciden
    });

    it('debería manejar errores al crear un producto', async () => {
      productsModel.create = jest.fn(() => Promise.reject(new Error('Error al crear el producto')));
      const [error, product] = await create('Nuevo Producto', 'Nueva Marca', 20, 'Nueva Categoría', 30);
      expect(error).not.toBeNull();
      expect(product).toBeNull();
    });
  });

  describe('update', () => {
    it('debería actualizar un producto existente', async () => {
      const [error, product] = await update(1, 'Nuevo Nombre', 'Nueva Marca', 15, 'Nueva Categoría', 40);
      expect(error).toBeNull();
      expect(product).toEqual(fakeProduct); // Comprobar que los campos coinciden
    });

    it('debería manejar el caso en que no se especifica un ID válido', async () => {
      const [error, product] = await update(undefined, 'Nuevo Nombre', 'Nueva Marca', 15, 'Nueva Categoría', 40);
      expect(error).not.toBeNull();
      expect(product).toBeNull();
    });

    it('debería manejar errores al actualizar un producto', async () => {
      productsModel.findByPk = jest.fn(() => Promise.reject(new Error('Error al buscar el producto')));
      const [error, product] = await update(1, 'Nuevo Nombre', 'Nueva Marca', 15, 'Nueva Categoría', 40);
      expect(error).not.toBeNull();
      expect(product).toBeNull();
    });
  });

  describe('remove', () => {
    it('debería eliminar un producto existente', async () => {
      const [error, product] = await remove(1);
      expect(error).toBeNull();
      expect(product).toEqual(fakeProduct); // Comprobar que los campos coinciden
    });

    it('debería manejar el caso en que no se encuentra el producto para eliminar', async () => {
      productsModel.findByPk = jest.fn(() => Promise.resolve(null));
      const [error, product] = await remove(999);
      expect(error).not.toBeNull();
      expect(product).toBeNull();
    });

    it('debería manejar errores al eliminar un producto', async () => {
      productsModel.findByPk = jest.fn(() => Promise.reject(new Error('Error al buscar el producto')));
      const [error, product] = await remove(1);
      expect(error).not.toBeNull();
      expect(product).toBeNull();
    });
  });
});
