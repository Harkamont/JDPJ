// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>To. 보현</h1>
      </header>

      <main className="blog-main">
        <div className="App">
            <video
              src="/video.mp4"
              autoPlay
              muted
              playsInline
              loop
              style={{ width: "100%", height: "auto" }}
            />
        </div>

        <article className="blog-content">
          <h2>내 친구 보현이에게</h2>
          <p>
            보현아, 이제 곧 생일이다.<br />
            이 편지를 쓰기까지 참 여러 번 망설였어.<br />
            내가 무슨 말을 해야 할까, 또 네가 이 편지를 어떻게 받아들일까, 많이 고민했거든.
          </p>

          <p>
            우리가 중학교 1학년 때 처음 만나서 벌써 20년 가까이 흘렀네.<br />
            그동안 자주 만나지는 못해도, 카톡으로 또 전화로 이런 저런 얘기를 나눌 수 있어 참 좋았어.
          </p>

          <p>
            요즘 많은 고민이 있잖아?<br />
            세상살이, 말처럼 쉽지 않지.<br />
            하루하루 열심히 살아가는 너를 생각하면 내가 뭐라 쉽게 위로할 수도 없고,<br />
            그저 기도하고 있었어.
          </p>

          <p>
            혹시 요즘은, 혼자 있는 시간이 길어질수록 문득 이런 생각이 들지는 않아?<br />
            “이게 다일까?”, “내 인생은 어디로 가고 있는 걸까?”
          </p>

          <p>
            나도 그런 생각 많이 했거든.<br />
            겉으로 보기엔 괜찮아 보여도, 속은 공허하고, 의미 없이 하루를 흘려보내는 것 같을 때.<br />
            그럴 때마다 나는 내가 믿는 예수님을 떠올렸어.
          </p>

          <p>
            사실 15년 전쯤, 내가 예수님 이야기를 꺼냈을 때<br />
            네가 단호하게 “다시는 이런 말 하지 마”라고 했던 거 기억해.<br />
            그땐 나도 젊고, 내가 전하고 싶은 말만 앞섰던 것 같아.<br />
            지금 생각하면 미안하고, 또 고맙기도 해.
          </p>

          <p>
            그 후로 많은 일들이 있었잖아.<br />
            민우의 일도 있었고, <br />
            나도 가정을 꾸리게 되었고...<br />
            그동안 우정으로 함께해서 너무 고마워
          </p>

          <p>
            이번엔 무슨 말을 꼭 들려주고 싶다기보다,<br />
            그냥 내 이야기를 네게 들려주고 싶었어.
          </p>

          <p>
            내가 만난 예수님은 사람을 바꾸려고만 하는 분이 아니라,<br />
            그냥 있는 그대로 받아주시고 함께 걸어가주시는 분이었어.<br />
            누구보다 나를 잘 아시고, 때로는 나보다 더 나를 이해해주시는 분이었지.
          </p>

          <p>
            보현아,<br />
            너무 무거운 짐을 혼자 지고 있다면 잠깐은 내려놔도 괜찮다고,<br />
            그 짐을 함께 지고 싶어 하시는 분이 계시다는 걸<br />
            그냥 한 번… 기억해줬으면 좋겠어.
          </p>

          <p>
            지금 이 편지가 또 부담스럽거나 불편하게 느껴진다면 미안해.<br />
            하지만 언젠가 네 마음에 “누군가 끝까지 나를 믿어주는 사람이 필요하다”는 생각이 들면<br />
            그때는 꼭 나에게 연락 줘.
          </p>

          <p>
            나는 여전히 너의 친구고, 너를 위해 기도하고 있는 사람이야.
          </p>

          <p>
            그리고 만약 지금은 나한테 직접 이런 이야기를 꺼내기 어려운 상황이라면,<br />
            편지 아래에 있는 작은 친구(챗봇)에게 먼저 말을 걸어봐도 좋아.<br />
            내가 쓴 이 편지의 내용을 바탕으로,<br />
            너의 궁금함에 조심스럽게, 따뜻하게 대답해줄 거야.
          </p>

          <p>
            그럼 언제든, 내가 여기 있다는 것만 기억해줘.
          </p>

          <p>
            너를 여전히 소중히 여기는 친구,<br />
            재환이가
          </p>
        </article>

       <div style={{ textAlign: 'center', margin: '100px 0' }}>
        <button
          onClick={() =>
            window.open(
              'https://jeondo-chatbot-morietgtxqbzmomrthqqnq.streamlit.app/',
              '_blank'
            )
          }
          style={{
            padding: '20px 48px',
            fontSize: '30px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
          }}
        >
          너를 위한 작은 기독교 도우미 만나러 가기
        </button>
      </div>

        <div className="image-frame">
          <img src="/mainimage.jpeg" alt="전도편지" className="framed-image" />
        </div>


      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          src="https://naver.me/xcnB1xYI"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
          loading="lazy"
          title="증가교회 위치"
        >
        </iframe>
      </div>
      <footer className="blog-footer">
        <a href="https://jgech.org" target="_blank" rel="noopener noreferrer">
          <img src="/image2.png" alt="배너" className="footer-banner" />
        </a>
      </footer>



      </main>
    </div>



  
  );
}

export default App;
