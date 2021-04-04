import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Example = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <div id="Popover1" type="button">
      <i class="far fa-bell"></i>
      </div>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Notification</PopoverHeader>
        <PopoverBody>Empty</PopoverBody>
      </Popover>
    </div>
  );
}

export default Example;

