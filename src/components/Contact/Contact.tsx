import { SectionHeader } from '../SectionHeader/SectionHeader';
import { useForm, SubmitHandler } from "react-hook-form";
import './Contact.css';

type Inputs = {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <section id='contact' className='section_container'>
            <SectionHeader title={'Contact'} />

            <div className='container contact_container'>

                <div className='address_container'>
                    <div>
                        <p><span className='boldP'>Email :</span>
                            <span className=''>armankabir8@gmail.com</span></p>

                        <p> <span className='boldP'>Mobile :</span>
                            <span className=''>+8801926204425(Whatsapp available)</span></p>

                        <p><span className='boldP'>Github :</span>
                            <span className=''>https://github.com/Arman-Kabir</span> </p>
                    </div>

                    <div>
                        <p className='boldP'>My Address:</p>
                        <p>Bagerhat district, Khulna, Bangladesh</p>
                        <p className='smallP'>Near Sixty Dome Mosque, a UNESCO World Heritage site </p>
                    </div>
                </div>

                <div className='form_container'>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Give me a message</h2>
                        {/* <label>Name</label> */}
                        <input placeholder='your name'  {...register("name")} />

                        {/* include validation with required or other standard HTML validation rules */}
                        {/* <label>Email</label> */}
                        <input placeholder='your email' {...register("email", { required: true })} />

                        {/* <label>Message</label> */}
                        <textarea rows="4" placeholder='your message' {...register("message", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span>Plz, write your email</span>}
                        {errors.message && <span>Plz, write me a message</span>}

                        <button className='btn' type="submit">Submit </button>

                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact