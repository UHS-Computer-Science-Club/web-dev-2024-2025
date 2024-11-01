import AcmeLogo from "./acme-logo";
import Image from "next/image";

export default function Favicon() {
  return (
    <Image
      src="/favicon.ico"
      alt="Site favicon"
      style={{
        height: "20px",
        width: "20px",
      }}
    />
  );
}
