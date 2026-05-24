function Dashboard() {
  const customers = [
    {
      name: "Aarav Mehta",
      company: "Bright Labs",
      email: "aarav@brightlabs.io",
      type: "Regular",
      status: "Active",
      joined: "2026-05-12",
    },
    {
      name: "Sophie Laurent",
      company: "Northwind SAS",
      email: "sophie@northwind.fr",
      type: "Regular",
      status: "Active",
      joined: "2026-05-10",
    },
    {
      name: "Daniel Okafor",
      company: "Kairos HQ",
      email: "daniel@kairoshq.com",
      type: "Basic",
      status: "Pending",
      joined: "2026-05-08",
    },
    {
      name: "Mei Tanaka",
      company: "Sakura Web",
      email: "mei@sakuraweb.jp",
      type: "Regular",
      status: "Active",
      joined: "2026-05-03",
    },
  ];

  const leads = [
    {
      name: "Priya Shah",
      company: "Lumen Retail",
      status: "New",
      value: "$1,200",
    },
    {
      name: "Marco Bianchi",
      company: "Alpine Logistics",
      status: "Contacted",
      value: "$2,400",
    },
    {
      name: "Hannah Reed",
      company: "Beacon Health",
      status: "Interested",
      value: "$1,850",
    },
    {
      name: "Yusuf Demir",
      company: "Orbit Apps",
      status: "Converted",
      value: "$3,100",
    },
  ];

  return (
    <section style={styles.page}>
      <aside style={styles.sidebar}>
        <p style={styles.sidebarTitle}>WORKSPACE</p>
        {["Overview", "Customers", "Leads", "Tasks", "Reports", "Settings"].map(
          (item, index) => (
            <div
              key={item}
              style={index === 0 ? styles.sidebarItemActive : styles.sidebarItem}
            >
              <span style={index === 0 ? styles.activeDot : styles.dot}></span>
              {item}
            </div>
          )
        )}
      </aside>

      <main style={styles.content}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Good afternoon, Kribeep Bikram Thapa</h1>
            <p style={styles.subtitle}>
              Here's a simple overview of the CRM frontend workspace today.
            </p>
          </div>

          <div style={styles.headerActions}>
            <button style={styles.exportBtn}>Export</button>
            <button style={styles.newDealBtn}>+ New Deal</button>
          </div>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <p style={styles.statLabel}>Total Customers</p>
            <h2 style={styles.statValue}>24</h2>
            <span style={styles.positive}>+2 this month</span>
          </div>

          <div style={styles.statCard}>
            <p style={styles.statLabel}>New Leads</p>
            <h2 style={styles.statValue}>8</h2>
            <span style={styles.positive}>+3 this week</span>
          </div>

          <div style={styles.statCard}>
            <p style={styles.statLabel}>Pending Tasks</p>
            <h2 style={styles.statValue}>5</h2>
            <span style={styles.warning}>2 due today</span>
          </div>

          <div style={styles.statCard}>
            <p style={styles.statLabel}>Monthly Sales</p>
            <h2 style={styles.statValue}>$4,800</h2>
            <span style={styles.positive}>+6.5% this month</span>
          </div>
        </div>

        <div style={styles.chartRow}>
          <div style={styles.chartCard}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Sales Performance</h2>
              <p style={styles.cardSmallText}>Last 12 weeks</p>
            </div>

            <div style={styles.barChart}>
              {[35, 55, 42, 68, 49, 78, 60, 84, 66, 90, 70, 96].map(
                (height, index) => (
                  <div
                    key={index}
                    style={{ ...styles.bar, height: `${height}%` }}
                  ></div>
                )
              )}
            </div>
          </div>

          <div style={styles.statusCard}>
            <h2 style={styles.cardTitle}>Lead Status Overview</h2>

            {[
              { label: "New", value: 6, width: "55%" },
              { label: "Contacted", value: 5, width: "46%" },
              { label: "Interested", value: 3, width: "32%" },
              { label: "Converted", value: 2, width: "22%" },
            ].map((item) => (
              <div style={styles.progressItem} key={item.label}>
                <div style={styles.progressTop}>
                  <p>{item.label}</p>
                  <strong>{item.value}</strong>
                </div>
                <div style={styles.progressTrack}>
                  <div style={{ ...styles.progressFill, width: item.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <h2 style={styles.cardTitle}>Recent Customers</h2>
            <button style={styles.viewBtn}>View all →</button>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Company</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Type</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Joined</th>
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
                  <td style={styles.td}>{customer.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.leadsCard}>
          <h2 style={styles.cardTitle}>Recent Leads</h2>

          <div style={styles.leadGrid}>
            {leads.map((lead, index) => (
              <div style={styles.leadBox} key={index}>
                <div style={styles.leadTop}>
                  <div>
                    <h3 style={styles.leadName}>{lead.name}</h3>
                    <p style={styles.leadCompany}>{lead.company}</p>
                  </div>
                  <span style={getLeadBadge(lead.status)}>{lead.status}</span>
                </div>

                <div style={styles.leadBottom}>
                  <p>Est. value</p>
                  <strong>{lead.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

const getLeadBadge = (status) => {
  const base = {
    padding: "8px 15px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "800",
  };

  if (status === "New") {
    return { ...base, background: "#dff4ff", color: "#0284c7" };
  }

  if (status === "Contacted") {
    return { ...base, background: "#fff1d6", color: "#a16207" };
  }

  if (status === "Interested") {
    return { ...base, background: "#dbeafe", color: "#1d4ed8" };
  }

  return { ...base, background: "#dcfce7", color: "#16a34a" };
};

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background: "#f4f8fc",
    padding: "54px 34px",
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: "44px",
  },

  sidebar: {
    background: "white",
    border: "1px solid #dce7f3",
    borderRadius: "20px",
    padding: "26px 22px",
    height: "fit-content",
    boxShadow: "0 18px 38px rgba(15, 23, 42, 0.07)",
    position: "sticky",
    top: "120px",
  },

  sidebarTitle: {
    color: "#667085",
    fontSize: "15px",
    fontWeight: "900",
    letterSpacing: "1.4px",
    marginBottom: "14px",
  },

  sidebarItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 14px",
    borderRadius: "12px",
    color: "#64748b",
    fontSize: "18px",
    fontWeight: "750",
    marginBottom: "10px",
  },

  sidebarItemActive: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 14px",
    borderRadius: "12px",
    color: "#2557d6",
    background: "#dbeafe",
    fontSize: "18px",
    fontWeight: "850",
    marginBottom: "10px",
  },

  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#9ca3af",
  },

  activeDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#4f7ee8",
  },

  content: {
    width: "100%",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    marginBottom: "42px",
  },

  title: {
    fontSize: "42px",
    color: "#07152f",
    fontWeight: "900",
    letterSpacing: "-1.7px",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "20px",
    color: "#64748b",
    fontWeight: "650",
  },

  headerActions: {
    display: "flex",
    gap: "12px",
  },

  exportBtn: {
    padding: "14px 24px",
    background: "white",
    border: "1px solid #d5e1ef",
    borderRadius: "12px",
    color: "#172033",
    fontSize: "17px",
    fontWeight: "800",
    cursor: "pointer",
  },

  newDealBtn: {
    padding: "14px 24px",
    background: "#3157d4",
    border: "none",
    borderRadius: "12px",
    color: "white",
    fontSize: "17px",
    fontWeight: "850",
    cursor: "pointer",
    boxShadow: "0 14px 28px rgba(49, 87, 212, 0.22)",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "22px",
    marginBottom: "42px",
  },

  statCard: {
    background: "white",
    border: "1px solid #dce7f3",
    borderRadius: "18px",
    padding: "28px",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.06)",
  },

  statLabel: {
    color: "#667085",
    fontSize: "17px",
    fontWeight: "750",
    marginBottom: "16px",
  },

  statValue: {
    color: "#07152f",
    fontSize: "34px",
    fontWeight: "900",
    letterSpacing: "-1px",
    marginBottom: "12px",
  },

  positive: {
    color: "#078f5f",
    fontSize: "16px",
    fontWeight: "800",
  },

  warning: {
    color: "#d97706",
    fontSize: "16px",
    fontWeight: "800",
  },

  chartRow: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "32px",
    marginBottom: "42px",
  },

  chartCard: {
    background: "white",
    border: "1px solid #dce7f3",
    borderRadius: "18px",
    padding: "32px",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.06)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
  },

  cardTitle: {
    color: "#07152f",
    fontSize: "24px",
    fontWeight: "900",
    letterSpacing: "-0.6px",
  },

  cardSmallText: {
    color: "#64748b",
    fontSize: "15px",
    fontWeight: "800",
  },

  barChart: {
    height: "250px",
    display: "flex",
    alignItems: "flex-end",
    gap: "16px",
  },

  bar: {
    flex: 1,
    borderRadius: "8px 8px 0 0",
    background: "linear-gradient(180deg, #5278df, #2087df)",
  },

  statusCard: {
    background: "white",
    border: "1px solid #dce7f3",
    borderRadius: "18px",
    padding: "32px",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.06)",
  },

  progressItem: {
    marginTop: "28px",
  },

  progressTop: {
    display: "flex",
    justifyContent: "space-between",
    color: "#536177",
    fontSize: "18px",
    fontWeight: "750",
    marginBottom: "10px",
  },

  progressTrack: {
    width: "100%",
    height: "10px",
    background: "#eaf2fb",
    borderRadius: "999px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background: "#2563eb",
    borderRadius: "999px",
  },

  tableCard: {
    background: "white",
    border: "1px solid #dce7f3",
    borderRadius: "18px",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.06)",
    overflow: "hidden",
    marginBottom: "42px",
  },

  tableHeader: {
    padding: "28px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  viewBtn: {
    border: "none",
    background: "transparent",
    color: "#2557d6",
    fontSize: "17px",
    fontWeight: "850",
    cursor: "pointer",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    background: "#eaf2fb",
    color: "#64748b",
    fontSize: "16px",
    fontWeight: "850",
    textAlign: "left",
    padding: "18px 32px",
  },

  td: {
    padding: "18px 32px",
    color: "#536177",
    fontSize: "16px",
    fontWeight: "650",
    borderTop: "1px solid #e7edf5",
  },

  tdBold: {
    padding: "18px 32px",
    color: "#07152f",
    fontSize: "16px",
    fontWeight: "850",
    borderTop: "1px solid #e7edf5",
  },

  typeBadge: {
    padding: "7px 13px",
    borderRadius: "999px",
    background: "#eef3fa",
    color: "#64748b",
    fontSize: "14px",
    fontWeight: "850",
  },

  activeBadge: {
    padding: "7px 13px",
    borderRadius: "999px",
    background: "#dcfce7",
    color: "#16a34a",
    fontSize: "14px",
    fontWeight: "850",
  },

  pendingBadge: {
    padding: "7px 13px",
    borderRadius: "999px",
    background: "#fef3c7",
    color: "#a16207",
    fontSize: "14px",
    fontWeight: "850",
  },

  leadsCard: {
    background: "white",
    border: "1px solid #dce7f3",
    borderRadius: "18px",
    padding: "32px",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.06)",
  },

  leadGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "24px",
  },

  leadBox: {
    border: "1px solid #dce7f3",
    borderRadius: "15px",
    padding: "22px",
  },

  leadTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "22px",
  },

  leadName: {
    color: "#07152f",
    fontSize: "20px",
    fontWeight: "900",
  },

  leadCompany: {
    color: "#64748b",
    fontSize: "15px",
    fontWeight: "700",
    marginTop: "4px",
  },

  leadBottom: {
    display: "flex",
    justifyContent: "space-between",
    color: "#64748b",
    fontSize: "17px",
    fontWeight: "800",
  },
};

export default Dashboard;