"use client";

import { fetchPikachuDetails } from "@/app/api/pokeService";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [pikachuImage, setPikachuImage] = useState<string | null>(null);

  useEffect(() => {
    const getPikachuImage = async () => {
      const imageUrl = await fetchPikachuDetails();
      setPikachuImage(imageUrl);
    };

    getPikachuImage();
  }, []);

  return (
    <header>
      <div className="flex">
        <Link href="/">
          {pikachuImage && (
            <Image
              src={pikachuImage}
              alt="Pikachu"
              width={80}
              height={80}
              className="ml-4 rounded-full"
            />
          )}
        </Link>
        <div className="container justify-center max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-6xl font-bold text-center md:text-left">
              POKÉ
              <span className="text-secundary">MON</span>
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
