import React, { useState, useEffect } from 'react';
import Building from '../../assets/images/buildings.svg';
import Search from '../../assets/images/search.svg';

const TypingEffect = () => {
  const [typingText, setTypingText] = useState('');
  const texts = [
    "Salary Review  ",
    "Company Overview  ",
    "Interview Questions  ",
    "Interview experiences  ",
    "Your Next Jobs  "
  ];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const type = () => {
      const currentText = texts[index];
      if (isDeleting) {
        setTypingText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      if (charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, 100);
      }
    };

    type();
  }, []);

  return typingText;
};

const Home = () => {
  const [formState, setFormState] = useState({
    companyOrDesignation: "",
  });

  const handleChange = (name, value) => {
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-auto position-relative p-10 lg:flex-row md-flex-row'>

      <div className='flex bg-white position-absolute w-full h-1/4'>
        <div className=''>
          <img src={Building} className='' alt='corporatebuilding' />
        </div>
        <div className=''>
          <img src={Search} className='' alt='search' />
        </div>
      </div>

      <div className="flex flex-col bg-white position-absolute w-full h-3/4 justify-center items-center">
        <h1 id="typingHeader" className="text-3xl font-semibold lg:text-7xl md:text-7xl">
          India's No.1 platform For&nbsp;
          <br className="hidden lg:block md:block" />
          <span className='text-blue-500 text-xl lg:text-6xl md-text-6xl'>
          <TypingEffect/>
            </span>
        </h1>
        <form className="m-5 relative">
          <div className="relative">
            <input
              onChange={(e) => handleChange('companyOrDesignation', e.target.value)}
              type="text"
              name="companyOrDesignation"
              placeholder="Company or designation"
              value={formState.companyOrDesignation}
              id="companyOrDesignation"
              className="p-5 text-xl rounded-full w-full h-14 iphone:w-full iphone:h-14 border-2 border-slate-500 focus:slate-500 text-center pl-12"
            />
            <div className="absolute inset-y-0 left-0 p-5  rounded-full flex items-center">
            <i class="fa-solid fa-magnifying-glass fa-beat fa-lg text-golden"></i>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Home;
