const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "My Item API",
    description: "An API to show item data",
  },
  host: "https://itemapi.onrender.com",
  schemes: ["https"],
};

const outputfile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

//Run to
swaggerAutogen(outputfile, endpointFiles, doc);

//generate swagger.json
swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
  await import("./server.js");
});
