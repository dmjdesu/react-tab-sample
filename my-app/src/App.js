import React, { useState } from "react";
import "./App.css"; // この行はCSSファイルをインポートしています

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

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

const Tab = ({ label, children }) => {
  return <div>{children}</div>;
};

export default function App() {
  return (
    <div>
      <Tabs>
        <Tab label="Tab 1">Content of Tab 1</Tab>
        <Tab label="Tab 2">Content of Tab 2</Tab>
        <Tab label="Tab 3">Content of Tab 3</Tab>
      </Tabs>
    </div>
  );
}
