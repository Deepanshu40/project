import ButtonWithIcon from "./ButtonWithIcon";

const InsuranceProductCard = (
{  imageAddress = "/family.jpg",
  iconImageAddress = "/family.jpg",
  cardTitle = "Card Title",
  cardText = "Card Text",
  btnText = "Click me!",
  btnIcon = null,
  btnClassNames=""
}
) => {
  // "/products/image1.png"
  return (
    <div className={`flex flex-col justify-end bg-white rounded-2xl font-semibold shadow-style1 ${imageAddress} bg-no-repeat bg-cover bg-center h-[400px] md:h-[500px] xl:h-[700px]`}>
      {/* <img src={imageAddress} alt="product_image" className="h-[250px] max-w-full object-cover rounded-t-2xl" /> */}
      <div className="flex flex-col p-4 gap-2 bg-white rounded-b-2xl">
      <img src={iconImageAddress} alt="product_icon" className="size-12 rounded-2xl"/>
      <h1 className="text-lg">{cardTitle}</h1>
      <span className="text-xs">{cardText}</span>
      {btnIcon ? <ButtonWithIcon btnText={btnText} icon={btnIcon} classNames={btnClassNames} /> : <ButtonWithIcon btnText={btnText} classNames={btnClassNames} />} 
      </div>
    </div>
  );
};

export default InsuranceProductCard;
