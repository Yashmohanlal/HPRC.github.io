const { useEffect, useMemo, useState } = React;

const company = {
  phone: "+27 79 872 1793",
  email: "info@hprconsulting.co.za",
  location: "South Africa 🇿🇦",
  hours: "Mon-Fri: 08:00 - 17:00",
};

const services = [
  {
    title: "Health Product Guidance",
    text: "Guidance for registration and marketing of new health products in South Africa.",
    icon: "M12 5v14M5 12h14M7 7l10 10M17 7 7 17",
  },
  {
    title: "Quality Management Systems",
    text: "Development and implementation of quality management systems, with staff training aligned with global practice.",
    icon: "M5 21V5a2 2 0 0 1 2-2h8l4 4v14M9 13h6M9 17h6M15 3v5h5",
  },
  {
    title: "ISO Accreditation",
    text: "Gap analysis, SOP formulation, ISO implementation, quality manuals, site master files, and accreditation documentation.",
    icon: "M12 3l7 4v5c0 4.8-2.8 8.1-7 9-4.2-.9-7-4.2-7-9V7l7-4Zm-3 9 2 2 4-5",
  },
  {
    title: "Audit Preparation",
    text: "Guidance and preparation for regulatory audits.",
    icon: "M12 3a7 7 0 0 0-4 12.7V20h8v-4.3A7 7 0 0 0 12 3Zm-3 18h6M9 12h6",
  },
  {
    title: "Company Licence Registration",
    text: "Company licence registration with SAHPRA, SAPC and the Department of Health.",
    icon: "M4 21V3h12v18M16 9h4v12M8 7h4M8 11h4M8 15h4M9 21v-3h2v3M2 21h20",
  },
  {
    title: "Regulatory Advice",
    text: "Practical advice on regulatory frameworks for pharmaceutical and medical companies.",
    icon: "M21 11a8 8 0 0 1-8 8H7l-4 3V5a2 2 0 0 1 2-2h8a8 8 0 0 1 8 8ZM7 8h10M7 12h7",
  },
];

const processSteps = [
  "Audit your current regulatory position",
  "Map documentation and licence requirements",
  "Prepare submissions, SOPs, manuals, and quality files",
  "Support regulator readiness and ongoing compliance",
];

const faqs = [
  {
    question:
      "Where does my company fit within the medical device establishment framework?",
    answer:
      "If you manufacture, import, export, distribute, or wholesale medical devices, we can help you map a compliance pathway.",
  },
  {
    question:
      "How do I become compliant with government requirements to legally sell medicines?",
    answer:
      "You will need to obtain a licence, undergo inspections, and implement compliance standards. HPRC assists with documentation and provides guidance on pharmaceutical compliance for sale in South Africa.",
  },
  {
    question:
      "What standards do I have to comply with to sell pharmaceuticals or medical devices in South Africa?",
    answer:
      "You will need to comply with pharmaceutical practices such as GMP, GWP, and GCP, plus regulatory standards set by the regulator. For medical devices, the applicable ISO standards are required.",
  },
  {
    question: "Is my medical device establishment required to employ a pharmacist?",
    answer:
      "Medical device establishments must have an authorised representative who is a natural person responsible for the device on the market. The person should understand the devices and be accountable for them in the country, but does not have to be a qualified pharmacist.",
  },
  {
    question: "How do I report an adverse event or incident to SAHPRA?",
    answer:
      "SAHPRA has a pharmacovigilance unit that oversees adverse event and incident reporting. Recommended documents must be completed and submitted once the event or incident is identified.",
  },
  {
    question: "Do I need a registered pharmacist for a complementary medicine line?",
    answer:
      "Yes, regulation requires a qualified pharmacist to be employed by the pharmaceutical company to provide oversight of quality, safety and efficacy.",
  },
];

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function LogoMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src="./hprc-original-logo.png" alt="" />
    </span>
  );
}

