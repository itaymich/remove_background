import "./Bg.css";
import close from "../../assets/close.png";
import Download from "../Download/Download";
import { useState } from "react";
import Display_img from "../Display_img/Display_img";

function Bg() {
    const [selected_tab, setSelected_tab] = useState(true);
    const [show_eula, setShow_eula] = useState(false)
    const tab_selected_onClick = () => {
        setSelected_tab(!selected_tab)
    }

    const popupOn_eula = () => {
        setShow_eula(!show_eula);


    }
    return (
        <div>
            <div className="bg_cont">
                <div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
                <img src={close} className="close_top" />
                <div className="upload_im_btn">העלאת תמונה</div>

                <div className="content_div">
                    <div className="contant_left">
                        <div className="bg_btn_cont">
                            <span className={"bg_remove_btn " + ((selected_tab == true) && "border_bottom_selected")} onClick={tab_selected_onClick}>הוסר רקע</span>
                            <span className={"bg_orginal_img_btn " + ((selected_tab == false) && "border_bottom_selected")} onClick={tab_selected_onClick}>מקורי</span>
                        </div>

                        <div className="contant_middele_left">

                            {selected_tab ? <Display_img comp_type="orginal_img_bg"></Display_img> : <Display_img comp_type="remove_img_bg"></Display_img>}

                        </div>
                        <div className="footer_left_content">
                            <span className="footer_text">.על ידי העלאת תמונה אתה מסכים לתקנון התנאים והגבלות</span>
                            <button onClick={popupOn_eula} className="footer_terms_btn">תקנון</button>
                        </div>
                    </div>
                    <div className="contant_right">
                        <div className="contant_middele_right">
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

            {
                show_eula &&
                <>
                    <div id="overlay" className="overlay"></div>
                    <div className="popup_eula">
                        <h2>Terms of Service</h2>
                        <p>

                            Welcome to our platform. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.
                        </p><h3>Basic Terms</h3>

                        <p>
                            You must be at least 13 years old to use our services.
                            You are responsible for any activity that occurs under your username.
                            You may not use our services for any illegal or unauthorized purpose.
                            You must not, in the use of our services, violate any laws in your jurisdiction.
                            Intellectual Property</p>
                        <p>
                            Our platform and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of our platform.
                            You may not use our platform's logo, trademarks, or other proprietary graphics without our prior written consent.
                            </p>
                            <h3>User Contributions</h3>
                        <p>
                            You may contribute content, such as text, images, or other materials.
                            By contributing content, you grant us the right to use, modify, adapt, reproduce, distribute, and display such content.
                            You are solely responsible for any contributions you make.
                            </p>
                            <h3>Termination</h3>
                        <p>
                            We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.</p>
                        <h3>Changes</h3>

                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these terms at any time.</p>

                        <h3>Contact Us</h3>

                        <p>
                            If you have any questions about these terms, please contact us.

                            Please note that this is a basic example and should be reviewed and modified to fit the specific needs and legal requirements of your platform. It's always a good idea to seek legal advice to ensure that your terms of service are comprehensive and legally sound.</p>
                        <div className="actions">
                            <button onClick={popupOn_eula} id="accept-btn">Accept</button>
                            <button onClick={popupOn_eula} id="decline-btn">Decline</button>
                        </div>
                    </div>
                
        </>
            }
           

        </div >
    );
}

export default Bg