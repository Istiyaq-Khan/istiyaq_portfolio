import mongoose, { Schema, Document } from 'mongoose';

export interface IContactSubmission extends Document {
    name: string;
    email: string;
    projectType: string;
    message: string;
    read: boolean;
    createdAt: Date;
}

const ContactSubmissionSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    projectType: { type: String, required: false },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.ContactSubmission || mongoose.model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);
