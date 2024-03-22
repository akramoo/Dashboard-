import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        TechVision X1 {/* Displaying the product name */}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" />
          <label>Title</label>
          <input type="text" name="title" placeholder="TechVision X1" />{" "}
          {/* Placeholder for product title */}
          <label>Price</label>
          <input type="number" name="price" placeholder="Enter price" />{" "}
          {/* Placeholder for product price */}
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="Enter stock quantity"
          />{" "}
          {/* Placeholder for product stock */}
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="Enter color or leave blank"
          />{" "}
          {/* Placeholder for product color */}
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder="Enter size or leave blank"
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
            placeholder="Enter product description"
          ></textarea>{" "}
          {/* Placeholder for product description */}
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
