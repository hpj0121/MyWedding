import AccountButton from "./AccountButton";

const AccountNumber = () => {

    const groomInfo ={ to:"신랑",
    acc: { type: "본인", accNum: "111-111-111111" },
    acc: { type: "혼주 계좌 (아버지)", accNum: "111-111-111111" }
    }

    const brideInfo ={ to:"신부",
    acc: { type: "본인", accNum: "111-111-111111" },
    acc: { type: "혼주 계좌 (아버지)", accNum: "111-111-111111" },
    acc: { type: "혼주 계좌 (어머니)", accNum: "111-111-111111" }
    }

    return (
        <div className="accountWrapper">
            <div className="componentTitle">신랑&신부에게 마음 전하기</div>
            <div className="accountButtonWrapper">
                <AccountButton info={groomInfo}></AccountButton>
                <AccountButton info={brideInfo}></AccountButton>
            </div>
        </div>
    )
}

export default AccountNumber;