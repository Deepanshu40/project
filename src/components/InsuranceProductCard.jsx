import ButtonWithIcon from "./ButtonWithIcon";

const InsuranceProductCard = (
{  imageAddress,
  iconImageAddress,
  cardTitle,
  cardText,
  btnText,
  btnIcon,
  btnClassNames=""
}
) => {


  return (
    <div className={`group relative flex flex-col justify-end bg-white rounded-2xl font-semibold shadow-style1 hover:shadow-xl ${imageAddress} bg-no-repeat bg-cover bg-top duration-500 h-[400px] md:h-[500px] xl:h-[600px] isolate insuranceCard`}>
      <div className="absolute w-full h-full bg-transparent group-hover:bg-[#0b33b8e6] group-hover:opacity-20 rounded-2xl z-10"></div>
      <div className="absolute w-full flex flex-col p-4 gap-2 bg-white rounded-b-2xl z-20">
      <img src={iconImageAddress} alt="product_icon" className="size-12 rounded-2xl"/>
      <h1 className="text-lg">{cardTitle}</h1>
      <span className="text-xs">{cardText}</span>
      {btnIcon ? <ButtonWithIcon btnText={btnText} icon={btnIcon} classNames={btnClassNames} /> : <ButtonWithIcon btnText={btnText} classNames={btnClassNames} />} 
      </div>
    </div>
  );
};

export default InsuranceProductCard;
