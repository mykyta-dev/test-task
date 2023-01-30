import { Table } from "@/components/Table/Table";
import { Provider } from "react-redux";
import store from "@/store";

export default function TablePage() {
  return (
    <Provider store={store}>
      <div className="table-page">
        <Table />
      </div>
    </Provider>
  );
}
