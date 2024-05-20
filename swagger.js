const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "LAW DIRECTORY API",
    description:
      "This API is used to keep track of all customers and status of each customer",
  },
  host: "localhost:3000",
  schema: ["https", "http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
