interface ServicesProps {
  isVisible: boolean;
}

const services = [
  { icon: "bx bxl-dribbble", title: "Web Development", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" },
  { icon: "bx bx-file", title: "Backend Development", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { icon: "bx bx-tachometer", title: "Frontend Development", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" },
  { icon: "bx bx-world", title: "Testing Web Applications", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" },
  { icon: "bx bx-slideshow", title: "Dele cardo", desc: "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur" },
  { icon: "bx bx-arch", title: "Divera don", desc: "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur" },
];

export default function Services({ isVisible }: ServicesProps) {
  return (
    <section id="services" className={`services${isVisible ? " section-show" : ""}`}>
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>My Services</p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 d-flex align-items-stretch${index >= 3 ? " mt-4" : ""}${index === 1 ? " mt-4 mt-md-0" : ""}${index === 2 ? " mt-4 mt-lg-0" : ""}`}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4><a href="">{service.title}</a></h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
