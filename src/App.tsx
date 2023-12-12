import img1 from "./imgs/img1.png"
import img2 from "./imgs/img2.png"
import img3 from "./imgs/img3.png"
import img4 from "./imgs/img4.png"
import img5 from "./imgs/img5.png"
import img6 from "./imgs/img6.png"
import img7 from "./imgs/img7.png"
import img8 from "./imgs/img8.png"
import img9 from "./imgs/img9.png"
import img10 from "./imgs/img10.png"
import img11 from "./imgs/img11.png"
import img12 from "./imgs/img12.png"
import img13 from "./imgs/img13.png"
import { ImageSlider } from "./ImageSlider"
const IMAGES = [
  { url: img1, alt: "Car One" },
  { url: img2, alt: "Car Two" },
  { url: img3, alt: "Car Three" },
  { url: img4, alt: "Car Four" },
  { url: img5, alt: "Car Five" },
    { url: img6, alt: "Car One" },
    { url: img7, alt: "Car Two" },
    { url: img8, alt: "Car Three" },
    { url: img9, alt: "Car Four" },
    { url: img10, alt: "Car Five" },
    { url: img11, alt: "Car Two" },
    { url: img12, alt: "Car Three" },
    { url: img13, alt: "Car Four" },
  
  
]



export default function App() {
  return (
  <div style={{
    maxWidth:"1200px", 
    width:"100%", 
    height:"500px", 
    aspectRatio:" 10 / 6 ",
    margin:"0 auto",
  }}>
   <ImageSlider images={IMAGES}/>
   <h1>AI pictures</h1>
   {/* <a href="/" style={{fontSize: "4rem"}}>Link</a> */}
  </div>
  )
}
