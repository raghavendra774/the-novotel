import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckout(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {mutate:checkout, isLoading:isCheckingOut} = useMutation({
        mutationFn: (bookingId)=>updateBooking(bookingId, {
            status: 'checked-in',
        }),
        onSuccess: (data)=>{
            toast.success(`Booking #${data.id} successfully checked out`);
            queryClient.invalidateQueries({active: true});
            navigate('/');
        },
        onError : ()=> {
            toast.error("there is an error while checking in")
        }
    })
    return {checkout, isCheckingOut}

}
