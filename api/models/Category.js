const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
)
mongoose.models = mongoose.model("User", CategorySchema)