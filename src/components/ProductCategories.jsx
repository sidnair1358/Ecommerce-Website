export default function ProductCategories({ productCategories }) {
  const categories = productCategories.collections.edges.map((category) => ({
    id: category.node.id,
    image: category.node.image.url,
    title: category.node.title,
  }));
  return (
    <div className="bg-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-24 lg:max-w-none lg:py-20">
          <h2 className=" text-center text-2xl font-bold text-gray-500">
            Collections
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {categories.map(({ id, image, title }) => (
              <div key={id} className="group relative mb-6">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={image}
                    alt={`Image of ${title} category`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {/* TODO: Add links to categories */}
                <h3 className="mt-2 text-center text-lg text-gray-500">
                  {/* <a href={callout.href}> */}
                  <span className="absolute inset-0" />
                  {title}
                  {/* </a> */}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
