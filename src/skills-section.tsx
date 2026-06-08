import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: "1000+", label: "Devices Repaired" },
    { number: "500+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Comdosa / 회사 소개</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            California's trusted computer repair and technical support company
            <br />
            캘리포니아의 신뢰받는 컴퓨터 수리 및 기술 지원 회사
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                Comdosa has been serving California for over 15 years, helping thousands of customers solve their technology challenges. Our company was founded with a passion for understanding how computers work and helping businesses and individuals get the most out of their devices.
                <br /><br />
                Comdosa는 15년 넘게 캘리포니아에서 서비스를 제공하며, 수천 명의 고객들이 기술적 문제를 해결하도록 도와왔습니다. 저희 회사는 컴퓨터 작동 원리에 대한 열정과 기업 및 개인이 기기를 최대한 활용할 수 있도록 돕고자 하는 마음으로 설립되었습니다.
              </p>
              <p className="mb-6">
                We specialize in Mac repair, hardware diagnostics, software troubleshooting, and data recovery. Comdosa has built a reputation for reliable service, quick turnaround times, and honest pricing. Whether it's a simple software issue or complex hardware repair, our team approaches every case with expertise and care.
                <br /><br />
                저희는 맥 수리, 하드웨어 진단, 소프트웨어 문제 해결, 데이터 복구를 전문으로 합니다. Comdosa는 신뢰할 수 있는 서비스, 빠른 처리 시간, 정직한 가격으로 명성을 쌓아왔습니다. 간단한 소프트웨어 문제든 복잡한 하드웨어 수리든, 저희 팀은 모든 경우에 전문성과 정성으로 접근합니다.
              </p>
              <p>
                Our commitment extends beyond repairs - we stay up-to-date with the latest technology trends, continuously train our technicians on new repair techniques, and help customers understand how to better maintain their devices.
                <br /><br />
                저희의 헌신은 수리를 넘어서 최신 기술 트렌드를 파악하고, 기술자들을 지속적으로 새로운 수리 기법에 대해 교육하며, 고객들이 기기를 더 잘 관리할 수 있도록 도움을 주는 것까지 확장됩니다.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Mac computer repair and diagnostic tools"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating achievement card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-lg max-w-xs border"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Award className="text-accent" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Certified Expert</div>
                  <div className="text-sm text-muted-foreground">Computer Technician</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
