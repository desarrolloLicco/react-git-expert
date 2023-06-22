import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifDrid = ({ category }) => {
  const { images, isLoanding } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoanding && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((imagen) => (
          <GifItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};

export default GifDrid;
