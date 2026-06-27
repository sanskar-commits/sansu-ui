import "../../styles/sidebar.css";
import { sidebar } from "../../data/sidebar";

export function Sidebar() {
  return (
    <aside className="sidebar">
      {sidebar.map((section) => (
        <div key={section.title}>
          <h3 className="sidebar__title">
            {section.title}
          </h3>

          <ul className="sidebar__list">
            {section.items.map((item) => (
              <li
                key={item.path}
                className={`sidebar__item sidebar__item--${item.status}`}
              >
                <span>{item.name}</span>

                {item.status === "beta" && (
                  <span className="sidebar__badge sidebar__badge--beta">
                    Beta
                  </span>
                )}

                {item.status === "coming-soon" && (
                  <span className="sidebar__badge sidebar__badge--coming">
                    Soon
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}