import {model,Schema} from 'mongoose';

const SchoolSchema = new Schema({
    school_name: String,
    location: {
        city: String,
        street_address: String,
    },
    phone_number: String,
    email: String,
    studentCount: Number,
    awards: [String],
    comments: [String],
    classProfiles: [String]
})

export const School = model('School', SchoolSchema);