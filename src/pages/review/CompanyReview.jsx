import React, { useState } from 'react';
// import ReviewImg from '../../assets/images/review.svg';
import Alert from '@mui/material/Alert';
import { Rating, Box, Autocomplete, TextField } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';


const labels = {
  0:'',
  0.5: 'Useless 😓',
  1: 'Useless 😖',
  1.5: 'Poor  😟',
  2: 'Poor  🙁',
  2.5: 'Ok    😀',
  3: 'Ok    😃',
  3.5: 'Good    😊',
  4: 'Good    🤗',
  4.5: 'Excellent 😋',
  5: 'Excellent 😍',
};

function getLabelText(value) {
  return `${labels[value]}`;
  // return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const officeLocation = [
  "ADILABAD", "AGAR MALWA", "Agartala†", "AGRA", "AHMED NAGAR", "AHMEDABAD", "Ahmedabad City", "Aizawal", "Aizawl", "AJMER", "AKOLA", "ALAPPUZHA", "Aligarh", "ALIRAJPUR", "ALLAHABAD", "ALMORA", "ALWAR", "AMBALA", "AMBEDKAR NAGAR", "AMETHI", "AMRAVATI", "AMRELI", "AMRITSAR", "AMROHA", "ANAND", "ANANTHAPUR", "ANANTHNAG", "ANGUL", "ANUPPUR", "ARARIA", "ARAVALLI", "ARIYALUR", "ARWAL", "ASHOK NAGAR", "Athani", "AURAIYA", "AURANGABAD", "AZAMGARH", "BAGALKOT", "BAGESHWAR", "BAGPAT", "BAHRAICH", "Bailhongal", "BAKSA", "BALAGHAT", "BALANGIR", "BALESWAR", "BALLIA", "BALOD", "BALOD BAZER", "BALRAMPUR", "BANASKANTHA", "BANDA", "BANDIPUR", "Bangalore", "BANKA", "BANKURA", "BANSWARA", "Bapatla", "BARABANKI", "Baramulla", "BARAN", "BARDHAMAN", "BAREILLY", "BARGARH", "BARMER", "BARPETA", "BARWANI", "Bastar", "BASTI", "BATHINDA", "BEED", "BEGUSARAI", "BELAGAVI", "BELLARY", "BEMETARA", "BENGALURU", "BENGALURU RURAL", "BETUL", "BHADRAK", "BHAGALPUR", "BHANDARA", "BHARATPUR", "BHARUCH", "BHAVNAGAR", "BHILWARA", "BHIND", "BHIWANI", "BHOJPUR", "BHONGIR", "BHOPAL", "Bidar", "BIJAPUR", "Bijapur(CGH)", "BIJAPUR(KAR)", "BIJNOR", "BIKANER", "Bilaspur", "BILASPUR HP", "BILASPURCGH", "BIRBHUM", "Bishnupur", "BOKARO", "BONGAIGAON", "BOTAB", "BOUDH", "BUDAUN", "BUDGAM", "BULANDSHAHR", "BULDHANA", "BUNDI", "BURHANPUR", "BUXAR", "CACHAR", "CENTRAL DELHI", "CHAMBA", "CHAMOLI", "CHAMPAWAT", "Champhai", "Chamrajnagar", "CHANDAULI", "Chandel", "CHANDIGHAR", "CHANDRAPUR", "Changlang", "CHATRA", "CHENNAI", "CHHATARPUR", "CHHINDWARA", "Chhotaudepur", "CHICKMAGALUR", "CHIKKABALLAPUR", "CHITRADURGA", "CHITRAKOOT", "Chittoor", "CHITTORGARH", "Churachandpur", "CHURU", "COIMBATORE", "COOCH BEHAR", "CUDDALORE", "CUTTACK", "DADRA NAGAR HAVELI", "DAHOD", "Dakshina Kannada", "DAMAN", "DAMOH", "DANGS", "Dantewada", "DARBHANGA", "Darjeeling", "DARJILING", "DARRANG", "DATIA", "DAUSA", "DAVANGERE", "DEBAGARH", "DEHRADUN", "DEOGHAR", "DEORIA", "DEVBHOOMI DWERKA", "DEWAS", "Dhalai", "DHAMTARI", "DHANBAD", "DHAR", "Dharmanagar", "DHARMAPURI", "Dharwad", "DHEMAJI", "DHENKANAL", "DHOLPUR", "DHUBRI", "DHULE", "Dibang Valley", "DIBRUGARH", "DIM AP HASSO - NORTH CACHAR HILL", "Dimapur", "DINDIGUL", "DINDORI", "DIU", "DODA", "DUMKA", "DUNGARPUR", "DURG", "EAST CHAMPARAN", "EAST DELHI", "East Garo Hills", "EAST GODAVARI", "East Kameng", "East Khasi Hills", "EAST MIDNAPORE", "East Siang", "EAST SIKKIM", "EAST SINGHBHUM", "ERNAKULAM", "ERODE", "ETAH", "ETAWAH", "FAIZABAD", "FARIDABAD", "FARIDKOT", "FARRUKHABAD", "FATEHABAD", "FATEHGARH SAHIB", "FATEHPUR", "FAZILKA", "FIROZABAD", "FIROZPUR", "GADAG", "GADCHIROLI", "GADWAL", "GAJAPATI", "GANDERBAL", "GANDHI NAGAR", "Gandhinagar", "GANJAM", "GARHWA", "GARIABAND", "GAUTAM BUDDHA NAGAR", "GAYA", "GHAZIABAD", "GHAZIPUR", "GIR SOMNATH", "GIRIDH", "GOALPARA", "GODDA", "GOLAGHAT", "Gomati", "GONDA", "GONDIA", "GOPALGANJ", "GORAKHPUR", "GUMLA", "GUNA", "Guntur", "GURDASPUR", "GURGAON", "GWALIOR", "HAILAKANDI", "HAMIRPUR", "HAMIRPURHP", "Hanamkonda", "HANUMANGARH", "HAPUR", "HARDA", "HARDOI", "HARIDWAR", "HASSAN", "HATHRAS", "HAVERI", "HAZARIBAG", "Hazaribagh", "Hindupur", "HINGOLI", "HISAR", "HOOGHLY", "HOSHANGABAD", "HOSHIARPUR", "HOWRAH", "Hubballi", "HYDERABAD", "IDUKKI", "Imphal East", "Imphal West", "INDORE", "JABALPUR", "JAGATSINGHAPUR", "Jagdalpur", "JAGTIAL", "Jaintia Hills", "JAIPUR", "JAISALMER", "JAJAPUR", "JALANDHAR", "JALAUN", "Jalgaon", "JALNA", "JALOR", "JALPAIGURI", "JAMMU", "JAMNAGAR", "JAMTARA", "JAMUI", "Jangaon", "Janjgir-Champa", "JANJGIRCHAMPA", "JASPUR", "JAUNPUR", "JAYASHANKAR", "JEHANABAD", "JHABUA", "JHAJJAR", "JHALAWAR", "JHANSI", "JHARSUGUDA", "JHUJHUNU", "JIND", "JODHPUR", "Joida", "JORHAT", "JUNAGADH", "KACHCHH", "KADAPA", "KAIMUR BHABUA", "KAITHAL", "KALABURAGI", "KALAHANDI", "KAMAREDDY", "KAMRUP", "KAMRUP METROPOLITAN", "KANCHIPURAM", "KANDHAMAL", "KANGRA", "Kanker", "KANNAUJ", "KANNUR", "KANPUR DEHAT", "KANPUR NAGAR", "KANSHIRAM NAGAR", "KANYAKUMARI", "KAPURTHALA", "KARAIKAL", "KARAULI", "KARBI ANGLONG", "Kargil", "KARIM NAGAR", "KARIMGANJ", "KARNAL", "KARUR", "Kasaragod", "KASARGOD", "KATHUA", "KATIHAR", "KATNI", "KAUSHAMBI", "KAWARDHA", "KENDRAPARA", "KENDUJHAR", "KHAGARIA", "KHAMMAM", "KHANDWA", "KHARGONE", "KHEDA", "KHERI", "Khunti", "KINNAUR", "Kiphire", "KISHANGANJ", "Kochi", "KODAGU", "KODERMA", "Kohima", "KOKRAJHAR", "KOLAR", "Kolasib", "Kolhapur", "KOLKATA", "KOLLAM", "KOPPAL", "KORAPUT", "KORBA", "KORIYA", "KOTA", "KOTHAGUDEM", "KOTHAGUDEM COLLS", "KOTTAYAM", "Kovvur", "KOZHIKODE", "KRISHNA", "KRISHNAGIRI",
  "KULGAM", "", "KULLU", "Kupwara", "Kurnool", "KURUKSHETRA", "Kurung Kumey", "KUSHINAGAR", "LAHUL SPITI", "LAKHIMPUR", "LAKHISARAI", "Lakshadweep", "LALITPUR", "LATEHAR", "LATUR", "Lawngtlai", "Leh", "Lohardaga", "Lohit", "Longleng", "Lower Dibang Valley", "Lower Subansiri", "LUCKNOW", "LUDHIANA", "Lunglei", "Machilipatnam", "Madanapalle", "MADHEPURA", "MADHUBANI", "Madikeri", "MADURAI", "Mahabuababad", "MAHABUB NAGAR", "MAHARAJGANJ", "MAHASAMUND", "MAHE", "MAHENDRAGARH", "MAHESANA", "MAHISAGAR", "MAHOBA", "MAHRAJGANJ", "MAINPURI", "MALAPPURAM", "MALDA", "Malegaon", "MALKANGIRI", "Mammit", "MANCHERIAL", "MANDI", "MANDLA", "MANDSAUR", "Mandya", "MANSA", "MARIGAON", "MATHURA", "MAU", "MAYURBHANJ", "MEDAK", "MEERUT", "MEWAT", "Miraj", "MIRZAPUR", "MOGA", "MOHALI", "Mokokchung", "Mon", "MORADABAD", "MORBI", "MORENA", "MUKTSAR", "MUMBAI", "MUMBAI SUBUEBAN", "MUNGELI", "MUNGER", "MURSHIDABAD", "MUZAFFARNAGAR", "MUZAFFARPUR", "Mysuru", "NA", "NABARANGAPUR", "NADIA", "NAGAON", "NAGAPATTINAM", "NAGAR KURNOOL", "NAGAUR", "Nagpur", "NAINITAL", "NALANDA", "NALBARI", "NALGONDA", "NAMAKKAL", "NANDED", "NANDURBAR", "Nanjangud", "Narayanpur", "NARMADA", "NARSINGHPUR", "NASHIK", "NAVSARI", "NAWADA", "NAWANSHAHR", "NAYAGARH", "NEEMUCH", "NELLORE", "NEW DELHI", "Nicobar", "NILGIRIS", "NIRMAL", "NIZAMABAD", "NORTH 24 PARGANAS", "North And Middle Andaman", "NORTH DELHI", "NORTH DINAJPUR", "NORTH EAST DELHI", "NORTH GOA", "NORTH SIKKIM", "North Tripura", "NORTH WEST DELHI", "NUAPADA", "OSMANABAD", "PAKUR", "PALAKKAD", "PALAMAU", "PALGHAR", "PALI", "PANCH MAHALS", "PANCHKULA", "PANIPAT", "PANNA", "Papum Pare", "PARBHANI", "Parkal", "PATAN", "PATHANAMTHITTA", "PATHANKOT", "PATIALA", "PATNA", "PAURI GARHWAL", "PEDDAPALLI", "PERAMBALUR", "Peren", "Phek", "Pilibhit", "PITHORAGARH", "PONDICHERRY", "POONCH", "PORBANDAR", "PRAKASAM", "PRATAPGARH", "PRATAPGHAR", "Prayagraj Allahabad", "PUDUKKOTTAI", "PULWAMA", "PUNE", "PURI", "PURNIA", "PURULIYA", "RAEBARELI", "RAICHUR", "RAIGARH", "RAIGARH(MH)", "RAIPUR", "RAISEN", "RAJAURI", "RAJGARH", "RAJKOT", "RAJNANDGAON", "RAJSAMAND", "RAMANAGAR", "RAMANATHAPURAM", "RAMBAN", "RAMGARH", "RAMPUR", "RANCHI", "Ranga Reddy", "RANGAREDDY", "RATLAM", "RATNAGIRI", "RAYAGADA", "REASI", "REWA", "REWARI", "Ri Bhoi", "ROHTAK", "ROHTAS", "ROPAR", "RUDRAPRAYAG", "RUPNAGAR", "SABARKANTHA", "SAGAR", "SAHARANPUR", "SAHARSA", "SAHIBGANJ", "Saiha", "SALEM", "SAMASTIPUR", "SAMBA", "SAMBALPUR", "SAMBHAL", "SANGAREDDY", "Sangli", "SANGRUR", "SANT KABIR NAGAR", "SANT RAVIDAS NAGAR", "SARAN", "Saraswathipuram", "SATARA", "SATNA", "SAWAI MADHOPUR", "SEHORE", "Senapati", "SEONI", "Sepahijala", "SERAIKELAKHARSAWAN", "Serchhip", "SHAHDARA", "SHAHDOL", "SHAHJAHANPUR", "SHAJAPUR", "SHEIKHPURA", "SHEOHAR", "SHEOPUR", "Shillong", "SHIMLA", "SHIVAMOGGA", "SHIVPURI", "SHOPIAN", "SHRAWASTI", "SIBSAGAR", "SIDDHARTHNAGAR", "SIDDIPET", "SIDHI", "SIKAR", "SIMDEGA", "SINDHUDURG", "SINGRAULI", "SIRCILLA", "SIRMAUR", "SIROHI", "SIRSA", "SITAMARHI", "SITAPUR", "SIVAGANGA", "SIWAN", "SOLAN", "SOLAPUR", "SONAPUR", "SONBHADRA", "SONIPAT", "SONITPUR", "SOUTH 24 PARGANAS", "South Andaman", "SOUTH DELHI", "SOUTH DINAJPUR", "South Garo Hills", "SOUTH GOA", "SOUTH SIKKIM", "South Tripura", "SOUTH WEST DELHI", "SRI GANGANAGAR", "SRIGANGANAGAR", "SRIKAKULAM", "SRINAGAR", "STN. JADCHERLA", "SULTANPUR", "SUNDERGARH", "SUPAUL", "SURAJPUR", "SURAT", "SURENDRA NAGAR", "SURGUJA", "SURYAPET", "Tamenglong", "TAPI", "TARN TARAN", "Tawang", "TEHRI GARHWAL", "THANE", "THANJAVUR", "THENI", "THIRUVANANTHAPURAM", "Thoubal", "THRISSUR", "TIKAMGARH", "TINSUKIA", "Tirap", "TIRUCHIRAPPALLI", "TIRUNELVELI", "TIRUPPUR", "TIRUVALLUR", "TIRUVANNAMALAI", "TIRUVARUR", "TONK", "Trimulgherry", "Tuensang", "TUMAKURU", "Tura", "TUTICORIN", "UDAIPUR", "UDALGURI", "UDHAM SINGH NAGAR", "UDHAMPUR", "UDUPI", "UJJAIN", "Ukhrul", "UMARIA", "UNA", "UNNAO", "Upper Siang", "Upper Subansiri", "Uttara Kannada", "UTTARKASHI", "VADODARA", "VAISHALI", "VALSAD", "VARANASI", "VELLORE", "VIDISHA", "Vikarabad", "VILLUPURAM", "VIRUDHUNAGAR", "VISAKHAPATNAM", "VIZIANAGARAM", "WANAPARTHY", "WARANGAL", "Warangal Rural", "WARDHA", "WASHIM", "WAYANAD", "WEST CHAMPARAN", "WEST DELHI", "West Garo Hills", "WEST GODAVARI", "West Kameng", "West Khasi Hills", "WEST MIDNAPORE", "West Siang", "WEST SIKKIM", "WEST SINGHBHUM", "West Tripura", "Wokha", "YADGIR", "YAMUNANAGAR", "Yavatmal", "Zunhebotto"
]
const employementTypeValue = ['Full Time', 'Part Time', 'Contractual', 'Intern', 'Freelancer', ""]
const gendervalue =['Male','Female','Transgender','Prefer not to say',""]
const departmentValue = ["", 'Audit', 'Benefits Administration', 'Business Development', 'Compliance', 'Customer Service', 'Data Science', 'Engineering', 'Executive', 'Facilities Management', 'Finance', 'Health and Safety', 'Human Resources', 'Information Technology', 'Internal Communications', 'Legal', 'Logistics', 'Marketing', 'Operations', 'Payroll', 'Procurement', 'Product Development', 'Quality Assurance', 'Quality Control', 'Recruiting', 'Research and Development', 'Risk Management', 'Sales', 'Software Development', 'Software Testing', 'Strategic Planning', 'Supply Chain', 'Technical Services', 'Training and Development', 'Warehousing'];
const Years =[1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099]
const Months = [0,1,2,3,4,5,6,7,8,9,10,11]

