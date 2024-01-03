const express=require("express");
const requestCounter = {};
const { connection } = require("./config");
const cors=require("cors");
const mongoose=require("mongoose");
const { todorouter } = require("./route");
const { userrouter } = require("./user");
const { authantication } = require("./authantication");
const app=express();

// index file 

const rateLimiter = (req, res, next) => {
    // Set the maximum number of requests allowed per minute
    const maxRequests = 5;
  
    // Get the IP address of the client making the request
    const clientIP = req.ip;
  
    // Create a key based on the client IP and current timestamp
    const key = `${clientIP}:${Math.floor(Date.now() / 60000)}`;
  
    // Check if the client has exceeded the maximum number of requests
    if (requestCounter[key] && requestCounter[key] >= maxRequests) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
  
    // Increment the request counter for the current key
    requestCounter[key] = (requestCounter[key] || 0) + 1;
  
    // Set a timer to reset the request counter after one minute
    setTimeout(() => {
      requestCounter[key] -= 1;
      if (requestCounter[key] === 0) {
        delete requestCounter[key];
      }
    }, 60000);
  
    // Move to the next middleware or route handler
    next();
  };
  
  // Use the rate limiter middleware for all routes
  app.use(rateLimiter);
  



require("dotenv").config();
const port=process.env.port;

app.get("/",(req,res)=>{
    res.send("home page");
})

app.use(cors())
app.use(express.json());
app.use("/users",userrouter);
app.use(authantication);
app.use("/todo",todorouter);









app.listen(port,async()=>{
    console.log(`port ${port}`);  
    })
