import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import "../../Button/Button.css";
import "../../Footer/Footer.css";
import { useInView } from "react-intersection-observer";
import ChatBot from '../../ChatBot/ChatBot';

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <ServicesSection />
      <OurCompany />
      <StatsSection />
      <SuccessStoriesSection />
      <ProductsSection />
      <WorkflowSection />
      <ContactCTASection />
      <ChatBot />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="floating-tech-elements">
        <div className="tech-circle"></div>
        <div className="tech-circle"></div>
      </div>
      
      <motion.div
        className="hero-content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>Empowering Businesses Through Digital Innovation</h1>
        <p>Transform your business with cutting-edge technology solutions that drive growth and efficiency.</p>
        <motion.button 
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <img src="./assets/hero.png" alt="hero" />
      </motion.div>
    </div>
  );
}

function ServicesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const services = [
    {
      img: "./assets/ux.png",
      title: "Visual Design",
      alt: "Visual Design",
      description: "Transform your ideas into stunning visual experiences. Our design team creates intuitive, user-friendly interfaces that captivate and engage your audience."
    },
    {
      img: "./assets/app-development.png",
      title: "Development",
      alt: "Development",
      description: "Custom software solutions built with cutting-edge technologies. From web applications to mobile apps, we bring your vision to life."
    },
    {
      img: "./assets/laptop.png",
      title: "QA Testing",
      alt: "Testing",
      description: "Ensure flawless performance with our comprehensive testing services. We identify and eliminate issues before they reach your users."
    },
    {
      img: "./assets/it-manager.png",
      title: "IT Management",
      alt: "IT",
      description: "Streamline your IT operations with our expert management services. We handle the technology so you can focus on your business."
    },
    {
      img: "./assets/cyber-security.png",
      title: "Cyber Security",
      alt: "security",
      description: "Protect your digital assets with our advanced security solutions. We implement robust measures to keep your data safe and secure."
    },
    {
      img: "./assets/telecommunication.png",
      title: "Wireless Connectivity",
      alt: "wireless",
      description: "Stay connected with reliable wireless solutions. We design and implement networks that keep your business running smoothly."
    }
  ];

  return (
    <div className="services" ref={ref}>
      <h3>Services</h3>
      <h1>Our services include:</h1>
      <motion.div 
        className="services-list"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service"
            variants={itemVariants}
          >
            <img src={service.img} alt={service.alt} />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    projects: 0,
    partners: 0,
    years: 0,
    countries: 0,
  });

  useEffect(() => {
    if (inView) {
      const incrementCounts = () => {
        setCounts((prevCounts) => ({
          projects: Math.min(prevCounts.projects + 1, 150),
          partners: Math.min(prevCounts.partners + 1, 50),
          years: Math.min(prevCounts.years + 1, 10),
          countries: Math.min(prevCounts.countries + 1, 20),
        }));
      };

      const interval = setInterval(incrementCounts, 20);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div className="stats-section" ref={ref}>
      <h3>Our Achievements</h3>
      <div className="stats-list">
        <div className="stat">
          <h4>Projects Undertaken</h4>
          <p>{counts.projects}+</p>
        </div>
        <div className="stat">
          <h4>Partners</h4>
          <p>{counts.partners}+</p>
        </div>
        <div className="stat">
          <h4>Years in Business</h4>
          <p>{counts.years}+</p>
        </div>
        <div className="stat">
          <h4>Countries Served</h4>
          <p>{counts.countries}+</p>
        </div>
      </div>
    </div>
  );
}
 
function OurCompany() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div className="company" ref={ref}>
      <div className="our-company">
        <motion.div
          className="company-section"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3>Our Company</h3>
          <h1>Innovative tech Helping Service All Over the World</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.
          </p>
          <button className="button">Learn More</button>
        </motion.div>

        <motion.div
          className="company-image-container"
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="image-background"></div>
          <div className="image-frame">
            <img src="./assets/company.jpg" alt="company" />
          </div>
          <div className="floating-shape"></div>
          <div className="floating-dots"></div>
        </motion.div>
      </div>
    </div>
  );
}

function SuccessStoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      title: "Digital Transformation",
      client: "TechCorp Industries",
      description: "Revolutionized their legacy systems with cloud integration, resulting in 40% improved efficiency.",
      image: "./assets/success1.jpg"
    },
    {
      title: "E-Commerce Evolution",
      client: "Global Retail Co",
      description: "Developed a scalable platform handling 10,000+ concurrent users, boosting sales by 200%.",
      image: "./assets/success2.jpg"
    },
    {
      title: "Security Enhancement",
      client: "FinTech Solutions",
      description: "Implemented cutting-edge security protocols, achieving zero breaches in 24 months.",
      image: "./assets/success3.jpg"
    }
  ];

  return (
    <div className="success-stories">
      <div className="success-overlay">
        <h3>Success Stories</h3>
        <h1>Transforming Businesses Worldwide</h1>
        
        <div className="slider-container">
          <motion.div 
            className="stories-slider"
            animate={{ 
              translateX: `-${currentSlide * 100}%` 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            {stories.map((story, index) => (
              <div className="story-card" key={index}>
                <h2>{story.title}</h2>
                <h4>{story.client}</h4>
                <p>{story.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="slider-controls">
          {stories.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const products = [
    {
      name: "PettyCash System",
      tagline: "Streamline Your Financial Operations",
      description: "An intelligent petty cash management solution that automates reconciliation, tracking, and reporting. Perfect for businesses looking to eliminate manual cash handling processes.",
      features: ["Automated Reconciliation", "Digital Receipts", "Real-time Tracking", "Audit Trails"],
      icon: "💰",
      color: "#4CAF50"
    },
    {
      name: "Garbage Collection App",
      tagline: "Smart Waste Management Solutions",
      description: "A comprehensive waste management platform connecting collectors with clients. Features real-time tracking, scheduling, and payment integration for efficient urban waste management.",
      features: ["Route Optimization", "Payment Integration", "Collection Scheduling", "Performance Analytics"],
      icon: "♻️",
      color: "#2196F3"
    },
    {
      name: "AfyChain",
      tagline: "Revolutionary NCD Care System",
      description: "An innovative healthcare platform focused on Non-Communicable Disease management. Connects patients, healthcare providers, and specialists in a seamless care ecosystem.",
      features: ["Patient Monitoring", "Treatment Tracking", "Healthcare Analytics", "Telemedicine Integration"],
      icon: "⚕️",
      color: "#E91E63"
    },
    {
      name: "Kintara",
      tagline: "Empowering Voices Against Violence",
      description: "A secure and anonymous platform for reporting gender-based violence. Provides support resources, connects victims with assistance, and helps track incident patterns.",
      features: ["Anonymous Reporting", "Resource Connection", "Emergency Assistance", "Data Analytics"],
      icon: "🛡️",
      color: "#9C27B0"
    },
    {
      name: "Biashara Track",
      tagline: "Complete Retail Management Solution",
      description: "An all-in-one MSME retail management system. Integrates inventory, sales, and financial management for seamless business operations.",
      features: ["Inventory Management", "POS Integration", "Financial Reports", "Stock Analytics"],
      icon: "🏪",
      color: "#FF9800"
    }
  ];

  return (
    <div className="products-section" ref={ref}>
      <motion.div 
        className="products-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h3>Our Products</h3>
        <h1>Innovative Solutions for Modern Challenges</h1>
      </motion.div>

      <div className="products-showcase">
        <motion.div 
          className="products-nav"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={`product-nav-item ${activeProduct === index ? 'active' : ''}`}
              onClick={() => setActiveProduct(index)}
              whileHover={{ scale: 1.05 }}
              style={{
                '--product-color': product.color
              }}
            >
              <span className="product-icon">{product.icon}</span>
              {product.name}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="product-details"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="product-content"
            style={{
              '--product-color': products[activeProduct].color
            }}
          >
            <h2>{products[activeProduct].name}</h2>
            <h4>{products[activeProduct].tagline}</h4>
            <p>{products[activeProduct].description}</p>
            <div className="product-features">
              {products[activeProduct].features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {feature}
                </motion.div>
              ))}
            </div>
            <motion.button 
              className="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function WorkflowSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const steps = [
    {
      title: "Discovery",
      description: "Initial consultation to understand your business needs and objectives",
      icon: "🎯",
    },
    {
      title: "Analysis",
      description: "Deep dive into requirements and technical feasibility assessment",
      icon: "📊",
    },
    {
      title: "Design",
      description: "Creating detailed solutions architecture and project roadmap",
      icon: "✏️",
    },
    {
      title: "Development",
      description: "Agile implementation with continuous feedback integration",
      icon: "💻",
    },
    {
      title: "Deployment",
      description: "Seamless delivery with comprehensive testing and support",
      icon: "🚀",
    }
  ];

  return (
    <div className="workflow-section" ref={ref}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h3>Our Process</h3>
        <h1>How We Deliver Excellence</h1>
      </motion.div>

      <div className="workflow-container">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="workflow-step"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="step-content">
              <span className="step-number">{(index + 1).toString().padStart(2, '0')}</span>
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="flow-arrow">→</div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ContactCTASection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div className="cta-section" ref={ref}>
      <div className="cta-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>
      
      <motion.div 
        className="cta-content"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's discuss how our innovative solutions can drive your success</p>
        
        <div className="cta-buttons">
          <motion.button 
            className="button primary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Meeting
          </motion.button>
          
          <motion.div 
            className="quick-contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span>or</span>
            <a href="tel:+1234567890">Call us: +123 456 7890</a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;

