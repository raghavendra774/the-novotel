import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import { useForm } from "react-hook-form"
import { useSignup } from "./useSignup"
import { useNavigate } from "react-router-dom"
function SignupForm(){
    const navigate = useNavigate();
    const {register, formState, reset, getValues, handleSubmit} = useForm();
    const {errors} = formState;
    const {signup, isLoading} = useSignup()
    function onSubmit({fullName, email, password}){
        console.log("enterred")
        signup({fullName, email, password},{
            onSettled: () => {
                reset();
            }
        })
    }

    return (
        <Form onSubmit= {handleSubmit(onSubmit)}>
            <FormRow label="Full name" error={errors?.fillName?.message}>
                <Input type="text" id="fullName" {...register('fullName', {required: "THis field is required"})}/>
            </FormRow>

            <FormRow label="Email address" error={errors?.email?.message}>
                <Input type="email" id="email"  {...register('email', {required: "THis field is required",
                    
                })}/>
            </FormRow>

            <FormRow label="password (min 8 characters)" error={errors?.password?.message}>
                <Input type="password" id="password"  {...register('password', {required: "THis field is required", minLength: {
                    value: 8,
                    message: "password needs minimum of 8 characters"
                }})}/>
            </FormRow>

            <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
                <Input type="password" id="passwordConfirm"  {...register('passwordConfirm', {required: "THis field is required",
                validate: (value) => value === getValues().password || "passwordd need to match"
            })}/>
            </FormRow>

            <FormRow>
                <Button variation="secondary" type="reset" onClick={reset}>cancel</Button>
            </FormRow>

            <FormRow>
                <Button variation="primary">create new user</Button>
            </FormRow>
        </Form>
    )
}

export default SignupForm;