import React from 'react'

const AccountButton = (props) => {
    return (
        <button className="accountButton" onClick={props.onClickModal}>
            {props.info.to}측 계좌번호
        </button>
    )
}

export default AccountButton
