import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

import Imag from "../img/5.jpg";
import ReactTypingEffect from "react-typing-effect";

import Gsap from "gsap";

function Home() {
  const [toggle2, settoggle2] = useState(false);
  const boxRef = useRef();
  const [hover1, sethover1] = useState(false);
  const [toggle3, settoggle3] = useState(false);
  const [toggle4, settoggle4] = useState(false);

  const handlehover1 = () => {
    sethover1(!hover1);
    console.log(hover1);
  };

  const handletoggle2 = () => {
    settoggle2(!toggle2);
  };
  const handletoggle3 = () => {
    settoggle3(!toggle3);
  };

  useEffect(() => {
    if (toggle2 == true) {
      Gsap.to([boxRef.current], {
        durication: 2,
        y: "-20px",
        ease: "Power0.easeOut",
      });
    }
    if (toggle2 == false) {
      Gsap.to([boxRef.current], {
        durication: 12,
        y: "0px",
        ease: "bounce.out",
      });
    }
    // return () => {
    //   cleanup;
    // };
  }, [toggle2]);

  return (
    <>
      <section className="Home">
        <img src={Imag} alt="" className="Profilepic" />

        <div className={`typing1 ${toggle2 ? "active" : ""}`} ref={boxRef}>
          <div className="customtyping">
            <ReactTypingEffect
              text={`สวัสดีครับ ผมชื่อธีรภัทร์ สุราภา `}
              speed={80}
              eraseDelay={400}
              className="typingeffect"
            />
          </div>
          <button type="button" className="submit" onClick={handletoggle2}>
            ดูรายละเอียด
          </button>

          {toggle2 ? (
            <div className="timeline">
              <ul>
                <li>
                  <div className="content">
                    <hr style={{ marginTop: 40, marginBottom: 20 }} />
                    <div className="history">
                      <h3>ข้อมูลส่วนตัว</h3>
                    </div>
                    <div className="history_detail">
                      <p>ชื่อ นายธีรภัทร์ สุราภา ชื่อเล่น ท้อป อายุ 22 ปี</p>
                      <p>Email: tkp.programmer7@gmail.com</p>
                      <section className="contact">
                        <p>ข้อมูลติดต่อเพิ่มเติม</p>
                        <a href="https://www.instagram.com/_tkp.top_/">
                          <i class="fab fa-instagram-square"></i>
                        </a>
                        <a href="https://www.facebook.com/thiraphat.surapa/">
                          <i class="fab fa-facebook-square"></i>
                        </a>
                      </section>
                      <p style={{ color: "rgb(232, 127, 127)" }}>
                        ข้อมูลส่วนตัว PDF :
                        <a
                          href="https://firebasestorage.googleapis.com/v0/b/portfolio-thiraphat-surapa.appspot.com/o/%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%98%E0%B8%B5%E0%B8%A3%E0%B8%A0%E0%B8%B1%E0%B8%97%E0%B8%A3%E0%B9%8C%20%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A0%E0%B8%B2.pdf?alt=media&token=bbcf9498-ac2c-4ff3-924b-514e7c7bb503"
                          style={{
                            marginLeft: 15,
                            color: "black",
                            color: "rgb(232, 127, 127)",
                          }}
                        >
                          คลิก !
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="content" style={{ marginTop: 20 }}>
                    <hr style={{ marginTop: 20, marginBottom: 20 }} />
                    <div className="history">
                      <h3>ประวัติการศึกษา</h3>
                    </div>
                    <div
                      className="history_detail"
                      style={{ marginBottom: 50 }}
                    >
                      <p>สําเร็จการศึกษามัธยมปลาย โรงเรียนสตรีนครสวรรค์</p>
                      <p>สำเร็จการศึกษาปริญญาตรี มหาวิทยาลัยราชภัฏนครสวรรค์</p>
                      <p className="dot">
                        สาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี
                      </p>
                    </div>
                  </div>
                  <div className="content" style={{ marginTop: 20 }}>
                    <hr style={{ marginTop: 20, marginBottom: 20 }} />
                    <div className="history">
                      <h3>โปรเจค</h3>
                    </div>
                    <div
                      className="link"
                      style={{ marginLeft: 30, lineHeight: 2.5 }}
                    >
                      <a
                        href="#project_link"
                        className="link_pro"
                        onMouseOver={handlehover1}
                        onMouseOut={handlehover1}
                        onClick={handletoggle3}
                      >
                        " โปรเจคที่เคยได้ทำระหว่างเรียน "
                      </a>
                      <div
                        className={`div_link ${hover1 ? "active" : ""}`}
                      ></div>
                    </div>
                  </div>

                  <div className="btn-detail">
                    <button
                      type="button"
                      className="custom-btn btn-12"
                      onClick={() => {
                        settoggle4(!toggle4);
                      }}
                    >
                      <a href="#project_link_skill" style={{ color: "black" }}>
                        <span>ดูรายละเอียด</span>
                        <span>ทักษะ</span>
                      </a>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
      {toggle3 ? (
        <>
          <section className="Home2">
            <div className="content_main" id="project_link">
              <h2>โปรเจคที่เคยได้ทำระหว่างเรียน</h2>
            </div>

            <div className="group_content_1">
              <div className="content2">
                <div className="project">
                  <h3>ระบบ แชทผ่าน LAN</h3>
                </div>
                <div className="project_detail2">
                  <p>
                    เป็นระบบส่งข้อความผ่านระบบ LAN โดยใช้ IP address
                    ในการติดต่อสื่อสาร และสร้าง UI เพื่อใช้งาน
                  </p>
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>JAVA</span>
                </div>
              </div>

              <div className="content2">
                <div className="project">
                  <h3>ระบบ จำลองรถยนต์ 3 มิติ</h3>
                </div>
                <div className="project_detail2">
                  <p>
                    เป็นระบบสร้าง ภาพ 3 มิติ สำหรับการจำลองส่วนประกอบของรถ
                    และการเคลื่อนที่ของสภาพแวดล้อมกับตัวรถยนต์
                  </p>
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>C</span>
                </div>
              </div>

              <div className="content2">
                <div className="project">
                  <h3>ระบบ Stock สินค้า</h3>
                </div>
                <div className="project_detail2">
                  <p>
                    เป็นระบบที่อยู่ในรูปแบบ web application
                    ซึ่งการทำงานหลักๆเกี่ยวกับ การจัดเก็บ ,ลบ ,แก้ไข สินค้า
                  </p>
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>HTML</span>
                  <span style={{ marginRight: 20 }}>CSS</span>
                  <span style={{ marginRight: 20 }}>JAVASCRIPT</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Framework ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>BOOTSTRAP 4</span>
                </div>
              </div>

              <div className="content2">
                <div className="project">
                  <h3>ระบบ Stock สินค้า</h3>
                </div>
                <div className="project_detail2">
                  <p>
                    เป็นระบบที่อยู่ในรูปแบบ web application
                    ซึ่งการทำงานหลักๆเกี่ยวกับ การจัดเก็บ ,ลบ ,แก้ไข สินค้า
                  </p>
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้ (Front-end)
                  </span>
                  <span style={{ marginRight: 20 }}>HTML</span>
                  <span style={{ marginRight: 20 }}>CSS</span>
                  <span style={{ marginRight: 20 }}>JAVASCRIPT</span>

                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Library ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>REACTJS</span>

                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Framework ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>BOOTSTRAP 5</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้ (Back-end)
                  </span>
                  <span style={{ marginRight: 20 }}>
                    NodeJS *ทำเป็น webservice
                  </span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ฐานข้อมูล ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>MySQL</span>
                </div>
              </div>

              <div className="content2">
                <div className="project">
                  <h3>ระบบ Stock สินค้า</h3>
                </div>
                <div className="project_detail2">
                  <p>
                    เป็นระบบที่อยู่ในรูปแบบ web application
                    ซึ่งการทำงานหลักๆเกี่ยวกับ การจัดเก็บ ,ลบ ,แก้ไข สินค้า
                  </p>
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้ (Front-end)
                  </span>
                  <span style={{ marginRight: 20 }}>HTML</span>
                  <span style={{ marginRight: 20 }}>CSS</span>
                  <span style={{ marginRight: 20 }}>JAVASCRIPT</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Library ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>NEXTJS</span>
                  <span style={{ marginRight: 20 }}>TYPESCRIPT</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Framework ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>MATERIAL-UI</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้ (Back-end)
                  </span>
                  <span style={{ marginRight: 20 }}>
                    NodeJS *ทำเป็น webservice
                  </span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ฐานข้อมูล ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>MySQL</span>
                </div>
              </div>

              <div className="content2">
                <div className="project">
                  <h3>ระบบ จัดงานวิ่ง RunRun</h3>
                </div>
                <div className="project_detail2">
                  <p>
                    เป็นระบบสารสนเทศการสมัครงานวิ่งออนไลน์ผ่านเว็บแอปพลิเคชัน
                    ซึ่งการทำงานหลักๆเกี่ยวกับ การสมัครงานวิ่ง
                    และการจัดงานวิ่งต่างๆด้วยฐานข้อมูล แบบ Realtime
                  </p>
                  <p style={{ color: "rgb(232, 127, 127)" }}>
                    ตัวอย่างระบบ :{" "}
                    <a
                      href="https://runrun-f6a73.firebaseapp.com/?fbclid=IwAR1uVlN9SLzreC8ZIW9vzkxEZAljb8SqEhvgTLVYQYFP--7nAS_2GgU9rsE"
                      style={{ marginLeft: 15, color: "rgb(232, 127, 127)" }}
                    >
                      คลิก !
                    </a>
                  </p>
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>HTML</span>
                  <span style={{ marginRight: 20 }}>CSS</span>
                  <span style={{ marginRight: 20 }}>JAVASCRIPT</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Library ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>REACTJS</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Framework ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>BOOTSTRAP 5</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ฐานข้อมูล ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>FIREBASE CLOUD</span>
                </div>
              </div>

              <div className="content2">
                <div className="project">
                  <h3>
                    ระบบ คำนวณหาปริมาณการสั่งซื้อและการสั่งผลิตที่ประหยัดที่สุด
                    โดยใช้ตัวแบบ Economic Order Quantity Model (EOQ Model)
                  </h3>
                </div>
                <div className="project_detail2">
                  <p>
                    เป็นระบบที่อยู่ในรูปแบบ web application
                    ซึ่งการทำงานหลักๆเกี่ยวกับ
                    การคำนวนการสั่งซื้อสินค้าและการผลิตที่ประหยัดที่สุดโดยรับข้อมูลจากผู้ใช้งานมาคำนวน
                  </p>
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>HTML</span>
                  <span style={{ marginRight: 20 }}>CSS</span>
                  <span style={{ marginRight: 20 }}>JAVASCRIPT</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Framework ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>BOOTSTRAP</span>
                </div>
              </div>

              <div className="content2">
                <div className="project">
                  <h3>ระบบ ร้านขายโทรศัพท์มือถือออนไลน์ </h3>
                </div>
                <div className="project_detail2">
                  <p>
                    เป็นระบบขายโทรศัพท์มือถือออนไลน์ ซึ่งการทำงานหลักๆเกี่ยวกับ
                    การเลือกสินค้าใส่ตะกร้า สั่งซื้อสินค้า และชำระเงิน
                  </p>
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ภาษา ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>PHP</span>
                  <span style={{ marginRight: 20 }}>HTML</span>
                  <span style={{ marginRight: 20 }}>CSS</span>
                  <span style={{ marginRight: 20 }}>JAVASCRIPT</span>

                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Framework ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>BOOTSTRAP 5</span>
                  <span style={{ marginRight: 20 }}>LARAVEL 7.x</span>

                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    ฐานข้อมูล ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>MYSQL</span>
                  <br />
                  <span
                    style={{
                      marginRight: 30,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Payment gateway ที่ใช้
                  </span>
                  <span style={{ marginRight: 20 }}>PAYPAL</span>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {toggle4 ? (
        <section className="Home2">
          <div className="content_main" id="project_link_skill">
            {" "}
            <h2>ทักษะการเขียนโปรแกรม</h2>
          </div>

          <div className="group_content">
            <div className="content2">
              <div className="div">
                <div className="project">
                  <h3>ทักษะด้านภาษาเขียนเว็บไซต์</h3>
                </div>
                <div className="project_detail2" style={{ padding: 20 }}>
                  <ul style={{ textTransform: "uppercase" }}>
                    <li>
                      html <span>(ดี)</span>
                    </li>
                    <li>
                      css<span>(ดี)</span>
                    </li>
                    <li>
                      javascript <span>(ดี)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <hr style={{ margin: 30 }} />
              <div className="div">
                <div className="project">
                  <h3>ทักษะด้านภาษาโปรแกรมมิ่ง</h3>
                </div>
                <div className="project_detail2" style={{ padding: 20 }}>
                  <ul style={{ textTransform: "uppercase" }}>
                    <li>
                      javascript <span>(ดี)</span>
                    </li>

                    <li>
                      c <span>(ปานกลาง)</span>
                    </li>
                    <li>
                      php <span>(ปานกลาง)</span>
                    </li>
                    <li>
                      python <span>(ปานกลาง)</span>
                    </li>
                    <li>
                      java <span>(ปานกลาง)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content2">
              <div className="div">
                <div className="project">
                  <h3>ทักษะด้านภาษาจัดการฐานข้อมูล</h3>
                </div>
                <div className="project_detail2" style={{ padding: 20 }}>
                  <ul style={{ textTransform: "uppercase" }}>
                    <li>
                      SQL <span>(ปานกลาง)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <hr style={{ margin: 30 }} />
              <div className="div">
                <div className="project">
                  <h3>ทักษะด้าน Framework/Library </h3>
                </div>
                <div className="project_detail2" style={{ padding: 20 }}>
                  <ul style={{ textTransform: "uppercase" }}>
                    <li>
                      reactjs <span>(ดี)</span>
                    </li>
                    <li>
                      Bootstrap <span> (ดี)</span>
                    </li>
                    <li>
                      PHPLAravel <span>(ดี)</span>
                    </li>

                    <li>
                      nodejs <span>(ปานกลาง)</span>
                    </li>

                    <li>
                      TYPESCRIPT <span>(ปานกลาง)</span>
                    </li>
                    <li>
                      NextJS <span>(กำลังศึกษา)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content2">
              <div className="div">
                <div className="project">
                  <h3>ทักษะด้านการใช้ฐานข้อมูล</h3>
                </div>
                <div className="project_detail2" style={{ padding: 20 }}>
                  <ul style={{ textTransform: "uppercase" }}>
                    <li>
                      PHPMYADMIN <span> (ดี)</span>
                    </li>
                    <li>
                      firebase <span>(ดี)</span>
                    </li>
                    <li>
                      Mysql <span>(ปานกลาง)</span>
                    </li>

                    <li>
                      mongodb <span>(ปานกลาง)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <hr style={{ margin: 30 }} />
              <div className="div">
                <div className="project">
                  <h3>ทักษะด้านการใช้ Tool และอื่นๆ </h3>
                </div>
                <div className="project_detail2" style={{ padding: 20 }}>
                  <ul style={{ textTransform: "uppercase" }}>
                    <li>
                      VSCODE <span> (ดี)</span>
                    </li>
                    <li>
                      ANDROID STUDIO <span>(ดี)</span>
                    </li>
                    <li>
                      GITHUB <span>(ดี)</span>
                    </li>
                    <li>
                      POSTMAN <span>(ดี)</span>
                    </li>
                    <li>
                      PM2 <span>(ปานกลาง)</span>
                    </li>
                    <li>
                      NGINX <span>(ปานกลาง)</span>
                    </li>
                    <li>
                      NETLIFY <span>(ปานกลาง)</span>
                    </li>
                    <li>
                      HEROKU <span>(ปานกลาง)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Home;
