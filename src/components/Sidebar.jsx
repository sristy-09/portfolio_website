import { useState } from "react";
import { NavLink } from "react-router";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import ProfilePic from "../assets/profile-pic.jpg";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/about", icon: User, label: "About" },
  { path: "/skills", icon: Code2, label: "Skills" },
  { path: "/projects", icon: Briefcase, label: "Projects" },
  { path: "/contact", icon: Mail, label: "Contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-8 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 text-center">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold">Shristi Dhakal</h2>
            <p className="text-gray-600">FullStack Developer</p>
          </div>

          <nav className="flex-1 px-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} className="mr-3" />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="p-6 border-t flex justify-between items-center">
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://github.com/sristy-09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shristi-dhakal-876793282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100012990011156&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
