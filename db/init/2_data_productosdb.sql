LOCK TABLES `tbProducts` WRITE;

INSERT INTO `productosdb`.`tbProducts` (`name`, `brand`, `price`, `category`, `stock`)
VALUES
  ('Leche', 'SuperLeche', 2, 'Lácteos', 100),
  ('Pan', 'Golden Bread', 1, 'Panadería', 200),
  ('Manzanas', 'FreshFruit', 3, 'Frutas', 50),
  ('Pasta', 'QuickPasta', 1, 'Alimentos secos', 120),
  ('Pollo', 'FarmFresh', 5, 'Carnes', 30),
  ('Arroz', 'SuperGrains', 2, 'Alimentos secos', 80),
  ('Detergente', 'CleanItAll', 4, 'Limpieza', 40),
  ('Cepillo de dientes', 'BrightSmile', 2, 'Cuidado personal', 60),
  ('Jabón de baño', 'ScentedSoap', 1, 'Cuidado personal', 70),
  ('Papel higiénico', 'SoftTouch', 3, 'Limpieza', 90),
  ('Aceite de cocina', 'CookMaster', 6, 'Aceites', 20),
  ('Refresco', 'FizzPop', 2, 'Bebidas', 150),
  ('Huevos', 'FarmEggs', 3, 'Lácteos', 40),
  ('Yogur', 'YummyYogurt', 2, 'Lácteos', 60),
  ('Cereal', 'BreakfastDelight', 4, 'Cereales', 35),
  ('Papel de cocina', 'QuickClean', 2, 'Limpieza', 50),
  ('Tomates', 'FreshVeggies', 2, 'Verduras', 70),
  ('Galletas', 'SweetTreats', 2, 'Snacks', 100),
  ('Salsa de tomate', 'TastySauce', 3, 'Salsas', 45),
  ('Mantequilla de maní', 'NuttySpreads', 4, 'Untables', 25);

UNLOCK TABLES;