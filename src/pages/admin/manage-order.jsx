import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import hazelnut from "../../assets/image 36.svg";
import wings from "../../assets/image 37.svg";
import bank from "../../assets/acc.png";

const ManageOrders = () => {
    return (
        <>
            <title>Manage Order | MugLife</title>
            <Navbar />

            {/* Konten */}

            <div>
                <div className="bg-order_bg bg-no-repeat bg-cover font-rubik pt-[100px]">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col justify-center items-center ml-[10%] pt-[10%]">
                            <div className="font-bold text-white text-[40px] drop-shadow-lg">
                                Finish your customer order now.
                            </div>

                            <div className="mt-[10%] pr-[6%]">
                                <div className="relative mt-[15%] bg-[#4b3529] w-[350px] h-[524px] rounded-lg drop-shadow-2xl">
                                    <div className="absolute bg-[#4b3529] mt-[-10%] w-[350px] h-[524px] rounded-lg drop-shadow-2xl">
                                        <div className="absolute bg-[#4b3529] mt-[-10%] w-[350px] h-[524px] rounded-lg drop-shadow-2xl flex flex-col">
                                                <div>
                                                    <div className="text-center pt-[10%]">
                                                        <div className="font-bold text-[#E5E5CB] text-[35px]">
                                                            Delivery Order
                                                        </div>
                                                        <div className="text-[#E5E5CB]">For Zulaikha</div>
                                                        
                                                    </div>

                                                    <div className="flex gap-[33px] px-[5%] mt-[5%]">
                                                        <div>
                                                            <Image
                                                                src={hazelnut}
                                                                width="90"
                                                                height="82"
                                                                className="rounded-lg bg-cover"
                                                                alt="desc"
                                                            ></Image>
                                                        </div>
                                                        <div className="text-[#E5E5CB] text-[14px]">
                                                            <div>Hazelnut Latte</div>
                                                            <div>x1</div>
                                                            <div>
                                                                Regular
                                                            </div>
                                                        </div>
                                                        <div className="text-[#E5E5CB] text-[14px]">
                                                            <div>IDR 24.000</div>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-[33px] px-[5%] mt-[5%]">
                                                        <div>
                                                            <Image
                                                                src={wings}
                                                                width="90"
                                                                height="82"
                                                                className="rounded-lg bg-cover"
                                                                alt="desc"
                                                            ></Image>
                                                        </div>
                                                        <div className="text-[#E5E5CB] text-[14px]">
                                                            <div>Chicken Fire Wings</div>
                                                            <div>x2</div>
                                                        </div>
                                                        <div className="text-[#E5E5CB] text-[14px]">
                                                            <div>IDR 30.000</div>
                                                        </div>
                                                    </div>

                                                    <div className="outline outline-1 outline-[#E5E5CB] mt-[5%]"></div>
                                                    <div className="flex flex-col gap-3 px-[5%]">
                                                        <div className="flex text-[#E5E5CB] text-[16px]">
                                                            <div className="grow">SUBTOTAL</div>
                                                            <div>IDR 120.000</div>
                                                        </div>
                                                        <div className="flex text-[#E5E5CB] text-[16px]">
                                                            <div className="grow">TAX & FEES</div>
                                                            <div>IDR 20.000</div>
                                                        </div>
                                                        <div className="flex text-[#E5E5CB] text-[16px]">
                                                            <div className="grow">SHIPPING</div>
                                                            <div>IDR 10.000</div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-[45px] px-[5%]">
                                                        <div className="flex text-[#E5E5CB] text-[16px]">
                                                            <div className="grow">TOTAL</div>
                                                            <div>IDR 150.000</div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="flex mr-[5%] bg-[#D5CEA3] text-[#3C2A21] gap-[38px] px-[5%] py-[22px] rounded-lg mt-[54px] mb-[10%]">
                                <div>Swipe up to see upcoming orders</div>
                                <div>
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex text-[#D5CEA3] text-[16px] font-semibold w-[60%] md:w-[50%] pt-[20%]">
                                <div className="grow">Address Details</div>
                                <Link href="#"><div>edit</div></Link>
                            </div>
                            <div className="bg-[#4b3529] text-[#D5CEA3] w-[60%] md:w-[50%] rounded-lg px-[42px] py-[30px]">
                                <div>Delivery to Iskandar Street</div>

                                <div className="outline outline-1 outline-[#D5CEA3]"></div>
                                <div>Km 5 refinery road oppsite republic road,effurun, Jakarta</div>

                                <div className="outline outline-1 outline-[#D5CEA3]"></div>
                                <div>+62 81348287878</div>
                            </div>

                            <div className="flex text-white w-[60%] md:w-[50%] pt-[10%]">
                                <div className="grow">Payment Method</div>
                            </div>
                            <div className="bg-[#4b3529] w-[60%] md:w-[50%] rounded-lg px-[42px] py-[30px]">
                                <div>
                                    <div className="flex items-center gap-[11px]">
                                        <input
                                            type="radio"
                                            name="radio-1"
                                            className="radio"
                                        />
                                        <div className="h-10 w-10 bg-[#F47B0A] flex justify-center items-center rounded-lg">
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                                />
                                            </svg>
                                        </div>
                                        <div>Card</div>
                                    </div>
                                    <div className="outline outline-1 outline-black mt-[17px]"></div>

                                    <div className="flex items-center gap-[11px] pt-[17px]">
                                        <input
                                            type="radio"
                                            name="radio-1"
                                            className="radio"
                                        />
                                        <div className="h-10 w-10 bg-[#895537] flex justify-center items-center rounded-lg">
                                            <Image
                                                src={bank}
                                                alt="desc"
                                            ></Image>
                                        </div>
                                        <div>Bank Account</div>
                                    </div>
                                    <div className="outline outline-1 outline-black mt-[17px]"></div>

                                    <div className="flex items-center gap-[11px] pt-[17px]">
                                        <input
                                            type="radio"
                                            name="radio-1"
                                            className="radio"
                                        />
                                        <div className="h-10 w-10 bg-[#FFBA33] flex justify-center items-center rounded-lg">
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>Cash on Delivery</div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="w-[60%] md:w-[50%] bg-[#D5CEA3] hover:bg-[#e0d9ab] text-[#4b3529] text-[20px] font-semibold py-[27px] rounded-lg mt-[47px] mb-[5%]"
                            >
                                {" "}
                                Mark as done
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    );
};

export default ManageOrders;