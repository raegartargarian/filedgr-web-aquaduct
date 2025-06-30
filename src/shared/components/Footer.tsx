// src/shared/components/Footer.tsx
import filedGrLogo from "@/assets/logo/fildgr.svg";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  FileText,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Shield,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { appRoutes } from "../constants/routes";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "Home", path: appRoutes.dashboard.path },
      { name: "Documentation", path: appRoutes.attachments.path },
      { name: "Investment Process", path: "#" },
      { name: "FAQ", path: "#" },
    ],
    legal: [
      { name: "Terms of Service", path: "#" },
      { name: "Privacy Policy", path: "#" },
      { name: "Risk Disclosure", path: "#" },
      { name: "AML/KYC Policy", path: "#" },
    ],
    resources: [
      { name: "Pink Diamonds Guide", path: "#" },
      { name: "Blockchain Verification", path: "#" },
      { name: "Investor Portal", path: "#" },
      { name: "Contact Support", path: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-obsidian-500 border-t border-luxury-gold-500/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-luxury-gold-500 rounded-full flex items-center justify-center">
                <span className="text-obsidian-500 font-bold text-2xl">A</span>
              </div>
              <span className="text-3xl font-playfair text-white">
                AQUADUCT
              </span>
            </div>

            <p className="text-pearl-300 mb-6 max-w-sm">
              Democratizing luxury asset ownership through blockchain
              technology. Own a piece of the extraordinary Pink Diamond Turtle.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-luxury-gold-500" />
                <span className="text-sm text-pearl-400">
                  Blockchain Verified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-luxury-gold-500" />
                <span className="text-sm text-pearl-400">247 Carats</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-luxury-gold-500/30 
                           flex items-center justify-center text-luxury-gold-500
                           hover:bg-luxury-gold-500 hover:text-obsidian-500 
                           transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-luxury-gold-500 font-medium mb-6 tracking-wider">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-pearl-300 hover:text-luxury-gold-500 
                             transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-luxury-gold-500 font-medium mb-6 tracking-wider">
              RESOURCES
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-pearl-300 hover:text-luxury-gold-500 
                             transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    {link.name}
                    {link.name.includes("Portal") && (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-luxury-gold-500 font-medium mb-6 tracking-wider">
              LEGAL
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-pearl-300 hover:text-luxury-gold-500 
                             transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-luxury-gold-500/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-3 text-pearl-300">
              <Mail className="w-4 h-4 text-luxury-gold-500" />
              <a
                href="mailto:invest@aquaduct.io"
                className="hover:text-luxury-gold-500 transition-colors"
              >
                invest@aquaduct.io
              </a>
            </div>
            <div className="flex items-center gap-3 text-pearl-300">
              <Phone className="w-4 h-4 text-luxury-gold-500" />
              <a
                href="tel:+1234567890"
                className="hover:text-luxury-gold-500 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-3 text-pearl-300">
              <Globe className="w-4 h-4 text-luxury-gold-500" />
              <span>Available Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-obsidian-400/50 border-t border-luxury-gold-500/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-pearl-400">
              <span>© {currentYear} Aquaduct. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-2">
                Powered by
                <img src={filedGrLogo} alt="FiledGr" className="h-4" />
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-pearl-400">
              <FileText className="w-4 h-4 text-luxury-gold-500" />
              <span>
                Investment opportunities are subject to terms and conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
