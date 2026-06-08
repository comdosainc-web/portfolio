import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      title: "Computer Repair",
      description: "Expert repair services for desktops, laptops, and workstations. Hardware diagnostics, component replacement, virus removal, and performance optimization for all brands.",
      koreanDescription: "데스크톱, 노트북, 워크스테이션을 위한 전문 수리 서비스. 하드웨어 진단, 부품 교체, 바이러스 제거, 모든 브랜드의 성능 최적화.",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["PC Repair", "Hardware", "Software"],
      liveUrl: "#contact",
      githubUrl: "#contact",
    },
    {
      title: "Mac Repair & Support",
      description: "Comprehensive MacBook and iMac repair services including logic board repair, screen replacement, and system optimization. Quick turnaround with warranty.",
      koreanDescription: "로직보드 수리, 화면 교체, 시스템 최적화를 포함한 포괄적인 MacBook 및 iMac 수리 서비스. 빠른 처리와 보증 제공.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Mac Repair", "Hardware"],
      liveUrl: "#contact",
      githubUrl: "#contact",
    },
    {
      title: "Data Recovery Services",
      description: "Professional data recovery from failed hard drives, corrupted storage devices, and damaged systems. Secure and confidential handling of your important files.",
      koreanDescription: "실패한 하드 드라이브, 손상된 저장 장치, 손상된 시스템에서 전문적인 데이터 복구. 중요한 파일의 안전하고 기밀적인 처리.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Data Recovery", "Storage"],
      liveUrl: "#contact",
      githubUrl: "#contact",
    },
    {
      title: "Business IT Support",
      description: "Complete IT support solutions for small to medium businesses including network setup, system maintenance, and technical consulting services.",
      koreanDescription: "네트워크 설정, 시스템 유지보수, 기술 컨설팅 서비스를 포함한 중소기업을 위한 완전한 IT 지원 솔루션.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["IT Support", "Consulting"],
      liveUrl: "#contact",
      githubUrl: "#contact",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services / 서비스</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional computer repair and technical support solutions
            <br />
            전문적인 컴퓨터 수리 및 기술 지원 솔루션
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                  {service.koreanDescription && (
                    <>
                      <br /><br />
                      {service.koreanDescription}
                    </>
                  )}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={service.liveUrl}
                      className="text-primary hover:text-primary/80 transition-colors duration-300 flex items-center space-x-1"
                    >
                      <ExternalLink size={16} />
                      <span>Get Quote / 견적</span>
                    </a>
                    <a
                      href={service.githubUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center space-x-1"
                    >
                      <Github size={16} />
                      <span>Learn More / 자세히</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
            Contact Us Today / 오늘 연락하세요
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
