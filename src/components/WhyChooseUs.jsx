import {Batch, Clock, CurveArrow, Shield1, Shield4, Tick} from "../assets/Svg"

const clientBenefits = [
    {
        icon: <Batch />,
        title: "Expert Guidance",
        text: "Our certified professionals provide personalized advice tailored to your unique needs."
    },
    {
        icon: <Clock />,
        title: "24/7 Support",
        text: "Round-the-clock assistance when you need it most, because emergencies don't wait."
    },
    {
        icon: <span className='text-[#FF9604]'><Shield1 /></span>,
        title: "Trusted Partners",
        text: "We work with A-rated insurance companies to ensure your claims are paid promptly."
    },
    {
        icon: <Tick />,
        title: "Simplified Process",
        text: "From quotes to claims, we've streamlined everything to save you time and hassle."
    }
]


const WhyChooseUs = () => {

  return (
    <div className="flex flex-col md:flex-row">
        <div className="relative flex flex-col bg-pink border-1 shadow-style1 p-[8%] w-full md:w-1/2 gap-8">
        <div className="absolute hidden md:block top-0 -end-32"><CurveArrow /></div>
            <h1 className="text-4xl text-blue font-semibold tracking-wider w-8/12">Why Choose RTF Insurance?</h1>
            <div className="flex flex-col gap-8">
                {clientBenefits.map((item, index) => <div key={index} className="flex items-start gap-6">
                    <div className="flex justify-center items-center p-2 size-12 rounded-xl bg-[#FFC691]/90">{item.icon}</div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">{item.title}</span>
                        <span className="text-base font-light">{item.text}</span>
                    </div>
                </div>)}
            </div>
        </div>
        <div className="flex justify-center items-center p-[5rem] w-full md:w-1/2">
            <div className="flex flex-col items-center text-center gap-4 bg-[linear-gradient(to_right,_#E8EBF0_0%,_#F4F8EB_61%)] px-[20%] py-20">
                {<Shield4 />}
                <div className="flex flex-col gap-2">
                <span className="text-lg font-bold text-blue">Your Protection, Our Promise</span>
                <span className="text-sm text-blue">Dedicated to Safeguarding what matters most to you</span>

                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs