import "./footerC.css"

function Contacts() {
  const icons = {
    email: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    whatsapp: 'https://cdn-icons-png.flaticon.com/512/3670/3670051.png',
    github: 'https://cdn-icons-png.flaticon.com/512/733/733609.png',
    discord: 'https://cdn-icons-png.flaticon.com/512/3670/3670157.png'
  };

  return (
    <section className="contacts-section">
      <h2>Contatos</h2>
      <div className="contacts-icons">
        <a href="guilhermereis1000@hotmail.com" title="Email" target="blank">
          <img src={icons.email} alt="Email" className="contact-icon" />
        </a>
        <a href="https://wa.me/qr/MRJUDC32G5ITL1" title="WhatsApp" target="blank">
          <img src={icons.whatsapp} alt="WhatsApp" className="contact-icon" />
        </a>
        <a href="https://github.com/guilhermereiiss" title="GitHub" target="blank">
          <img src={icons.github} alt="GitHub" className="contact-icon" />
        </a>
        <a href="https://discord.com/channels/@me" title="Discord" target="blank">
          <img src={icons.discord} alt="Discord" className="contact-icon" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;

