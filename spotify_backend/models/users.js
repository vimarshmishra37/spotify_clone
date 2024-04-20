
const plm=require("passport-local-mongoose");
const mongoose=require("mongoose");
const userschema=mongoose.Schema({
 firstname:{
    type:String,
    required:true
 },
 lastname:{
    type:String,
   
 },
 username:{
    type:String,
     },
 password:{
    type:String,
   
 },
 email :{
    type:String,
    
 },
 likedSongs:
 [{
    type:String

 }],
 likedPlaylists: 
 [{
    type:String

 }],
 subscribedArtists:
 [{
  type:String

}],
}); mongodb://localhost:27017
userschema.plugin(plm);
module.exports=mongoose.model("user",userschema) 