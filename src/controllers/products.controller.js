import { pool } from "./../db.js";

export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products')
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong"
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
      message: "Product not found"
    })
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong"
    })
  }
}

export const createProduct = async (req, res) => {
  const { name, image, price } = req.body;
  try {
    const [rows] = await pool.query('INSERT INTO products (name,image,price) VALUES (?,?,?)', [name, image, price]);
    res.send({
      id: rows.insertId,
      name,
      image,
      price
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong"
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, price } = req.body;
  try {
    const [result] = await pool.query('UPDATE products SET name = IFNULL(?,name),image = IFNULL(?,image),price = IFNULL(?,price) WHERE id = ?', [name, image, price, id]);
    console.log(result);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Product not found"
      })
    }
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id])
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong"
    })
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM products WHERE id=?;', [req.params.id]);

    if (result.affectedRows <= 0) return res.status(404).json({
      message: "Product not found"
    })
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong"
    })
  }
};