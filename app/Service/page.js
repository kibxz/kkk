import Navbar from '/app/component/nav';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div
          className="col-lg-6 mx-auto about"
          style={{
            backgroundColor: '#ffffff', // พื้นหลังสีขาว
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 className="text-center mb-4" style={{ color: '#333' }}>
            About
          </h2>
          <img
            src="/img/544.jpg"
            className="img-fluid profile-pic mb-4"
            style={{
              border: '2px solid #ddd', // สีขอบรูปภาพ
              padding: '5px',
              borderRadius: '10px',
            }}
          />
          <p style={{ color: '#666' }}>
           little girl เป็นผู้รอดชีวิตคนใหม่ในเกมที่มีความสามารถเฉพาะตัว
          </p>
          <a href="contact.html" className="btn btn-primary">
           GO
          </a>
        </div>
      </div>
      <br />
    </>
  );
}
