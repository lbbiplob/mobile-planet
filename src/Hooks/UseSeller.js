import { useEffect, useState } from "react";

const UseSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`https://mobile-planet-bd-server.vercel.app/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSeller(data.isSeller);
        });
    }
  }, [email]);
  return [isSeller];
};

export default UseSeller;
