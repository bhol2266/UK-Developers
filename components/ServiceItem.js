const ServiceItem = (props) => {

    const { image, description, title } = props

    return (

        <div>
            <img src={image} alt={title} className='p-3 pb-0 mx-auto'/>
            <h1 className="font-Legend font-medium text-textMain text-[14px] md:text-[16px] xl:text-[18px] text-center">{title }</h1>
            <p className="font-inter text-[#4B5563] text-[12px]  md:text-[13px] xl:text-[14px] text-center mt-2">{description }</p>
        </div>

    )
};
export default ServiceItem;