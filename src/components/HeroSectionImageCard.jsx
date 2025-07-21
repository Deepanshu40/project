import { twMerge } from "tailwind-merge";

const HeroSectionImageCard = ({
  index,
  text,
  icon = null,
  imageAddress,
  imageAlt = "",
  imagePosition = "bottom",
}) => {
  return (
    <div
      className={twMerge(
        `flex flex-col items-center ${index % 2 === 0 ? "" : "hidden xl:flex"}`
      )}
    >
      {!imagePosition || imagePosition === "bottom" ? (
        <div className="flex flex-col items-center w-[274px] gap-6">
          <div
            className={`flex items-center justify-center rounded-md w-fit p-[2px] text-white flex-nowrap tabletAnimation`}
            style={{
              background:
                "linear-gradient(90deg, #FF4949 0%, #EA9534 26%, #83CB57 60%, #505CFF 91%)",
            }}
          >
            <div className="flex text-nowrap bg-blue gap-4 px-6 py-4">
              {icon}
              <span>{text}</span>
            </div>
          </div>

          <div className="w-full rounded-2xl">
            <img
              src={imageAddress}
              alt={imageAlt}
              className="w-max-full rounded-2xl"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 w-[300px]">
          <div className="w-full rounded-2xl">
            <img
              src={imageAddress}
              alt={imageAlt}
              className="w-max-full rounded-2xl"
            />
          </div>
          <div
            className={`flex items-center justify-center rounded-md w-fit p-[2px] text-white flex-nowrap tabletAnimation`}
            style={{
              background:
                "linear-gradient(90deg, #FF4949 0%, #EA9534 26%, #83CB57 60%, #505CFF 91%)",
            }}
          >
            <div className="flex text-nowrap bg-blue gap-4 px-6 py-4">
              {icon}
              <span>{text}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSectionImageCard;
