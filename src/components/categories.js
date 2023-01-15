import { categories } from "./data";
import CategoryItem from "./CategoryItem";
import "./Categories.scss";

export default function Categories() {
  return (
    <div className="homepage-categories">
      {
        
        categories.map((item) => {
          return <CategoryItem key={item.id} item={item} />;
        })
      }
      {/* <CategoryItem item={categories[0]}/>
      <CategoryItem item={categories[1]}/>
      <CategoryItem item={categories[2]}/>      to put category Items individually*/}   

    </div>
  );
}
