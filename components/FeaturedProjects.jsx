const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const FeaturedProjects = ({
  title,
  description,
  gitLink,
  projectLink,
  src,
}) => {
  return (
    <article className=" relative flex w-full  flex-col items-center justify-between rounded-2xl rounded-br-3xl border border-solid border-dark bg-light  p-4 shadow-2xl  dark:border-light  dark:bg-dark sm:rounded-3xl sm:rounded-br-2xl  sm:p-8 md:p-12 lg:flex-row  ">
      <div className="absolute  -right-2 top-0 -z-10 h-[102%] w-[100%] rounded-[1.5rem] bg-dark dark:bg-light sm:-right-3  sm:h-[103%] sm:w-[101%] sm:rounded-[2.5rem] sm:rounded-br-3xl " />
      <Link
        target="_blank"
        className="relative h-auto w-full cursor-pointer overflow-hidden rounded-lg lg:w-1/2"
        href={projectLink}
      >
        <Image
          alt={`${title}`}
          className="h-auto w-full object-contain "
          priority
          src={src}
        />
      </Link>
      <div className="flex w-full flex-col items-start justify-between pl-0 pt-6 lg:w-1/2 lg:pl-6">
        <span className="text-base font-medium text-primary dark:text-primaryDark sm:text-xl">
          Featured Project
        </span>

        <h2 className="my-2 w-full text-left text-2xl font-bold sm:text-4xl lg:text-3xl">
          {title}
        </h2>
        <p className=" my-2  rounded-md  font-medium text-dark dark:text-light sm:text-sm md:text-justify">
          {description}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            target="_blank"
            className="w-10"
            aria-label={`${title} github link`}
            href={gitLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              className="undefined h-auto w-full"
            >
              <path fill="none" d="M0 0h512v512H0z" />
              <path
                fill="currentColor"
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
              />
            </svg>
          </Link>
          <Link
            target="_blank"
            className="ml-4 rounded-lg bg-dark p-2 px-4 text-base font-semibold text-light dark:bg-light dark:text-dark  sm:px-6 sm:text-lg "
            aria-label={`${title}`}
            href={projectLink}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjects;
