import { useState } from "react";
import {
  UserPlus,
  Building2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";

function CustomerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    type: "Regular",
    status: "Active",
    notes: "",
  });

  const customers = [
    {
      name: "Aarav Mehta",
      company: "Bright Labs",
      email: "aarav@brightlabs.io",
      type: "Regular",
      status: "Active",
    },
    {
      name: "Sophie Laurent",
      company: "Northwind SAS",
      email: "sophie@northwind.fr",
      type: "VIP",
      status: "Active",
    },
    {
      name: "Daniel Okafor",
      company: "Kairos HQ",
      email: "daniel@kairoshq.com",
      type: "Basic",
      status: "Pending",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Customer saved successfully. This is a frontend UI proof only.");
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      type: "Regular",
      status: "Active",
      notes: "",
    });
  };

  return (
    <section style={styles.page}>
      <div style={styles.header}>
        <div>
          <span style={styles.badge}>
            <UserPlus size={17} />
            Customer Registration
          </span>
          <h1 style={styles.title}>Add New Customer</h1>
          <p style={styles.subtitle}>
            Capture customer information, contact details, business type, and
            notes for CRM relationship tracking.
          </p>
        </div>

        <div style={styles.headerStats}>
          <div style={styles.headerStatBox}>
            <h3>24</h3>
            <p>Total Customers</p>
          </div>
          <div style={styles.headerStatBox}>
            <h3>5</h3>
            <p>Pending Follow-ups</p>
          </div>
        </div>
      </div>

      <div style={styles.mainGrid}>
        <form style={styles.formCard} onSubmit={handleSubmit}>
          <div style={styles.formTop}>
            <div>
              <h2 style={styles.cardTitle}>Customer Details</h2>
              <p style={styles.cardSubtitle}>
                Fill in the customer profile information below.
              </p>
            </div>

            <span style={styles.draftBadge}>Draft Record</span>
          </div>

          <div style={styles.inputGrid}>
            <div style={styles.field}>
              <label style={styles.label}>Full Name</label>
              <input
                style={styles.input}
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Kribeep Bikram Thapa"
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Email Address</label>
              <input
                style={styles.input}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="kribeep@example.com"
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Phone Number</label>
              <input
                style={styles.input}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+977 98XXXXXXXX"
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Company</label>
              <input
                style={styles.input}
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nexus Digital Pvt. Ltd."
              />
            </div>

            <div style={{ ...styles.field, gridColumn: "1 / -1" }}>
              <label style={styles.label}>Address</label>
              <input
                style={styles.input}
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Kathmandu, Nepal"
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Customer Type</label>
              <select
                style={styles.input}
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option>Regular</option>
                <option>VIP</option>
                <option>Basic</option>
                <option>Enterprise</option>
              </select>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Status</label>
              <select
                style={styles.input}
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
            </div>

            <div style={{ ...styles.field, gridColumn: "1 / -1" }}>
              <label style={styles.label}>Customer Notes</label>
              <textarea
                style={styles.textarea}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add follow-up notes, customer requirements, or conversation summary..."
              ></textarea>
            </div>
          </div>

          <div style={styles.formActions}>
            <button type="submit" style={styles.saveBtn}>
              Save Customer
            </button>
            <button type="button" style={styles.resetBtn} onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>

        <div style={styles.sidePanel}>
          <div style={styles.profilePreview}>
            <div style={styles.avatar}>
              {formData.fullName ? formData.fullName.charAt(0).toUpperCase() : "K"}
            </div>

            <h2 style={styles.previewName}>
              {formData.fullName || "Customer Name"}
            </h2>

            <p style={styles.previewCompany}>
              {formData.company || "Company name will appear here"}
            </p>

            <div style={styles.previewInfo}>
              <p>
                <Mail size={17} />
                {formData.email || "customer@email.com"}
              </p>
              <p>
                <Phone size={17} />
                {formData.phone || "+977 98XXXXXXXX"}
              </p>
              <p>
                <MapPin size={17} />
                {formData.address || "Kathmandu, Nepal"}
              </p>
            </div>

            <div style={styles.previewBadges}>
              <span style={styles.typeBadge}>{formData.type}</span>
              <span
                style={
                  formData.status === "Active"
                    ? styles.activeBadge
                    : formData.status === "Pending"
                    ? styles.pendingBadge
                    : styles.inactiveBadge
                }
              >
                {formData.status}
              </span>
            </div>
          </div>

          <div style={styles.tipsCard}>
            <h3 style={styles.tipsTitle}>CRM Entry Checklist</h3>

            <div style={styles.tipItem}>
              <ShieldCheck size={20} />
              <p>Use accurate email and phone details for follow-up.</p>
            </div>

            <div style={styles.tipItem}>
              <Clock size={20} />
              <p>Set status correctly to track active and pending records.</p>
            </div>

            <div style={styles.tipItem}>
              <Star size={20} />
              <p>Mark important clients as VIP for priority service.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.tableCard}>
        <div style={styles.tableTop}>
          <div>
            <h2 style={styles.cardTitle}>Sample Customer Records</h2>
            <p style={styles.cardSubtitle}>
              Static dummy data shown for frontend CRM UI proof.
            </p>
          </div>
          <button style={styles.viewBtn}>View all customers</button>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Customer</th>
              <th style={styles.th}>Company</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td style={styles.tdBold}>{customer.name}</td>
                <td style={styles.td}>{customer.company}</td>
                <td style={styles.td}>{customer.email}</td>
                <td style={styles.td}>
                  <span style={styles.typeBadge}>{customer.type}</span>
                </td>
                <td style={styles.td}>
                  <span
                    style={
                      customer.status === "Active"
                        ? styles.activeBadge
                        : styles.pendingBadge
                    }
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(30, 64, 175, 0.1), transparent 32%), #f4f8fc",
    padding: "58px 70px 80px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "30px",
    marginBottom: "38px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#dbeafe",
    color: "#1d4ed8",
    padding: "9px 16px",
    borderRadius: "999px",
    fontSize: "15px",
    fontWeight: "850",
    marginBottom: "18px",
  },

  title: {
    fontSize: "42px",
    color: "#07152f",
    fontWeight: "900",
    letterSpacing: "-1.7px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "19px",
    color: "#64748b",
    fontWeight: "650",
    maxWidth: "760px",
    lineHeight: "1.6",
  },

  headerStats: {
    display: "flex",
    gap: "16px",
  },

  headerStatBox: {
    background: "white",
    border: "1px solid #dce7f3",
    borderRadius: "16px",
    padding: "18px 24px",
    minWidth: "165px",
    boxShadow: "0 14px 32px rgba(15,23,42,0.06)",
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1.35fr 0.65fr",
    gap: "32px",
    alignItems: "start",
  },

  formCard: {
    background: "white",
    border: "1px solid #dce7f3",
    borderRadius: "22px",
    padding: "34px",
    boxShadow: "0 20px 48px rgba(15, 23, 42, 0.08)",
  },

  formTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "flex-start",
    marginBottom: "30px",
  },

  cardTitle: {
    fontSize: "24px",
    color: "#07152f",
    fontWeight: "900",
    letterSpacing: "-0.7px",
  },

  cardSubtitle: {
    color: "#64748b",
    fontSize: "16px",
    fontWeight: "650",
    marginTop: "8px",
  },

  draftBadge: {
    background: "#eef4ff",
    color: "#2557d6",
    padding: "9px 15px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "850",
  },

  inputGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
  },

  label: {
    fontSize: "16px",
    fontWeight: "850",
    color: "#07152f",
    marginBottom: "10px",
  },

  input: {
    width: "100%",
    height: "54px",
    border: "1px solid #d9e4f2",
    borderRadius: "12px",
    padding: "0 16px",
    fontSize: "16px",
    color: "#07152f",
    outline: "none",
    background: "#ffffff",
  },

  textarea: {
    width: "100%",
    minHeight: "145px",
    border: "1px solid #d9e4f2",
    borderRadius: "12px",
    padding: "16px",
    fontSize: "16px",
    color: "#07152f",
    outline: "none",
    resize: "vertical",
  },

  formActions: {
    display: "flex",
    gap: "16px",
    marginTop: "30px",
  },

  saveBtn: {
    background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
    color: "white",
    border: "none",
    borderRadius: "13px",
    padding: "16px 28px",
    fontSize: "18px",
    fontWeight: "900",
    cursor: "pointer",
    boxShadow: "0 16px 30px rgba(37,99,235,0.24)",
  },

  resetBtn: {
    background: "white",
    color: "#07152f",
    border: "1px solid #d9e4f2",
    borderRadius: "13px",
    padding: "16px 28px",
    fontSize: "18px",
    fontWeight: "850",
    cursor: "pointer",
  },

  sidePanel: {
    display: "grid",
    gap: "24px",
  },

  profilePreview: {
    background: "linear-gradient(180deg, #ffffff, #f8fbff)",
    border: "1px solid #dce7f3",
    borderRadius: "22px",
    padding: "32px",
    boxShadow: "0 20px 48px rgba(15, 23, 42, 0.08)",
  },

  avatar: {
    width: "78px",
    height: "78px",
    borderRadius: "22px",
    background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
    color: "white",
    display: "grid",
    placeItems: "center",
    fontSize: "34px",
    fontWeight: "900",
    marginBottom: "20px",
  },

  previewName: {
    color: "#07152f",
    fontSize: "26px",
    fontWeight: "900",
    marginBottom: "6px",
  },

  previewCompany: {
    color: "#64748b",
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "24px",
  },

  previewInfo: {
    display: "grid",
    gap: "14px",
    marginBottom: "22px",
  },

  previewInfo: {
    display: "grid",
    gap: "14px",
    marginBottom: "22px",
  },

  previewBadges: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  tipsCard: {
    background: "#07152f",
    color: "white",
    borderRadius: "22px",
    padding: "30px",
    boxShadow: "0 20px 48px rgba(15, 23, 42, 0.16)",
  },

  tipsTitle: {
    fontSize: "22px",
    fontWeight: "900",
    marginBottom: "20px",
  },

  tipItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    color: "#dbeafe",
    fontSize: "15px",
    fontWeight: "650",
    lineHeight: "1.5",
    marginBottom: "18px",
  },

  tableCard: {
    marginTop: "34px",
    background: "white",
    border: "1px solid #dce7f3",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 20px 48px rgba(15, 23, 42, 0.08)",
  },

  tableTop: {
    padding: "28px 34px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },

  viewBtn: {
    background: "#eef4ff",
    color: "#2557d6",
    border: "none",
    borderRadius: "12px",
    padding: "12px 18px",
    fontSize: "15px",
    fontWeight: "850",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    background: "#eaf2fb",
    color: "#64748b",
    fontSize: "15px",
    fontWeight: "900",
    textAlign: "left",
    padding: "18px 34px",
  },

  td: {
    padding: "18px 34px",
    color: "#536177",
    fontSize: "15px",
    fontWeight: "650",
    borderTop: "1px solid #e7edf5",
  },

  tdBold: {
    padding: "18px 34px",
    color: "#07152f",
    fontSize: "15px",
    fontWeight: "900",
    borderTop: "1px solid #e7edf5",
  },

  typeBadge: {
    padding: "7px 13px",
    borderRadius: "999px",
    background: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "13px",
    fontWeight: "850",
  },

  activeBadge: {
    padding: "7px 13px",
    borderRadius: "999px",
    background: "#dcfce7",
    color: "#16a34a",
    fontSize: "13px",
    fontWeight: "850",
  },

  pendingBadge: {
    padding: "7px 13px",
    borderRadius: "999px",
    background: "#fef3c7",
    color: "#a16207",
    fontSize: "13px",
    fontWeight: "850",
  },

  inactiveBadge: {
    padding: "7px 13px",
    borderRadius: "999px",
    background: "#eef2f7",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: "850",
  },
};

export default CustomerForm;