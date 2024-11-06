import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col md:px-20  bg-gradient-to-t from-green-950 to-bg_black pt-12 pb-10">
            <div className="flex-grow grid mb-8 px-8  sm:px-24 sm:flex sm:justify-between space-y-4 sm:space-y-0">
                <div className="pr-7 sm:pr-0">
                    <img
                        className="h-[45px] md:h-[60px]"
                        src="Logo.png"
                        alt="Logo"
                    />
                    <p className="text-zinc-400 font-dmSans mt-3">
                        SRM Institute of Science & Technology,
                    </p>
                    <p className="text-zinc-400 font-dmSans">
                        Kattankulathur, Chennai 603203
                    </p>
                    <p className="text-zinc-400 font-dmSans">India</p>
                </div>

                <div className=" text-white">
                    <h className="flex text-center items-center font-poppins mb-1  md:items-start">
                        Follow Us On
                    </h>

                    <div className="flex space-x-3">
                        <a
                            href="https://www.linkedin.com/company/githubsrm/mycompany/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="h-7 w-7 md:h-10 md:w-10" />
                        </a>
                        <a
                            href="https://www.instagram.com/githubsrm/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="h-7 w-7 md:h-10 md:w-10" />
                        </a>
                        <a
                            href="https://twitter.com/GithubSrm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RiTwitterXFill className="h-7 w-7 md:h-10 md:w-10" />
                        </a>
                        <a
                            href="https://github.com/SRM-IST-KTR"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="h-7 w-7 md:h-10 md:w-10" />
                        </a>
                    </div>
                </div>
            </div>

            <p className="text-left pl-8 sm:text-center mt-1 sm:mt-8 mb-0 text-white font-poppins font-medium">
                Created By GCSRM Team 🐐
            </p>
        </footer>
    );
};

export default Footer;