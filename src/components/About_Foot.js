
function About(){
    return (  <div style ={{textAlign:"center"}}>
      <div className="about" style={{marginTop:"10px", textAlign: "center"}}>
          <h1>About Us</h1>
          <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      </div>
      </div>)
  }
  
  function Footer()
  {
    return (        <footer>
      <div className="contact">
          <h3>Contact</h3>
          <p style={{marginTop: "5px"}}>+91 7200889299 <br></br>
              perfumy@gmail.com
          </p>
  
      </div>
           <p style={{fontSize: "small", padding: "20px",color:" grey"}}>
      W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
  
      Copyright 1999-2023 by Refsnes Data. All Rights Reserved.
     Manikandan Vaishu
     </p>
  </footer>)
  }
  
  export {About,Footer}