import nike1 from "../Images/kids-nike1.webp";
import nike2 from "../Images/kids-nike2.webp";
import nike3 from "../Images/kids-nike3.webp";
// import adidasLEGO1 from ;
// import adidasLEGO2 from "";
// import adidasLEGO3 from "";
import crocs1 from "../Images/kids-crocs1.jpeg";
import crocs2 from "../Images/kids-crocs2.jpeg";
import crocs3 from "../Images/kids-crocs3.jpeg";
// import aretto1 from "";
// import aretto2 from "";
// import aretto3 from "";
import adidasOriginals1 from "../Images/kids-versace1.jpg";
import adidasOriginals2 from "../Images/kids-versace2.jpg";
import adidasOriginals3 from "../Images/kids-versace3.jpg";
// import adidasMonofit1 from ;
// import adidasMonofit2 from ;
// import adidasMonofit3 from ;

const kidsProducts = [
  {
    name: "NIKE-Jordan 4 Retro",
    price: 2500,
    description:
      "The Jordan 4 Retro is inspired by the original AJ4.Made with real and synthetic leather and textile, soft foam cushioning",
    images: [nike1, nike2, nike3],
  },
  {
    name: "SKETCHERS",
    price: 4000,
    description:
      "Even the iconic shell toe gets a playful 3D makeover inspired by the dots on LEGO® bricks, and positive vibes to the classic.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230412/3fiX/6436c811907deb497adbf9de/-473Wx593H-469425385-black-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230412/3fiX/6436c811907deb497adbf9de/-473Wx593H-469425385-black-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230412/3fiX/6436c811907deb497adbf9de/-473Wx593H-469425385-black-MODEL5.jpg",
    ],
  },
  {
    name: "CROCS",
    price: 1800,
    description:
      "Easy to clean and quick to dry. Adjustable turbo heel straps for a snug, accommodating fit.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220404/u0mO/624b0966f997dd03e24675c4/-473Wx593H-469062333-yellow-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220404/PmSw/624b0f07f997dd03e246a7be/-473Wx593H-469062333-yellow-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220404/u0mO/624b0966f997dd03e24675c4/-473Wx593H-469062333-yellow-MODEL4.jpg",
    ],
  },
  {
    name: "PUMA",
    price: 2200,
    description:
      "Tisya loves her Aretto Leaps! She could walk in them comfortably for long hours. They're not only stylish, but also great for traveling.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230803/5QTh/64cb55e6eebac147fca3a855/-473Wx593H-466412941-black-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230803/kC4w/64cb55e6eebac147fca3a8d1/-473Wx593H-466412941-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230803/oonS/64cb55e6eebac147fca3a862/-473Wx593H-466412941-black-MODEL5.jpg",
    ],
  },
  {
    name: "SKETCHERS (Twinkle Sparks)",
    price: 2300,
    description:
      "Besides the collection of training and performance shoes, Skechers also has a charming range of yoga-inspired flip flops",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230412/TSlM/6436c9e8907deb497adc047a/-473Wx593H-469425315-multi-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230412/F2xJ/6436c611711cf97ba71dacbb/-473Wx593H-469425315-multi-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230412/fVqF/6436c0fd907deb497adbbdaa/-473Wx593H-469425315-multi-MODEL4.jpg",
    ],
  },
  {
    name: "NIKE",
    price: 1800,
    description:
      "Designed with a symmetrical fit – meaning no more left and right shoes – empowers your little ones to run as their imaginations",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230421/GRca/64428851907deb497af94f04/-473Wx593H-469366771-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230421/ANgq/64427876907deb497af87618/-473Wx593H-469366771-black-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230421/2RT5/6442759b907deb497af86634/-473Wx593H-469366771-black-MODEL4.jpg",
    ],
  },
  {
    name: "CAMPUS",
    price: 1200,
    description:
      "The shoes has full length air unit and adaptive cushioning technology which resists the shoes to D-shape. ",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230109/sv7m/63bc0e0ef997dd708ef4b17e/-1117Wx1400H-469294837-red-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230109/Y06I/63bc0d1eaeb269c651ce4037/-1117Wx1400H-469294837-red-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230109/1l7Y/63bc2dc0f997dd708ef5be00/-1117Wx1400H-469294837-red-MODEL2.jpg",
    ],
  },
  {
    name: "FEET WELL SHOES",
    price: 600,
    description:
      "Tisya loves her Aretto Leaps! She could walk in them comfortably for long hours. They're not only stylish, but also great for traveling.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20231105/oGT6/6547c514afa4cf41f57624ad/-1117Wx1400H-466776159-purple-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231105/4XXd/6547c514afa4cf41f57624ea/-1117Wx1400H-466776159-purple-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231105/heit/6547c514afa4cf41f57624eb/-1117Wx1400H-466776159-purple-MODEL5.jpg",
    ],
  },
  {
    name: "SKETCHERS",
    price: 2700,
    description:
      "Besides the collection of training and performance shoes, Skechers also has a charming range of yoga-inspired flip flops",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230412/qdbJ/6436ce86907deb497adc1ba8/-1117Wx1400H-469325297-black-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230412/odm4/6436c08f907deb497adbbaf0/-1117Wx1400H-469325297-black-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230412/qdbJ/6436ce86907deb497adc1ba8/-1117Wx1400H-469325297-black-MODEL4.jpg",
    ],
  },
  {
    name: "NIKE",
    price: 2500,
    description:
      "Stay up-to-date on the latest kids' shoes from Nike. Explore styles made for every activity and level of play.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20231027/whvV/653ba648afa4cf41f5641f3e/-1117Wx1400H-469544653-red-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231027/c8Ki/653b9fd0afa4cf41f563fe9a/-1117Wx1400H-469544653-red-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231027/whvV/653ba648afa4cf41f5641f3e/-1117Wx1400H-469544653-red-MODEL4.jpg",
    ],
  },
  {
    name: "ADDIDAS KIDS",
    price: 2300,
    description:
      "Adidas has always been at the forefront of sports technology, and its products are designed to help athletes perform at their best.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220520/1FJz/62870d2ff997dd03e2f8e8a4/-1117Wx1400H-410261777-ftwrwhite-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220524/CRyW/628bd682f997dd03e217fb47/-1117Wx1400H-410261777-ftwrwhite-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220519/fag6/628654f0aeb26921afaaaf5e/-1117Wx1400H-410261777-ftwrwhite-MODEL5.jpg",
    ],
  },
  {
    name: "DISNEY",
    price: 900,
    description:
      "On trend. for sure with Disney kids' accessories including Disney shoes for kids ... Disney Princess Shoes for Girls ",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230801/69ee/64c93080eebac147fc9e5daf/-1117Wx1400H-450155108-pink-MODEL3.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230801/Vwce/64c92db8a9b42d15c9835fc4/-1117Wx1400H-450155108-pink-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230801/69ee/64c93080eebac147fc9e5daf/-1117Wx1400H-450155108-pink-MODEL3.jpg",
    ],
  },
];

export default kidsProducts;
