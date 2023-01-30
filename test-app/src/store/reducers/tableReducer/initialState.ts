export type TableRowType = {
  id: number;
  isSelected: boolean;
  name: string;
  email: string;
  company: string;
  phone: number;
  status: boolean;
};

interface InitialStateType {
  tableData: TableRowType[];
};

export const initialState: InitialStateType = {
  tableData: [
    {
      id: 1,
      isSelected: false,
      name: "Snow",
      email: "Jon",
      company: "Apple",
      phone: 12324512,
      status: false,
    },
    {
      id: 2,
      isSelected: false,
      name: "Ann",
      email: "Marston",
      company: "Cargoship",
      phone: 21312,
      status: true,
    },
  ],
};

export type InitialState = typeof initialState;
