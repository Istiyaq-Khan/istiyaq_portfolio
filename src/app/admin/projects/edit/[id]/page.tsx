import ProjectForm from '@/components/ProjectForm';
import connectToDatabase from '@/lib/db';
import Project from '@/models/Project';

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
    await connectToDatabase();
    const { id } = await params;
    const project = await Project.findById(id).lean();

    if (!project) {
        return <div>Project not found</div>;
    }

    // Serialize _id and dates
    const serializedProject = {
        ...project,
        _id: project._id.toString(),
        createdAt: project.createdAt?.toISOString(),
        updatedAt: project.updatedAt?.toISOString(),
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Edit Project</h1>
            <ProjectForm initialData={serializedProject} />
        </div>
    );
}
