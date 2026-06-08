import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "comdosainc@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(213) 247-9848",
      color: "secondary",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "California, USA",
      color: "accent",
    },
    {
      icon: Clock,
      title: "Store Hours / 운영시간",
      value: "9AM - 6PM (Mon-Fri)",
      color: "primary",
    },
  ];



  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "secondary":
        return "bg-secondary/10 text-secondary";
      case "accent":
        return "bg-accent/10 text-accent";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message sent! / 메시지가 전송되었습니다!",
      description: "Thank you for your message. We'll get back to you soon. / 메시지를 보내주셔서 감사합니다. 곧 연락드리겠습니다.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Work Together / 함께 일해요</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need computer repair or technical support? Contact Comdosa today for professional service you can trust.
            <br />
            컴퓨터 수리나 기술 지원이 필요하신가요? 믿을 수 있는 전문 서비스를 위해 오늘 Comdosa에 연락하세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">Get In Touch / 연락하기</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(info.color)}`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.title}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 shadow-lg border"
          >
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-card-foreground mb-2">
                    Full Name / 성함
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name / 성함을 입력하세요"
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-card-foreground mb-2">
                    Email Address / 이메일 주소
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com / 이메일을 입력하세요"
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-card-foreground mb-2">
                    Subject / 제목
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Computer repair inquiry / 컴퓨터 수리 문의"
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-card-foreground mb-2">
                    Message / 메시지
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Describe your computer issue or repair needs... / 컴퓨터 문제나 수리 요청사항을 설명해주세요..."
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:opacity-70"
                >
                  {isSubmitting ? "Sending... / 전송 중..." : "Send Message / 메시지 보내기"}
                  <Send className="ml-2" size={20} />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
