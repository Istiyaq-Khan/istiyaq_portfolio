import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    title: string;
    slug: string;
    category: 'Short-Form' | 'Motion Graphics' | 'YouTube' | 'Automation';
    thumbnailUrl: string;
    videoUrl?: string; // For detail page
    description: string;
    skills: string[]; // e.g., ["Pacing", "Sound Design"]
    tools: string[]; // e.g., ["After Effects", "Premiere"]
    featured: boolean;
    createdAt: Date;
}

const ProjectSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: {
        type: String,
        required: true,
        enum: ['Short-Form', 'Motion Graphics', 'YouTube', 'Automation']
    },
    thumbnailUrl: { type: String, required: true },
    videoUrl: { type: String },
    description: { type: String, required: true },
    skills: [{ type: String }],
    tools: [{ type: String }],
    featured: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
