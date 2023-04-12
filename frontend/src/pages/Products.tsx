import { products } from "../data/products"

const Products = () => {
  return (
    /* bg-green-500 */
    <div className="w-full min-h-screen ">
      <div>img (loterria y demas absolute entre este img y conteiner)</div>
      <div>conteiner de todo lo de abajo</div>
      <div className="bg-red-500 w-full px-4 flex items-center gap-4">
        <div className="text-xl">Lotteria - 124 Sandiago</div>
        <div>Burger - Chicken - Cake</div>
        <div>35 dishes</div>
        <div>$ 8.00</div>
        <div>$ 50.00</div>
      </div>
      {/* bg-red-500 */}
      <div className="px-4 ">
        <div className="flex justify-between">
          <div>Popular v</div>
          <div className="text-[#ccc]">8 oculus</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 w-full  gap-2 ">
          {products.map((product) => {
            return (
              /* border-2 border-solid border-[#ec48c9] */
              <div className="">
                <img src={product.imgSrc} alt="" />
                <div className="font-semibold">OCULUS QUEST 2 </div>
                <div>$ 12.52</div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-between">
          <div>Appertizer</div>
          <div className="text-[#ccc]">12 dishes</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {products.map((product) => {
            return (
              /* bg-red-500  border-2 border-solid border-[#ec48c9]*/
              <div className="flex w-full  max-h-[250px]">
                <div className="h-full min-w-[246px] max-w-[246px]">
                  <img
                    src={product.imgSrc}
                    alt=""
                    className="bg-center max-h-full bg-cover"
                  />
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div className="font-semibold">OCULUS QUEST 2 </div>
                  <div className="font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusantium unde iste magnam sapiente, natus aspernatur
                  </div>
                  <div>$ 12.52</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Products
