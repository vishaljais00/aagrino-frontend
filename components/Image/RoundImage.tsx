import Image from "next/image";
import React from "react";

interface imageData {
  src: string;
  alt: string;
}

const RoundImage = (props: imageData) => {
  return (
    <Image src={props.src} width={50} height={10} className="w-32 rounded-full" alt={props.alt} />
  );
};

export default RoundImage;
