const Form = () => {
  return (
    <div>
      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark">
        Estoy siempre abierto a discutir oportunidades de trabajo o colaboración.
      </p>
      <div className="mx-2">
        <form className="flex flex-col gap-4 mt-4" action="https://formspree.io/f/xqaybarw" method="POST"> {/* Updated action URL */}
          <input
            type="text"
            placeholder="Nombre*"
            className="input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0"
            name="name" // Added name attribute
            required
          />
          <input
            type="email"
            placeholder="Email*"
            className="input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0"
            name="email" // Added name attribute
            required
          />
          <textarea
            placeholder="Mensaje*"
            className="input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0"
            name="message" // Added name attribute
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

