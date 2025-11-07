"use client";
import React from "react";
import { Twitter, Email, Discord, Youtube, Github } from "../icons/icons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const handleEmailClick = () => {
  const emailSubject = encodeURIComponent("[Inquiry about Blockcode]");
    const emailBody = encodeURIComponent("Heyyo,\n\nwanna chat?");
    const mailtoLink = `mailto:hi@blockcode.ai?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div
      id="Contact"
      className="border-x lg:border-x-2 border-t lg:border-t-2 border-[#252525] mt-2 mx-auto w-[98%] px-4 lg:px-10 pt-8 lg:pt-16 pb-4 lg:pb-8"
    >
      {/* Bottom Section */}
      <div className="pt-8 border-t border-[#252525] space-y-8">
        {/* Top Row - Profile Picture and Navigation */}
        <div className="relative flex items-start justify-between">
          {/* Profile Picture - Left */}
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-white text-4xl lg:text-5xl font-medium tracking-tight">
                Blockcode
              </h4>
              <p className="text-[#b1b1b1] text-base lg:text-lg tracking-tight mt-1">
                Learn Blockchain by Coding
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#b1b1b1] text-xs font-mono">
                Made with ❤️ by Rithvik
              </span>
            </div>
          </div>

          {/* Grid Layout - Right */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8">
            {/* Platform and Pricing section removed as requested */}

            {/* Legal Column */}
            <div>
              <h3 className="text-white text-sm lg:text-base font-medium mb-2">
                Legal
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/legal/privacy"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/terms"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Socials Column */}
            <div>
              <h3 className="text-white text-sm lg:text-base font-medium mb-2">
                Socials
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://x.com/blockcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs flex items-center gap-1.5"
                >
                  <span className="w-3.5">
                    <Twitter />
                  </span>
                  Twitter
                </Link>
                <Link
                  href="https://github.com/rithvik1709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs flex items-center gap-1.5"
                >
                  <span className="w-3.5">
                    <Github />
                  </span>
                  GitHub
                </Link>
                {/* YouTube and Discord removed as requested */}
                <button
                  onClick={handleEmailClick}
                  className="text-[#b1b1b1] hover:text-white transition-colors text-xs flex items-center gap-1.5 text-left"
                >
                  <span className="w-3.5">
                    <Email />
                  </span>
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="text-center">
          <p className="font-mono text-xs lg:text-sm text-[#b1b1b1]">
            © {new Date().getFullYear()} Blockcode. All rights reserved.
          </p>
          <p className="font-mono text-xs lg:text-xs italic text-[#b1b1b1] mt-2">
            Building the future, one block at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
