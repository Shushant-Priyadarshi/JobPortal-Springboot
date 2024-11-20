import { useState } from 'react';
import {  Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ["Relevence","Most Recent","Salary(Low to High)","Salary(High to Low)"];

const Sort = ()=> {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevence');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
     
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
        
          <div onClick={()=>combobox.toggleDropdown()} className='text-sm cursor-pointer gap-1 border border-azure-radiance-700 flex items-center px-2 py-1 rounded-xl'>
            {selectedItem} <IconAdjustments className='text-azure-radiance-700 w-5 h-5' />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Sort;