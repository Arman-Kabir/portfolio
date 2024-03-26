import { SectionHeader } from '../SectionHeader/SectionHeader';
import { useForm, SubmitHandler } from "react-hook-form";
import './Contact.css';

type Inputs = {
    example: string
    exampleRequired: string
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    console.log(watch("example"))

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
                        <input defaultValue="test" {...register("example")} />

                        {/* include validation with required or other standard HTML validation rules */}
                        <input {...register("exampleRequired", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact