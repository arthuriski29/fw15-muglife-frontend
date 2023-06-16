import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import logo from '../../assets/Logo.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function ResetPassword() {
    return (
        <>
            <Head>
                <title>Reset Password</title>
            </Head>
            <main className="w-full h-screen">
                <div className=" w-full h-screen">
                    <div className="bg-forgot-pattern bg-no-repeat bg-cover w-full h-full flex justify-center items-center">
                        <form className="flex flex-col items-center justify-center gap-11">
                            <div className="text-center">
                                <div className="text-5xl text-white font-semibold">Reset your password</div>
                                <div className="text-2xl text-white font-semibold">Don&apos;t worry, we got your back!</div>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center gap-9 px-5">
                                <div className="w-full md:w-[550px] h-16">
                                    <input type="password" className="input input-accent bg-white w-full h-full" placeholder="Enter your new password" />
                                </div>
                                <div className="w-full md:w-[550px] h-16">
                                    <input type="password" className="input input-accent bg-white w-full h-full" placeholder="Re-Enter your new password" />
                                </div>
                                <div className="w-full md:w-[550px] h-16">
                                    <button className="w-full h-full btn btn-accent text-primary text-xl capitalize shadow-lg shadow-stone-500/50">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
                <div className="w-full h-[530px] bg-[#F5F5F5] pt-16 lg:pt-48 pb-11 px-11 md:px-20 lg:px-28 xl:px-48">
                    <div className="w-full h-full flex flex-col sm:flex-row items-start justify-between gap-7">
                        <div className="flex flex-col items-start justify-start gap-7">
                            <div>
                                <Image src={logo} width={150} alt="logo"></Image>
                            </div>
                            <div className="w-full max-w-[340px] text-base text-primary font-semibold">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</div>
                            <div className="flex items-center justify-start gap-5">
                                <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center">
                                    <i>
                                        <FaFacebookF size={15} className="text-primary" />
                                    </i>
                                </div>
                                <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center">
                                    <i>
                                        <FaTwitter size={15} className="text-primary" />
                                    </i>
                                </div>
                                <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center">
                                    <i>
                                        <FaInstagram size={15} className="text-primary" />
                                    </i>
                                </div>
                            </div>
                            <div className="text-base text-accent">©2023MugLife</div>
                        </div>
                        <div className="flex items-start justify-start gap-7 lg:gap-24">
                            <div className="flex flex-col items-start justify-start gap-7">
                                <div className="text-primary text-lg font-semibold">Product</div>
                                <div className="flex flex-col items-start justify-start gap-5 text-secondary">
                                    <div>Download</div>
                                    <div>Pricing</div>
                                    <div>Locations</div>
                                    <div>Countries</div>
                                    <div>Blog</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-7">
                                <div className="text-primary text-lg font-semibold">Engage</div>
                                <div className="flex flex-col items-start justify-start gap-5 text-secondary">
                                    <div>Coffee Shop ?</div>
                                    <div>FAQ</div>
                                    <div>About Us</div>
                                    <div>Privacy Policy</div>
                                    <div>Terms of Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default ResetPassword;
