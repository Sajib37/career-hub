const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer p-10  max-w-screen-xl mx-auto text-base-content flex justify-around flex-col items-center lg:flex-row">
                <div className=" flex flex-col items-center md:flex-row w-full lg:w-2/3 justify-around">
                    <nav className="text-center flex flex-col space-y-1 mb-4 md:mb-0">
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className="text-center flex flex-col space-y-1 mb-4 md:mb-0">
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className="text-center flex flex-col space-y-1">
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
                <form className=" ">
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">
                                Enter your email address
                            </span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered w-full pr-16"
                            />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;
