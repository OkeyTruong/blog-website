const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
        title: {
            type:String,
            required:true,
            unique:true
        },
        desc:{
            type:String,
            required:true,
        },
        photo:{
            type:String,
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
        categories:{
            type:Array["life","music"],
            required:false,
        }
    },
    {timestamps:true}
)
mongoose.models = mongoose.model("User", PostSchema)