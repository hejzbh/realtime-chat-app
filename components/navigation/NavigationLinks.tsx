import React from "react";

interface NavigationLinksProps {
  className?: string;
}

const NavigationLinks = ({ className = "" }: NavigationLinksProps) => {
  return <div className={`${className}`}>Links</div>;
};

export default NavigationLinks;
