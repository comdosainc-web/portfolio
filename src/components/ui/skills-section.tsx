import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Network, Cpu, Wrench } from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      icon: Wrench,
      title: "Hardware Repair & Assembly",
      description: "Laptops, Desktops, MacBoards, and Custom PC building.",
      korean: "데스크톱/노트북 수리, 맥북 로직보드 수리, 맞춤형 컴퓨터 조립 및 판매"
    },
    {
      icon: Server,
      title: "Server & NAS Infrastructure",
      description: "Synology NAS installation, Windows/Linux server deployment, Veeam backups.",
      korean: "Synology NAS 설치 구축, 서버 인프라 지원 및 Veeam 백업 시스템 관리"
    },
    {
      icon: Network,
      title: "Network Construction",
      description: "Router DNS configuration, LAN cabling, and corporate network security.",
      korean: "라우터 DNS 설정 변경, 구내 배선 네트워크 구축 및 고성능 보안망 설계"
    },
    {
      icon: Cpu,
      title: "IT Maintenance & Support",
      description: "QuickBooks Enterprise migration, remote technical support via RustDesk.",
      korean: "QuickBooks 데이터 마이그레이션, RustDesk 원격 지원 및 정기 IT 유지보수"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Expertise / 보유 기술</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            전문적인 기술력과 다년간의 노하우로 확실한 컴퓨터 서비스를 제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border shadow-sm flex items-start space-x-4"
            >
              <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                <skill.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{skill.description}</p>
                <p className="text-sm font-medium text-primary">{skill.korean}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
