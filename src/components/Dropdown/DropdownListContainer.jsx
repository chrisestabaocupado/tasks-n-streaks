const DropdownListContainer = ({ children, id }) => {
  return (
    <div
      id={id}
      className="z-10 w-max mt-12 absolute py-3 border border-light-accent hover:border-light-border bg-light-primary dark:border-dark-accent dark:hover:border-dark-border dark:bg-dark-primary rounded-lg transition-colors duration-300 ease-in-out"
    >
      {children}
    </div>
  );
};

export { DropdownListContainer };
