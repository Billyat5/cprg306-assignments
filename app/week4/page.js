import NewItem from './new-item';

export default function Page() {
    return (
        <main className="m-4 bg-beige min-h-screen flex flex-col items-center justify-start">
        <h1 className="text-4xl font-bold m-6 text-center font-serif">
        Add Item
        </h1>
          <NewItem />
        </main>
      );
  };  