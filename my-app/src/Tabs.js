import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Tabs = ({ children }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  useEffect(() => {
    // URLからクエリパラメータを取得
    const query = new URLSearchParams(location.search);
    const tab = query.get("tab");

    // クエリパラメータに対応するタブがあれば、そのタブをアクティブにする
    if (tab && children.some((child) => child.props.label === tab)) {
      setActiveTab(tab);
    }
  }, [children]);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="tab-list">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <li
              className={
                label === activeTab ? "tab-list-item active" : "tab-list-item"
              }
              onClick={() => onClickTabItem(label)}
              key={label}
            >
              {label}
            </li>
          );
        })}
      </ul>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
