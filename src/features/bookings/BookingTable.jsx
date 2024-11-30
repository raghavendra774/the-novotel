// import styled from 'styled-components';
import BookingRow from './BookingRow'
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import {useBookings} from './useBookings';
import Spinner from '../../ui/Spinner';



// We want each table row to have a menu, and we only want one of them to be open at the same time. We also want this functionality to be reusable. We could add a openID state here to the table, but that wouldn't really be reusable... The best way is to use a compound component

function BookingTable() {
  const {bookings, isLoading} = useBookings();
  
  if(isLoading) return <Spinner/>
  
  if(!bookings) return <Empty resourceName='bookings'/>
  
  return (
    
    <Menus>
      <Table columns='0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem'>
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        

        <Table.Body
          data={bookings.data}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />


      </Table>
    </Menus>
  );
}




export default BookingTable;