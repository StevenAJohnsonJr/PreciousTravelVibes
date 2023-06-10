// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { getSingleCompany } from '../../api/companyData';
// import CompanyCard from '../../components/CompanyCard';
// import AboutCompanyCard from '../../components/AboutCompany';

// export default function ShowComapnyDetails() {
//   const router = useRouter();
//   const [companyDetails, setCompanyDetails] = useState({});

//   // TODO: grab firebaseKey from url
//   const { firebaseKey } = router.query;

//   // TODO: make call to API layer to get the data
//   useEffect(() => {
//     getSingleCompany(firebaseKey).then(setCompanyDetails);
//   }, [firebaseKey]);

//   return (
//     <div className="single-question">
//       <h1>{companyDetails.company_title}</h1>
//       {/* <h3>{companyDetails.company_descrpition}</h3> */}
//       <div>
//         <CompanyCard companyObj={companyDetails} />
//       </div>
//       <div style={{ marginTop: '50px' }}>
//         <AboutCompanyCard companyObj={companyDetails} />
//       </div>
//     </div>
//   );
// }
