import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Target,
  CheckSquare,
  BarChart3,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: <Users size={28} />,
      title: "Customer Management",
      text: "Manage customer profiles, company details, contact history, and status updates in one organized workspace.",
    },
    {
      icon: <Target size={28} />,
      title: "Lead Tracking",
      text: "Capture inquiries, monitor lead stages, and follow every opportunity from first contact to conversion.",
    },
    {
      icon: <CheckSquare size={28} />,
      title: "Task Follow-up",
      text: "Create follow-up tasks, manage priorities, and stay updated on pending customer activities.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Reports & Insights",
      text: "View summaries of revenue, leads, tasks, and customer progress using clean visual CRM cards.",
    },
  ];

  return (
    <section style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.heroLeft}>
          <span style={styles.badge}>New • Pipeline Automation 2.0</span>

          <h1 style={styles.title}>
            The CRM your <span style={styles.blueText}>sales team</span> will
            actually use.
          </h1>

          <p style={styles.subtitle}>
            Nexus CRM brings customers, leads, forms, follow-ups, and reports
            into a single professional workspace designed for faster business
            communication.
          </p>

          <div style={styles.actions}>
            <NavLink to="/dashboard" style={styles.primaryBtn}>
              View Dashboard <ArrowRight size={20} />
            </NavLink>

            <NavLink to="/customer-form" style={styles.secondaryBtn}>
              Add Customer
            </NavLink>
          </div>

          <div style={styles.stats}>
            <div>
              <h3 style={styles.statNumber}>12k+</h3>
              <p style={styles.statText}>Customers Managed</p>
            </div>
            <div>
              <h3 style={styles.statNumber}>98%</h3>
              <p style={styles.statText}>Follow-up Accuracy</p>
            </div>
            <div>
              <h3 style={styles.statNumber}>4.9★</h3>
              <p style={styles.statText}>UI Rating</p>
            </div>
          </div>
        </div>

        <div style={styles.heroRight}>
          <div style={styles.previewCard}>
            <div style={styles.previewTop}>
              <div>
                <p style={styles.previewLabel}>Monthly Revenue</p>
                <h2 style={styles.revenue}>$142,800</h2>
              </div>
              <span style={styles.growth}>▲ 12.4%</span>
            </div>

            <div style={styles.barChart}>
              {[40, 58, 46, 72, 50, 82, 62, 88, 66, 92, 74, 100].map(
                (height, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.bar,
                      height: `${height}%`,
                    }}
                  ></div>
                )
              )}
            </div>

            <div style={styles.previewGrid}>
              <div style={styles.previewBox}>
                <p style={styles.previewSmallText}>Leads</p>
                <h4 style={styles.previewValue}>87</h4>
              </div>
              <div style={styles.previewBox}>
                <p style={styles.previewSmallText}>Deals</p>
                <h4 style={styles.previewValue}>34</h4>
              </div>
              <div style={styles.previewBox}>
                <p style={styles.previewSmallText}>Tasks</p>
                <h4 style={styles.previewValue}>23</h4>
              </div>
            </div>
          </div>

          <div style={{ ...styles.floatingCard, ...styles.cardOne }}>
            <ShieldCheck size={20} />
            <span>Secure CRM Workflow</span>
          </div>

          <div style={{ ...styles.floatingCard, ...styles.cardTwo }}>
            <TrendingUp size={20} />
            <span>Sales Growth +24%</span>
          </div>
        </div>
      </div>

      <div style={styles.trustedStrip}>
        <p style={styles.trustedText}>Designed for modern business teams</p>
        <div style={styles.trustedItems}>
          <span style={styles.trustedBadge}>Sales</span>
          <span style={styles.trustedBadge}>Support</span>
          <span style={styles.trustedBadge}>Marketing</span>
          <span style={styles.trustedBadge}>Operations</span>
        </div>
      </div>

      <div style={styles.featuresSection}>
        <div style={styles.sectionHeading}>
          <h2 style={styles.sectionTitle}>Everything you need to grow revenue</h2>
          <p style={styles.sectionSubtitle}>
            A focused CRM toolkit built around how modern teams work.
          </p>
        </div>

        <div style={styles.featureGrid}>
          {features.map((feature, index) => (
            <div style={styles.featureCard} key={index}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureText}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.workflow}>
        <div>
          <span style={styles.workflowBadge}>CRM Workflow</span>
          <h2 style={styles.workflowTitle}>
            Simple process for managing customer relationships
          </h2>
          <p style={styles.workflowText}>
            This frontend proof project uses dummy data, but the layout
            represents a real CRM workflow used by business teams.
          </p>
        </div>

        <div style={styles.workflowSteps}>
          {[
            "Add customer details",
            "Track leads and inquiries",
            "Schedule follow-ups",
            "Review CRM reports",
          ].map((step, index) => (
            <div style={styles.workflowStep} key={index}>
              <div style={styles.stepNumber}>{index + 1}</div>
              <p style={styles.stepText}>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.cta}>
        <div>
          <h2 style={styles.ctaTitle}>Ready to organize your pipeline?</h2>
          <p style={styles.ctaText}>
            Jump into the dashboard and explore the CRM workspace.
          </p>
        </div>

        <NavLink to="/dashboard" style={styles.ctaBtn}>
          Open Dashboard <ArrowRight size={20} />
        </NavLink>
      </div>
    </section>
  );
}

const styles = {
  page: {
    width: "100%",
    background:
      "radial-gradient(circle at top left, rgba(30, 64, 175, 0.14), transparent 34%), linear-gradient(180deg, #eff6ff 0%, #f8fbff 45%, #ffffff 100%)",
  },

  hero: {
    width: "100%",
    minHeight: "760px",
    padding: "90px 70px 70px",
    display: "grid",
    gridTemplateColumns: "1.02fr 0.98fr",
    gap: "70px",
    alignItems: "center",
  },

  heroLeft: {
    maxWidth: "760px",
  },

  badge: {
    display: "inline-flex",
    padding: "9px 18px",
    borderRadius: "999px",
    background: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "15px",
    fontWeight: "800",
    marginBottom: "30px",
  },

  title: {
    fontSize: "76px",
    lineHeight: "1.08",
    letterSpacing: "-3.2px",
    color: "#07152f",
    fontWeight: "900",
    marginBottom: "28px",
  },

  blueText: {
    color: "#1d4ed8",
  },

  subtitle: {
    maxWidth: "720px",
    fontSize: "23px",
    lineHeight: "1.75",
    color: "#58677d",
    marginBottom: "34px",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "46px",
  },

  primaryBtn: {
    minHeight: "62px",
    padding: "0 34px",
    borderRadius: "13px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "20px",
    fontWeight: "850",
    background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
    color: "white",
    boxShadow: "0 16px 34px rgba(37, 99, 235, 0.28)",
    textDecoration: "none",
  },

  secondaryBtn: {
    minHeight: "62px",
    padding: "0 34px",
    borderRadius: "13px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "850",
    background: "white",
    color: "#07152f",
    border: "1px solid #dbe4f0",
    textDecoration: "none",
  },

  stats: {
    display: "flex",
    gap: "48px",
  },

  statNumber: {
    fontSize: "30px",
    color: "#07152f",
    fontWeight: "900",
  },

  statText: {
    color: "#64748b",
    fontSize: "16px",
    fontWeight: "700",
    marginTop: "4px",
  },

  heroRight: {
    position: "relative",
  },

  previewCard: {
    width: "100%",
    maxWidth: "760px",
    marginLeft: "auto",
    padding: "34px",
    background: "rgba(255, 255, 255, 0.96)",
    border: "1px solid #dbe6f3",
    borderRadius: "26px",
    boxShadow: "0 30px 70px rgba(15, 23, 42, 0.12)",
  },

  previewTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "28px",
  },

  previewLabel: {
    color: "#64748b",
    fontSize: "16px",
    fontWeight: "700",
  },

  revenue: {
    color: "#07152f",
    fontSize: "34px",
    fontWeight: "900",
    marginTop: "6px",
  },

  growth: {
    color: "#16a34a",
    fontSize: "16px",
    fontWeight: "900",
    marginTop: "18px",
  },

  barChart: {
    height: "210px",
    display: "flex",
    alignItems: "flex-end",
    gap: "16px",
    padding: "10px 0 0",
  },

  bar: {
    flex: 1,
    minWidth: "24px",
    borderRadius: "8px 8px 0 0",
    background: "linear-gradient(180deg, #436fe0, #0f7bdc)",
  },

  previewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    marginTop: "30px",
  },

  previewBox: {
    textAlign: "center",
    background: "#eaf2fb",
    borderRadius: "14px",
    padding: "17px",
  },

  previewSmallText: {
    color: "#64748b",
    fontWeight: "700",
  },

  previewValue: {
    fontSize: "23px",
    color: "#07152f",
    fontWeight: "900",
    marginTop: "4px",
  },

  floatingCard: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#07152f",
    color: "white",
    padding: "14px 18px",
    borderRadius: "16px",
    fontWeight: "800",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.25)",
  },

  cardOne: {
    left: "-12px",
    bottom: "42px",
  },

  cardTwo: {
    right: "12px",
    top: "-24px",
    background: "#1d4ed8",
  },

  trustedStrip: {
    margin: "0 70px",
    padding: "28px 36px",
    background: "#07152f",
    color: "white",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  trustedText: {
    fontSize: "18px",
    fontWeight: "800",
  },

  trustedItems: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },

  trustedBadge: {
    padding: "10px 18px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "999px",
    fontWeight: "750",
    color: "#dbeafe",
  },

  featuresSection: {
    padding: "95px 70px",
  },

  sectionHeading: {
    textAlign: "center",
    marginBottom: "60px",
  },

  sectionTitle: {
    fontSize: "48px",
    color: "#07152f",
    fontWeight: "900",
    letterSpacing: "-2px",
  },

  sectionSubtitle: {
    color: "#64748b",
    fontSize: "20px",
    marginTop: "14px",
    fontWeight: "650",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "28px",
  },

  featureCard: {
    background: "white",
    padding: "34px",
    minHeight: "250px",
    borderRadius: "20px",
    border: "1px solid #dde7f3",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
  },

  featureIcon: {
    width: "60px",
    height: "60px",
    background: "#dbeafe",
    color: "#1d4ed8",
    borderRadius: "15px",
    display: "grid",
    placeItems: "center",
    marginBottom: "28px",
  },

  featureTitle: {
    color: "#07152f",
    fontSize: "21px",
    fontWeight: "900",
    marginBottom: "14px",
  },

  featureText: {
    color: "#5f6f85",
    lineHeight: "1.6",
    fontSize: "16px",
    fontWeight: "650",
  },

  workflow: {
    margin: "0 70px 86px",
    padding: "48px",
    borderRadius: "28px",
    background: "linear-gradient(135deg, #08142e, #102f75)",
    color: "white",
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: "48px",
    alignItems: "center",
    boxShadow: "0 30px 60px rgba(15, 23, 42, 0.18)",
  },

  workflowBadge: {
    display: "inline-flex",
    padding: "9px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
    color: "#bfdbfe",
    fontSize: "15px",
    fontWeight: "800",
    marginBottom: "20px",
  },

  workflowTitle: {
    fontSize: "38px",
    lineHeight: "1.2",
    letterSpacing: "-1.4px",
    marginBottom: "18px",
  },

  workflowText: {
    color: "#dbeafe",
    fontSize: "18px",
    lineHeight: "1.7",
  },

  workflowSteps: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  workflowStep: {
    background: "rgba(255, 255, 255, 0.09)",
    border: "1px solid rgba(255, 255, 255, 0.16)",
    padding: "24px",
    borderRadius: "20px",
  },

  stepNumber: {
    width: "38px",
    height: "38px",
    background: "#3b82f6",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    fontWeight: "900",
    marginBottom: "18px",
  },

  stepText: {
    fontSize: "18px",
    fontWeight: "800",
  },

  cta: {
    margin: "0 70px 95px",
    padding: "54px 70px",
    borderRadius: "24px",
    background: "linear-gradient(135deg, #1e3a8a, #0f7bdc)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 24px 55px rgba(37, 99, 235, 0.28)",
  },

  ctaTitle: {
    fontSize: "38px",
    fontWeight: "900",
  },

  ctaText: {
    fontSize: "19px",
    color: "#dbeafe",
    marginTop: "12px",
    fontWeight: "650",
  },

  ctaBtn: {
    background: "white",
    color: "#1d4ed8",
    minHeight: "58px",
    padding: "0 30px",
    borderRadius: "12px",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "900",
    fontSize: "18px",
    textDecoration: "none",
  },
};

export default Home;