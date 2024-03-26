"use client";
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';


const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

     // Configuração para o envio do e-mail via emailJS
     const serviceId = 'service_7ha291b'; // ID do serviço configurado no emailJS
     const templateId = 'template_p88t3qk'; // ID do template configurado no emailJS
     const userId = 'An34-cuSg_kXPoyUW'; // ID do usuário configurado no emailJS

        // Parâmetros para o envio do e-mail
        const templateParams = {
            from_name: email,
            subject: subject,
            message: message,
        };

        // Envio do e-mail
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log('E-mail enviado:', response);
                setEmailSubmitted(true);
            }, (error) => {
                console.error('Erro ao enviar e-mail:', error);
            });
    };

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='#contact'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Vamos interagir!</h5>

                <p className='text-[#ABD7BE] mb-4 max-w-md'>
                    {""}
                    Atualmente estou em busca de freelances, minha caixa de entrada está sempre aberta.
                    Se você tiver alguma dúvida ou apenas quiser dizer oi,
                    farei o possível para entrar em contato com você!
                </p>
                <div className="socials flex flex-row gap-2">
                    <a href="https://github.com/WheydsonRichard" target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/wheydsonrichardsa" target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </a>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-orange-500 text-sm mt-2">
                        Email Eviando com sucesso!
                    </p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit} id='contact'>
                        <div className='mb-6'>
                            <label htmlFor="email" type='email' className='text-white block mb-2 text-sm font-medium'>Seu e-mail</label>
                            <input
                                name='email'
                                id='email'
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value = {email}
                                required
                                className='bg-[#18191E] border borde-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='jacob@gmail.com'
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="subject" type='email' className='text-white block mb-2 text-sm font-medium'>Assunto</label>
                            <input
                                name='subject'
                                type="text"
                                id='subject'
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                className='bg-[#18191E] border borde-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='Só dizer "Oi"'
                            />
                        </div>
                        <div className='mb-6'>
                            <label
                                htmlFor='message'
                                className='text-white block text-sm mb-2 font-medium'
                            >
                                Mensagem
                            </label>
                            <textarea
                                name='message'
                                id='message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='bg-[#18191E] border borde-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='Olá Jacob, gostaria de falar sobre...'
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Enviar Mensagem</button>
                    </form>
                )}
            </div>
        </section>
    )
}

export default EmailSection;
