import React, { useState, useRef } from 'react';
import Link from 'next/link';
import logodark from "../../public/images/logo/logodark.png";
import Footer from '../../src/components/Footer';
import HeaderTwo from '@/components/Header/HeaderTwo';
import emailjs from 'emailjs-com';


const Corporate = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [alternativeNumber, setAlternativeNumber] = useState('');
    const [gender, setGender] = useState('');
    const [service, setService] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [requirement, setRequirement] = useState('');
    const [venue, setVenue] = useState('');
    const [guest, setGuest] = useState('');
    const [budget, setBudget] = useState('');

    const form = useRef();
    const sendEmail = (e) => {

        emailjs.sendForm('service_7mni6dk', 'template_32s5n6b', form.current, '_MuHGcIJYY2VVNBHm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert('Thank you for contacting Unicorn Global Solutions. We have received your enquiry and will respond to you as soon as possible. For any assistance please contact Call Us : +971 56 520 4949, +971 56 520 6969 or send us a mail to info@unicornglobalsolutions.ae')
        e.target.reset() // 👈️ prevent page refresh


        // 👇️ clear all input values in the form
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setAlternativeNumber('');
        setGender('');
        setService('');
        setCity('');
        setDate('');
        setRequirement('');
        setVenue('');
        setGuest('');
        setBudget('');

    };

    return (
        <>
            <HeaderTwo
                headerLogo={logodark}
                headerLogoLight={logodark}
                className="bg-black"
            />
            <main className="ms-main bg-black">
                <div className="ms-page-content">

                    {/*  Corporate Events */}
                    <div className=''>
                        <div className='container lg:pt-12 pt-12' id='corporate'>
                            <div className='row '>
                                <div className='col-lg-6 lg:pt-24'>
                                    <div className=' text-white font font-bold xl:text-6xl text-4xl'>
                                        Corporate Events
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-2'>
                                        Shift your perspective on
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-1 pb-2'>
                                        digital business
                                    </div>
                                    <p className='text-white xl:text-xl font pt-2 xl:block lg:block hidden'>
                                        Get the clarity you need to move your priorities forward
                                    </p>
                                    <p className='text-white xl:text-xl font pt-1 xl:block lg:block hidden'>
                                        while making connections that drive success.  while making connections that drive success.
                                    </p>
                                    <p className='text-white xl:text-base font xl:hidden lg:hidden block'>
                                        Get the clarity you need to move your priorities forward while making connections
                                        that drive success.  while making connections that drive success.
                                    </p>
                                    <a href="#modal" id="openModal">
                                        <button className='buttonbg px-12 py-2 text-white font mt-4'>
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                                <div className='col-lg-6 lg:pt-0 pt-12'>
                                    <img src='/images/servicess/corporatebg.png' alt='' />
                                </div>
                            </div>
                        </div>
                        <div id="modal" class="modal">
                            <div class="modal-content bg-black py-24">
                                <a href="#" class="close" id="closeModal">&times;</a>
                                <div className='golden font font-bold text-center xl:text-2xl'>
                                    Event Enquiry Form
                                </div>
                                <div className="content pt-6">
                                    <form ref={form} onSubmit={sendEmail} method="POST">
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Full Name *</label>
                                                <input type="text" name="fullName" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    onChange={event => setFullName(event.target.value)}
                                                    value={fullName} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Email Id *</label>
                                                <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    value={email}
                                                    onChange={event => setEmail(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Contact *</label>
                                                <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={phoneNumber}
                                                    onChange={event => setPhoneNumber(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Alternative Contact *</label>
                                                <input type="tel" name="alternativeNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={alternativeNumber}
                                                    onChange={event => setAlternativeNumber(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Gender *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Gender" name="gender"
                                                    value={gender}
                                                    onChange={event => setGender(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                                    <option value="Abu Dhabi" className='py-4'>Male</option>
                                                    <option value="Female" className='py-4'>Female</option>
                                                    <option value="Other" className='py-4'>Other</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Service Required *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Service" name="service"
                                                    value={service}
                                                    onChange={event => setService(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                                    <option value="Corporate Event">Corporate Event</option>
                                                    <option value="Workshop / Conference">Workshop / Conference</option>
                                                    <option value="Marketing Event">Marketing Event</option>
                                                    <option value="Training Program">Training Program</option>
                                                    <option value="Award Ceremony">Award Ceremony</option>
                                                    <option value="Social Event">Social Event</option>
                                                    <option value="College Fest">College Fest</option>
                                                    <option value="Luxury Birthday">Luxury Birthday</option>
                                                    <option value="Wedding Planning">Wedding Planning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>City *</label>
                                                <input type="text" name="city" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={city}
                                                    onChange={event => setCity(event.target.value)}
                                                    required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Tell us more about your requirement*</label>
                                                <input type="text" name="requirement" placeholder="Requirement " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={requirement}
                                                    onChange={event => setRequirement(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Date *</label>
                                                <input type="date" name="date" placeholder="Event Date " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={date}
                                                    onChange={event => setDate(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Venue *</label>
                                                <input type="text" name="venue" placeholder="Event Venue" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={venue}
                                                    onChange={event => setVenue(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Total Guest Expected *</label>
                                                <input type="text" name="guest" placeholder="Total Guest Expected   " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={guest}
                                                    onChange={event => setGuest(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                                <input type="text" name="budget" placeholder="Event Budget" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={budget}
                                                    onChange={event => setBudget(event.target.value)} required />
                                            </div>
                                        </div>

                                        <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Training Programs */}
                    <div className=' py-24 xl:block lg:block hidden'>
                        <div className='pt-6' id='training-programs'>
                            <div className='row '>
                                <div className='col-lg-6 '>
                                    <img src='/images/servicess/training.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg lg:pt-12'>
                                    <div className='text-white font font-bold xl:text-5xl text-4xl lg:pl-12 pt-4 '>
                                        Training Programs
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-2'>
                                        Get Experience
                                    </div>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-2 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer, <br></br>
                                        habits industry dynamics change? Find out from <br></br>those leading the charge.
                                    </p>
                                    <a href="#modal" id="openModal" className='lg:pl-12'>
                                        <button className='buttonbg px-12 py-2 text-white font mt-3 '>
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="modal" class="modal">
                            <div class="modal-content bg-black py-24">
                                <a href="#" class="close" id="closeModal">&times;</a>
                                <div className='golden font font-bold text-center xl:text-2xl'>
                                    Event Enquiry Form
                                </div>
                                <div className="content pt-6">
                                    <form ref={form} onSubmit={sendEmail} method="POST">
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Full Name *</label>
                                                <input type="text" name="fullName" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    onChange={event => setFullName(event.target.value)}
                                                    value={fullName} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Email Id *</label>
                                                <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    value={email}
                                                    onChange={event => setEmail(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Contact *</label>
                                                <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={phoneNumber}
                                                    onChange={event => setPhoneNumber(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Alternative Contact *</label>
                                                <input type="tel" name="alternativeNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={alternativeNumber}
                                                    onChange={event => setAlternativeNumber(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Gender *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Gender" name="gender"
                                                    value={gender}
                                                    onChange={event => setGender(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                                    <option value="Abu Dhabi" className='py-4'>Male</option>
                                                    <option value="Female" className='py-4'>Female</option>
                                                    <option value="Other" className='py-4'>Other</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Service Required *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Service" name="service"
                                                    value={service}
                                                    onChange={event => setService(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                                    <option value="Corporate Event">Corporate Event</option>
                                                    <option value="Workshop / Conference">Workshop / Conference</option>
                                                    <option value="Marketing Event">Marketing Event</option>
                                                    <option value="Training Program">Training Program</option>
                                                    <option value="Award Ceremony">Award Ceremony</option>
                                                    <option value="Social Event">Social Event</option>
                                                    <option value="College Fest">College Fest</option>
                                                    <option value="Luxury Birthday">Luxury Birthday</option>
                                                    <option value="Wedding Planning">Wedding Planning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>City *</label>
                                                <input type="text" name="city" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={city}
                                                    onChange={event => setCity(event.target.value)}
                                                    required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Tell us more about your requirement*</label>
                                                <input type="text" name="requirement" placeholder="Requirement " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={requirement}
                                                    onChange={event => setRequirement(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Date *</label>
                                                <input type="date" name="date" placeholder="Event Date " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={date}
                                                    onChange={event => setDate(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Venue *</label>
                                                <input type="text" name="venue" placeholder="Event Venue" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={venue}
                                                    onChange={event => setVenue(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Total Guest Expected *</label>
                                                <input type="text" name="guest" placeholder="Total Guest Expected   " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={guest}
                                                    onChange={event => setGuest(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                                <input type="text" name="budget" placeholder="Event Budget" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={budget}
                                                    onChange={event => setBudget(event.target.value)} required />
                                            </div>
                                        </div>
                                        <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Training Programs */}
                    <div className='container pt-12 xl:hidden lg:hidden block'>
                        <div className='' id='training-programs'>
                            <div className='row flex-col-reverse'>
                                <div className='col-lg-6 pt-6'>
                                    <img src='/images/servicess/training.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg lg:pt-12'>
                                    <div className='text-white font font-bold xl:text-5xl text-4xl lg:pl-12 pt-4 '>
                                        Training Programs
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-2'>
                                        Get Experience
                                    </div>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-1 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-1 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer,
                                        habits industry dynamics change? Find out from those leading the charge.
                                    </p>
                                    <a href="#modal" id="openModal" className='lg:pl-12'>
                                        <button className='buttonbg px-12 py-2 text-white font mt-3 '>
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="modal" class="modal">
                            <div class="modal-content bg-black py-24">
                                <a href="#" class="close" id="closeModal">&times;</a>
                                <div className='golden font font-bold text-center xl:text-2xl'>
                                    Event Enquiry Form
                                </div>
                                <div className="content pt-6">
                                    <form ref={form} onSubmit={sendEmail} method="POST">
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Full Name *</label>
                                                <input type="text" name="fullName" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    onChange={event => setFullName(event.target.value)}
                                                    value={fullName} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Email Id *</label>
                                                <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    value={email}
                                                    onChange={event => setEmail(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Contact *</label>
                                                <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={phoneNumber}
                                                    onChange={event => setPhoneNumber(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Alternative Contact *</label>
                                                <input type="tel" name="alternativeNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={alternativeNumber}
                                                    onChange={event => setAlternativeNumber(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Gender *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Gender" name="gender"
                                                    value={gender}
                                                    onChange={event => setGender(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                                    <option value="Abu Dhabi" className='py-4'>Male</option>
                                                    <option value="Female" className='py-4'>Female</option>
                                                    <option value="Other" className='py-4'>Other</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Service Required *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Service" name="service"
                                                    value={service}
                                                    onChange={event => setService(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                                    <option value="Corporate Event">Corporate Event</option>
                                                    <option value="Workshop / Conference">Workshop / Conference</option>
                                                    <option value="Marketing Event">Marketing Event</option>
                                                    <option value="Training Program">Training Program</option>
                                                    <option value="Award Ceremony">Award Ceremony</option>
                                                    <option value="Social Event">Social Event</option>
                                                    <option value="College Fest">College Fest</option>
                                                    <option value="Luxury Birthday">Luxury Birthday</option>
                                                    <option value="Wedding Planning">Wedding Planning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>City *</label>
                                                <input type="text" name="city" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={city}
                                                    onChange={event => setCity(event.target.value)}
                                                    required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Tell us more about your requirement*</label>
                                                <input type="text" name="requirement" placeholder="Requirement " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={requirement}
                                                    onChange={event => setRequirement(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Date *</label>
                                                <input type="date" name="date" placeholder="Event Date " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={date}
                                                    onChange={event => setDate(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Venue *</label>
                                                <input type="text" name="venue" placeholder="Event Venue" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={venue}
                                                    onChange={event => setVenue(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Total Guest Expected *</label>
                                                <input type="text" name="guest" placeholder="Total Guest Expected   " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={guest}
                                                    onChange={event => setGuest(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                                <input type="text" name="budget" placeholder="Event Budget" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={budget}
                                                    onChange={event => setBudget(event.target.value)} required />
                                            </div>
                                        </div>

                                        <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Workshop & Conference */}
                    <div className='bg-black '>
                        <div className='container lg:pt-6 pt-6' id='workshops'>
                            <div className='row '>
                                <div className='col-lg-6 pt-12 lg:pt-24'>
                                    <div className=' text-white font font-bold xl:text-6xl text-4xl'>
                                        Workshops & Conference
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-2'>
                                        Shift your perspective on
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-1 pb-2'>
                                        digital business
                                    </div>
                                    <p className='text-white xl:text-xl font pt-2 xl:block lg:block hidden'>
                                        Get the clarity you need to move your priorities forward
                                    </p>
                                    <p className='text-white xl:text-xl font pt-1 xl:block lg:block hidden'>
                                        while making connections that drive success.  while making connections that drive success.
                                    </p>
                                    <p className='text-white xl:text-base font xl:hidden lg:hidden block'>
                                        Get the clarity you need to move your priorities forward while making connections
                                        that drive success.  while making connections that drive success.
                                    </p>
                                    <a href="#modal" id="openModal" className=''>
                                        <button className='buttonbg px-12 py-2 text-white font mt-3 '>
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                                <div className='col-lg-6 lg:pt-0 pt-12'>
                                    <img src='/images/servicess/workshopbg.png' alt='' />
                                </div>
                            </div>
                        </div>
                        <div id="modal" class="modal">
                            <div class="modal-content bg-black py-24">
                                <a href="#" class="close" id="closeModal">&times;</a>
                                <div className='golden font font-bold text-center xl:text-2xl'>
                                    Event Enquiry Form
                                </div>
                                <div className="content pt-6">
                                    <form ref={form} onSubmit={sendEmail} method="POST">
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Full Name *</label>
                                                <input type="text" name="fullName" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    onChange={event => setFullName(event.target.value)}
                                                    value={fullName} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Email Id *</label>
                                                <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    value={email}
                                                    onChange={event => setEmail(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Contact *</label>
                                                <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={phoneNumber}
                                                    onChange={event => setPhoneNumber(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Alternative Contact *</label>
                                                <input type="tel" name="alternativeNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={alternativeNumber}
                                                    onChange={event => setAlternativeNumber(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Gender *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Gender" name="gender"
                                                    value={gender}
                                                    onChange={event => setGender(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                                    <option value="Abu Dhabi" className='py-4'>Male</option>
                                                    <option value="Female" className='py-4'>Female</option>
                                                    <option value="Other" className='py-4'>Other</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Service Required *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Service" name="service"
                                                    value={service}
                                                    onChange={event => setService(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                                    <option value="Corporate Event">Corporate Event</option>
                                                    <option value="Workshop / Conference">Workshop / Conference</option>
                                                    <option value="Marketing Event">Marketing Event</option>
                                                    <option value="Training Program">Training Program</option>
                                                    <option value="Award Ceremony">Award Ceremony</option>
                                                    <option value="Social Event">Social Event</option>
                                                    <option value="College Fest">College Fest</option>
                                                    <option value="Luxury Birthday">Luxury Birthday</option>
                                                    <option value="Wedding Planning">Wedding Planning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>City *</label>
                                                <input type="text" name="city" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={city}
                                                    onChange={event => setCity(event.target.value)}
                                                    required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Tell us more about your requirement*</label>
                                                <input type="text" name="requirement" placeholder="Requirement " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={requirement}
                                                    onChange={event => setRequirement(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Date *</label>
                                                <input type="date" name="date" placeholder="Event Date " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={date}
                                                    onChange={event => setDate(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Venue *</label>
                                                <input type="text" name="venue" placeholder="Event Venue" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={venue}
                                                    onChange={event => setVenue(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Total Guest Expected *</label>
                                                <input type="text" name="guest" placeholder="Total Guest Expected   " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={guest}
                                                    onChange={event => setGuest(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                                <input type="text" name="budget" placeholder="Event Budget" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={budget}
                                                    onChange={event => setBudget(event.target.value)} required />
                                            </div>
                                        </div>

                                        <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Awards Ceremonies*/}
                    <div className='lg:block xl:block hidden  py-24'>
                        <div className='pt-12' id='award'>
                            <div className='row '>
                                <div className='col-lg-6 '>
                                    <img src='/images/servicess/awardsceremony.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg pt-12'>
                                    <div className='text-white font font-bold xl:text-5xl lg:pl-12 pt-4'>
                                        Awards Ceremonies
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-3'>
                                        Get Experience
                                    </div>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-2 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer, <br></br>
                                        habits industry dynamics change? Find out from <br></br>those leading the charge.
                                    </p>
                                    <a href="#modal" id="openModal" className='lg:pl-12'>
                                        <button className='buttonbg px-12 py-2 text-white font mt-3 '>
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="modal" class="modal">
                            <div class="modal-content bg-black py-24">
                                <a href="#" class="close" id="closeModal">&times;</a>
                                <div className='golden font font-bold text-center xl:text-2xl'>
                                    Event Enquiry Form
                                </div>
                                <div className="content pt-6">
                                    <form ref={form} onSubmit={sendEmail} method="POST">
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Full Name *</label>
                                                <input type="text" name="fullName" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    onChange={event => setFullName(event.target.value)}
                                                    value={fullName} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Email Id *</label>
                                                <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    value={email}
                                                    onChange={event => setEmail(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Contact *</label>
                                                <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={phoneNumber}
                                                    onChange={event => setPhoneNumber(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Alternative Contact *</label>
                                                <input type="tel" name="alternativeNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={alternativeNumber}
                                                    onChange={event => setAlternativeNumber(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Gender *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Gender" name="gender"
                                                    value={gender}
                                                    onChange={event => setGender(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                                    <option value="Abu Dhabi" className='py-4'>Male</option>
                                                    <option value="Female" className='py-4'>Female</option>
                                                    <option value="Other" className='py-4'>Other</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Service Required *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Service" name="service"
                                                    value={service}
                                                    onChange={event => setService(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                                    <option value="Corporate Event">Corporate Event</option>
                                                    <option value="Workshop / Conference">Workshop / Conference</option>
                                                    <option value="Marketing Event">Marketing Event</option>
                                                    <option value="Training Program">Training Program</option>
                                                    <option value="Award Ceremony">Award Ceremony</option>
                                                    <option value="Social Event">Social Event</option>
                                                    <option value="College Fest">College Fest</option>
                                                    <option value="Luxury Birthday">Luxury Birthday</option>
                                                    <option value="Wedding Planning">Wedding Planning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>City *</label>
                                                <input type="text" name="city" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={city}
                                                    onChange={event => setCity(event.target.value)}
                                                    required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Tell us more about your requirement*</label>
                                                <input type="text" name="requirement" placeholder="Requirement " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={requirement}
                                                    onChange={event => setRequirement(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Date *</label>
                                                <input type="date" name="date" placeholder="Event Date " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={date}
                                                    onChange={event => setDate(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Venue *</label>
                                                <input type="text" name="venue" placeholder="Event Venue" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={venue}
                                                    onChange={event => setVenue(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Total Guest Expected *</label>
                                                <input type="text" name="guest" placeholder="Total Guest Expected   " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={guest}
                                                    onChange={event => setGuest(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                                <input type="text" name="budget" placeholder="Event Budget" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={budget}
                                                    onChange={event => setBudget(event.target.value)} required />
                                            </div>
                                        </div>

                                        <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Awards Ceremonies*/}
                    <div className='container lg:hidden xl:hidden block '>
                        <div className='' id='award'>
                            <div className='row flex-col-reverse'>
                                <div className='col-lg-6 pt-6'>
                                    <img src='/images/servicess/awardsceremony.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg pt-6'>
                                    <div className='text-white font font-bold xl:text-5xl text-4xl lg:pl-12 pt-4 '>
                                        Awards Ceremonies
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-2'>
                                        Get Experience
                                    </div>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-1 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-1 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer,
                                        habits industry dynamics change? Find out from those leading the charge.
                                    </p>
                                    <a href="#modal" id="openModal" className='lg:pl-12'>
                                        <button className='buttonbg px-12 py-2 text-white font mt-3 '>
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="modal" class="modal">
                            <div class="modal-content bg-black py-24">
                                <a href="#" class="close" id="closeModal">&times;</a>
                                <div className='golden font font-bold text-center xl:text-2xl'>
                                    Event Enquiry Form
                                </div>
                                <div className="content pt-6">
                                    <form ref={form} onSubmit={sendEmail} method="POST">
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Full Name *</label>
                                                <input type="text" name="fullName" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    onChange={event => setFullName(event.target.value)}
                                                    value={fullName} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Email Id *</label>
                                                <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    value={email}
                                                    onChange={event => setEmail(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Contact *</label>
                                                <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={phoneNumber}
                                                    onChange={event => setPhoneNumber(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Alternative Contact *</label>
                                                <input type="tel" name="alternativeNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={alternativeNumber}
                                                    onChange={event => setAlternativeNumber(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Gender *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Gender" name="gender"
                                                    value={gender}
                                                    onChange={event => setGender(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                                    <option value="Abu Dhabi" className='py-4'>Male</option>
                                                    <option value="Female" className='py-4'>Female</option>
                                                    <option value="Other" className='py-4'>Other</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Service Required *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Service" name="service"
                                                    value={service}
                                                    onChange={event => setService(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                                    <option value="Corporate Event">Corporate Event</option>
                                                    <option value="Workshop / Conference">Workshop / Conference</option>
                                                    <option value="Marketing Event">Marketing Event</option>
                                                    <option value="Training Program">Training Program</option>
                                                    <option value="Award Ceremony">Award Ceremony</option>
                                                    <option value="Social Event">Social Event</option>
                                                    <option value="College Fest">College Fest</option>
                                                    <option value="Luxury Birthday">Luxury Birthday</option>
                                                    <option value="Wedding Planning">Wedding Planning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>City *</label>
                                                <input type="text" name="city" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={city}
                                                    onChange={event => setCity(event.target.value)}
                                                    required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Tell us more about your requirement*</label>
                                                <input type="text" name="requirement" placeholder="Requirement " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={requirement}
                                                    onChange={event => setRequirement(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Date *</label>
                                                <input type="date" name="date" placeholder="Event Date " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={date}
                                                    onChange={event => setDate(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Venue *</label>
                                                <input type="text" name="venue" placeholder="Event Venue" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={venue}
                                                    onChange={event => setVenue(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Total Guest Expected *</label>
                                                <input type="text" name="guest" placeholder="Total Guest Expected   " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={guest}
                                                    onChange={event => setGuest(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                                <input type="text" name="budget" placeholder="Event Budget" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={budget}
                                                    onChange={event => setBudget(event.target.value)} required />
                                            </div>
                                        </div>

                                        <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Luxury Social Events */}
                    <div className='bg-black '>
                        <div className='container lg:pt-12' id='luxury-events'>
                            <div className='row '>
                                <div className='col-lg-6 pt-12'>
                                    <div className=' text-white font font-bold xl:text-6xl text-4xl'>
                                        Luxury Social <br></br>Events
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-2'>
                                        Shift your perspective on
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-1 pb-2'>
                                        digital business
                                    </div>
                                    <p className='text-white xl:text-xl font pt-2 xl:block lg:block hidden'>
                                        Get the clarity you need to move your priorities forward
                                    </p>
                                    <p className='text-white xl:text-xl font pt-1 xl:block lg:block hidden'>
                                        while making connections that drive success.  while making connections that drive success.
                                    </p>
                                    <p className='text-white xl:text-base font xl:hidden lg:hidden block'>
                                        Get the clarity you need to move your priorities forward while making connections
                                        that drive success.  while making connections that drive success.
                                    </p>
                                    <a href="#modal" id="openModal" className=''>
                                        <button className='buttonbg px-12 py-2 text-white font mt-3 '>
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                                <div className='col-lg-6 lg:pt-0 pt-12'>
                                    <img src='/images/servicess/luxury.png' alt='' />
                                </div>
                            </div>
                        </div>
                        <div id="modal" class="modal">
                            <div class="modal-content bg-black py-24">
                                <a href="#" class="close" id="closeModal">&times;</a>
                                <div className='golden font font-bold text-center xl:text-2xl'>
                                    Event Enquiry Form
                                </div>
                                <div className="content pt-6">
                                    <form ref={form} onSubmit={sendEmail} method="POST">
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Full Name *</label>
                                                <input type="text" name="fullName" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    onChange={event => setFullName(event.target.value)}
                                                    value={fullName} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Email Id *</label>
                                                <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    value={email}
                                                    onChange={event => setEmail(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Contact *</label>
                                                <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={phoneNumber}
                                                    onChange={event => setPhoneNumber(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Alternative Contact *</label>
                                                <input type="tel" name="alternativeNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={alternativeNumber}
                                                    onChange={event => setAlternativeNumber(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Gender *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Gender" name="gender"
                                                    value={gender}
                                                    onChange={event => setGender(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                                    <option value="Abu Dhabi" className='py-4'>Male</option>
                                                    <option value="Female" className='py-4'>Female</option>
                                                    <option value="Other" className='py-4'>Other</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Service Required *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Service" name="service"
                                                    value={service}
                                                    onChange={event => setService(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                                    <option value="Corporate Event">Corporate Event</option>
                                                    <option value="Workshop / Conference">Workshop / Conference</option>
                                                    <option value="Marketing Event">Marketing Event</option>
                                                    <option value="Training Program">Training Program</option>
                                                    <option value="Award Ceremony">Award Ceremony</option>
                                                    <option value="Social Event">Social Event</option>
                                                    <option value="College Fest">College Fest</option>
                                                    <option value="Luxury Birthday">Luxury Birthday</option>
                                                    <option value="Wedding Planning">Wedding Planning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>City *</label>
                                                <input type="text" name="city" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={city}
                                                    onChange={event => setCity(event.target.value)}
                                                    required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Tell us more about your requirement*</label>
                                                <input type="text" name="requirement" placeholder="Requirement " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={requirement}
                                                    onChange={event => setRequirement(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Date *</label>
                                                <input type="date" name="date" placeholder="Event Date " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={date}
                                                    onChange={event => setDate(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Venue *</label>
                                                <input type="text" name="venue" placeholder="Event Venue" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={venue}
                                                    onChange={event => setVenue(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Total Guest Expected *</label>
                                                <input type="text" name="guest" placeholder="Total Guest Expected   " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={guest}
                                                    onChange={event => setGuest(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                                <input type="text" name="budget" placeholder="Event Budget" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={budget}
                                                    onChange={event => setBudget(event.target.value)} required />
                                            </div>
                                        </div>

                                        <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Signature IP events */}
                    <div className='lg:block xl:block hidden  py-24'>
                        <div className='pt-12' id='signature'>
                            <div className='row '>
                                <div className='col-lg-6 '>
                                    <img src='/images/servicess/conference.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg pt-12'>
                                    <div className='text-white font font-bold xl:text-5xl lg:pl-12 pt-4'>
                                        Siganture IP Events
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-3'>
                                        Get Experience
                                    </div>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-2 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer, <br></br>
                                        habits industry dynamics change? Find out from <br></br>those leading the charge.
                                    </p>
                                    <a href="#modal" id="openModal" className='lg:pl-12'>
                                        <button className='buttonbg px-12 py-2 text-white font mt-3 '>
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="modal" class="modal">
                            <div class="modal-content bg-black py-24">
                                <a href="#" class="close" id="closeModal">&times;</a>
                                <div className='golden font font-bold text-center xl:text-2xl'>
                                    Event Enquiry Form
                                </div>
                                <div className="content pt-6">
                                    <form ref={form} onSubmit={sendEmail} method="POST">
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Full Name *</label>
                                                <input type="text" name="fullName" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    onChange={event => setFullName(event.target.value)}
                                                    value={fullName} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Email Id *</label>
                                                <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    value={email}
                                                    onChange={event => setEmail(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Contact *</label>
                                                <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={phoneNumber}
                                                    onChange={event => setPhoneNumber(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Alternative Contact *</label>
                                                <input type="tel" name="alternativeNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={alternativeNumber}
                                                    onChange={event => setAlternativeNumber(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Gender *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Gender" name="gender"
                                                    value={gender}
                                                    onChange={event => setGender(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                                    <option value="Abu Dhabi" className='py-4'>Male</option>
                                                    <option value="Female" className='py-4'>Female</option>
                                                    <option value="Other" className='py-4'>Other</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Service Required *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Service" name="service"
                                                    value={service}
                                                    onChange={event => setService(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                                    <option value="Corporate Event">Corporate Event</option>
                                                    <option value="Workshop / Conference">Workshop / Conference</option>
                                                    <option value="Marketing Event">Marketing Event</option>
                                                    <option value="Training Program">Training Program</option>
                                                    <option value="Award Ceremony">Award Ceremony</option>
                                                    <option value="Social Event">Social Event</option>
                                                    <option value="College Fest">College Fest</option>
                                                    <option value="Luxury Birthday">Luxury Birthday</option>
                                                    <option value="Wedding Planning">Wedding Planning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>City *</label>
                                                <input type="text" name="city" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={city}
                                                    onChange={event => setCity(event.target.value)}
                                                    required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Tell us more about your requirement*</label>
                                                <input type="text" name="requirement" placeholder="Requirement " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={requirement}
                                                    onChange={event => setRequirement(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Date *</label>
                                                <input type="date" name="date" placeholder="Event Date " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={date}
                                                    onChange={event => setDate(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Venue *</label>
                                                <input type="text" name="venue" placeholder="Event Venue" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={venue}
                                                    onChange={event => setVenue(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Total Guest Expected *</label>
                                                <input type="text" name="guest" placeholder="Total Guest Expected   " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={guest}
                                                    onChange={event => setGuest(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                                <input type="text" name="budget" placeholder="Event Budget" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={budget}
                                                    onChange={event => setBudget(event.target.value)} required />
                                            </div>
                                        </div>

                                        <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Signature IP events */}
                    <div className='container lg:hidden xl:hidden block '>
                        <div className='' id='signature'>
                            <div className='row flex-col-reverse'>
                                <div className='col-lg-6 pt-6'>
                                    <img src='/images/servicess/conference.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg pt-6'>
                                    <div className='text-white font font-bold xl:text-5xl text-4xl lg:pl-12 pt-4 '>
                                        Signature IP Events
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-2'>
                                        Get Experience
                                    </div>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-1 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-1 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer,
                                        habits industry dynamics change? Find out from those leading the charge.
                                    </p>
                                    <a href="#modal" id="openModal" className='lg:pl-12'>
                                        <button className='buttonbg px-12 py-2 text-white font mt-3 '>
                                            Enquire Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="modal" class="modal">
                            <div class="modal-content bg-black py-24">
                                <a href="#" class="close" id="closeModal">&times;</a>
                                <div className='golden font font-bold text-center xl:text-2xl'>
                                    Event Enquiry Form
                                </div>
                                <div className="content pt-6">
                                    <form ref={form} onSubmit={sendEmail} method="POST">
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Full Name *</label>
                                                <input type="text" name="fullName" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    onChange={event => setFullName(event.target.value)}
                                                    value={fullName} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Email Id *</label>
                                                <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                                    value={email}
                                                    onChange={event => setEmail(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Contact *</label>
                                                <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={phoneNumber}
                                                    onChange={event => setPhoneNumber(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Alternative Contact *</label>
                                                <input type="tel" name="alternativeNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={alternativeNumber}
                                                    onChange={event => setAlternativeNumber(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Gender *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Gender" name="gender"
                                                    value={gender}
                                                    onChange={event => setGender(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                                    <option value="Abu Dhabi" className='py-4'>Male</option>
                                                    <option value="Female" className='py-4'>Female</option>
                                                    <option value="Other" className='py-4'>Other</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Service Required *</label>
                                                <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    placeholder="Service" name="service"
                                                    value={service}
                                                    onChange={event => setService(event.target.value)}
                                                    required
                                                >
                                                    <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                                    <option value="Corporate Event">Corporate Event</option>
                                                    <option value="Workshop / Conference">Workshop / Conference</option>
                                                    <option value="Marketing Event">Marketing Event</option>
                                                    <option value="Training Program">Training Program</option>
                                                    <option value="Award Ceremony">Award Ceremony</option>
                                                    <option value="Social Event">Social Event</option>
                                                    <option value="College Fest">College Fest</option>
                                                    <option value="Luxury Birthday">Luxury Birthday</option>
                                                    <option value="Wedding Planning">Wedding Planning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>City *</label>
                                                <input type="text" name="city" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={city}
                                                    onChange={event => setCity(event.target.value)}
                                                    required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Tell us more about your requirement*</label>
                                                <input type="text" name="requirement" placeholder="Requirement " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={requirement}
                                                    onChange={event => setRequirement(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Date *</label>
                                                <input type="date" name="date" placeholder="Event Date " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={date}
                                                    onChange={event => setDate(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Venue *</label>
                                                <input type="text" name="venue" placeholder="Event Venue" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={venue}
                                                    onChange={event => setVenue(event.target.value)} required />
                                            </div>
                                        </div>

                                        <div className='row py-2'>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Total Guest Expected *</label>
                                                <input type="text" name="guest" placeholder="Total Guest Expected   " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={guest}
                                                    onChange={event => setGuest(event.target.value)} required />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                                <input type="text" name="budget" placeholder="Event Budget" className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                                    value={budget}
                                                    onChange={event => setBudget(event.target.value)} required />
                                            </div>
                                        </div>

                                        <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

        </>
    );
}

export default Corporate;
