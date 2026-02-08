import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    title: string;
    slug: string;
    category: 'Short-Form' | 'Motion Graphics' | 'YouTube' | 'Automation';
    projectType: 'Personal' | 'Practice' | 'Client';
    thumbnailUrl: string;
    videoUrl?: string; // For detail page
    description: string;
    skills: string[]; // e.g., ["Pacing", "Sound Design"]
    tools: string[]; // e.g., ["After Effects", "Premiere"]
    featured: boolean;
    // SEO fields
    metaTitle?: string; // Custom SEO title (defaults to title)
    metaDescription?: string; // Custom SEO description
    keywords?: string[]; // SEO keywords for this project
    createdAt: Date;
    updatedAt: Date;
}

const ProjectSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: {
        type: String,
        required: true,
        enum: ['Short-Form', 'Motion Graphics', 'YouTube', 'Automation']
    },
    projectType: {
        type: String,
        required: true,
        enum: ['Personal', 'Practice', 'Client'],
        default: 'Personal'
    },
    thumbnailUrl: { type: String, required: true },
    videoUrl: { type: String },
    description: { type: String, required: true },
    skills: [{ type: String }],
    tools: [{ type: String }],
    featured: { type: Boolean, default: false },
    // SEO fields
    metaTitle: { type: String },
    metaDescription: { type: String },
    keywords: [{ type: String }],
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
