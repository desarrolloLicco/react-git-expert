import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifDrid from "./components/GifDrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch Man"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => (
        <GifDrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
