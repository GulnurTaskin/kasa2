export default function Banner({ title, image }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className="banner-title">{title}</h2>
    </div>
  );
}