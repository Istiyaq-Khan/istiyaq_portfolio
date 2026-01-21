import ProjectForm from '@/components/ProjectForm';

export default function NewProjectPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Create New Project</h1>
            <ProjectForm />
        </div>
    );
}
