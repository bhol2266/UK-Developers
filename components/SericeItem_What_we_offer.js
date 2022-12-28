const SericeItem_What_we_offer = (props) => {

    const { image, description, title } = props

    return (

        <div className="flex flex-col items-center justify-center sm:block">
            <img src={image} alt={title} className=' pb-0 w-[60px] h-[60px] md:w-[70px] md:h-[60px] xl:w-[90px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[90px] my-4 md:my-4 xl:my-8' />
            <h1 className="font-Legend font-medium text-[#FFFFFF] text-[15px] md:text-[17px] xl:text-[18px] text-start my-3">{title}</h1>
            <p className="font-inter text-[#dcdcdc] text-[11px]  md:text-[12px] xl:text-[13px] sm:text-start pr-4 md:pr-8 xl:pr-[40px] 2xl:pr-[100px] text-center">{description}</p>
        </div>

    )
};
export default SericeItem_What_we_offer;