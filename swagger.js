const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "LAW DIRECTORY API",
    description:
      "This API is used to keep track of all customers and status of each customer",
  },
  host: "law-directory.onrender.com",
  schema: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
