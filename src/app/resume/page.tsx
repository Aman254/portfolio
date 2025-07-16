import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      {/* <WorkHistory /> */}
      <Link
        href="https://www.canva.com/design/DAGtU1XTuno/BrKUQYsj7Tp6KwV1wBenzA/edit?utm_content=DAGtU1XTuno&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-20 bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border border-gray-800 hover:border-gray-600">
          Resume Link
        </button>
      </Link>
    </Container>
  );
}
