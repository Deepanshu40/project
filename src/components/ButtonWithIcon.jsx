import { twMerge } from 'tailwind-merge'

const ButtonWithIcon = ({
    btnText, 
    icon = null,
    classNames="",
    ...props
}) => {


  return (
    <button className={twMerge('flex items-center py-1 px-4 border-1 rounded-md font-semibold flex-nowrap cursor-pointer gap-2', classNames)} {...props}>
      <span className="text-nowrap">{btnText}</span>
      {icon}
    </button>
  );
};

export default ButtonWithIcon;
