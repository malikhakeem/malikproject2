import React from "react";
import "./BlogBody.css";
import Blog from "../../../images/akat1.jpg";
function BlogBody() {
  return (
    <div className="bodyBlog-cont">
      <div className="bodyBlog">
        <div className="blog-cont">
          {" "}
          <div className="blog">
            <div className="blog-img">
              <img className="akat" src={Blog} />
            </div>
            <div className="ds">
              {" "}
              <div className="blog-date-cont">
                <div className="blog-date">27 jun 2022</div>
              </div>
              <div className="blog-title">
                Nigeria needs single policy to addre...
              </div>
              <div className="blog-desc-cont">
                <div className="blog-desc">
                  Ewah Eleri is the Executive Director,international
                </div>
                <div className="blog-desc">
                  Centre for Energy,Evironment & Development (IC...
                </div>
              </div>
              <div className="blogmore-cont">
                <div className="blogmore">Know More</div>
                <div className="blog-icon"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-cont">
          {" "}
          <div className="blog">
            <div className="blog-img">
              <img className="akat" src={Blog} />
            </div>
            <div className="ds">
              {" "}
              <div className="blog-date-cont">
                <div className="blog-date">27 Jun 2022</div>
              </div>
              <div className="blog-title">
                Minister orders speedy completion ...
              </div>
              <div className="blog-desc-cont">
                <div className="blog-desc">
                  The Minister of Stste of Works and Housing,Mu'azu
                </div>
                <div className="blog-desc">
                  Jaji Sambo,has directed the Federal Housing Auth...
                </div>
              </div>
              <div className="blogmore-cont">
                <div className="blogmore">Know More</div>
                <div className="blog-icon"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-cont-spec">
          {" "}
          <div className="blog">
            <div className="blog-img">
              <img className="akat2" src={Blog} />
            </div>
            <div className="ds">
              {" "}
              <div className="blog-date-cont">
                <div className="blog-date">27 jun 2022</div>
              </div>
              <div className="blog-title">
                AIHS to engage political actors on h...
              </div>
              <div className="blog-desc-cont">
                <div className="blog-desc">
                  Ahead of the 2023 elections,one of Africa's largest
                </div>
                <div className="blog-desc">
                  Housing and construction expo,Africa internati...
                </div>
              </div>
              <div className="blogmore-cont">
                <div className="blogmore">Know More</div>
                <div className="blog-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogBody;
