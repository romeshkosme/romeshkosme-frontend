import React from "react";
import codingImg from "../../static/images/coding.svg";
import demo_website from "../../static/images/demo_website.svg";
import amazon_clone_img from "../../static/images/amazon_clone.png";
import under_construction from "../../static/images/under_construction.svg";
import dummy_project from "../../static/images/dummy_project.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

function Home() {
  return (
    <div className="font-mono container mx-auto flex items-center justify-center flex-col bg-blue-50">
      {/* HERO SECTION */}
      <div className="h-screen flex items-center justify-between flex-row w-3/4">
        <div className="flex items-start content-around justify-center flex-col cursor-default w-3/5">
          <p className="text-4xl">Namaste! I'm</p>
          <h1 className="text-6xl my-6 p-0">Romesh Kosme</h1>
          <h2 className="text-4xl m-0 p-0">Full Stack Developer</h2>
        </div>
        <div className="flex items-start justify-start w-2/5">
          <img src={codingImg} alt="" srcset="" />
        </div>
      </div>
      {/* INTRO - BIO - ABOUT - PROJECT */}
      <div className="flex content-evenly justify-center w-3/4 flex-col cursor-default ">
        <div className="h-full flex flex-col justify-center pt-20">
          <h2 className="text-5xl">Education</h2>
          <div className="flex">
            <div className="">
              <svg height="300" width="5em">
                {/* VERTICAL LINE */}
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="201"
                  style={{ stroke: "rgb(99, 102, 241)", strokeWidth: "2" }}
                />
                <line
                  x1="20"
                  y1="50"
                  x2="50"
                  y2="50"
                  style={{ stroke: "rgb(99, 102, 241)", strokeWidth: "2" }}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="5"
                  stroke="rgb(99, 102, 241)"
                  strokeWidth="1"
                  fill="white"
                />
                <line
                  x1="20"
                  y1="200"
                  x2="50"
                  y2="200"
                  style={{ stroke: "rgb(99, 102, 241)", strokeWidth: "2" }}
                />
                <circle
                  cx="50"
                  cy="200"
                  r="5"
                  stroke="rgb(99, 102, 241)"
                  strokeWidth="1"
                  fill="white"
                />
                Sorry, your browser does not support inline SVG.
              </svg>
            </div>
            <div className="flex flex-col justify-around">
              <div className="text-left">
                <h4 className="text-3xl">Hind Zinc School</h4>
                <p>
                  Nursery to <span className="ordinal">8th</span> Standard
                </p>
                <span>2000-2009</span>
              </div>
              <div className="text-left">
                <h4 className="text-3xl">Krishna Public School</h4>
                <p>
                  <span className="ordinal">8th</span> to{" "}
                  <span className="ordinal">12th</span> Standard
                </p>
                <span>2009-2014</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-center pt-20">
          <h2 className="text-5xl">Experience</h2>
          <div className="flex">
            <div className="">
              <svg height="300" width="5em">
                {/* VERTICAL LINE */}
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="201"
                  style={{ stroke: "rgb(99, 102, 241)", strokeWidth: "2" }}
                />
                <line
                  x1="20"
                  y1="50"
                  x2="50"
                  y2="50"
                  style={{ stroke: "rgb(99, 102, 241)", strokeWidth: "2" }}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="5"
                  stroke="rgb(99, 102, 241)"
                  strokeWidth="1"
                  fill="white"
                />
                <line
                  x1="20"
                  y1="200"
                  x2="50"
                  y2="200"
                  style={{ stroke: "rgb(99, 102, 241)", strokeWidth: "2" }}
                />
                <circle
                  cx="50"
                  cy="200"
                  r="5"
                  stroke="rgb(99, 102, 241)"
                  strokeWidth="1"
                  fill="white"
                />
                Sorry, your browser does not support inline SVG.
              </svg>
            </div>
            <div className="flex flex-col justify-around">
              <div className="">
                <h4 className="text-3xl">Wordpress Developer</h4>
                <p>January 2019 - August 2019</p>
                <span>Counsellr</span>
              </div>
              <div className="">
                <h4 className="text-3xl">Full Stack Developer</h4>
                <p>September 2019</p>
                <span>Startupflux</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-center py-20">
          <h2 className="text-5xl mb-9">Projects</h2>
          {/* <div className="flex flex-col justify-center text-center">
            <img src={under_construction} alt="" srcset="" className="h-80" />
            <p className="text-3xl"> Under Construction</p>
          </div> */}
          {/*  P R O J E C T S */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* AMAZON CLONE */}
            <div className="shadow-2xl rounded-md">
              <img src={amazon_clone_img} alt="" className="rounded-t-md" />
              <div className="p-4 flex items-center justify-between">
                <p className="text-3xl select-none">Amazon Clone</p>
                <div className="flex items-center">
                  <a
                    href="https://amzon-clone-d2c2c.firebaseapp.com/"
                    target="_blank"
                  >
                    <LaunchIcon className="text-indigo-500 cursor-pointer" />
                  </a>
                  <a
                    href="https://github.com/romeshkosme/amazon-clone"
                    target="_blank"
                  >
                    <GitHubIcon className="text-indigo-500 cursor-pointer ml-2" />
                  </a>
                </div>
              </div>
              <ul className="text-sm list-disc p-4">
                <li>Built on React</li>
                <li>Firebase used for hosting and user authentication</li>
                <li>WIP</li>
              </ul>
            </div>
            {/* <div className="shadow-2xl rounded-md">
              <img src={dummy_project} alt="" className="rounded-t-md" />
              <div className="p-4 flex items-center justify-between">
                <p className="text-3xl select-none">Facebook Clone</p>
                <div className="flex items-center">
                  <LaunchIcon className="text-indigo-500 cursor-pointer" />
                  <GitHubIcon className="text-indigo-500 cursor-pointer ml-2" />
                </div>
              </div>
            </div>
            <div className="shadow-2xl rounded-md">
              <img src={dummy_project} alt="" className="rounded-t-md" />
              <div className="p-4 flex items-center justify-between">
                <p className="text-3xl select-none">Triage</p>
                <div className="flex items-center">
                  <LaunchIcon className="text-indigo-500 cursor-pointer" />
                  <GitHubIcon className="text-indigo-500 cursor-pointer ml-2" />
                </div>
              </div>
            </div>
            <div className="shadow-2xl rounded-md">
              <img src={dummy_project} alt="" className="rounded-t-md" />
              <div className="p-4 flex items-center justify-between">
                <p className="text-3xl select-none">Netflix Clone</p>
                <div className="flex items-center">
                  <LaunchIcon className="text-indigo-500 cursor-pointer" />
                  <GitHubIcon className="text-indigo-500 cursor-pointer ml-2" />
                </div>
              </div>
            </div>
            <div className="shadow-2xl rounded-md">
              <img src={dummy_project} alt="" className="rounded-t-md" />
              <div className="p-4 flex items-center justify-between">
                <p className="text-3xl select-none">Zoom Clone</p>
                <div className="flex items-center">
                  <LaunchIcon className="text-indigo-500 cursor-pointer" />
                  <GitHubIcon className="text-indigo-500 cursor-pointer ml-2" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* BLOGS */}
      {/* FOOTER */}
      <div className="mt-18 border-t border-gray-300 w-full"></div>
      <div className="flex items-center justify-center w-3/4 py-8">
        <div className="">
          <ul className="list-none flex">
            <li className="mx-2 cursor-pointer  hover:">
              <a
                href="https://twitter.com/KosmeRomesh"
                rel="noreferrer"
                target="_blank"
                className="border-b-2 border-indigo-500 filter drop-shadow-lg"
              >
                Twitter
              </a>
            </li>
            <li className="mx-2 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/romesh-kosme-7a200571/"
                rel="noreferrer"
                target="_blank"
                className="border-b-2 border-indigo-500"
              >
                LinkedIn
              </a>
            </li>
            <li className="mx-2 cursor-pointer">
              <a
                href="https://github.com/romeshkosme"
                rel="noreferrer"
                target="_blank"
                className="border-b-2 border-indigo-500"
              >
                GitHub
              </a>
            </li>
            <li className="mx-2 cursor-pointer">
              <a
                href="https://hashnode.com/@romeshkosme"
                rel="noreferrer"
                target="_blank"
                className="border-b-2 border-indigo-500"
              >
                Hashnode
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
