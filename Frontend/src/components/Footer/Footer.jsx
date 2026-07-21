import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";

import {
  quickLinks,
  services,
  programs,
  socials,
} from "./footerData";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16">
      <div className="container mx-auto px-6">

        {/* Footer Top */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo */}
          <div>

            <FooterLogo />

            <div className="flex gap-4 mt-8 ">
              {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.url}
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-slate-800
                      hover:bg-blue-600
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Quick Links */}
          <FooterLinks
            title="Quick Links"
            links={quickLinks}
          />

          {/* Services */}
          <FooterLinks
            title="Services"
            links={services}
          />

          {/* Programs + Newsletter */}
          <div>

            <FooterLinks
              title="Programs"
              links={programs}
            />

            {/* <div className="mt-10">
              <Newsletter />
            </div> */}

          </div>

        </div>

        {/* Bottom */}
        <Copyright />

      </div>
    </footer>
  );
}

export default Footer;



// import FooterTopCTA from "./FooterTopCTA";
// import FooterLogo from "./FooterLogo";
// import FooterLinks from "./FooterLinks";
// import Copyright from "./Copyright";

// import {
//   quickLinks,
//   services,
//   programs,
//   socials,
// } from "./footerData";

// function Footer() {
//   return (
//     <footer className="bg-slate-950 text-white pt-24">

//       <div className="container mx-auto px-6">

//         <FooterTopCTA />

//         <div className="grid lg:grid-cols-4 gap-16">

//           {/* Logo */}

//           <div>

//             <FooterLogo />

//             <div className="flex gap-4 mt-8">

//               {socials.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <a
//                     key={index}
//                     href={item.url}
//                     className="
//                     w-12
//                     h-12
//                     rounded-xl
//                     bg-slate-800
//                     hover:bg-blue-600
//                     flex
//                     items-center
//                     justify-center
//                     duration-300
//                   "
//                   >
//                     <Icon />
//                   </a>
//                 );
//               })}

//             </div>

//           </div>

//           <FooterLinks
//             title="Quick Links"
//             links={quickLinks}
//           />

//           <FooterLinks
//             title="Services"
//             links={services}
//           />

//           <FooterLinks
//             title="Programs"
//             links={programs}
//           />

//         </div>

//         <Copyright />

//       </div>

//     </footer>
//   );
// }

// export default Footer;