<Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              onClick={() => navigate(`/bookings/${bookingId}`)}
              icon={<HiEye />}
            >
              See details
            </Menus.Button>

            {status === 'unconfirmed' && (
              <Menus.Button
                onClick={() => navigate(`/checkin/${bookingId}`)}
                icon={<HiArrowDownOnSquare />}
              >
                Check in
              </Menus.Button>
            )}

            {status === 'checked-in' && (
              <Menus.Button
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
                icon={<HiArrowUpOnSquare />}
              >
                Check out
              </Menus.Button>
            )}

            <Menus.Button icon={<HiPencil />}>Edit booking</Menus.Button>
            {/* <Menus.Button>Delete</Menus.Button> */}

            {/* Now it gets a bit confusing... */}
            <Modal.Toggle opens='delete'>
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Toggle>
          </Menus.List>
        </Menus.Menu>

        {/* This needs to be OUTSIDE of the menu, which in no problem. The compound component gives us this flexibility */}
        <Modal.Window name='delete'>
          <ConfirmDelete
            resource='booking'
            // These options will be passed wherever the function gets called, and they determine what happens next
            onConfirm={(options) => deleteBooking(bookingId, options)}
            disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>