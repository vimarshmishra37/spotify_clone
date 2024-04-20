
const plm=require("passport-local-mongoose");
const mongoose=require("mongoose");
/*
mongoose.connect("mongodb://127.0.0.1:27017/my_project"); */
const Song=mongoose.Schema({
    name:{
        type:String,
     
    },
    artist:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    album:{
        type:String,
     
    },
    url:{
        type:String,
      
    },
    thumbnail:{
        type:String,
   
    },
    duration:{
        type:String,
       
    }
}); mongodb://localhost:27017
Song.plugin(plm);
module.exports=mongoose.model("song",Song) 