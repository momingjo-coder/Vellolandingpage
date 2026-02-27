import { motion } from 'motion/react';

export function TechStackMarquee() {
    const techStack = [
        { name: 'React', color: '#61DAFB' },
        { name: 'Vue.js', color: '#4FC08D' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Node.js', color: '#339933' },
        { name: 'Python', color: '#3776AB' },
        { name: 'Java', color: '#007396' },
        { name: 'Spring', color: '#6DB33F' },
        { name: 'AWS', color: '#FF9900' },
        { name: 'Google Cloud', color: '#4285F4' },
        { name: 'Docker', color: '#2496ED' },
        { name: 'Kubernetes', color: '#326CE5' },
        { name: 'Figma', color: '#F24E1E' },
        { name: 'Adobe XD', color: '#FF61F6' },
        { name: 'Swift', color: '#F05138' },
        { name: 'Kotlin', color: '#7F52FF' },
        { name: 'Flutter', color: '#02569B' },
        { name: 'MySQL', color: '#4479A1' },
        { name: 'MongoDB', color: '#47A248' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'GraphQL', color: '#E10098' },
    ];

    // Double the array to ensure seamless looping
    const doubledStack = [...techStack, ...techStack];

    return (
        <section className="py-12 bg-white border-y border-[#11b8a6]/10 overflow-hidden">
            <div className="flex flex-col gap-8">
                {/* Rolling Banner */}
                <div className="relative flex overflow-hidden">
                    <motion.div
                        className="flex whitespace-nowrap gap-12 py-2"
                        animate={{
                            x: [0, -1920], // Adjust based on content width
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {doubledStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#F8FAFC] border border-[#f1f5f9] shadow-sm hover:border-[#11b8a6]/20 transition-all group"
                            >
                                <div
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: tech.color }}
                                />
                                <span className="text-[15px] font-bold text-[#475569] group-hover:text-[#11b8a6] transition-colors font-[Paperozi]">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
