import React from 'react'
import "./Display_img.css"
import img_bg from "../../assets/img.png";
interface Display_imgProps {
    comp_type: string
}
const Display_img = ({ comp_type }: Display_imgProps) => {
    //   comp_type= orginal_img_bg || remove_img_bg  

    return (
        <div>
            {
                (comp_type == "orginal_img_bg")&&
                <div className='disp_img_top_cont'>
            <span className='top_comment_text'>.אל תשכח להוריד את הקבצים שלך, הם ימחקו אוטומטית כאשר תצא מהדף</span>
            <button className='color_btn'>צבע רקע</button>
            <input className='colorInput' type="color" name="colorInput" id="colorInput" />
        </div>
        
            }


<div>
    <img className='img_bg' src={img_bg} />
</div>
        </div >
    )
}

export default Display_img