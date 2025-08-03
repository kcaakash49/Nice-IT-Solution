import { motion, Variants } from "framer-motion";
import { useSafeInViewHook } from "../hooks/useSafeInViewHook"; // adjust path if needed

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
    },
};

// const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 20, scale: 0.98 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: { type: "spring", stiffness: 120, damping: 16 },
//     },
// };

// const containerVariants: Variants = {
//     hidden: {},
//     visible: {
//         transition: {
//             staggerChildren: 0.15,
//             delayChildren: 0.1,
//         },
//     },
// };

const smoothRiseVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 22,
            mass: 1,
            restDelta: 0.001,
        },
    },
};


export default function AboutPage() {
    const { ref: heroRef, inView: heroInView } = useSafeInViewHook({ threshold: 0.25 });
    const { ref: timelineRef1, inView: inView1 } = useSafeInViewHook({ threshold: 0.2 });
    const { ref: timelineRef2, inView: inView2 } = useSafeInViewHook({ threshold: 0.2 });
    const { ref: timelineRef3, inView: inView3 } = useSafeInViewHook({ threshold: 0.2 });
    const { ref: whyRef, inView: whyInView } = useSafeInViewHook({ threshold: 0.2 });

    return (
        <div className="bg-gray-50 dark:bg-[#0f172a] text-gray-800 dark:text-gray-200">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div ref={heroRef} className="max-w-6xl mx-auto px-6 py-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-extrabold mb-6"
                    >
                        About <span className="text-indigo-600">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300"
                    >
                        We began our journey in 2022, first as a dedicated trading company delivering high-quality networking products across Nepal. Over time, we expanded our vision, adding comprehensive IT services to our portfolio, driven by a passion for innovation, reliability, and client success.
                    </motion.p>
                </div>
            </section>

            {/* Timeline / Story */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="relative border-l-4 border-indigo-500 pl-8 space-y-12">
                    <motion.div ref={timelineRef1} initial="hidden" animate={inView1 ? "visible" : "hidden"} variants={fadeUp}>
                        <h3 className="text-2xl font-bold text-indigo-600">2022 – Our Beginning</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Founded in 2022, we started as a trading company specializing in premium networking equipment. From fiber optic cables to advanced networking tools, we served resellers, ISPs, and businesses with high-quality products at competitive prices.
                        </p>
                    </motion.div>

                    <motion.div
                        ref={timelineRef2}
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        variants={fadeUp}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-indigo-600">Expansion into IT Services</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            As our team grew, so did our expertise. We recognized the need for reliable IT solutions alongside networking products. Today, we offer managed infrastructure, network setup & monitoring, security audits, backup solutions, and custom IT consulting tailored for SMEs.
                        </p>
                    </motion.div>

                    <motion.div
                        ref={timelineRef3}
                        initial="hidden"
                        animate={inView3 ? "visible" : "hidden"}
                        variants={fadeUp}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-indigo-600">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            To bridge the gap between quality technology products and expert services in Nepal, ensuring our clients experience seamless connectivity, efficient systems, and peace of mind.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section ref={whyRef} className="bg-white dark:bg-[#1e293b] py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={whyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-bold mb-10"
                    >
                        Why Choose Us
                    </motion.h2>

                    <motion.div
                        variants={smoothRiseVariants}
                        initial="hidden"
                        animate={whyInView ? "visible" : "hidden"}
                        className="grid md:grid-cols-3 gap-10"
                    >
                        {[
                            {
                                title: "Experienced Team",
                                desc: "Our professionals bring years of hands-on experience in networking, IT support, and consulting.",
                            },
                            {
                                title: "Quality Assurance",
                                desc: "Every product and service is tested, validated, and optimized for maximum performance.",
                            },
                            {
                                title: "Customer Focus",
                                desc: "We believe in building long-term partnerships through trust, transparency, and results.",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-gray-100 dark:bg-[#0f172a] p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                                whileHover={{ y: -6, scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            >
                                <h3 className="text-xl font-semibold mb-3 text-indigo-600">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
