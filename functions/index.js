const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KosbGSB5FzrTimyg3YLnnmZkFfQzv5a5YUwvpYxKXHvrGcTR8P4KiTKCJAyGfmIs97lzHxHuCZGohIbicZ01kBA00t3UoqJsz"
);

//API

//App COnfig
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // send data in json format
//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved boom", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-3802e/us-central1/api
