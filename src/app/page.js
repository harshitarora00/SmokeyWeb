import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import logoimage from "../../public/smokeyweb.png";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-size">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-fill w-[1580px] xl:h-[695px] "
          >
            <source src="homepage/BlackBackground.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0">
            <Header />
            <div className="flex flex-col items-center mt-1">
              <Image
                src={logoimage}
                alt="google image"
                width={410}
                height={100}
              ></Image>
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
