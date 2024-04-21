const plm=require("passport-local-mongoose");
const mongoose=require("mongoose");
const Playlist=mongoose.Schema({
    name:{
        type:String,
      
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    url:{
        type:String,
     
    },
    thumbnail:{
        type:String,
  
    },
   songs :[{
       type:mongoose.Types.ObjectId,
       ref:"song"
   }],
   collaborators :[{
       type:mongoose.Types.ObjectId,
       ref:"user"
   }]
}); mongodb://localhost:27017
Playlist.plugin(plm);
module.exports=mongoose.model("Playlist", Playlist) 