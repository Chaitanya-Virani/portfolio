import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";
import { useEffect, useState } from "react";

const projectsData = [
  {
    id: 1,
    number: "01",
    category: "Client",
    title: "Nextlevel Studio",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    ]
  },
  {
    id: 2,
    number: "02",
    category: "Personal",
    title: "Aura Brand Identity",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    ]
  },
  {
    id: 3,
    number: "03",
    category: "Client",
    title: "Solaris Digital",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    ]
  }
];

export const ProjectsSection = () => {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={20}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight clamp(3rem,12vw,160px) mb-16 sm:mb-20 md:mb-28">
          Project
        </h2>
      </FadeIn>

      <div className="relative">
        {projectsData.map((project, index) => (
          <div key={project.id} className="h-[85vh]">
            <div className="sticky top-24 md:top-32">
              <div className={`rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8`}>
                {/* Top row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="font-black text-white clamp(3rem,10vw,140px) leading-none">
                    {project.number}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[rgba(215,226,234,0.6)] text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-white font-black text-xl tracking-tight">
                      {project.title}
                    </h3>
                    <LiveProjectButton className="mt-2" />
                  </div>
                </div>

                {/* Bottom row */}
                <div className="flex gap-4">
                  {/* Left column with 2 stacked images */}
                  <div className="w-[40%] flex flex-col gap-3">
                    <img
                      src={project.images[0]}
                      alt=""
                      className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                    />
                    <img
                      src={project.images[1]}
                      alt=""
                      className="w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                    />
                  </div>

                  {/* Right column with 1 tall image */}
                  <div className="w-[60%]">
                    <img
                      src={project.images[2]}
                      alt=""
                      className="w-full h-[clamp(260px,35vw,480px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};