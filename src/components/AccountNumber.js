import { useState } from "react";
import { brideInfo, groomInfo } from "./_constants";
import useScrollFadeIn from "hooks/useScrollFadeIn";
import Portal from "./Portal";
import Modal from "./Modal";
import f5 from "../asset/image/icons/f5.png"
import f6 from "../asset/image/icons/f6.png"

const AccountNumber = () => {
    const animatedItem = useScrollFadeIn();
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
            <div className="accountWrapper" {...animatedItem}>
                <div className="componentTitle">
                    <img src={f5} alt="flower icon"/>
                    마음 전하실 곳
                    <img src={f6} alt="flower icon"/>
                </div>
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