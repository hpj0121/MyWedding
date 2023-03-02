export default function ShareKakao() {

    const kakaoButton = () => {
      if (window.Kakao) {
        const kakao = window.Kakao
  
        if (!kakao.isInitialized()) {
          kakao.init('27ef07badbc86ea14ca63206cad9c5a4')
        }
  
        kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: '딸기 치즈 케익',
            description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
            imageUrl:
              'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          social: {
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845,
          },
          buttons: [
            {
              title: '웹으로 보기',
              link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
              },
            },
            {
              title: '앱으로 보기',
              link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
              },
            },
          ],
        });
      }
    }
  
    return (
      <div className="shareKakaoBtnWrapper">
        <button className="modalCloseBtn" onClick={kakaoButton}>카카오 공유하기</button>
      </div>
    )
  }