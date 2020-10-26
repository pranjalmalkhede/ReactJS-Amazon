const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stripe = require("stripe")(process.env.SECRET_KEY);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//API
//app config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => {
  response.status(200).send("<h1>hello</h1>");
});

app.post("/payments/create", async (request, response) => {
  const { total } = request.query;

  console.log("payment received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
