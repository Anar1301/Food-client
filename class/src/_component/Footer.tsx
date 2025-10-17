import React from "react";

const Footer = () => {
  return (
    <div className="w-[1440px] h-fit mx-auto bg-[#18181B]">
      <div className="bg-[#18181B] h-[65px] w-[1440px"></div>
      <div className="h-[92px] bg-[#EF4444] flex ">
        {Array.from({ length: 4 }).map((index) => (
          <div className="w-[1260px] mx-auto flex items-center justify-center">
            <div className="font-bold text-[20px]">Fresh Fast delivered</div>
          </div>
        ))}
      </div>
      <footer className="footer sm:footer-horizontal bg-[#18181B] text-base-content pt-[60px] px-10 grid w-[1260px] mx-auto ">
        <nav className="flex flex-col justify-center items-center">
          <img src="/logo.png"></img>
          <div>NomNom</div>
          <a className="link link-hover">Swift delivery</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#71717A]">NomNom</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Delivery zone</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#71717A]">Menu</h6>
          <div className="flex   gap-20">
            {" "}
            <div className="flex flex-col gap-4">
              {" "}
              <div className="link link-hover">Appetizers</div>
              <div className="link link-hover">Salads</div>
              <div className="link link-hover">Pizzas</div>
              <div className="link link-hover">Appetizers</div>
              <div className="link link-hover">Salads</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="link link-hover">Salads</div>
              <div className="link link-hover">Pizzas</div>
              <div className="link link-hover">Appetizers</div>
              <div className="link link-hover">Salads</div>
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-[#71717A]">Follow us</h6>
          <div className="flex gap-4">
            {" "}
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <div className="w-[1440px] bg-[#18181B] mt-[84px]">
        {" "}
        <footer className="footer bg-[#18181B] text-base-content  border-t px-10 py-4 border-[#F4F4F566] w-[1260px] mx-auto ">
          <div className="grid-flow-col items-center text-[#71717A] gap-[48px] pb-30">
            <div>Copyright Container</div>
            <div>Copyright Container</div>
            <div>Copyright Container</div>
            <div>Copyright Container</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
