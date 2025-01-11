import img2 from "../images/img3.jpg";
const Contact = () => {
    return(
        <div>
            <div className="mt-10 mb-5">
                <h1 className="text-center text-3xl font-bold flex justify-center mb-4 font-serif">Contact ✉️</h1>
                <h3 className="text-center text-gray-500 flex justify-center font-serif text-sm">
                    Got a question? We'd love to here you. Send us massage and we will try to get back to you ASAP.
                </h3>
            </div>
            <div className="flex-auto flex justify-center w-full mt-10">
                <div className="h w-6/12 pr-4">
                    <img src={img2} alt="Contact Us image" className="w-full h-fit border-opacity-40 rounded-2xl"/>
                </div>
                <div className="h-full justify-center  p-5 pt-32 pb-10 w-7/12" >
                <div className="card   border shadow-xl" id="form">
                </div>
                    <form id="contactForm">
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-md dark:text-gray-700 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className=" bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-slate-700 mt-5 mb-0 h-32"></div>
        </div>
    )
}

export default Contact;