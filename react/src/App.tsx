import { Tab } from "@/components/Tab";
import { Counter } from "@/pages/CounterPage";
import { FormPage } from "@/pages/FormPage";
import { TodoList } from "@/components/TodoList";
import { WrongListPage } from "@/pages/WrongListPage";
import { ListPage } from "@/pages/ListPage";
import { HookBkPage } from "@/pages/HookBkPage";
import { HookPage } from "@/pages/HookPage";

function App() {
  return (
    <>
      <Tab
        tabs={[
          {
            title: "Counter",
            content: <Counter />,
          },
          {
            title: "Form",
            content: <FormPage />,
          },
          {
            title: "Todo List",
            content: <TodoList />,
          },
          {
            title: "List(Wrong)",
            content: <WrongListPage />,
          },
          {
            title: "List",
            content: <ListPage />,
          },
          {
            title: "Hooks(BK)",
            content: <HookBkPage />,
          },
          {
            title: "Hooks",
            content: <HookPage />,
          },
        ]}
      />
    </>
  );
}

export default App;
