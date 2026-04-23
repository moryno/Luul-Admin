export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #EAECF0",
          borderRadius: 10,
          padding: "10px 14px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.09)",
        }}
      >
        {/* Color dot + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: data.payload.fill,
            }}
          />
          <span style={{ fontSize: 13, color: "#475467", fontWeight: 500 }}>
            {data.name}
          </span>
        </div>
        <p
          style={{
            margin: "4px 0 0",
            fontSize: 14,
            fontWeight: 600,
            color: "#2A2A2A",
          }}
        >
          {data.value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export const CustomLegend = ({ payload }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingTop: 16 }}
    >
      {payload.map((entry, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", gap: 6 }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: entry.color,
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 12, color: "#475467" }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
