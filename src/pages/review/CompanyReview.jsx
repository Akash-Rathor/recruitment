import React, { useState } from 'react';
import ReviewImg from '../../assets/images/review.svg';
import { FormControl,Rating,Box,Select,MenuItem,InputLabel, Autocomplete,TextField} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
const labels = {
  0.5: 'Useless 😓',
  1: 'Useless 😖',
  1.5: 'Poor 😟',
  2: 'Poor 🙁',
  2.5: 'Ok 😀',
  3: 'Ok 😃',
  3.5: 'Good 😊',
  4: 'Good 🤗',
  4.5: 'Excellent 😋',
  5: 'Excellent 😍',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const employementTypeValue = [
  'Full Time','Part Time','Contractual','Intern','Freelancer'
]

const departmentValue = [
  'Full Time','Part Time','Contractual','Intern','Freelancer'
]
const CompanyReviewForm = () => {

  const [formState, setFormState] = useState({
    companyName: '',
    jobTitle: '',
    starRating: 0,
    workHere: '',
    officeLocation: '',
    gender: '',
    employement_type:''
  });

  
  const [workHere, setWorkHere] = useState('');
  const [showWorkingDetails, setShowWorkingDetails] = useState(false);
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [employementType, setEmployementType] = useState('Full Time');

  const handleWorkHereChange = (e) => {
    setWorkHere(e.target.value);
    setShowWorkingDetails(e.target.value === 'no');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const handleChange = (e) => {
    debugger
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const FilledStarIcon = (props) => (
    <StarIcon {...props} style={{ border: '2px solid',borderRadius: '50%',margin:2  }}/>
 );

 // Custom empty star icon with a border
 const EmptyStarIcon = (props) => (
    <StarIcon {...props} style={{ border: '2px solid',borderRadius: '50%',margin:2  }} /> 
 );

  return (
    <div className='h-screen flex flex-row justify-center items-center p-8 relative shadow-md overflow-hidden overflow-y-scroll'>

      <div className='rounded-2xl h-full w-full bg-black flex justify-center items-center border-2'>
        <div className='w-1/4 h-full flex justify-center items-center p-2'>
          <img className='w-full h-auto' src={ReviewImg} alt="Review" />
        </div>

        <div className='rounded-2xl w-3/4 h-full flex flex-row p-5 justify-center bg-my_logo_light border-2'>
          {/* <h1 className='text-center top-0 text-5xl'>Annonymously Rate your company - Make your voice heard</h1> */}
          <form onSubmit={handleSubmit}>
            <div class="mt-10 ">
              <div class="border-b border-gray-900/10 pb-4">
                <h2 class="text-base font-semibold leading-7 text-gray-900 text-center">Annonymously Write company review</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600 text-center">Your voice may help others to identity the company culture</p>
              </div>

              {/* <div class="border-b border-gray-900/10 pb-4"> */}
              <div>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Comapny name</label>
                    <div class="mt-2">
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Your Job title</label>
                    <div class="mt-2">
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-4">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Rate your company</label>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      icon={<FilledStarIcon fontSize="inherit" />} // Use the custom filled star icon
                      emptyIcon={<EmptyStarIcon fontSize="inherit" />} // Use the custom empty star icon
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>{getLabelText(hover !== -1 ? hover : value)}</Box>
                    )}
                  </div>

                  <div class="sm:col-span-3 gap-5">
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={employementTypeValue}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Employement Type" />}
                  />
                  </div>

                  <div class="sm:col-span-3 gap-5">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={departmentValue}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Department" />}
                  />
                  </div>

                </div>
                <div className='mt-5 flex flex-row justify-between items-center'>
                
                <fieldset className='flex'>
                    <legend class="text-sm font-semibold text-gray-900">Do you currently work here</legend>
                    <div class="position-absolute flex flex-row justify-start items-center gap-4">
                      <div class="">
                        <input id="gender_m" name="" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-my_logo_bg" />
                        <label for="push-everything" class="block text-sm font-medium text-gray-900">Yes</label>
                      </div>

                      <div class="">
                        <input id="gender_f" name="" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-my_logo_bg" />
                        <label for="gender_f" class="block text-sm font-medium  text-gray-900">No</label>
                      </div>
                    </div>
                  </fieldset>
              <div class="sm:col-span-4">
                    <label for="text" class="block text-sm font-medium text-gray-900">Office Location</label>
                    <div class="mt-2">
                      <input id="ofc_loc" name="ofc_loc" type="text" autocomplete="email" class="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
              </div>
                  </div>
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="col-span-full">
                  <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Write a few sentences about your company</label>
                  <div class="mt-2">
                    <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                </div>

              </div>
              <div class="border-b border-gray-900/10 pb-8 flex flex-row justify-center items-center">

                <div class="flex items-center justify-center m-5">
              <button type="submit" class="rounded-full bg-my-grey-dark px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-my_sucess ">Save</button>
            </div>
              </div>
              {/* <div class="border-b border-gray-900/10 pb-8 flex flex-row justify-center items-center">

                <div class="mt-10 ">


                </div>
                <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Years</label>
                    <div class="mt-2">
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                  <h1>Started working on</h1>
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Months</label>
                    <div class="mt-2">
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">years</label>
                    <div class="mt-2">
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <h1>Employement ended on</h1>
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Months</label>
                    <div class="mt-2">
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
              </div> */}

            </div>


          </form>
        </div>

      </div>
    </div>
  )
};
export default CompanyReviewForm;
