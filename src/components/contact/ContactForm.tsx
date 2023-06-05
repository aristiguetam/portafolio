'use client';
import { useForm } from "@/hooks/useForm";
import { motion } from "framer-motion";




export const ContactForm = () => {

  const {
     data,
    select,
    selectAsunto,
    selectEmail,
    blur,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    handleBlurAsunto,
    handleBlurEmail,
    handleFocusAsunto,
    handleFocusEmail
  } = useForm();

  return (
    <form className="space-y-2 sm:space-y-5" onSubmit={handleSubmit} noValidate >

      <div className="flex flex-col">
        <motion.label
          initial={{ opacity: 0, scale: 0.5 }}
          animate={select ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className={` ${select ? "pl-1 mb-1 block text-primary-dark font-semibold text-xs" : "pl-1 mb-1 text-white  font-semibold text-xs"}`} >
          Nombre
        </motion.label>


        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder={select ? "" : 'Nombre'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="dark:bg-background-dark bg-background-light rounded-md p-2 outline-none"
        />

      </div>

      <div className="flex flex-col">
        <motion.label
          initial={{ opacity: 0, scale: 0.5 }}
          animate={selectEmail ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className={` ${selectEmail ? "pl-1 mb-1 block text-primary-dark font-semibold text-xs" : "pl-1 mb-1 text-white  font-semibold text-xs"}`} >
          Email
        </motion.label>

        <input
          type="email"
          name="email"
          value={data.email}
          placeholder={selectEmail ? "" : 'Email'}
          onFocus={handleFocusEmail}
          onBlur={handleBlurEmail}
          onChange={handleChange}
          className="dark:bg-background-dark bg-background-light rounded-md p-2 outline-none" />
      </div>

      <div className="flex flex-col  ">

        <motion.label
          initial={{ opacity: 0, scale: 0.5 }}
          animate={selectAsunto ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className={` ${selectAsunto ? "pl-1 mb-1 block text-primary-dark font-semibold text-xs" : "pl-1 mb-1 text-white font-semibold text-xs"}`} >
          Asunto
        </motion.label>

        <textarea
          name="asunto"
          value={data.asunto}
          onChange={handleChange}
          onBlur={handleBlurAsunto}
          onFocus={handleFocusAsunto}
          placeholder={selectAsunto ? "" : 'Asunto'}
          className="w-full h-[150px] dark:bg-background-dark bg-background-light rounded-md p-2 outline-none"></textarea>
      </div>

      <div className="flex justify-center items-center">
        <button type="submit" className="bg-primary-dark font-medium text-base  rounded-md  flex items-center justify-center px-7 ">
          <span className="text-[#2B2C34] font-medium text-base p-2">Enviar</span>
        </button>
      </div>
    </form>
  )
}
