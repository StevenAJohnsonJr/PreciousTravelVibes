/* eslint-disable */
import Link from 'next/link';
import { Button, Card, } from 'react-bootstrap';

function Home() {
  return (
    <div className="homepage" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Card className="homepage-card" style={{ width: '100%', backgroundImage: 'url("get2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Card content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Card.Img className="toot" variant="top" src="/toot1.jpg" alt="ceo" style={{ borderRadius: '50%', alignSelf: 'center', marginTop: '100px' }} />
          <p className="toot2">@paradisetravelvibes</p>
          <p className="toot2">Live Your Travel Dreams!</p>
          <Card.Body className="homepageB" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link className="ps" style={{ margin: '10px 0' }} passHref href="/trips/new">
              <Button className="buttonStyle">Trip Form</Button>
            </Link>
            <Link className="ps-relative2" passHref href="/cruises/new">
              <Button className="buttonStyle">Cruise Form</Button>
            </Link>
            <Link className="ps-relative3" passHref href="https://www.cheapoair.com/flights/booknow/cheap-flight-tickets?fpaffiliate=coa-google-competitor&fpsub=&utm_campaign=competitors_exact_atlas&utm_term=priceline&utm_term_id=kwd-10842441&utm_source={google}&utm_medium={cpc}&device=c&fpprice=&campaignID=938819657&adgroupId=46906257756&gad=1&gclid=CjwKCAjw-b-kBhB-EiwA4fvKrEHEIqFUdqRM-WEpQ5n9KetnVD-IXXXYhgBqziMB6RxSG23D2f6xdBoCJdoQAvD_BwE">
              <Button className="buttonStyle">Flights and Hotels</Button>
            </Link>
            <Link className="ps-relative3" passHref href="/carosel">
              <Button className="buttonStyle">Summer Getaway Cruise Flyer</Button>
            </Link>
            <Link className="ps-relative3" passHref href="/aboutMe">
              <Button className="buttonStyle">About Me</Button>
            </Link>
          </Card.Body>

          <div style={{ flex: 1 }}></div>
        </div>
      </Card>
    </div>
  );
}
export default Home;
