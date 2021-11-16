
const Tasks = require('../models/task');

module.exports.home = function(req,res){
    Tasks.find({},function(err,tasks){
        if(err){
            console.log("error in fetching data from database",err);
            return;
        }
        return res.render('home',{
            title:"TO DO app",
            tasks_list:tasks
        });

    });
    
};


//function to formate the date
function getFormattedDate(date) {
    var date = new Date(date);
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }


module.exports.addTask = function(req,res){
    var date = getFormattedDate(req.body.date);
    Tasks.create(
        {
            title:req.body.task_title,
            description:req.body.task_description,
            category:req.body.category,
            dueDate:date
        },
        function(err,new_task){
            if(err){
                console.log("error in inserting data",err);
                return;
            }
            console.log("new added task",new_task);
            res.redirect('/');
        }
    );
}

module.exports.deleteTask = function(req,res){
    Tasks.findById(req.params.id,function(err,task){
        task.remove();
        console.log("task deleted successfully");
        res.redirect('/');
    })
}