import { useState } from "react";
import cn from "classnames";
import css from "./Tab.module.css";

export type TabConfig = {
  title: string;
  content: React.ReactNode;
};

export type TabProps = {
  tabs: TabConfig[];
};

export const Tab = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <ul className={css.tabList}>
        {tabs.map((tab, index) => (
          <li key={tab.title} className={css.tabItem}>
            <a
              className={cn(css.tabLink, {
                [css.activeTabLink]: activeTab === index,
              })}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};
