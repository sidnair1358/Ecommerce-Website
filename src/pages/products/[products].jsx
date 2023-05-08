import Link from "next/link";

export default function Products({ data: products, params }) {
  return (
    <div className="bg-stone-100 w-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl text-center font-bold tracking-tight text-stone-500">
          {params.products.toUpperCase()}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map(({ node: { id, title, featuredImage, variants } }) => {
            const price = parseFloat(
              variants.edges[0].node.price.amount
            ).toFixed(2);
            return (
              <Link key={id} href={`/product/${id.slice(-13)}`}>
                <div key={id} className="group relative">
                  <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={featuredImage.url}
                      alt="Product image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <p className="text-lg font-medium text-gray-600">{title}</p>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <p className="text-lg font-medium text-gray-600">
                      {`£${price}`}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http:localhost:3000/api/${params.products}`);
  const data = await res.json();
  return { props: { data, params } };
}
