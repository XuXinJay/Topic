import React from "react";
import './Accordion.css'

function Accordion() {

    return (
        <div className="test1">
            <h1>
                使用者指南 
            </h1>
            <div className="row">
                <div className="col">
                    <h2>
                        常見問題 <b>Q&A</b>
                    </h2>
                    <div className="tabs">
                        <div className="tab">
                            <input type="radio" id="rd1" name="rd" />
                            <label className="tab-label" htmlFor="rd1">
                                Q：完整個人頁面？
                            </label>
                            <div className="tab-content">
                                A：封面照片設定個人照，其他照片可放出遊戶外、和興趣相關的，記得設定喜歡的活動及聚會類型。
                            </div>
                        </div>
                        <div className="tab">
                            <input type="radio" id="rd2" name="rd" />
                            <label className="tab-label" htmlFor="rd2">
                                Q：更換生日、性別、信箱或手機號碼
                            </label>
                            <div className="tab-content">
                                A：信箱、生日、性別、手機號碼可自行至編輯個人資料修改唷！
                            </div>                            
                        </div>
                        <div className="tab">
                            <input type="radio" id="rd3" name="rd" />
                            <label className="tab-label" htmlFor="rd3">
                                Q：自我介紹怎麼打？
                            </label>
                            <div className="tab-content">
                                A：如果你有填入資訊外的特質或想要加以描述都可以在這裡呈現，在自我介紹加以描述參與的聚會類型、興趣喜好、本身個性與特質，是最容易交到朋友的。
                            </div>
                        </div>
                        <div className="tab">
                            <input type="radio" id="rd4" name="rd" />
                            <label className="tab-label" htmlFor="rd4">
                                Q：通知在哪？
                            </label>
                            <div className="tab-content">
                                A：可至「聚會首頁」的左上方進入喔！
                            </div>
                        </div>
                        <div className="tab">
                            <input type="radio" id="rd5" name="rd" />
                            <label className="tab-label" htmlFor="rd5">
                                Q：官方活動哪裡看？
                            </label>
                            <div className="tab-content">
                                A：可以至通知頁上方的大圖示查看最新活動資訊。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
