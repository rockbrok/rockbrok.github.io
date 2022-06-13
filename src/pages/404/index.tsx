export default function NotFound() {
  return (
    <section className="flex flex-col text-white container p-7 mx-auto">
      <main>
          <div>
            <span>404</span>
            <span>not found</span>
          </div>
          <div className="bg-404-pic bg-no-repeat bg-contain bg-center w-96 h-72 flex" />
      </main>
    </section>
  );
}