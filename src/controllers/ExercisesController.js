'use strict'
var db = require('../config/database');

class ExercisesController {

    //Get a list with all objects from the database
    static index(req, res) {
        var sql = "select * from exercise"
        db.all(sql, (err, exercises) => {
            if (err) {
                res.status(500).json({ 'error': err.message });
                return;
            }
            res.json(exercises)
        });
    }

    //Creates a new object in the database
    static create(req, res) {
        const { title, description, img, leftColor, rightColor } = req.body
        const SQL = 'INSERT INTO exercise (title, description, img, leftColor, rightColor) VALUES (?,?,?,?,?)'
        const params = [title, description, img, leftColor, rightColor]
        db.run(SQL, params, function (err) {
            if (err) {
                res.status(500).json({ 'error': err.message })
                return;
            }
            req.body.id = this.lastID
            res.json({
                'exercise': req.body
            })
        })
    }

    //Read an specific object in the database
    static read(req, res){
        var sql = "select * from exercise where id = ?"

        db.get(sql, req.params.id, (err, exercise) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json({
                exercise
            })
        });
    }

    //Update an specific object in the database
    static update(req, res){
        const id=req.params.id;
        const { title, description, img, leftColor, rightColor } = req.body
        const SQL = "UPDATE exercise SET title=?, description=?, img=?, leftColor=?, rightColor=? WHERE id=?"
        const params = [title, description, img, leftColor, rightColor, id]
        db.run(SQL, params, function (err) {
            if (err){
                res.status(500).json({'error': err.message})
                return;
            }
            res.json({
                'exercise': req.body
            })
        })
    }

    //Delete an object form the database
    static delete(req, res){
        var sql = "delete from exercise where id = ?"

        db.run(sql, req.params.id, (err, exercise) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json({
                exercise
            })
        });
    }
}

module.exports = ExercisesController;
