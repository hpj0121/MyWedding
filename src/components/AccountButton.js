import React from 'react'

const AccountButton = (props) => {
    return (
        <button className="accountButton">
            {props.info.to}측 계좌번호
        </button>
    )
}

export default AccountButton
