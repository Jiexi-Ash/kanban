import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="h-6 w-6 relative">
      <Image src="/assets/logo-light.svg" fill alt="Logo" />
    </div>
  );
}

export default Logo;
