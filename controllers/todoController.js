var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connnect to mongoDb
mongoose.connect('mongodb+srv://test:test@todo.b5e6n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// schema
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);


var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){

    app.get('/', function(req,res){
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo', {todos: data});
        });
        
    });

    app.post('/', urlencodedParser,function(req,res){
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
        
    });

    app.delete('/:item', function(req,res){
        var data2 = req.params.item.trim();
        Todo.find({item: data2}).deleteOne(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });
};
