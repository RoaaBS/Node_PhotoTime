import{Schema,model,mongoose} from"mongoose";
const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
        min:3,
        max:50
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    confirmEmail: {
        type: Boolean,
        default: false
    },
    password:{
        type:String,
        required:true,
        min:4
    },
    role:{
        type:String,
        default:'user',
        enum:['admin','user','superAdmin']
     },
     status:{
        type:String,
        enum:['active','not_active']
     },
     sendCode: {
        type: String
    }
},
{
    timestamps:true,
});
const userModel =  mongoose.models.User||model('User',userSchema);
    export default userModel;