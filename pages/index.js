import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Quatation from '../components/Quatation'
import SericeItem_What_we_offer from '../components/SericeItem_What_we_offer'
import ServiceItem from '../components/ServiceItem'


const allServices = [
  { image: "./services/Webapplication.svg", title: "Web application", description: "Get an application or software that can run independent of platform. We provide web powered applications that run on cloud, always synced data and 24/7 support from us." },
  { image: "./services/Websitess.svg", title: "Websites", description: "Need a website for your business, organizations ? We provide exactly that. Get your own website with better user interface & user experience with rich features." },
  { image: "./services/Marketing.svg", title: "Marketing / SEO", description: "From the ground to social platforms, We do it all. We provide marketing campaigns for your business to targeted consumers." },
  { image: "./services/Automation.svg", title: "Automation", description: "Reduce efforts to handle all functions in your system. We develop programs that can automate your work and help to improve efficiency, reduce costs, and improve the accuracy and consistency of tasks." },
  { image: "./services/Analytics.svg", title: "Analytics", description: "Transform your data into Graphs, Pie chart or any other. Get a visually and technically pleasing tool to track your data. We also provide a dashboard powered by Microsoft Power bi." },

  { image: "./services/Datavisualization.svg", title: "Data visualization", description: "We value the data, the kind of information it generates for us so we make data driven decisions. Decisions that would truly be based on accurate information. Now you can boost the sales and run a successful company." },

  { image: "./services/Cloud.svg", title: "Cloud", description: "Robust and accessible solutions are driven by accessible technologies which alway make sure that your web application, information it provides are both accessible." },
  { image: "./services/Mobileapps.svg", title: "Mobile apps", description: "Bring your ideas to mobile platforms with an app. Because the sooner your Mobile App hits the marketplace the better." },
  { image: "./services/E-commerce.svg", title: "E-commerce", description: "Get feature rich and pleasing UX & UI websites, software or applications for your targeted consumers & boost your sales." },
  { image: "./services/Devops.svg", title: "Devops", description: "We will set up the DevOps for you and with the powerful CI/CD pipeline you just focus on developing we'll take care of the infrastructure.We know the time it costs in testing the application and deploying the latest build." },
  { image: "./services/UXUIConsultancy.svg", title: "UX/UI Consultancy", description: "UI and UX are so important when it comes to the application designing. We know the power of UI/UX and what it is capable of so we design and develop them for your application or even update your existing one for you." },
  { image: "./services/Dataextraction.svg", title: "Data extraction", description: "We create a data warehouse for you and load all the data into it for your team to start processing on. We have the tools and techniques to get it." },

]


