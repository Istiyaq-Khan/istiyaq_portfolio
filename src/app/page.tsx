import Hero from '@/components/Hero';
import ServicesSnapshot from '@/components/ServicesSnapshot';
import WhyChooseMe from '@/components/WhyChooseMe';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ServicesSnapshot />
      <WhyChooseMe />

      {/* Future Note Section */}
      <section className="py-16 px-6 container mx-auto text-center border-t border-white/5">
        <p className="text-sm text-foreground/40 italic">
          Currently focused on video editing. Automation services coming soon.
        </p>
      </section>
    </div>
  );
}
