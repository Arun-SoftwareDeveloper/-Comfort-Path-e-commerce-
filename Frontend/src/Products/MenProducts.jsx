import React from "react";
import nikejordan1 from "../Images/nike-airjordan.webp";
import nikejordan2 from "../Images/nike-airjordan2.jpg";
import nikejordan3 from "../Images/nike-airjodan3.jpg";
import converse1 from "../Images/converse1.webp";
import converse2 from "../Images/converse2.webp";
import converse3 from "../Images/converse3.webp";
import lv1 from "../Images/LV1.webp";
import lv2 from "../Images/LV2.webp";
import lv3 from "../Images/LV3.webp";
import moto1 from "../Images/puma-motosport1.webp";
import moto2 from "../Images/puma-motosport2.jpeg";
import moto3 from "../Images/puma-motosport3.webp";
import colehaan1 from "../Images/colehaan1.jpg";
import colehaan2 from "../Images/colehaan2.jpg";
import colehaan3 from "../Images/colehaan3.jpg";
import nikerevol1 from "../Images/nikerevol1.webp";
import nikerevol2 from "../Images/nikerevol2.webp";
import nikerevol3 from "../Images/nikerevol3.webp";
import jj1 from "../Images/jj1.webp";
import jj2 from "../Images/jj2.webp";
import jj3 from "../Images/jj3.webp";
import airforce1 from "../Images/airforce1.webp";
import airforce2 from "../Images/airforce2.png";
import airforce3 from "../Images/airforce3.webp";

const menProducts = [
  {
    name: "ONITSUKA TIGER",
    price: 9000,
    description:
      "The newly-surfaced retro primarily boasts a “colorless” arrangement throughout its upper and sole unit.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20210408/P4z3/606e0355f997dd7b64a6ddcc/-473Wx593H-410287120-100-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20210408/i2HY/606e00f5f997dd7b64a6d2ef/-473Wx593H-410287120-100-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20210408/tyg2/606dff1faeb269a9e386e477/-473Wx593H-410287120-100-MODEL8.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "PUMA-MOTOSPORT",
    price: 2300,
    description:
      "Supreme performance reaches the peak of fan style in our BMW M Motorsports Drift Cat 8 shoe(specially for the motosport-bikers).",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/h68/h2e/15440080240670/-473Wx593H-460569897-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220322/lpZc/6239c426aeb26921afea0016/-473Wx593H-460569897-black-MODEL8.jpg",
      "https://assets.ajio.com/medias/sys_master/root/h74/h91/15440078667806/-1117Wx1400H-460569897-black-MODEL4.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "NIKE-AIRMAX",
    price: 5900,

    description:
      "A color-soaked classic from high top to toe, the Chuck Taylor All Star sneaker stays forever fresh to give an Aesthetic Look for your foots.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20231103/G8Bx/65452217afa4cf41f5736f22/-473Wx593H-469551555-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231103/95ZI/654505d5afa4cf41f5727f2c/-473Wx593H-469551555-black-MODEL8.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231103/G8Bx/65452217afa4cf41f5736f22/-473Wx593H-469551555-black-MODEL.jpg",
      ,
    ],
    isInWishlist: false,
  },
  {
    name: "BUGATTI",
    price: 1400,
    description:
      "From classic designs to modern interpretations, our collection offers multiple options to suit your style.",
    isInWishlist: false,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230523/yn8A/646becb5d55b7d0c63cf6441/-473Wx593H-466179354-brown-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230523/gwTQ/646becb5d55b7d0c63cf6409/-1117Wx1400H-466179354-brown-MODEL7.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230523/Fnhn/646becb5d55b7d0c63cf63fd/-1117Wx1400H-466179354-brown-MODEL5.jpg",
    ],
  },
  {
    name: "VEJA Campo Lace-Up Sneakers",
    price: 8700,
    description:
      "VEJA uses Brazilian and Peruvian organic cotton for the canvas and laces, Amazonian rubber for the soles",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220301/IoE1/621d24a3f997dd03e2f57d29/-473Wx593H-469096361-blackwhite-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220301/fZBW/621d28f4f997dd03e2f59091/-1117Wx1400H-469096361-blackwhite-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220301/Mn3q/621d2452f997dd03e2f57ba1/-1117Wx1400H-469096361-blackwhite-MODEL3.jpg",
    ],
  },
  {
    name: "PUMA Ferrari Race X-",
    price: 6500,
    description:
      "The perfect balance of traction and flexibility combine. The hybrid outsoles part rubber, are especially good.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20210413/ptmx/6074a213aeb269a9e38d5396/-473Wx593H-460729626-white-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20210413/BlI5/6074a525aeb269a9e38d61c7/-1117Wx1400H-460729626-white-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20210413/6CNW/6074a0e1aeb269a9e38d509f/-1117Wx1400H-460729626-white-MODEL2.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "ADIDAS-ORIGINALS",
    price: 2800,
    description:
      "Adidas Originals high tops channeling or toning it down with a casual shoe, there's a perfect look for you.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20221028/4qoa/635beef0aeb269659c631ac8/-473Wx593H-469206637-blue-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221028/KPiO/635c0f58aeb269659c64194d/-1117Wx1400H-469206637-blue-MODEL3.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221028/OicW/635bf41df997ddfdbd48c5a2/-1117Wx1400H-469206637-blue-MODEL5.jpg",
    ],
  },
  {
    name: "NIKE-AIRMAX",
    price: 3000,
    description:
      "Here's to new beginnings between you and the pavement. Lace up the 100% recycled laces.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20231030/VSLm/653f9817afa4cf41f56882c9/-473Wx593H-469551556-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231030/OC1K/653f9540afa4cf41f568705c/-1117Wx1400H-469551556-black-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231030/NpWH/653f9961afa4cf41f5688aa4/-473Wx593H-469551556-black-MODEL5.jpg",
    ],
  },
  {
    name: "NIKE-AIRFPORCE",
    price: 7000,
    description:
      "Originally designed for performance hoops, the Nike Air cushioning adds lightweight, all-day comfort.",
    images: [airforce1, airforce2, airforce3],
    isInWishlist: false,
  },
  {
    name: "PUMA RUNNING-SHOES",
    price: 890,
    description:
      "PUMA offers performance and sport-inspired lifestyle products in categories such as Running and Training. ",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20221215/N3Dw/639b38e8f997ddfdbdd6c6f2/-1117Wx1400H-469043678-gray-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221216/zcJ7/639b7669f997ddfdbdd81a8e/-473Wx593H-469043678-gray-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221216/zcJ7/639b7669f997ddfdbdd81a8e/-473Wx593H-469043678-gray-MODEL6.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "BUCIK",
    price: 900,
    description:
      "Crafted with meticulous attention to detail, these shoes effortlessly blend classic aesthetics with innovative features",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230908/Bovk/64fa26edafa4cf41f5d135a5/-1117Wx1400H-466545438-brown-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230908/0lCo/64fa2702afa4cf41f5d13681/-1117Wx1400H-466545438-brown-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230908/RuJK/64fa2702afa4cf41f5d1365b/-473Wx593H-466545438-brown-MODEL7.jpg",
    ],
    isInWishlist: false,
  },
  {
    name: "ARBUNORE",
    price: 730,
    description:
      "bunore Casual Shoes for Men is known for its blend of style and comfort, offering a diverse range of casual shoes.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20210701/yDIT/60dd6f5ef997ddb31216ec89/-473Wx593H-460897549-grey-MODEL.jpg",
      airforce2,
      airforce3,
    ],
    isInWishlist: false,
  },
];

export default menProducts;
