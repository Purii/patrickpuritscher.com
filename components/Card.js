const borderRadius = "10px";
const letterSpacing = (pointSize, tracking) => (pointSize * tracking) / 1000;

export default () => (
  <div className="card">
    <div className="header">
      <div className="headerImage" />
      <h1 className="headerTitle">Patrick Puritscher</h1>
    </div>
    <div className="body">
      <p className="bodyText">
        <i>Always thirsty for knowledge.</i>
        <br />
        Developing software for people to make their lives easier instead of
        confusing them with bad UX.
      </p>
      <p className="bodyText bodyText__small">Stuttgart, Germany</p>
    </div>
    <div className="footer">
      <a className="button" href="https://github.com/Purii">
        GitHub
      </a>
      <a
        className="button button__twitter"
        href="https://twitter.com/whoispurii"
      >
        Twitter
      </a>
    </div>
    <style jsx>{`
      .card {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        width: 340px;
        background-color: #343d46;
        border-radius: 10px;
        box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1),
          2px 2px 8px rgba(0, 0, 0, 0.1);
        transition-property: width;
        transition-duration: 0.6s;
        transition-timing-function: ease-in-out;
        margin: 20px 0;
      }
      @media (max-width: 350px) {
        .card {
          width: 300px;
        }
      }
      .header {
        border-top-left-radius: ${borderRadius};
        border-top-right-radius: ${borderRadius};
      }
      .headerImage {
        background-image: url(https://pbs.twimg.com/profile_images/1013778655175168005/IA7kepDh_400x400.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: -0px center;
        height: 250px;
        border-top-left-radius: ${borderRadius};
        border-top-right-radius: ${borderRadius};
      }
      .headerTitle {
        display: inline-block;
        background-color: rgba(199, 199, 199, 0.97);
        font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue",
          "Helvetica", "Arial", sans-serif;
        margin-top: -5px;
        margin-bottom: 0;
        padding-right: 20px;
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-weight: 200;
        color: #4e4e4e;
        font-size: 24px;
        letter-spacing: ${letterSpacing(24, 15)}px;
        text-transform: uppercase;
      }
      .body {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .bodyText {
        padding: 0;
        margin-left: 25px;
        margin-right: 25px;
        color: #fff;
        font-weight: 400;
        text-align: center;
        line-height: 1.6em;
        font-size: 15px;
        letter-spacing: ${letterSpacing(15, -16)}px;
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .bodyText__small {
        margin-top: 0;
        font-size: 13px;
        letter-spacing: ${letterSpacing(13, -6)}px;
        color: #f8f8f8;
      }
      .footer {
        display: flex;
        border-top: 2px solid rgb(92, 92, 92);
        border-bottom-left-radius: ${borderRadius};
        border-bottom-right-radius: ${borderRadius};
        overflow: hidden;
      }

      .button {
        flex: 1 0 auto;
        line-height: 2;
        color: #fff;
        text-decoration: none;
        background-color: #434343;
        text-align: center;
        font-size: 16px;
        letter-spacing: ${letterSpacing(16, -20)}px;
      }
      .button:hover {
        background-color: #313131;
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        margin-top: -1px;
      }

      .button__twitter {
        background-color: rgba(85, 172, 238, 0.83);
      }
      .button__twitter:hover {
        background-color: #292f33;
      }
    `}</style>
  </div>
);
