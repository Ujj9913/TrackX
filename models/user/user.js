userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    email_verify: {
        type: Boolean,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    temp: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date      
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
    // time_zone: {
    //     type: Date,
    //     default: new Date()
    // },
    country_code: {
        type: String,
        default: "+91"
    },
    number: {
        type: String,
        default: ""
    },
    skype_name: {
        type: String,
        default: ""
    },
    profile_img: {
        type: String,
        default: ""
    },
})

const userModal = mongoose.model('user', userSchema);
module.exports = userModal;