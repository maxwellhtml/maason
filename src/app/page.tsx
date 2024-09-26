import Image from "next/image";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="main-banner">
      <Container>
<Row>
<Col md={6}>
  <div className="banner-item">
    <h1 className="fs-2xl">Your Partner for Business Growth!</h1>
    <p className="fs-md fw-medium">Web Design | Development | Marketing</p>
    <p className="fs-base">
    Shelf empowers teams to effortlessly track, manage, reserve, and optimize assets. From office equipment to heavy machinery, gain control of your inventory in minutes.
    </p>
    <Link href="/" className='btns btn_primary_outline '>Start Project</Link>
  </div>
</Col>

</Row>

      </Container>
    </section>
    </>
  );
}
