const db = require("../db/index");
const productTable = db.product;
const variantTable = db.variant;
const optionTable = db.option;
const valueTable = db.value;

const createTables = async (req, res) => {
  await productTable.create({
    product_name: "sample product",
  });

  await variantTable.create({
    variant_name: "sample variant",
    productId: "1",
  });

  await optionTable.create({
    option_name: "sample option",
    variantId: "1",
  });

  await valueTable.create({
    value_name: "sample value",
    optionId: "1",
  });

  res.send({
    success: "Data is inserted in database.",
  });
};
const findAll = async (req, res) => {
  //    const data = await productTable.findAll({
  //     include:variantTable
  //    })

  //     return res.send({
  //         success : data
  //     })

  const data2 = await variantTable.findAll({
    include: [
      {
        model: optionTable,
        include: [
          {
            model: valueTable,
          },
        ],
      },
    ],
  });

  res.send({
    success: data2,
  });
};
module.exports = {
  createTables,
  findAll,
};