function Brand({ onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick}>
      <LogoMark />
      <span className="brand-text">
        <strong>HPRC</strong>
        <span>Health Products Regulatory Consulting</span>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1181px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    const closeOnEscape = (event) => { if (event.key === "Escape") setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-meta">
            <span>
              Call <strong>{company.phone}</strong>
            </span>
            <span>{company.location}</span>
          </div>
          <div className="topbar-links">
            <span>{company.hours}</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </div>
      <header className="navbar">
        <div className="container nav-inner">
          <Brand onClick={closeMenu} />

          <nav id="main-menu" className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main menu">
            {["Home", "About", "Services", "Resources", "FAQs", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a className="btn btn-whatsapp mobile-whatsapp" href={`https://wa.me/${company.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              Message on WhatsApp
            </a>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary" href="#contact">
              Appointment
            </a>
            <a className="btn btn-whatsapp" href={`https://wa.me/${company.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
              Message on WhatsApp
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Toggle menu"
              aria-controls="main-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="menu-lines" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">Regulation Compliance Excellence</span>
          <h1>SAHPRA Licensing, Compliance &amp; Regulatory Affairs Consulting</h1>
          <p>
            Expert regulatory consulting for medical, pharmaceutical, and health
            product companies. HPRC helps you navigate compliance, approvals, and
            market access with clarity.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a className="btn btn-secondary" href="#services">
              Our services
            </a>
          </div>
        </div>
        <div className="hero-visual reveal tilt" aria-label="Health products regulatory visual">
          <div className="hero-photo">
            <img
              src="./qc-machinery.png"
              alt="Automated pharmaceutical quality control machinery"
            />
          </div>
          <div className="floating-chip chip-top">
            <span>SAHPRA</span>
            Registration support
          </div>
          <div className="floating-chip chip-bottom">
            <span>ISO 13485</span>
            Medical device readiness
          </div>
          <div className="orbit-ring">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="hero-strip">
        <div className="container">
          <div className="strip-item tilt">
            <strong>SAHPRA compliance</strong>
            <span>Registration, licensing, and regulator guidance.</span>
          </div>
          <div className="strip-item tilt">
            <strong>ISO support</strong>
            <span>ISO 9001 and ISO 13485 implementation documents.</span>
          </div>
          <div className="strip-item tilt">
            <strong>Led by a qualified pharmacist</strong>
            <span>Regulatory experience in medical device oversight.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container intro-grid">
        <div className="split-copy reveal">
          <span className="eyebrow">About HPRC</span>
          <h2>Practical regulatory insight for a complex market.</h2>
          <p>
            Health Products Regulatory Consulting was formed to assist medical and
            pharmaceutical companies in registering with statutory bodies in South
            Africa. The company is led by a qualified pharmacist with experience
            in the pharmaceutical regulatory industry, including exposure to
            SAHPRA inspectorate and law enforcement work during 2017–2018.
          </p>
          <p>
            HPRC helps medical companies in South Africa meet regulatory requirements
            and align with international standards, including ISO 9001 and
            ISO 13485, through affordable consultation and industry support.
          </p>
          <div className="feature-list">
            <div className="feature-pill">Medical device licensing</div>
            <div className="feature-pill">Product registration</div>
            <div className="feature-pill">Guideline formulation</div>
            <div className="feature-pill">Regulatory pharmacy insight</div>
          </div>
        </div>
        <div className="media-stack reveal tilt">
          <div className="photo-main">
            <img
              src="./production-line-products.png"
              alt="Pharmaceutical production line with medicine products"
            />
          </div>
          <div className="photo-card">
            <img
              src="./registration-products.png"
              alt="Medicine packaging, vials, and registration documents"
            />
          </div>
          <div className="stat-float">
            <strong>10+</strong>
            <span>years of regulatory experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our services</span>
          <h2>Compliance work made clearer, faster, and easier to act on.</h2>
          <p>
            HPRC supports the documentation, standards, licensing, and regulator
            submissions that allow medical and pharmaceutical companies to trade
            legally and appropriately in South Africa.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card reveal tilt" key={service.title}>
              <div className="service-top">
                <span className="service-icon">
                  <Icon path={service.icon} />
                </span>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process" id="resources">
      <div className="container process-grid">
        <div className="process-art reveal tilt">
          <div className="process-image process-image-large">
            <img
              src="./lab-samples.png"
              alt="Sterile pharmaceutical samples and laboratory instruments"
            />
          </div>
          <div className="process-spec-card">
            <strong>Regulator-ready</strong>
            <span>Files, licences, quality systems, and product pathways aligned before submission.</span>
          </div>
        </div>
        <div className="split-copy reveal">
          <span className="eyebrow">How HPRC helps</span>
          <h2>From Grey to Green: Compliance Made Clear.</h2>
          <p>
            The process is designed to be simple for busy teams: understand the
            product, identify the regulatory path, prepare the documents, and
            keep momentum through submission and inspection readiness.
          </p>
          <div className="timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-item" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="banner">
      <div className="banner-grid">
        <div className="banner-image">
          <img src="./vision-growth.png" alt="Health products, a quality checklist and a growing plant beside ascending steps, representing compliance and sustainable growth" loading="lazy" />
        </div>
        <div className="banner-copy reveal">
          <span className="eyebrow">Vision and goal</span>
          <h2>To empower health product businesses with expert regulatory guidance and practical quality management solutions that enable sustainable growth.</h2>
          <p>
            HPRC is committed to bridging the gap between regulatory requirements and
            business operations by providing practical, risk-based solutions that
            are tailored to each client's needs. Through regulatory expertise,
            QMS development and implementation, compliance support and continuous
            improvement, we help organisations move from uncertainty to clarity,
            from gaps to compliance, and from compliance to sustainable business
            performance.
          </p>
          <div className="metrics">
            <div className="metric">
              <strong>100+</strong>
              <span>Clients</span>
            </div>
            <div className="metric">
              <strong>10k+</strong>
              <span>cups of coffee</span>
            </div>
            <div className="metric">
              <strong>6</strong>
              <span>core services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs">
      <div className="container faq-grid">
        <div className="section-head reveal">
          <span className="eyebrow">FAQs</span>
          <h2>Answers before the first call.</h2>
          <p>
            These are some of the questions HPRC is frequently asked. For guidance specific to your company, book an appointment and the team will help you map
            the best next step.
          </p>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <article className={`faq-item ${openIndex === index ? "open" : ""}`} key={faq.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                <span aria-hidden="true">{openIndex === index ? "-" : "+"}</span>
              </button>
              <div className="faq-answer">{faq.answer}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const serviceOptions = useMemo(() => services.map((service) => service.title), []);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Appointment request from ${data.get("name")}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Email: ${data.get("email")}`,
        `Company: ${data.get("company")}`,
        `Service: ${data.get("service")}`,
        `Preferred date: ${data.get("date")}`,
      ].join("\n"),
    );

    if (event.nativeEvent.submitter?.value === "whatsapp") {
      const phone = company.phone.replace(/\D/g, "");
      setStatus("Opening WhatsApp with your appointment details. Review the message before sending.");
      window.open(`https://wa.me/${phone}?text=${body}`, "_blank", "noopener,noreferrer");
    } else {
      setStatus("Opening your email app with the appointment details.");
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Book an appointment</span>
          <h2>Share your details and let HPRC guide your path to compliance.</h2>
          <p>
            For urgent enquiries, call us. Otherwise, use the form to prepare an email or WhatsApp message
            with your appointment details and selected service.
          </p>
        </div>
        <div className="contact-grid">
          <aside className="contact-panel reveal tilt">
            <img className="contact-photo" src="./contact-products.png" alt="Health products and pharmaceutical laboratory equipment" loading="lazy" />
            <div className="contact-details">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                <strong>Call us</strong>
                <span>{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`}>
                <strong>Email</strong>
                <span>{company.email}</span>
              </a>
              <div>
                <strong>Location</strong>
                <span>{company.location}</span>
              </div>
              <div>
                <strong>Hours</strong>
                <span>{company.hours}</span>
              </div>
            </div>
          </aside>
          <form className="form-panel reveal tilt" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name and surname</label>
                <input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" name="phone" autoComplete="tel" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" name="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" autoComplete="organization" />
              </div>
              <div className="field full">
                <label htmlFor="service">Service needed</label>
                <select id="service" name="service">
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="date">Preferred date</label>
                <input id="date" name="date" type="date" />
              </div>
            </div>
            <div className="appointment-actions">
              <button className="btn btn-primary" type="submit" name="channel" value="email">
                Prepare appointment email
              </button>
              <button className="btn btn-whatsapp" type="submit" name="channel" value="whatsapp">
                Message on WhatsApp
              </button>
            </div>
            <p className="form-status" role="status">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand />
            <p>
              Qualified regulatory support for medical, pharmaceutical, and
              health product companies operating in South Africa.
            </p>
          </div>
          <div>
            <h3>Quick menu</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact details</h3>
            <ul>
              <li>{company.phone}</li>
              <li>{company.location}</li>
              <li>{company.hours}</li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Health Products Regulatory Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main className="site">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Vision />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
