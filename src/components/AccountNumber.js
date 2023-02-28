import { useState, useEffect } from "react";
import { brideInfo, groomInfo } from "./_constants";
import Portal from "./Portal";
import Modal from "./Modal";

const AccountNumber = () => {
    const [openModal, setOpenModal] = useState({ type:"", status: false })

    const onClickModal = (e) => {
        const { type } = e.currentTarget.dataset;
        setOpenModal((prev) => ({ ...prev, type: type, status: !openModal?.status }))
    }

    return (
        <>
        <Portal openModal={openModal?.status}>
            {
            openModal?.status && 
                <Modal
                    info={openModal?.type === "groom" ? groomInfo : brideInfo } 
                    onClickModal={onClickModal} >
                </Modal> 
            }
        </Portal>
            <div className="accountWrapper">
                <div className="componentTitle">신랑&신부에게 마음 전하기</div>
                <div className="accountButtonWrapper">
                    <button className="accountButton" data-type="groom" onClick={onClickModal}>
                        신랑측 계좌번호
                    </button>
                    <button className="accountButton" data-type="bride" onClick={onClickModal}>
                        신부측 계좌번호
                    </button>
                </div>
            </div>
        </>
    )
}

export default AccountNumber;