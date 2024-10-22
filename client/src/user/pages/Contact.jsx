import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, InstagramIcon, Twitter } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addContactMessage(formData);
            toast.success('Contact message sent successfully!');
            setFormData({ name: '', email: '', phone_number: '', message: '' });
        } catch (error) {
            toast.error(error.message || 'Failed to send message.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="breadcrumb-area pt-50">
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="pt-0 contact-section section-padding">
                <div className="container">
                    <div className="col-xl-12 col-lg-12">
                        <div className="mt-40 section-title text-low">
                            <h2 className='text-black fw-bold'>
                                Contact Us
                            </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-60">
                        <div className="col-xl-12">
                            <img src="https://www.welink.com.au/wp-content/uploads/2016/11/Perth-Skyline-for-Welink.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-xl-5 col-lg-5">
                            <div className="contact-text">
                                <p>
                                    Talk to us today. Welink team are some of most experienced specialists in the industry, and we are here to provide you with the best solution for your project.
                                </p>
                            </div>
                        </div>
                        <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
                            <div className="subimit-form-wrap">
                                <div className="section-title">
                                    <h2>Submit Form</h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        placeholder="Phone Number"
                                        value={formData.phone_number}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        cols="30"
                                        rows="10"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className={`submit-button px-10 ${loading ? 'disabled' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? 'Submitting...' : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact-info-wrap">
                        <div className="row mt-60">
                            <div className="col-xl-6">
                                <div className="google-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365858.2180328825!2d30.12724445!3d-1.9297706000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e1!3m2!1sen!2srw!4v1729440938485!5m2!1sen!2srw"
                                        width="600"
                                        height="600"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps Location"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-info">
                                    <div className="section-title">
                                        <h2>Contact Info</h2>
                                    </div>
                                    <div className="contact-info-inner">
                                        <div className="single-contact-info">
                                            <p>Email</p>
                                            <h4>info@welinkhome.com</h4>
                                        </div>
                                        <div className="single-contact-info">
                                            <p>Phone</p>
                                            <h4>+2507888888</h4>
                                        </div>
                                        <div className="single-contact-info">
                                            <p>Address</p>
                                            <h4>Kigali Rwanda</h4>
                                        </div>
                                        <div className="social-area">
                                            <a href="#">
                                                <Instagram />
                                            </a>
                                            <a href="#">
                                                <Twitter />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact