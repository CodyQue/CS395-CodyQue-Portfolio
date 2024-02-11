/**
 * This file generates the framer layout of the website (aka the menu where the user
 * can interact with different tabs)
 */
import "./styles.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from './welcome/welcome.js'
import Projects from "./projects/projects.js"
import Experiences from './experiences/experiences.js'
import Contacts from './contacts/contacts.js'

export default function Menu() {

  const newTabs = [
    { icon: "👨‍🎓", testEntity: <Welcome />, label: "Welcome!" },
    { icon: "💻", testEntity: <Projects />,label: "Projects" },
    { icon: "💼", testEntity: <Experiences />,label: "Experiences / Education" },
    { icon: "📬", testEntity: <Contacts />,label: "Contacts" }
  ];

  const [welcome, experiences, projects, contacts] = newTabs;

  const tabs = [welcome, experiences, projects, contacts];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div class="window">
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.testEntity : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
