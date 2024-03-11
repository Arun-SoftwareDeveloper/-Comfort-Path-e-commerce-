import nikeairmax1 from "../Images/nike-airmax1.webp";
import nikeairmax2 from "../Images/nike-airmax2.webp";
import nikeairmax3 from "../Images/nike-airmax3.webp";
import colehaanWomen1 from "../Images/colehaan-women1.jpg";
import colehaanWomen2 from "../Images/colehaan-women2.jpg";
import colehaanWomen3 from "../Images/colehaan-women3.jpg";
import gucciWomen1 from "../Images/gucci-women1.jpg";
import gucciWomen2 from "../Images/gucci-women2.jpg";
import gucciWomen3 from "../Images/gucci-women3.jpg";
import versaceWomen1 from "../Images/versace-women1.jpg";
import versaceWomen2 from "../Images/versace-women2.jpg";
import versaceWomen3 from "../Images/versace-women3.jpg";
import jcWomen1 from "../Images/jc-women1.webp";
import jcWomen2 from "../Images/jc-women2.webp";
import jcWomen3 from "../Images/jc-women3.webp";
import dknyWomen1 from "../Images/dkny-women1.jpg";
import dknyWomen2 from "../Images/dkny-women2.jpg";
import dknyWomen3 from "../Images/dkny-women3.jpg";

const womenProducts = [
  {
    name: "NIKE-AIRMAX",
    description:
      "The Air Max SYSTM brings back everything you love about your favorite '80s vibes (without the parachute trousers).",
    price: 6200,
    images: [nikeairmax1, nikeairmax2, nikeairmax3],
    isInWishlist: false,
  },
  {
    name: "PUMA Amare Running Shoes",
    description:
      "Sport style categories from PUMA include Sneakers, Slip-ons and Loungewear. It is innovative and fast designs.",
    price: 2100,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220801/SPlW/62e7f206f997dd03e21316b6/-473Wx593H-469205052-pink-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220801/lHzS/62e7fc52f997dd03e213506d/-473Wx593H-469205052-pink-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220801/bH9d/62e7ff20f997dd03e2136082/-473Wx593H-469205052-pink-MODEL5.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "GUCCI WOMEN ACE SNEAKERS",
    description:
      "Louis Vuitton designs shoes for men to fit every occasion elegant derbies.",
    price: 3200,
    images: [gucciWomen1, gucciWomen2, gucciWomen3],
    isInWishlist: false,
  },
  {
    name: "VERSACE CHAIN-REACTION",
    description:
      "A chunkier construction defines the shape, while a metal 'ACE' tag shines atop the lace-up closure.",
    price: 12000,
    images: [versaceWomen1, versaceWomen2, versaceWomen3],
    isInWishlist: false,
  },
  {
    name: "JUST CAVALLI",
    price: 2300,
    description:
      "Just Cavalli stilettos are a tribute to haute couture fashion. With the snake print that adds a dose of drama to your look.",
    images: [jcWomen1, jcWomen2, jcWomen3],
    isInWishlist: false,
  },
  {
    name: "REEBOK RUNINNG SHOES",
    price: 1800,
    description:
      "The brand embodies and champions an attitude that emanates from the field, but goes beyond just sport.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220316/uoKV/6231eb1ef997dd03e218d847/-1117Wx1400H-460931301-navy-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220316/aEID/6231e56baeb26921afde3353/-1117Wx1400H-460931301-navy-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220316/DqeD/6231ede3aeb26921afde4b4e/-473Wx593H-460931301-navy-MODEL8.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "DKNY-BOOTS",
    price: 18000,
    description:
      "Shop our collection of women's boots and booties. Find tall boots, ankle booties, and more with the iconic DKNY style.",
    images: [dknyWomen1, dknyWomen2, dknyWomen3],
    isInWishlist: false,
  },
  {
    name: "PUMA RUNNING SHOES",
    description:
      "The Air Max SYSTM brings back everything you love about your favorite '80s vibes (without the parachute trousers).",
    price: 500,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/h43/hc6/14289224073246/-1117Wx1400H-460484178-multi-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230612/6F6I/64869f6d42f9e729d736fa28/-473Wx593H-460484178-multi-MODEL9.jpg",
      "https://assets.ajio.com/medias/sys_master/root/h43/hc6/14289224073246/-1117Wx1400H-460484178-multi-MODEL.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "ARBUNORE",
    price: 830,
    description:
      "Our collection showcases an array of designs, from sleek sneakers ensuring there's a perfect pair for every occasion.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220927/TIOv/63332434f997dd1f8d207156/-1117Wx1400H-469049257-beige-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220927/TZ26/63332d87aeb269dbb3aaf137/-1117Wx1400H-469049257-beige-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220927/XirR/63332ab5aeb269dbb3aae3ff/-473Wx593H-469049257-beige-MODEL8.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "NEW BALANCE",
    price: 2300,
    description:
      "The brand embodies and champions an attitude that emanates from the field, but goes beyond just sport.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230215/fH5h/63ecf318f997dde6f4aa4e22/-1117Wx1400H-469224797-pink-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230215/9wz8/63ed01a8f997dde6f4aaaa1c/-1117Wx1400H-469224797-pink-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230215/u9WO/63ecfe3ff997dde6f4aa93b6/-473Wx593H-469224797-pink-MODEL5.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "NIKE",
    price: 2400,
    description:
      "Powerful, strong, durable – every athlete. With innovative sportswear designed to bring optimum comfort and support.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230928/ba7g/6515a055ddf77915190cfed4/-1117Wx1400H-469551403-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230928/NJ8r/6515923dddf77915190caceb/-1117Wx1400H-469551403-black-MODEL8.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230928/1HOv/6515992fafa4cf41f515810c/-1117Wx1400H-469551403-black-MODEL7.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "CAMPUS",
    description:
      "A chunkier construction defines the shape, while a metal 'ACE' tag shines atop the lace-up closure.",
    price: 700,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230621/ijhz/64924b38d55b7d0c6388ade7/-1117Wx1400H-463848215-grey-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230621/vJuF/64924b38d55b7d0c6388adfc/-473Wx593H-463848215-grey-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230621/lcC5/64924b38d55b7d0c6388ae12/-1117Wx1400H-463848215-grey-MODEL5.jpg",
    ],
    isInWishlist: false,
  },
];

export default womenProducts;
