import React, { useState, useEffect } from 'react'

const Modal = (props) => {

  const [showToastMsg, setShowToastMsg] = useState(false);
    const onClickCopyAccNum = text => {
        const accNum = text.replace(/-/g, '');
        // 흐음 1.
        if (navigator.clipboard) {
          // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
          navigator.clipboard
            .writeText(accNum)
            .then(() => {
              setShowToastMsg(true);
            })
            .catch(() => {
              alert("복사를 다시 시도해주세요.");
            });
        } else {
          // 흐름 2.
          if (!document.queryCommandSupported("copy")) {
            return alert("복사하기가 지원되지 않는 브라우저입니다.");
          }
    
          // 흐름 3.
          const textarea = document.createElement("textarea");
          textarea.value = accNum;
          textarea.style.top = 0;
          textarea.style.left = 0;
          textarea.style.position = "fixed";
    
          // 흐름 4.
          document.body.appendChild(textarea);
          // focus() -> 사파리 브라우저 서포팅
          textarea.focus();
          // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
          textarea.select();
          // 흐름 5.
          document.execCommand("copy");
          // 흐름 6.
          document.body.removeChild(textarea);
          setShowToastMsg(true);
        }
      };

    useEffect(() => {
        const timeout = setTimeout(() => setShowToastMsg(false), 3000);
        return () => clearTimeout(timeout);
    }, [showToastMsg]);

    return (
        <div className="modalBack">
          {showToastMsg && <div id="snackbar" className="show">클립보드에 복사되었습니다.</div>}
            <div className="modalWrapper">
                <h3>{props?.info?.type}측 계좌번호</h3>
                <div className="accWrapper">
                    {props?.info?.acc?.map((el) => 
                    <div className="accInfo flexRow" key={el?.id}>
                        <div>
                            <div>{el?.bank} {el?.accNum}</div>
                            <div>{el?.name}</div>
                        </div>
                        <div className="copyAccWrapper flexColumn">
                            <button className="copyBtn" onClick={()=>onClickCopyAccNum(el?.accNum)}>복사</button>
                        </div>
                    </div>
                    )}
                </div>
                <button className="modalCloseBtn" onClick={props.onClickModal}>닫기</button>
            </div>
        </div>
    )
}

export default Modal
