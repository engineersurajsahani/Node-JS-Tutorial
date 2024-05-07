const express = require('express');
const db = require('./db');
const Employee = require('./models/Employee');
const bodyParse = require('body-parser');

const app = express();
app.use(bodyParse.json());

const PORT = 3000;

// Get all employees
app.get('/employee', async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get employee by id
app.get('/employee/:id', async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
        return res.status(404).send();
      }
      res.send(employee);
    } catch (error) {
      res.status(500).send(error);
    }
  });

// Create employee
app.post('/employee', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update employee by id
app.put('/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete employee by id
app.delete('/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.listen(PORT, function () {
    console.log("Server started...");
});

