const HeaderInfo = ({ Icon, title }) => {
  return (
    <div className="flex items-center space-x-2">
      {Icon}
      <span className="capitalize text-sm md:text-base font-semibold text-red-500 dark:text-red-300">
        {title}
      </span>
    </div>
  );
};
export default HeaderInfo;
