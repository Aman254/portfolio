/* eslint-disable react/no-unescaped-entities */
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import devflow1 from "public/images/devflow0.jpeg";
import devflow2 from "public/images/devflow-2.jpeg";
import pfs1 from "public/images/pfs1.jpeg";
import pfs2 from "public/images/pfs2.jpeg";
import lx1 from "/public/images/lx1.jpeg";
import lx2 from "/public/images/lx2.jpeg";

export const products = [
  {
    href: "https://prime-fitness-studio.vercel.app/",
    title: "Prime Fitness Studio",
    description:
      "Plan your workouts with all new and latest workouts, with procedure",
    thumbnail: pfs1,
    images: [pfs1, pfs2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "Prime",
    content: (
      <div>
        <p>
          Welcome to <strong>Prime Fitness Studio Gym</strong> — your ultimate
          destination for fitness, strength, and wellness. Whether you're just
          starting your journey or pushing your limits as an athlete, our gym
          offers state-of-the-art equipment, expert trainers, and a motivating
          environment designed to help you reach your goals.
        </p>
        <p>
          From personalized training programs to group classes, PulseFit
          provides everything you need to stay consistent and challenged. Join a
          community that values discipline, progress, and support — and take the
          first step toward a stronger, healthier you.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Aman254/Devflow",
    title: "DevFlow",
    description: "Simple, open-source dev Q&A.",
    thumbnail: devflow1,
    images: [devflow1, devflow2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "devflow",
    content: (
      <div>
        <p>
          <strong>Devflow</strong> is a next-generation, AI-powered platform
          designed to revolutionize how developers seek and share knowledge.
          Unlike traditional Q&A sites like Stack Overflow, Devflow integrates{" "}
          <strong>ChatGPT</strong> to deliver conversational, context-aware
          answers instantly. Whether you're debugging, learning, or exploring
          new tools, Devflow aims to make the experience seamless, intelligent,
          and developer-friendly.
        </p>

        <p>
          Built with modern technologies like <strong>Next.js</strong> and{" "}
          <strong>Tailwind CSS</strong>, Devflow delivers a fast, clean, and
          responsive interface. A powerful recommendation system is in
          development to suggest relevant threads, tools, and resources tailored
          to each user. Devflow is more than just a forum — it's your
          AI-assisted developer companion for faster problem-solving and
          continuous learning.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Aman254/LearnX",
    title: "LearnX",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: lx1,
    images: [lx1, lx2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "learnX",
    content: (
      <div>
        <p>
          <strong>LearnX</strong> is your gateway to high-quality, affordable
          online learning. Whether you're leveling up your tech skills,
          exploring design, marketing, or launching a new career, LearnX offers
          expertly crafted courses designed to fit your goals and schedule.
          Learn from industry professionals, follow hands-on projects, and build
          a portfolio that stands out.
        </p>
        <p>
          With a modern, user-friendly platform and lifetime access to your
          courses, LearnX gives you the freedom to learn at your own pace. Stay
          ahead of the curve with continuously updated content and personalized
          course recommendations — because at LearnX, growth never stops.
        </p>
      </div>
    ),
  },
];
