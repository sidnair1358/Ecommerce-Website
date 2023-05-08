import React from "react";

export default function Menswear({ data: products }) {
  console.log(products);
  return (
    <div className="bg-stone-100 w-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl text-center font-bold tracking-tight text-stone-500">
          Men
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map(({ node: { id, title, featuredImage, variants } }) => (
            <div key={id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={featuredImage.url}
                  alt="Product image"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {variants.edges[0].price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http:localhost:3000/api/menswear`);
  const data = await res.json();
  return { props: { data } };
}
