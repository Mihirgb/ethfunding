import React from 'react'

const indexhome=()=>{
return(
  
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="icon" href="images/favicon.png" type="image/gif" />
  <title> Croudfunding Platform </title>

  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  <link href="css/font-awesome.min.css" rel="stylesheet"/>
  <link href="css/style.css" rel="stylesheet"/>
  <link href="css/responsive.css" rel="stylesheet"/>
</head>

<body>
  

  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a href="index.html" class="navbar-brand">
          <span>ETHEREUM</span>
        </a>
        <div class="" id="">
          <div class="custom_menu-btn">
            <button onclick="openNav()">
            <span class="s-1"></span>
            <span class="s-2"></span>
            <span class="s-3"></span>
          </button>
          <div class="overlay" id="myNav">
            <div class="overlay-content">
              <a href="index.html">Home</a>
              <a href="">Log In</a>
              <a href="">Sign up</a>
              <a href="">About Us</a>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <section class="slider_section position-relative">
    <div class="slider_bg_box">
      <img src="images/slider-bg.jpg" alt=""></img>
    </div>
    <div class="slider_bg"></div>
    <div class="container">
      <div class="col-md-6 ml-auto">
        <div class="detail-box">
          <h1> Welcome to, Crowdfunding Platform </h1>
          
          <p>Crowdfunding is the use of small amounts of capital from a large number of individuals to finance a new business venture.Crowdfunding makes use of the easy accessibility of vast networks of people through social media and crowdfunding websites to bring investors and entrepreneurs together.
          </p>

        </div>
      </div>
    </div>
  </section>

  <section class="spcl_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail_container">
            <div class="detail-box">
              <img src="images/s1.png" alt=""></img>
              <h5>Blockchain</h5>
              <p> A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes.Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves).
              </p>
            </div>
            <div class="detail-box">
              <img src="images/s2.png" alt=""></img>
              <h5>Ethereum</h5>
              <p> Ethereum is a decentralized blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization. It is open-source software.
              </p>
            </div>
            <div class="detail-box">
              <img src="images/s3.png" alt=""></img>
              <h5>Metamask</h5>
              <p>MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5 ml-auto">
          <div class="img-box">
            <img src="images/spcl-img.jpg" alt=""></img>
          </div> </div>
      </div>
    </div>
  </section>

  <section class="about_section layout_padding-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img src="images/about-img.jpg" alt=""></img>

          </div>
        </div>
        <div class="col-md-6"><div class="detail-box">
          <div class="heading_container">
            <h2>Smart Contract</h2>
          </div>
          <p>A smart contract is a computer program or a transaction protocol that is intended to automatically execute, control or document events and actions according to the terms of a contract or an agreement.The objectives of smart contracts are the reduction of need for trusted intermediators, arbitration costs, and fraud losses, as well as the reduction of malicious and accidental exceptions. Smart contracts are commonly associated with cryptocurrencies, and the smart contracts introduced by Ethereum are generally considered a fundamental building block for decentralized finance (DeFi) and NFT applications.
          </p>
          <a href="https://medium.com/swlh/what-are-smart-contracts-6c13f6c725d7">Read More</a>
        </div></div>
      </div>
    </div>
  </section>

<section class="contact_section layout_padding">
  <div class="contact_bg_box">
    <img src="images/contact-bg.jpg" alt=""></img>
  </div>
  <div class="container">
    <div class="heading_container heading_center">
      <h2>Create a campaign</h2>
    </div> 
    <div class="">
      <div class="row">
        <div class="col-md-7 mx-auto">
          <form action="">
            <div class="contact_form-container">
              <div class="row">
                <div class="col-sm-6">
                  <input type="text" placeholder="Full Name"></input>
                </div>
                <div class="col-sm-6">
                  <input type="text" placeholder="Email"></input>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <input type="number" placeholder="Phone Number" />
                </div>
                <div class="col-sm-6">
                  <input type="number" placeholder="Number of People" />
                </div> 
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <input type="date" placeholder="Select date" />
                </div>
                <div class="col-sm-6">
                  <input type="time" placeholder="Select Time" />
                </div>
              </div>
              <div class="">
                <input type="text" placeholder="Additional Note" class="message_input" />
              </div>
              <div class="btn_box">
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  <section class="client_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>What says our client</h2>
      </div>
      <div class="carousel slide" id="carouselExampleControls" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="box">
              <div class="img-box">
                <img src="images/client.jpg" alt=""></img>
              </div>
              <div class="detail-box">
                <h4>Minim Valett</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla nemo voluptates nisi voluptatibus ullam similique tempore sapiente sint autem ratione ex nihil cupiditate exercitationem, quo, ipsa modi? Autem, veniam!

                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="box">
              <div class="img-box">
                <img src="images/client.jpg" alt=""></img>
              </div>
              <div class="detail-box">
                <h4>Minim Valett</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla nemo voluptates nisi voluptatibus ullam similique tempore sapiente sint autem ratione ex nihil cupiditate exercitationem, quo, ipsa modi? Autem, veniam!

                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel_btn-box">
          <a href="#carouselExampleControls" class="carousel-control-prev" role="button" data-slide="prev">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <span class="sr-only">Previous</span>
          </a>
          <a href="#carouselExampleControls" class="carousel-control-next" role="button" data-slide="next">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  </body>
  <footer class="footer_section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 footer-col">
          <div class="footer_content">
            <h4>Reach at...</h4>
            <div class="contact_link_box">
              <a href=""><i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>Location</span></a>
              <a href=""><i class="fa fa-phone" aria-hidden="true"></i>
              <span>Call +11 123456789</span></a>
              <a href=""><i class="fa fa-envelop" aria-hidden="true"></i>
              <span>cafessa@gmail.com</span></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <div class="footer_detail">
            <a href="" class="footer-logo">
              Crowdfunding platform
            </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  excepturi corporis nisi magnam quod ullam magni dolorum.

            </p>
            <div class="footer_social">
              <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-pinterest" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <div class="map_container">
            <div class="map">
              <div id="googleMap"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-info">
        <p>&copy; <span id="displayYear"></span>All Rights Reserved By
        <a href="#">EDI GROUP</a></p>
      </div>
    </div>
  </footer>

 
  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <script src="js/custom.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap">
  </script>



</html>
)
}
export default indexhome