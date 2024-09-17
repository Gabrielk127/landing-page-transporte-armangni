import Button from "../Button";
import Image from "next/image";
import Simone2 from "@/assets/simone2.png";
import crescente from "@/assets/crescente.svg";
import { useState } from "react";
import Modal from "../Modal";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="flex flex-col gap-12 w-full max-w-[1280px] mx-auto
        px-6 py-16 
        sm:px-12 sm:pt-12
        md:px-16 md:pt-16
        xl:px-36 xl:py-0 xl:pt-16

      "
    >
      <div className="md:flex md:flex-row md:justify-between md:items-center">
        <div
          className="md:flex md:flex-col md:w-96 md:gap-8
              lg:w-[500px] lg:gap-10
              xl:w-[750px]
        "
        >
          <div
            className="flex flex-row p-2 gap-2 bg-[#00383d] rounded-md justify-center items-center
                xl:w-96

          "
          >
            <Image src={crescente} alt="icon" className="w-6" />
            <p
              className="text-base font-extralight text-center text-[#01e0eb]
            sm:text-lg
            md:text-xl
            lg:text-lg
            "
            >
              CONSULTORIA FINANCEIRA GRATUITA!
            </p>
          </div>

          <h1
            className="text-lg text-center font-bold mt-8 text-white
            sm:text-xl sm:mt-0
            md:text-start md:text-2xl
            lg:text-3xl
            xl:text-4xl xl:leading-normal
            "
          >
            Descubra como <span className="text-[#01e0eb]">captar</span> até{" "}
            <span className="text-[#01e0eb]">R$15 milhões </span>
            em créditos para <span className="text-[#01e0eb]">
              impulsionar
            </span>{" "}
            o seu <span className="text-[#01e0eb]">negócio</span>
          </h1>
          <div
            className="hidden
            lg:flex
            "
          >
            <Button
              label="Quero agendar uma consultoria de crédito para meu negócio"
              onClick={openModal}
            />
          </div>
        </div>

        <div>
          <Image
            src={Simone2}
            alt="Corretora Simone Armangni"
            className="w-48 mx-auto
            lg:w-72
            xl:w-[450px]
            "
          />
        </div>
      </div>
      <div
        className="sm:px-10 
        md:px-0
        lg:hidden
        "
      >
        <Button
          label="Quero agendar uma consultoria de crédito para meu negócio"
          onClick={openModal}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Header;
