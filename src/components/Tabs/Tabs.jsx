import { useState } from "react";
import TabContent from "./TabContent";

export const Tabs = ({ items }) => {
  const [active, setActive] = useState(null);

  const openTab = e => setActive(+e.target.dataset.index);
  console.log("items", items);
  return (
    <div className="main">
      <div className="tab">
        {items.map((n, i) => (
          <button className={`tabLinks ${i === active ? "active" : ""}`} onClick={openTab} data-index={i}>
            {n.title}
          </button>
        ))}
      </div>
      {items[active] && <TabContent {...items[active]} />}
    </div>
  );
};
