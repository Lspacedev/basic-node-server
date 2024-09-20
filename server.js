const http = require("http");

let countries = [{ name: "South Africa" }, { name: "Botswana" }];
const server = http.createServer((req, res) => {
  let endPoint = req.url;
  let method = req.method;
  req.on("error", (err) => {
    console.error(err);
  });
  if (endPoint === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(`<h1>Welcome to World Data</h1>
      <h4>Visit the following endpoints to get and modify data:</h4>
      <a href="/countries">/countries</a>
       <a href="/add">/add</a>
        <a href="/update">/update</a>
         <a href="/delete">/delete</a>
      `);
    res.end();
  } else if (endPoint === "/countries" && method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    res.write(JSON.stringify(countries));
    res.end();
  } else if (endPoint === "/add" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(`
      <h4>Add country</h4>
      <form method="POST" action="/add">
        <input type="text" name="country"/>
        <input type="submit" value="send"/>
      </form>
      `);
    res.end();
  } else if (endPoint === "/add" && method === "POST") {
    //POST
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      let country_name = getInputValue(body);
      console.log(country_name);
      //add country
      countries.push({ name: country_name });
    });
    res.writeHead(301, { Location: "http://localhost:3000/countries" });
    res.end();
  } else if (endPoint === "/delete" && method === "GET") {
    //DELETE
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(`
      <h4>Delete country</h4>
      <form method="POST" action="/delete">
        <input type="text" name="country"/>
        <input type="submit" value="send"/>
      </form>
      `);
    res.end();
  } else if (endPoint === "/delete" && method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      let country_name = getInputValue(body);
      let fCountries = countries.filter(
        (country) => country.name !== country_name
      );
      countries = fCountries;
    });
    // res.writeHead(301, { Location: "http://localhost:3000/countries" });
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(`<p>Deleted Country</p>`);
    res.end();
  } else if (endPoint === "/update" && method === "GET") {
    //UPDATE
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(`
      <h4>Update country</h4>
      <form method="POST" action="/update">
         <input type="text" name="toUpdate" placeholder="country to update"/>
        <input type="text" name="country"/>
        <input type="submit" value="send"/>
      </form>
      `);
    res.end();
  } else if (endPoint === "/update" && method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      console.log(body);
    });
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(`<p>Updated Country</p>`);
    // res.writeHead(301, { Location: "http://localhost:3000/countries" });

    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(`<p>Route doesn't exist</p>`);
    res.end();
  }
});

function getInputValue(str) {
  let val = str.substring(str.indexOf("=") + 1);
  return val;
}

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
