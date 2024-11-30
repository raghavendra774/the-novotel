
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
//import Checkbox from 'ui/Checkbox';
import BookingDataBox from '../bookings/BookingDataBox';


//import { useBooking } from 'features/bookings/useBooking';
import { useMoveBack } from '../../hooks/useMoveBack';
//import { useMoveBack } from 'hooks/useMoveBack';


import styled from 'styled-components';
import { useBooking } from '../bookings/useBooking';
import Spinner from '../../ui/Spinner';
import { useEffect, useState } from 'react';
import Checkbox from '../../ui/Checkbox';
import { formatCurrency } from '../../utils/helpers';
import { useChecking } from './useCheckin';
import { useSettings } from '../settings/useSettings';
//import { box } from 'styles/styles';
//import { useSettings } from 'features/settings/useSettings';

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const {booking, isLoading} = useBooking();
  const moveBack = useMoveBack();
  const {checkin, isCheckingIn} = useChecking();
  const {settings, isLoading: isLoadingSettings} = useSettings();
  //const { isLoading: isLoadingSettings, settings } = useSettings();


  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  if (isLoading || isLoadingSettings) return <Spinner />;
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;
  const optionalBreakfastPrice = settings.breakfastPrice * numNights * numGuests;

  // const optionalBreakfastPrice =
  //   numNights * settings.breakfastPrice * numGuests;

  function handleCheckin() {
    if(!confirmPaid) return;
    if(addBreakfast){
      checkin({bookingId, breakfast: {
        hasBreakfast: true,
        extrasPrice: optionalBreakfastPrice,
        totalPrice: totalPrice + optionalBreakfastPrice
      }})
    }
    else {
      checkin({bookingId, breakfast: {}})
    }
  }

  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type='horizontal'>
        <Heading type='h1'>Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {/* LATER */}
      {/* {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id='breakfast'
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )} */}

      {/* <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          // If the guest has already paid online, we can't even undo this
          disabled={isCheckingIn || confirmPaid}
          id='confirm'
        >
          I confirm that {guests.fullName} has paid the total amount of{' '}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )} for breakfast)`}
        </Checkbox>
      </Box> */}

      {!hasBreakfast && <Box>
        <Checkbox checked={addBreakfast} onChange={()=>{
          setAddBreakfast((add)=>!add)
          setConfirmPaid(false)
        }}
        id="breakfast"
        >
          want to add breakfast for price ${optionalBreakfastPrice}? 
        </Checkbox>
      </Box>}

      <Box>
        <Checkbox checked={confirmPaid} onChange={()=>setConfirmPaid(confirm=>!confirm)} id="confirm" disabled={confirmPaid || isCheckingIn}>I confirm that {guests.fullName} has paid the total amount of {!addBreakfast ? formatCurrency(totalPrice) : `${formatCurrency(totalPrice + optionalBreakfastPrice)}`}</Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}


export default CheckinBooking;
