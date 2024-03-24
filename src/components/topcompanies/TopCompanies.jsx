import React , {useState} from 'react'

const TopCompanies = () => {
  const topCompanies = {
    "data": [
       {
         "type": "MNCs",
         "links": [
           "https://source.unsplash.com/silver-mercedes-benz-emblem-on-blue-surface-5MlBMYDsGBY",
           "https://source.unsplash.com/yellow-mcdonald-logo-sMZLg77Z2Dk",
           "https://source.unsplash.com/blue-and-white-x-logo-Cys3W7_MXDU",
         ],
         "count": "1.4k"
       },
       {
         "type": "Fintech",
         "links": [
          "https://source.unsplash.com/yellow-mcdonald-logo-sMZLg77Z2Dk",
          "https://source.unsplash.com/blue-and-white-x-logo-Cys3W7_MXDU",
           "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
         ],
         "count": "100"
       },
       {
         "type": "FMCG & Reatil",
         "links": [
           "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
           "https://source.unsplash.com/yellow-mcdonald-logo-sMZLg77Z2Dk",
           "https://source.unsplash.com/google-sign-fpZZEV0uQwA",

         ],
         "count": "100k+"
       },
       {
         "type": "Manufacturing",
         "links": [
           "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
           "https://source.unsplash.com/yellow-mcdonald-logo-sMZLg77Z2Dk",
           "https://source.unsplash.com/blue-and-white-x-logo-Cys3W7_MXDU",
           "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
         ],
         "count": "253"
       },
       {
         "type": "Fortune 500",
         "links": [
           "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
           "https://source.unsplash.com/yellow-mcdonald-logo-sMZLg77Z2Dk",
           "https://source.unsplash.com/blue-and-white-x-logo-Cys3W7_MXDU",
           "https://source.unsplash.com/yellow-mcdonald-logo-sMZLg77Z2Dk",
           "https://source.unsplash.com/blue-and-white-x-logo-Cys3W7_MXDU",
         ],
         "count": "93"
       },
       {
         "type": "Product",
         "links": [
           "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
           "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
           "https://source.unsplash.com/yellow-mcdonald-logo-sMZLg77Z2Dk",

         ],
         "count": "680"
       },
       {
         "type": "Fortune 500",
         "links": [
           "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A"
         ],
         "count": "93"
       },
       {
         "type": "Product",
         "links": [
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A",
           "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
         ],
         "count": "680"
       },
       {
         "type": "Fortune 500",
         "links": [
           "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A"
         ],
         "count": "93"
       },
       {
         "type": "Product",
         "links": [
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A",
           "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
         ],
         "count": "680"
       },
       {
         "type": "Fortune 500",
         "links": [
           "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A"
         ],
         "count": "93"
       },
       {
         "type": "Product",
         "links": [
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A",
           "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
         ],
         "count": "680"
       },
       {
         "type": "Fortune 500",
         "links": [
           "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A"
         ],
         "count": "93"
       },
       {
         "type": "Product",
         "links": [
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A",
           "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
         ],
         "count": "680"
       },
       {
         "type": "Fortune 500",
         "links": [
           "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A"
         ],
         "count": "93"
       },
       {
         "type": "Product",
         "links": [
           "https://source.unsplash.com/silver-and-black-round-emblem-NHRM1u4GD_A",
           "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
         ],
         "count": "680"
       },
    ]
   };
  
   const [currentIndex, setCurrentIndex] = useState(0);
   const itemsPerPage = 5;
   const totalPages = Math.ceil(topCompanies.data.length / itemsPerPage);

   const handleNext = () => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
   };
  
   const handlePrevious = () => {
      setCurrentIndex((prevIndex) => prevIndex - 1);
   };

   const currentCompanies = topCompanies.data.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);
   console.log(currentCompanies)
   return (
    <div className="bg-white py-24 sm:py-32 justify-center position-relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">Top Companies Hiring Now</h2>

        {/* Wrap the companies list in a relative container */}
        <div className="relative flex justify-center items-center mt-10">
          {/* next and previous button start */}
          <div className='absolute left-0 m-3'>
            {currentIndex > 0 && <span onClick={handlePrevious} className="text-slate-600 p-3 bg-white hover:bg-blue-50 hover:border-lime-500 border-2 px-4 border-slate-300 shadow-2xl font-bold rounded-full hover:cursor-pointer"><i className="fa-solid fa-chevron-left"></i></span>}
          </div>
          <div className='absolute right-0 m-3'>
            {currentIndex < totalPages - 1 && <span onClick={handleNext} className="text-slate-600 bg-white hover:border-lime-500 p-3 px-4 border-2 border-slate-300 shadow-2xl font-bold rounded-full hover:cursor-pointer"><i className="fa-solid fa-chevron-right"></i></span>}
          </div>
          {/* next and previous button end */}

          {/* to companies block start */}
          <div className="mx-auto grid mt-[-10] max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 top-0 left-0">
            {currentCompanies.map((company, index) => (
              <div className="w-48 h-30 border-2 position-relative rounded-2xl border-slate-100 p-2 shadow-md hover:shadow-2xl hover:cursor-pointer ">
                <h1 className='pt-2 font-medium'>{company.type} &gt;</h1>
                <p className='text-slate-600 text-xs'>{company.count} Actively Hiring</p>
                <div className='flex flex-nowrap rounded mt-3 item-center overflow-hidden'> {/* Ensure overflow is hidden */}
                 {company.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="w-10 h-10 border border-gray-300 rounded-lg overflow-hidden m-1">
                      <img className="w-full h-full bg-cover bg-center" src={link} alt={`Company Logo ${linkIndex}`}/>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* to companies block end */}
        </div>
      </div>
    </div>
 );
};

export default TopCompanies;