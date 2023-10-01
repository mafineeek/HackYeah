import {model, Schema} from 'mongoose';

const UserSchema = new Schema({
    email: String,
    password: String,
    displayName: String,
    banned: Boolean
})

export const User = model('User', UserSchema);