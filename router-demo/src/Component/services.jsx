export default function Services({ services }) {
  return (
    <>
      <ul>
        {services.map((service) => (
          <li>{service}</li>
        ))}
      </ul>
    </>
  );
}
