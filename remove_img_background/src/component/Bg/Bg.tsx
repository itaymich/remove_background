import "./Bg.css";
import close from "../../assets/close.png";
import Download from "../Download/Download";

function Bg() {
    return (
        <div>
            <div className="bg_cont">
                <div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
                <img src={close} className="close_top" />
                <div className="upload_im_btn">העלאת תמונה</div>

                <div className="content_div">
                    <div className="contant_left">
                        <div className="contant_middele">

                        </div>
                    </div>
                    <div className="contant_right">
                        <div className="contant_middele">
                            <Download is_comp_upper={true} title="תמונה חינם"
                                desc="תצוגה מקדימה של תמונה"
                                btn_text="הורד"
                                small_text="מגבלת איכות תמונה עד 0.25 מגה פיקסל" />

                            <Download title="Pro"
                                desc="תמונה מלאה"
                                btn_text="HD הורד"
                                small_text="איכות תמונה הטובה ביותר ! עד 25 מגה פיקסל"
                                is_comp_upper={false} />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Bg