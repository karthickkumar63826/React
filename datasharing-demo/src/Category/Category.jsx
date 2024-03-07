export default function Category() {
  let [products, setProducts] = useState([]);
  const getItem = async () => {
    try{
        let response = await fetch("https://dummyjson.com/products");
        let data = response.data();
        console.log(data.products);
    }
    catch(error){
        console.group(error);
    }
  };

  return <></>;
}
