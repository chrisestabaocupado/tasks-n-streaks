const DropdownListContainer = ({
  children,
  id,
  onMouseLeave,
  className,
  ref,
}) => {
  return (
    <div
      ref={ref}
      onMouseLeave={onMouseLeave}
      id={id}
      className={`z-10 w-max absolute py-3 shadow-lg border border-light-accent hover:border-light-border bg-light-primary dark:border-dark-accent dark:hover:border-dark-border dark:bg-dark-primary rounded-lg transition-colors duration-300 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
};

export { DropdownListContainer };
