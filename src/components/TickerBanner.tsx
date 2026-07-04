const items = [
  "Petroleum Equipment Sales",
  "Petrol Station Installation",
  "Hydrotesting & Pressure Testing",
  "Tank Calibration",
  "24/7 Emergency Response",
  "Nationwide Coverage",
  "EPRA Compliance",
  "Certified Technicians",
  "Underground & Above-Ground Tanks",
  "Commercial Site Maintenance",
];

export function TickerBanner() {
  return (
    <div className="ticker-banner" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-sep">◆</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
