export type Product = {
  id: number;
  price: string;
  desc: string;
  createdTime: string;
};

export default function ProductCard({ id, price, desc, createdTime }: Product) {
  return (
    <div
      style={{
        display: "flex",
        border: "solid green 10px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <p style={{ display: "flex" }}>
        id = {id}
        <br />
        price = {price}
        <br />
        desc = {desc}
        <br />
        createdTime = {createdTime}
      </p>
    </div>
  );
}
