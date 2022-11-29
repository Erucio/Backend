import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="footer">
          <div className="container">
              <div className="links">
                  <a href='https://www.facebook.com' target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href='https://www.instagram.com' target="_blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href='https://www.twitter.com' target="_blank"><i className="fa-brands fa-twitter"></i></a>
                  <a href='https://www.google.com' target="_blank"><i className="fa-brands fa-google"></i></a>
                  <a href='https://www.linkedin.com' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              </div>
              <div className="copyright">
                  <p>&copy; Copyright 2022 FIXXO</p>
                  <div className="signature">
                  <   p>Win22 Javascript Frontend Erick Johansson inlämningsuppgift</p>
                  </div>
              </div>
          </div>

      </section>
    </footer>
  )
}

export default Footer