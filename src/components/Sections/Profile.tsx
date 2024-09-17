import Image from "next/image";
import React, { useState } from "react";
import Simone1 from "@/assets/Simone1.jpg";
import Button from "../Button";
import Modal from "../Modal";

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="
        md:flex md:flex-row md:justify-between md:items-center lg:gap-24
    "
    >
      <div className="pt-12">
        <Image
          src={Simone1}
          alt="Simone Armangni Corretora"
          className="w-72 mx-auto rounded-xl
              lg:w-96
              xl:w-[500px]
              "
        />
      </div>

      <section
        className="
        md:flex md:flex-col md:w-1/2 md:justify-center
        lg:justify-start
        xl:w-[500px]
      "
      >
        <div
          className="p-2 bg-[#00383d] rounded-md items-center mt-4
                  xl:w-96


            "
        >
          <p
            className="text-base font-extralight text-center text-[#01e0eb] tracking-widest 
              sm:text-lg
              md:text-xl 
              lg:text-2xl
              "
          >
            SIMONE ARMANGNI
          </p>
        </div>
        <p
          className="text-base text-center mt-4 text-white
                  md:text-start
                  lg:text-lg 
                  xl:text-lg
                "
        >
          Sou Simone Armangni da AX Negócios Investimentos e Créditos, tenho
          experiência como estrategista na consultoria de captação inteligente.
        </p>
        <p
          className="text-base text-center mt-4 text-white
                  md:text-start
                  lg:text-base pt-4 pb-8
                  xl:text-lg 
                "
        >
          Tenho formação em Administração de Empresas com foco em Gestão de
          projetos e atuo no crescimento exponencial no resultado de meus
          clientes, combinando crescimento sustentável na matriz, eficiência do
          resultado e recursos de terceiros, alavancando crescimento pleno e
          equilibrado com taxas e juros reduzidos, carência e prazos estendidos.
        </p>
        <div
          className="pt-6 
          "
        >
          <Button
            label="Quero agendar uma consultoria de crédito para meu negócio"
            className="xl:w-full"
            onClick={openModal}
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </section>
    </section>
  );
};

export default Profile;
