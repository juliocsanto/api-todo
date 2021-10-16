// import express from 'express';
const express = require('express')
// import indexRouter from './routers/index';
const indexRouter = require('./routers/index')
// import todoRouter from './routers/todo';
const todoRouter = require('./routers/todo')
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/", indexRouter);
app.use("/todos", todoRouter);

module.exports = app;