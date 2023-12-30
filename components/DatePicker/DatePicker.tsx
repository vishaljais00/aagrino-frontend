import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import * as React from "react";

export const CustomDateFormat = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateField", "DateField"]}>
        <DateField
          label={label}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            console.log(newValue);
          }}
          format="MM-DD-YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
