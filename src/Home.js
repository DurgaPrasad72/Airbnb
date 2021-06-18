import React from 'react'
import './Home.css'
import Banner from  './Banner'
import Card from './Card';
function Home() {
    return (
        <div className="home">
            <Banner /> 
           <div className="home__section">
           <Card 
                src={"https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"}
                title="OUT DOOR GATEWAYS"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
               

               <Card 
                src={"https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"}
                title="UNUIQE STAYS"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />


              <Card 
                src={"https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320"}
                title="FEATURED COLLECTIONS: WONDERLAST"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
           </div>
           <div className="home__section">
           <Card 
                src={"https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320"}
                title="ONLINE XPERIENCE"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />



              <Card 
                src={"https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320"}
                title="EXPERIENCES"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />




             <Card 
                src={"https://th.bing.com/th/id/OIP.NXZJoz9LpToQQx_cDXoSigHaE8?pid=ImgDet&rs=1"}
                title="LUXURY ROOMS"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
           </div>
        </div>
    )
}

export default Home;
