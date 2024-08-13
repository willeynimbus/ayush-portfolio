// "use client"
// import React from 'react'
// import SectionHeading from './section-heading'
// import { useSectionInView } from '@/lib/hooks'
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { experiencesData } from '@/lib/data';

// export default function Exprerience() {
//   const {ref} = useSectionInView("Experience")
//   return (
//     <section ref={ref} id='experience' className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My Experience</SectionHeading>
//       <VerticalTimeline lineColor=''>
//         {
//           experiencesData.map((item, index) => (
//             <React.Fragment key={index}>
//               <VerticalTimelineElement
//               >
//                 <h3>{item.title}</h3>
//                 <p>{item.location}</p>
//                 <p>{item.description}</p>
//               </VerticalTimelineElement>
//             </React.Fragment>
            
//           ))
//         }
//       </VerticalTimeline>
//     </section>
//   );
// }
