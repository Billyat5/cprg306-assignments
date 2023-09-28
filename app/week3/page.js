import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="m-4 bg-beige">
      <h1 className="text-4xl font-bold m-6 text-center font-serif">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
