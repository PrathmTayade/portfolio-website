import { AnimatedText } from "@/components/AnimatedText";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import project2 from "@/public/images/projects/Shopping-website.png";
import project1 from "@/public/images/projects/metaverse.png";
import project3 from "@/public/images/projects/Chartex.png";
import project4 from "@/public/images/projects/prompshare.png";
import project5 from "@/public/images/projects/Bookstore.png";
import project6 from "@/public/images/projects/CypherConnect.png";

const Page = () => {
  return (
    <div className="z-0 inline-block h-full w-full  p-8  sm:px-12 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto flex w-full flex-col items-center justify-center overflow-hidden   pb-10 text-center ">
        <AnimatedText
          text={"Imagination Trumps Knowledge!"}
          className={"  lg:!text-8xl"}
        />
      </div>
      <div className="grid grid-cols-12  gap-x-6 gap-y-32 sm:gap-y-24  md:gap-x-10 lg:gap-x-16 ">
        <div className="col-span-12">
          <FeaturedProjects
            title={"Prompshare"}
            description="Prompshare is an AI prompts sharing website that I built using Next.js 13, MongoDB, and TailwindCSS. It is a great way to share AI prompts with other users, and to find new AI prompts to use. Prompshare has a large collection of AI prompts, so you're sure to find something that you like. You can also collaborate with other users on AI projects by sharing your prompts, and working together to generate creative text content."
            gitLink={"https://github.com/PrathmTayade/propmshare"}
            projectLink={"https://propmshare.vercel.app/"}
            src={project4}
          />
        </div>
        <div className="col-span-12  sm:col-span-6">
          <Projects
            title={"Shopping Website"}
            projectLink={"https://ecommerce-website-prathmtayade.vercel.app/"}
            src={project2}
            gitLink={"https://github.com/PrathmTayade/Ecommerce-website"}
            description={
              "Beautiful Ecommerce Website made using Nextjs Tailwindcss , utilising apis to fetch data and Redux to handle the states"
            }
          />
        </div>
        <div className="col-span-12  sm:col-span-6">
          <Projects
            title={"CypherConnect"}
            projectLink={
              "https://github.com/PrathmTayade/cyperConnect-landing-page"
            }
            src={project6}
            gitLink={
              "https://github.com/PrathmTayade/cyperConnect-landing-page"
            }
            description={
              "CypherConnect - Modern UI/UX website, developed using Vite, React.js, Tailwind CSS and Framer Motion, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general."
            }
          />
        </div>
        <div className="col-span-12">
          <FeaturedProjects
            title={"Bookstore "}
            description={
              "Discover the best development books at our online bookstore! Built with React & Python FastAPI for a seamless experience. Enhance your coding skills with our expertly curated collection. Start your learning journey now!"
            }
            gitLink={"https://github.com/PrathmTayade/Bookstore"}
            projectLink={"https://stately-cupcake-73320e.netlify.app/"}
            src={project5}
          />
        </div>
        <div className="col-span-12  sm:col-span-6">
          <Projects
            title={"Metaverser Madness"}
            description="Metaverse Madness: A captivating landing page exploring the imaginative world of virtual reality. Crafted with Next.js, Tailwind, and Framer Motion, it boasts vibrant animations, a breathtaking art gallery, and insights into the creative mind behind it all. Welcome to the intersection of reality and fantasy!"
            gitLink={"https://github.com/PrathmTayade/Metaverse_animations"}
            projectLink={"https://poetic-biscuit-d9ae34.netlify.app/"}
            src={project1}
          />
        </div>
        <div className="col-span-12  sm:col-span-6">
          <Projects
            title={"Chartex"}
            projectLink={"https://github.com/PrathmTayade/Chartex"}
            src={project3}
            gitLink={"https://github.com/PrathmTayade/Chartex"}
            description={
              "Insights dashboard built using MERN stack, Chartjs, MUI, Tailwindcss, Redux, rtk-query "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
