import { Navbar } from "./components/navbar/Navbar";
import { Services } from "./components/services/Services";
import { Products } from "./components/products/Products";
import { StartPage } from "./components/startpage/StartPage";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from './assets/logo.png'

interface AnimatedSectionProps {
  children: React.ReactNode;
}

function AnimatedSection({ children }: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const opacity = inView ? 1 : 0;
  const translateY = inView ? 0 : 50;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 5 }}
      animate={{ opacity, translateY }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <AnimatedSection>
        <section id="inicio">
          <StartPage />
        </section>
      </AnimatedSection>
      <FloatingWhatsApp 
        phoneNumber="+54 3644660035" 
        accountName="Pirela"
        avatar={avatar}
        chatMessage="Hola! Me alegra que quieras contactarnos, toca para hablar con nosotros"
        placeholder="Toca para abrir en whatsapp..."
        statusMessage="en linea"
      />
      <AnimatedSection>
        <section id="servicios">
          <Services />
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section id="productos">
          <Products />
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section id="contactos">
          <Contact />
        </section>
      </AnimatedSection>
      <Footer />
    </>
  );
}

export default App;
