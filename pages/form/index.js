import React from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('', '', e.target, '')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }

    return (
        <>
            <div className="contact-form">




                <a href="#modal" id="openModal">Open Form</a>
                <div id="modal" class="modal">
                    <div class="modal-content bg-black py-24">
                        <a href="#" class="close" id="closeModal">&times;</a>
                        <div className='golden fonts font-bold text-center xl:text-2xl'>
                            Event Enquiry Form
                        </div>
                        <div className="content pt-6">
                            <form >
                                <div className='row py-2'>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Full Name *</label>
                                        <input type="text" name="fullname" placeholder="Name " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                            required />
                                    </div>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Email Id *</label>
                                        <input type="email" name="email" placeholder="Email Id " className="bg-black text-white col-lg-12 border rounded font text-sm "
                                            required />
                                    </div>
                                </div>

                                <div className='row py-2'>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Contact *</label>
                                        <input type="tel" name="phoneNumber" placeholder="Contact  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            required />
                                    </div>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Alternative Contact *</label>
                                        <input type="tel" name="phoneNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            required />
                                    </div>
                                </div>

                                <div className='row py-2'>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Gender *</label>
                                        <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            placeholder="location" name="Location" required
                                        >
                                            <option value="" className="py-4 text-sm" disabled selected hidden>Select Gender</option>
                                            <option value="Abu Dhabi" className='py-4'>Male</option>
                                            <option value="Dubai" className='py-4'>Female</option>
                                            <option value="Dubai" className='py-4'>Other</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Service Required *</label>
                                        <select className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            placeholder="location" name="Location" required
                                        >
                                            <option value="" className="py-2 text-sm" disabled selected hidden>Service Required</option>
                                            <option value="Abu Dhabi">Corporate Event</option>
                                            <option value="Dubai">Workshop / Conference</option>
                                            <option value="Sharjah">Marketing Event</option>
                                            <option value="Umm Al Qaiwain">Training Program</option>
                                            <option value="Fujairah">Award Ceremony</option>
                                            <option value="Ajman">Social Event</option>
                                            <option value="Ras Al Khaimah">College Fest</option>
                                            <option value="Ajman">Luxury Birthday</option>
                                            <option value="Ras Al Khaimah">Wedding Planning</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row py-2'>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>City *</label>
                                        <input type="tel" name="phoneNumber" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            required />
                                    </div>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Tell us more about your requirement*</label>
                                        <input type="tel" name="phoneNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            required />
                                    </div>
                                </div>

                                <div className='row py-2'>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Event Date *</label>
                                        <input type="tel" name="phoneNumber" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            required />
                                    </div>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Event Venue *</label>
                                        <input type="tel" name="phoneNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            required />
                                    </div>
                                </div>

                                <div className='row py-2'>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Total Guest Expected *</label>
                                        <input type="tel" name="phoneNumber" placeholder="City  " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            required />
                                    </div>
                                    <div className='col-lg-6'>
                                        <label className='font golden py-2'>Event Budget ( Please be specific) *</label>
                                        <input type="tel" name="phoneNumber" placeholder="Alternative Contact " className="bg-black text-white col-lg-12 border rounded font text-sm py-2 px-2"
                                            required />
                                    </div>
                                </div>

                                <input type="submit" name="" value="Submit" className="mt-8 text-center buttonbg get-started text-white font font-bold px-24 py-2 rounded-3xl outline-none focus:outline-none  mb-1 bg-gold border-4 border-gold active:bg-lightBlue-600 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
