
const Contact = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">Tell us something</h2>
            <form className="lg:w-[70%] bg-base-200 rounded-xl p-6 mx-auto">
                <label className="input input-bordered mb-3 flex items-center gap-2">
                    Name
                    <input type="text" className="grow" placeholder="Your name" required/>
                </label>
                <label className="input input-bordered mb-3 flex items-center gap-2">
                    Email
                    <input type="text" className="grow" placeholder="abc@domain.com" required/>
                </label>
                <textarea placeholder="Your message" className="textarea mb-3 textarea-bordered textarea-lg w-full" ></textarea>
                <button className="btn bg-[#23BE0A] w-full text-white">Submit</button>

            </form>
        </div>
    );
};

export default Contact;