const CompanyReviewForm = () => {

  const [formState, setFormState] = useState({
    companyName: "",
    jobTitle: "",
    starRating: 0,
    workHere: "",
    department: "",
    location: "",
    gender: "",
    employement: "",
    companyDesc: "",
    startDate: '09/2023',
    endDate: '08/2024'
  });


  function splitYearMonth(dateString) {
    // Split the string by '/'
    const parts = dateString.split('/');
    
    // Extract month and year
    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[1], 10);
    
    // Return an object containing month and year
    return [ month, year ];
  }

  const [currentWork, setCurrentWork] = useState(true);
  const hover = -1;


  // const handleWorkHereChange = (e) => {
  //   setWorkHere(e.target.value);
  //   // setShowWorkingDetails(e.target.value === 'no');
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formState);
      // Proceed with form submission
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  
  const validateForm = () => {
    let valid = true;
    const errorsObj = {};
  
    // Check for empty fields
    debugger
    for (const key in formState) {
      if (formState[key] === '') {
        errorsObj[key] = 'This field is required';
        valid = false;
  
        // Add red border for empty fields
        const inputElement = document.getElementById(key);
        if (inputElement) {
          const parentNonde = inputElement.parentNode
          if (parentNonde){
            // parentNonde.style.border = '1px solid red';
            inputElement.style.border = '1px solid red';
          }
        }
      } else {
        // Remove red border for non-empty fields
        const inputElement = document.getElementById(key);
        if (inputElement) {
          inputElement.classList.remove('border', 'border-red-500');
        }
      }
    }
  
    // setErrors(errorsObj);
    return valid;
  };
  


  const handleChange = (name, value) => {
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const CurrentlyWorkHere =['Yes','No'];

  const handleCurrentWork = (newValue) => {
    if (newValue==='Yes'){
      setCurrentWork(true)
    }
    else{
      setCurrentWork(false)
    }
    handleChange('workHere',newValue)
  }

  // const handleWorkChange = (newValue) => {
  //   setCurrentWork(event.target.value);
  //   // Here you can also record and update the selection as needed
  //   console.log(`Current work status: ${event.target.value}`);
  // };

  const FilledStarIcon = (props) => (
    <StarIcon {...props} style={{ border: '2px solid', borderRadius: '50%', margin: 5 }} />
  );

  // Custom empty star icon with a border
  const EmptyStarIcon = (props) => (
    <StarIcon {...props} style={{ border: '2px solid', borderRadius: '50%', margin: 5 }} />
  );

const handleDate = (entity,startorend,newValue) => {
  const [month,year] = splitYearMonth(formState.startDate);
  debugger
  if (entity==='month'){
    if (startorend==='startdate'){
      // handles month of start date
      handleChange('startDate',`${newValue}/${year}`)
  }
    else{
      // handles month of end date
      handleChange('endDate',`${newValue}/${year}`)
  }
}
  else{
    if (startorend==='startdate'){
      // handles year of start date
      handleChange('startDate',`${month}/${newValue}`)
  }
    else{
      // handles year of end date
      handleChange('endDate',`${month}/${newValue}`)
  }
  }
}


  return (

    <div className='flex flex-row border-2 justify-center md:items-center lg:items-center w-full h-auto '>

      {/* <form > */}
        <form onSubmit={handleSubmit } className='flex flex-row m-5  w-5/6 p-5 bg-cream  h-full items-center top-0 left-0  rounded-3xl iphone:items-start justify-start position-relative iphone:flex-col sm:flex-col sm:h-5/6 sm:m-4 sm:w-full lg:m-10 md:w-full lg:w-2/4'>
          <div className='flex sticky top-0 justify-center w-full rounded-xl items-start overflow-hidden position-absolute iphone:justify-start'>
            <Alert icon={<MilitaryTechIcon fontSize="inherit" />} severity="success" className='text-dark_green '>
              Your name will remain 100% confidential
            </Alert>
          </div>


          <div className='flex flex-row justify-between items-center  position-absolute iphone:flex-col p-4'>
            <input onChange={(e) => handleChange('companyName', e.target.value)} type="text" name="companyName" placeholder='Company Name' value={formState.companyName} id="companyName"  className="m-4 p-4 text-xl rounded-lg w-1/2 h-14 iphone:w-full iphone:h-14 border-2 border-slate-500 focus:slate-500 text-center" />
            <input type="text" onChange={(e) => handleChange('jobTitle', e.target.value)} name="jobTitle" placeholder='Designation/Job Title' id="jobTitle" value={formState.jobTitle} className="m-4 p-2 text-xl rounded-lg w-1/2 h-14 iphone:w-full iphone:h-14 border-2 border-slate-500 focus:slate-500 text-center" />
          </div>

          <div className='flex flex-row justify-between items-center  position-absolute iphone:flex-col p-4'>
            <label htmlFor="email" className="block text-lg font-semibold leading-6 lg:mr-10 text-gray-900">Rate your company</label>

            <Rating
              id='starRating'
              name="starRating"
              value={formState.starRating}
              precision={1}
              getLabelText={getLabelText}
              onChange={(event, newValue) => handleChange('starRating', newValue)}
              icon={<FilledStarIcon fontSize="inherit" />}
              emptyIcon={<EmptyStarIcon fontSize="inherit" />}
              className='lg:m-4'
            />
            {formState.starRating !== null && (
              <Box sx={{ ml: 0 }}>{getLabelText(hover !== -1 ? hover : formState.starRating)}</Box>
            )}
          </div>

          <div className='flex  flex-row justify-between items-center position-absolute iphone:flex-col iphone:-ml-5'>
            <Autocomplete
              disablePortal
              name='employement'
              value={formState.employement}
              id="employement"
              onChange={(event, newValue) => handleChange('employement', newValue)}
              options={employementTypeValue}
              // isOptionEqualToValue={(option, value) => option === value}
              sx={{ width: 300,margin:2,textAlign:'center' }}
              className='text-2xl text-center'
              // getOptionLabel={(option) => option}
              renderInput={(params) => <TextField {...params} label="Employement Type" />}
            />
            <Autocomplete
              disablePortal
              id="department"
              name='department'
              onChange={(event,newValue) => handleChange('department',newValue)}
              value={formState.department}
              // isOptionEqualToValue={(option, value) => option === value}
              options={departmentValue}
              // getOptionLabel={(option) => option}
              sx={{ width: 300,margin:2,textAlign:'center' }}
              className='text-2xl text-center'
              renderInput={(params) => <TextField {...params} label="Department" />}
            />
          </div>

          <div className='flex  flex-row justify-between items-center position-absolute iphone:flex-col iphone:-ml-5'>
            <Autocomplete
              disablePortal
              id="gender"
              name='gender'
              onChange={(event,newValue) => handleChange('gender',newValue)}
              value={formState.gender}
              options={gendervalue}
              // isOptionEqualToValue={(option, value) => option === value}
              // getOptionLabel={(option) => option}
              sx={{ width: 300,margin:2,textAlign:'center' }}
              className='text-2xl text-center'
              renderInput={(params) => <TextField {...params} label="Gender" />}
            />
            <Autocomplete
              disablePortal
              id="location"
              name='location'
              onChange={(event,newValue) => handleChange('location',newValue)}
              value={formState.location}
              options={officeLocation}
              // isOptionEqualToValue={(option, value) => option === value}
              // getOptionLabel={(option) => option}
              sx={{ width: 300,margin:2,textAlign:'center' }}
              className='text-2xl text-center'
              renderInput={(params) => <TextField {...params} label="Office Location" />}
            />
          </div>

          <div className='flex  flex-row justify-between items-center position-absolute iphone:flex-col iphone:-ml-5'>

            <Autocomplete
                disablePortal
                id="workHere"
                name='workHere'
                onChange={(event,newValue) => handleCurrentWork(newValue)}
                value = {formState.workHere}
                options={CurrentlyWorkHere}
                // isOptionEqualToValue={(option, value) => option === value}
                // getOptionLabel={(option) => option}
                sx={{ width: 300,margin:2,textAlign:'center' }}
                className='text-2xl text-center'
                renderInput={(params) => <TextField {...params} label="Do you currently work here ?" />}
              />

          </div>

          <div className='flex flex-row justify-center items-center  position-absolute iphone:-ml-3'>
            <div>
              <labels className='text-center'>Start Date</labels>
              <div id='startDate_year'className=''>
                <Autocomplete
                  disablePortal
                  id="startyear"
                  name='startyear'
                  onChange={(event,year) => handleDate('year','startdate',year)}
                  value = {String(splitYearMonth(formState.startDate)[1])}
                  options={Years.map(String)}
                  // getOptionLabel={(option) => option}
                  className='text-2xl text-center w-36 m-2'
                  renderInput={(params) => <TextField {...params} label="Years" />}
                />
                </div>
                <div>
                <Autocomplete
                  disablePortal
                  id="startmonth"
                  name='startmonth'
                  onChange={(event,month) => handleDate('month','startdate',month)}
                  value = {String(splitYearMonth(formState.startDate)[0])}
                  options={Months.map(String)}
                  // getOptionLabel={(option) => option}
                  className='text-2xl text-center w-36 m-2'
                  renderInput={(params) => <TextField {...params} label="Months" />}
                />
              </div>
              </div>

            {!currentWork && <div>
              <labels className='text-center'>End Date</labels>
              <div id='startDate_year'className=''>
                <Autocomplete
                  disablePortal
                  id="endyear"
                  name='endyear'
                  onChange={(event,year) => handleDate('year','enddate',year)}
                  value = {String(splitYearMonth(formState.endDate)[1])}
                  options={Years.map(String)}
                  // getOptionLabel={(option) => option}
                  className='text-2xl text-center w-36 m-2'
                  renderInput={(params) => <TextField {...params} label="Years" />}
                />
                </div>
                <div>
                <Autocomplete
                  disablePortal
                  id="endmonth"
                  name='endmonth'
                  onChange={(event,month) => handleDate('month','enddate',month)}
                  value = {String(splitYearMonth(formState.endDate)[0])}
                  options={Months.map(String)}
                  // getOptionLabel={(option) => option}
                  className='text-2xl text-center w-36 m-2'
                  renderInput={(params) => <TextField {...params} label="Months" onFocus={(e) => {params.inputProps.onFocus(e)}} />}
                />
              </div>
              </div>
              }

            </div>

          <div className='flex flex-col justify-between items-center p-4'>
            <label htmlFor="about" className="block text-xl font-semibold leading-6 text-gray-900">Please share your experience with the company</label>
            <div className="m-5">
              <textarea id="companyDesc" onChange={(e) => handleChange('companyDesc',e.target.value)} name="companyDesc" rows="3" cols='100' className="block w-full rounded-md border-0 py-1.5 text-gray-900 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"></textarea>
            </div>
            <button type="submit" className="rounded-xl bg-golden w-1/2 h-12  text-sm text-black hover:text-white shadow-sm hover:bg-my_sucess lg:w-1/4">Save</button>
          </div>

        </form>
        </div>

  )
};
export default CompanyReviewForm;
