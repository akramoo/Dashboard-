import { updateProduct } from "@/app/lib/server/productAction";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {

  const { id } = params;
  const product = await fatchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />{" "}
          {/* Placeholder for product title */}
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />{" "}
          {/* Placeholder for product price */}
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder={product.stock}
          />{" "}
          {/* Placeholder for product stock */}
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color}
          />{" "}
          {/* Placeholder for product color */}
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size}
          />{" "}
          {/* Placeholder for product size */}
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>{" "}
          {/* Placeholder for product description */}
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
