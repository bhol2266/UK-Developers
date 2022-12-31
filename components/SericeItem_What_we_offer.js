const SericeItem_What_we_offer = (props) => {

    const { image, description, title } = props

    return (

        <div className="">
            <img src={image} alt={title} className=' pb-0  h-[60px]  md:h-[60px] xl:h-[80px] 2xl:h-[90px] my-4 md:my-4 xl:my-8' />
            <h1 className="font-Legend font-medium text-[#FFFFFF] text-[15px] md:text-[17px] xl:text-[18px] text-start my-3">{title}</h1>
            <p className="font-inter text-[#dcdcdc] text-[10px]  md:text-[12px] xl:text-[13px] text-start pr-4 md:pr-8 xl:pr-[40px] 2xl:pr-[100px] ">{description}</p>
        </div>

    )
};
export default SericeItem_What_we_offer;