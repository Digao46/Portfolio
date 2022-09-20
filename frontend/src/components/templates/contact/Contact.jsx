import React from "react";
import "./Contact.scss"

import { sendEmail } from "../../../services/email.service";

import Mask from "br-masks";

import { toast } from "react-toastify";

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this)
    }

    maskedPhone(phone) {
        return Mask.phone(phone)
    }

    handleChange = (e) => {
        const target = e.target;
        const inputName = target.name
        const value = target.value

        this.setState({ [inputName]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        sendEmail(e)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Email Enviado!", {
                        className: 'toast-success',
                        toastId: 'toast-success',
                    })
                }
            })
            .then(this.resetForm)
            .catch(err => {
                toast.error("Ocorreu um erro", {
                    className: 'toast-error',
                    toastId: 'toast-error',
                })
                this.resetForm()
            });
    }

    resetForm = () => {
        this.setState({ name: '', email: '', phone: '', message: '' })
    }

    render() {
        return (
            <section id="contact" className="contactSection d-flex justify-content-center align-items-center">

                <div className="container d-flex flex-column justify-content-center align-items-center">

                    <div data-aos="fade-down" className="headerContact mt-5 mb-5 d-flex justify-content-center align-items-center">
                        <div>
                            <div className="subtitle text-center pb-3">
                                <span>Contato ━━━━━</span>
                            </div>
                            <h3 className="title text-center pb-3"> Contate Me </h3>

                            <p className="workNow text-center pb-3">
                                Estou disponível para trabalhar no seu projeto
                                e fazer com que as suas ideias ganhem vida.
                                Apenas um clique de distância
                            </p>
                        </div>
                    </div>

                    <div className="container d-flex flex-column flex-lg-row justify-content-evenly">

                        <div data-aos="fade-up" className="personalData container d-flex flex-column col-12 col-lg-5">

                            <div className="location d-flex row justify-content-evenly mb-5">

                                <div className="icons d-flex justify-content-center align-items-center col-3 col-lg-2">
                                    <div className="iconArea">
                                        <i className="icon fa fa-location-dot"></i>
                                    </div>
                                </div>

                                <div className="locationText col-9 col-md-8 col-lg-10 d-flex align-items-center">
                                    <p className="m-0">São Paulo, SP</p>
                                </div>
                            </div>


                            <div data-aos="fade-up" className="email d-flex row justify-content-evenly mb-5">

                                <div className="icons d-flex justify-content-center align-items-center col-3 col-lg-2">
                                    <div className="iconArea">
                                        <i className="icon fa fa-envelope-open"></i>
                                    </div>
                                </div>

                                <div className="emailText col-9 col-md-8 col-lg-10 d-flex align-items-center">
                                    <p className="m-0">digaodev46@gmail.com</p>
                                </div>
                            </div >

                            <div data-aos="fade-up" className="phone d-flex row justify-content-evenly mb-5">

                                <div className="icons d-flex justify-content-center align-items-center col-3 col-lg-2">
                                    <div className="iconArea">
                                        <a href="https://api.whatsapp.com/send?phone=5511943923846" target="_blank" rel="noreferrer">
                                            <i className="icon fa fa-phone"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="phoneNumber col-9 col-md-8 col-lg-10 d-flex align-items-center">
                                    <a href="https://api.whatsapp.com/send?phone=5511943923846" target="_blank" rel="noreferrer">
                                        <p className="m-0">+55 (11) 94392-3846</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={this.handleSubmit} className="formContact container col-12 col-lg-7">

                            <input
                                data-aos="fade-up"
                                type="text"
                                value={this.state.name} onChange={this.handleChange}
                                name="name"
                                className="inputName col-12 ps-5 mb-4"
                                placeholder="Nome" required />

                            <div data-aos="fade-up" className="d-flex flex-column flex-md-row justify-content-evenly">
                                <input
                                    data-aos="fade-up"
                                    type="text"
                                    value={this.state.email} onChange={this.handleChange}
                                    name="email"
                                    className="inputEmail col-12 col-md-7 ps-5 me-2 mb-4"
                                    placeholder="Email" required />

                                <input
                                    data-aos="fade-up"
                                    value={this.maskedPhone(this.state.phone)} onChange={this.handleChange}
                                    name="phone"
                                    className="inputPhone ps-5 col-12 col-md-5 mb-4"
                                    placeholder="Celular" required />
                            </div>

                            <textarea
                                data-aos="fade-up"
                                value={this.state.message} onChange={this.handleChange}
                                name="message"
                                rows="10"
                                className="areaMessage col-12 p-4 mb-4"
                                placeholder="Fala Digão, tenho uma ideia e preciso das suas habilidades..." required />

                            <div data-aos="fade-up" className="d-flex justify-content-center justify-content-md-left mb-5">
                                <button className="submitButton" type="submit"> Enviar </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    };
};

export default Contact;