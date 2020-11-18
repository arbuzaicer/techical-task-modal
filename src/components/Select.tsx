import { FormControl } from "@material-ui/core";
import SelectUI from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useState } from "react";

import BillIcon from "./icons/Bill";
import BitcoinIcon from "./icons/Bitcoin";
import CardIcon from "./icons/CardIcon";

type SelectProps = {
  selectValue: string;
  setSelectValue: (value: string) => void;
};

const Select = ({ selectValue, setSelectValue }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const handleChange = (e: any) => setSelectValue(e.target.value);

  return (
    <div>
      <FormControl>
        <SelectUI
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={selectValue}
          onChange={handleChange}
        >
          <MenuItem value="Банковская карта">
            <CardIcon />
            Банковская карта
          </MenuItem>
          <MenuItem value="Биткоин">
            <BitcoinIcon />
            Биткоин
          </MenuItem>
          <MenuItem value="Выставить счет">
            <BillIcon />
            Выставить счет
          </MenuItem>
        </SelectUI>
      </FormControl>
    </div>
  );
};

export default Select;
