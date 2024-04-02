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
                        <p>Email  : armankabir8@gmail.com</p>
                        <p>Mobile: +8801926204425(Whatsapp available)</p>
                        <p>Github: https://github.com/Arman-Kabir </p>
                    </div>

                    <div>
                        <p>My Address:</p>
                        <p>Bagerhat, Khulna, Bangladesh</p>
                    </div>
                </div>

                <div className='form_container'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <label>Name</label>
                        <input placeholder='your name'  {...register("name")} />

                        {/* include validation with required or other standard HTML validation rules */}
                        <label>Email</label>
                        <input placeholder='your email' {...register("email", { required: true })} />

                        <label>Message</label>
                        <input placeholder='your message' {...register("message", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span>Plz, write your email</span>}
                        {errors.message && <span>Plz, write me a message</span>}

                        <button className='submit' type="submit">Submit </button>
                        
                        
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact