import PropTypes from 'prop-types';

export const Theatre = props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
      }
    `}</style>
    <style global jsx>{`
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      body {
        width: 100%;
        min-width: 320px;
        margin: 0;
      }
    `}</style>
  </div>
);

Theatre.propTypes = {
  children: PropTypes.node,
}

export const Stage = props => (
  <div>
    {props.children}
    <style jsx>{`
      flex: 1 0 auto;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}</style>
  </div>
);

Stage.propTypes = {
  children: PropTypes.node,
}

export const Footer = props => (
  <div>
    {props.children}
    <style jsx>{`
      flex: 0 0 auto;
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
    `}</style>
  </div>
);

Footer.propTypes = {
  children: PropTypes.node,
}

export const Scene = props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        max-width: 640px;
        width: 100%;
        display: flex;
        padding: 0 1rem;
        flex-direction: column;
      }
    `}</style>
  </div>
);

Scene.propTypes = {
  children: PropTypes.node,
}