export default function Home() {
  return (

    <div className=''>


      <div className='px-[20px] sm:px-[26px] md:px-[30px] lg:px-[36px] xl:px-[60px] 2xl:px-[70px] bg-banner w-full bg-no-repeat bg-cover h-[300px] md:h-[350px] lg:h-[400px] xl:h-[550px] '>

        <div className='   flex flex-col justify-start items-start  pt-[100px] md:pt-[140px] xl:pt-[160px] 2xl:pt-[180px]  md:pl-[40px] xl:pl-[100px] 2xl:pl-[200px]'>

          <img src="./Title.png" alt="" className='w-4/5 md:3/5 xl:w-1/2 ' />

          <div className='flex space-x-2 w-full  my-6'>
            <button className='hover:bg-gray-600 font-inter font-medium px-2 py-1 text-[13px] lg:text-[18px]  lg:px-4  lg:py-2 rounded-[5px] text-white bg-textMain'>Discover more</button>
            <button className='hover:bg-gray-600 font-inter font-medium  px-2 py-1 text-[13px] lg:text-[18px]  lg:px-4  lg:py-2 rounded-[5px] text-white bg-textMain'>Services</button>
          </div>
        </div>
      </div>



      <div className='px-[20px] sm:px-[26px] md:px-[60px] lg:px-[36px] xl:px-[90px] 2xl:px-[100px]'>



        {/* Services */}
        <div className='relative bottom-4  grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-[60px] md:gap-[70px] xl:gap-[80px] 2xl:gap-[110px] '>
          <ServiceItem image="./services/MobApp.png" description="Bring your ideas to mobile platform with up to date ux & ui
in market." title="Mobile apps" />
          <ServiceItem image="./services/Websites.png" description="Get web app & site for wide range of systems with up to date languages." title="Websites & Apps" />
          <ServiceItem image="./services/Anal.png" description="Get visually & technically pleasing dashboards which actually works." title="Analytics" />
          <ServiceItem image="./services/Pricing.png" description="Flexible pricing plans for individuals , small business & big corporates." title="Pricing" />
        </div>


        <div className='mt-16 lg:mt-24'>
          <h1 className='font-Legend font-medium text-center text-textMain text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[38px]'>One place for all solutions.</h1>
          <p className='font-inter text-[#4B5563] text-center text-[13px] md:text-[15px] xl:text-[16px] mt-1 md:mt-2 xl:mt-3  lg:w-4/5 xl:w-3/5 mx-auto'>Providing the best user experience to your users and directly targeting the problem that was intended to solve, our softwares and applications are not only performant as compared to those leading the market but also rich with modern age design and seemless experience, so whoever you intended that application to be used by, not only bring about their tasks accurately on time but also with 100% effortless actions along with providing experience. </p>
        </div>

        {/* Users and Contacts  */}
        <div className='mt-16 lg:mt-24 md:flex justify-around xl:justify-around space-y-8 md:space-y-0 md:space-x-6  lg:space-x-10   sm:mx-auto   sm:w-fit xl:w-full'>
          <div className='flex items-center md:space-x-2 lg:space-x-4 sm: space-x-4 xl:space-x-6'>
            <img src="./user.png" alt="" className='w-[120px] md:w-[140px] xl:w-[165px] 2xl:w-[170px]' />
            <div>
              <h1 className='font-Legend font-medium text-center text-[#111928] text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[26px]'>200+ Users</h1>
              <p className='font-inter text-[#4B5563] text-center text-[13px] lg:text-[15px] xl:text-[16px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Providing services in more than 15 industry sectors</p>  </div>
          </div>
          <div className='flex items-center md:space-x-2 lg:space-x-4 sm: space-x-4 xl:space-x-6'>
            <img src="./contact.png" alt="" className='w-[120px] md:w-[140px] xl:w-[165px] 2xl:w-[170px]' />
            <div>
              <h1 className='font-Legend font-medium text-center text-[#111928] text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[26px]'>140+ Contracts</h1>
              <p className='font-inter text-[#4B5563] text-center text-[13px] lg:text-[15px] xl:text-[16px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Providing services in more than 15 industry sectors</p>
            </div>
          </div>
        </div>

      </div>

      <div className='bg-[#F4FBFF] py-6 mt-16 lg:mt-24 flex items-center justify-between lg:justify-around px-[14px] sm:px-[26px] md:px-[60px] lg:px-[36px] xl:px-[90px] 2xl:px-[100px] space-x-3'>

        <div className='bg-white p-[12px] lg:p-[20px] rounded-[20px] flex flex-col items-center justify-center w-fit'>
          <h1 className='font-Legend font-medium text-center text-[#111928] text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px]'>65+</h1>
          <p className='font-inter text-[#4B5563] text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Clients</p>
        </div>

        <div className='bg-white p-[12px] lg:p-[20px] rounded-[20px] flex flex-col items-center justify-center w-fit'>
          <h1 className='font-Legend font-medium text-center text-[#111928] text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px]'>85+</h1>
          <p className='font-inter text-[#4B5563] text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Projects</p>
        </div>

        <div className='bg-white p-[12px] lg:p-[20px] rounded-[20px] flex flex-col items-center justify-center w-fit'>
          <h1 className='font-Legend font-medium text-center text-[#111928] text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px]'>25+</h1>
          <p className='font-inter text-[#4B5563] text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Countrys</p>
        </div>

        <div className='bg-white p-[12px] lg:p-[20px] rounded-[20px] flex flex-col items-center justify-center w-fit'>
          <h1 className='font-Legend font-medium text-center text-[#111928] text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px]'>65+</h1>
          <p className='font-inter text-[#4B5563] text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto'>Company&lsquo;s</p>
        </div>







      </div>


      {/* Whatwe offer  */}
      <div className='mt-12 lg:mt-24 px-[14px] py-12 lg:py-[80px] xl:py-[100px]  sm:px-[26px] md:px-[60px] lg:px-[36px] xl:px-[90px] 2xl:px-[120px] backgroundCustomCss'>
        <h1 className='font-Legend font-medium text-center text-[#FFFFFF] text-[24px] lg:text-[28px] xl:text-[36px] 2xl:text-[38px] '>What we offer ?</h1>
        <p className='font-inter text-[#FFFFFF] text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto 2xl:w-3/5 xl:w-4/5'>Providing the best user experience to your users and directly targeting the problem that was intended to solve, our softwares and applications are not only performant as compared.&lsquo;s</p>


        <div className='pl-3 grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 mt-12 lg:mt-24 gap-10 md:gap-12 xl:gap-[50px] md:pl-10 sm:pl-6 lg:pl-12 xl:pl-16'>
          {allServices.map(item => {

            return (
              <SericeItem_What_we_offer key={item.title} image={item.image} description={item.description} title={item.title} />

            )
          })}

        </div>


        {/* Pricing  */}

        <div className='mt-14 lg:mt-28'>
          <Pricing />
        </div>


      </div>

      {/* Get Free Quatation  */}
      <div className='px-[14px] py-12 lg:py-[60px] xl:py-[80px]  sm:px-[26px] md:px-[60px] lg:px-[36px] xl:px-[90px] 2xl:px-[120px] '>
        <Quatation />

        <Portfolio />


        {/* About us  */}
        <div className='mt-14 lg:mt-[70px] xl:mt-[70px]'>

          <h1 className='font-Legend font-medium text-center text-textMain text-[24px] lg:text-[28px] xl:text-[36px] 2xl:text-[38px] '>About us</h1>
          <p className='font-inter text-textSub text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3  mx-auto 2xl:w-3/5 '>Codesout provides services in the domain of software development, mobile app development, website designing, web application creation, innovative designs, UI/UX consultancy, systems development and automations. Our company offers standalone software solutions that fits right on your expectations.</p>

          <p className='font-inter text-textSub text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto 2xl:w-3/5 '>Providing the best user experience to your users and directly targeting the problem that was intended to solve, our software and applications are not only performant as compared to those leading the market but also rich with modern age design and seamless experience, so whoever you intended that application to be used by, not only bring about their tasks accurately on time but also with 100% effortless actions along with providing experience. We believe in order to successfully execute the project it is very important for us to take you aboard regarding all the development process.</p>




          <p className='font-inter text-textSub text-center text-[12px] lg:text-[15px] xl:text-[17px] mt-1 md:mt-2 xl:mt-3    mx-auto 2xl:w-3/5 '> We say this because you are our project owner and owner should know about what is being developed. Apart from providing you the best service we can, we also provide you quite inclusive and clear development and production environment. We value your suggestions and always like to have you bring in new ideas to the table. Who cares if you cant&lsquo; code. But you can generate ideas like no one else can, combine that with our development expertise and top notch technology choices, we truly can create something that can bring in value to our user&lsquo;s life.</p>

        </div>


      </div>







      <Footer />





    </div>
  )
}
