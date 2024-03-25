import "./Download.css"
import newTag from "../../assets/new.png";
import checkSing from "../../assets/check.png";
type IDownload = {
    btn_text: string
    title: string
    desc: string
    small_text: string
    is_comp_upper: boolean
}
function Download(props: IDownload) {
    return (
        <>
            {!props.is_comp_upper && <hr className="hr_download_divider" />}
            <div className={"download_conteiner"}>
                <h2>{props.title}
                    {!props.is_comp_upper && <img className="download_conteiner_img" src={newTag} />}
                </h2>
                <div className="download_desc">{props.desc}</div>
                <button className={props.is_comp_upper ? "download_btn" : "download_btn_pro"}>{props.btn_text}</button>
                <p>{props.small_text}<img className="checkSingImg" src={checkSing} /></p>
            </div>
        </>
    )
}

export default Download