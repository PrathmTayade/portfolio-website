function layout({ children }) {
  return (
    <main className="prose px-8 py-2 dark:prose-invert  lg:prose-lg  sm:px-16 md:px-28 lg:px-32 lg:py-10 ">
      {children}
    </main>
  );
}

export default layout;
