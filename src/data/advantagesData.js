import truck from "../images/truck.svg";
import shopBag from "../images/shop_bag.svg";
import support from "../images/support.svg";
import returnImg from "../images/return.svg";
import ellipse2 from "../images/ellipse2.svg";
import dotted from "../images/dotted2.png";
import previewImg from "../images/why-choose-us-img1.png";

const ADVANTAGES_ITEMS = [
    {
      iconSrc: truck,
      ellipseIcon: ellipse2,
      title: "Fast & Free Shipping",
      text: `Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
      vivethe as it was for us to know what was to be done. the`,
      id_: "1",
    },
    {
      iconSrc: shopBag,
      ellipseIcon: ellipse2,
      title: "Easy to Shop",
      text: `Donec mattis porta eros, aliquet finibus risus interdum at.
      Nulla vivethe as it was`,
      id_: "2",
    },
    {
      iconSrc: support,
      ellipseIcon: ellipse2,
      title: "24/7 Support",
      text: `Donec mattis porta eros, aliquet finibus risus interdum at.
      Nulla vivethe as it was`,
      id_: "3",
    },
    {
      iconSrc: returnImg,
      ellipseIcon: ellipse2,
      title: "Hassle Free Returns",
      text: `Donec mattis porta eros, aliquet finibus risus interdum at.
      Nulla vivethe as it was`,
      id_: "4",
    },
  ];

const ADVANTAGES_IMG = [
    {
        imgSrc: dotted,
        imgHeight: "176px",
    },
    {
        imgSrc: previewImg,
        imgHeight: "630px",
    },
];

export { ADVANTAGES_ITEMS, ADVANTAGES_IMG };