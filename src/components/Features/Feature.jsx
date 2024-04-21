import React, { useState, useEffect } from "react";

const features = [
  {
    id: 1,
    icon: "fa-users",
    count: 1234,
    title: "Happy Customers",
    description:
      "Happy customers enjoy enhanced satisfaction, driving loyalty and positive referrals.",
    delay: "0.1s",
  },
  {
    id: 2,
    icon: "fa-check",
    count: 4234,
    title: "Project Done",
    description:
      "Projects completed successfully, showcasing efficiency and expertise.",
    delay: "0.3s",
  },
  {
    id: 3,
    icon: "fa-award",
    count: 3123,
    title: "Awards Win",
    description:
      "Awards won reflect recognition for excellence and innovation.",
    delay: "0.5s",
  },
  {
    id: 4,
    icon: "fa-users-cog",
    count: 1831,
    title: "Expert Workers",
    description:
      "Expert workers demonstrate skilled professionalism and high-quality results.",
    delay: "0.7s",
  },
];

const FeatureItem = ({ icon, count, title, description, delay }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayCount < count) {
        setDisplayCount(displayCount + Math.ceil(count / 100)); // Increment to reach final value faster
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [displayCount, count]);

  return (
    <div className={`col-md-6 col-lg-3 wow fadeIn`} data-wow-delay={delay}>
      <div className="d-flex align-items-center mb-4">
        <div className="btn-lg-square bg-primary rounded-circle me-3">
          <i className={`fa ${icon} text-white`} />
        </div>
        <h1 className="mb-0">{displayCount}</h1>
      </div>
      <h5 className="mb-3">{title}</h5>
      <span>{description}</span>
    </div>
  );
};

const Feature = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {features.map((feature) => (
            <FeatureItem key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
