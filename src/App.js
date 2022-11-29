import "./App.css";
import HomeLeft from "./Components/Home/HomeLeft";
import HomeRightAbsolutes from "./Components/Home/HomeRightAbsolutes";
import HomeRightAbsolute2 from "./Components/Home/HomeRightAbsolute2";
import Investors from "./Components/Investors/Investors";
import Investor2 from "./Components/Investors/Investor2";
import InvestRight from "./Components/Investors/Investor-right/InvestorRight";
import InvestorRight from "./Components/Investors/Investor-right/InvestorRight";
import AsAnInvestorLeft from "./Components/AsAnInvestor/AsAnInvestorBody/AsAnInvestorLeft/AsAnInvestorLeft";
import AsAnInvestorRight from "./Components/AsAnInvestor/AsAnInvestorRight/AsAnInvestorRight";
import AsAnInvestorHead from "./Components/AsAnInvestor/AsAnInvestorHead/AsAnInvestorHead";
import AsADeveloperLeft from "./Components/AsADeveloper/AsADeveloperLeft/AsADeveloperLeft";
import AsADeveloperRight from "./Components/AsADeveloper/AsADeveloperRight/AsADeveloperRight";
import DealRoomLeft from "./Components/DealRoom/DealRoomLeft/DealRoomLeft";
import DealRoomRight from "./Components/DealRoom/DealRoomRight/DealRoomRight";
import IndependentLeft from "./Components/Independent/IndependentLeft/IndependentLeft";
import IndependentRight from "./Components/Independent/IndependentRight/IndependentRight";
import Num from "./Components/num/Num";
import BlogHead from "./Components/Blog/BlogHead/BlogHead";
import BlogBody from "./Components/Blog/BlogBody/BlogBody";
import CompanyHead from "./Components/Company/CompanyHead/CompanyHead";
import CompanyBody from "./Components/Company/CompanyBody/CompanyBody";
import DealRoomHead from "./Components/DealRoom/DealRoomHead/DealRoomHead";
import AsADeveloperHead from "./Components/AsADeveloper/AsADeveloperHead/AsADeveloperHead";
function App() {
  return (
    <div className="App">
      <div className="home-app">
        <div className="flex">
          <div className="leftt">
            <HomeLeft />
          </div>
          <div className="rightt">
            {" "}
            <HomeRightAbsolutes />
            <HomeRightAbsolute2 />
          </div>
        </div>

        <div className="investors">
          <div className="investor-left">
            <Investor2 />
            <Investors />
          </div>

          <div className="investor-right">
            <InvestorRight />
          </div>
        </div>

        <div className="AsAnInvestor">
          <div className="AsAnInvestor-container">
            <AsAnInvestorHead />
          </div>

          <div className="AsAnInvestor-flexbox">
            <div className="AsAnInvestorLeft">
              <AsAnInvestorLeft />
            </div>
            <div className="AsAnInvestorRight">
              <AsAnInvestorRight />
            </div>
          </div>
        </div>

        <div className="AsADeveloper">
          <div className="AsADeveloperHead">
            <AsADeveloperHead />
          </div>

          <div className="AsADeveloper-flex">
            <div className="AsADeveloperLeft">
              <AsADeveloperLeft />
            </div>

            <div className="AsADeveloperRight">
              <AsADeveloperRight />
            </div>
          </div>
        </div>
        <div className="DealRoom-Container">
          <div className="DealRoomHead-Container">
            <DealRoomHead />
          </div>
          <div className="DealRoom-flex">
            <div className="DealRoomLeft-container">
              <DealRoomLeft />
            </div>
            <div className="DealRoomRight-container">
              <DealRoomRight />
            </div>
          </div>
        </div>

        <div className="Independent-flex">
          <div className="IndependentLeft-container">
            <IndependentLeft />
          </div>
          <div className="IndependentRight-container">
            <IndependentRight />
          </div>
        </div>
        <div className="num-container">
          <Num />
        </div>

        <div className="Blog-container">
          <div className="BlogHead-container">
            {" "}
            <BlogHead />
          </div>

          <div className="dpi">
            {" "}
            <BlogBody />
          </div>
        </div>

        <div className="Company-container">
          <CompanyHead />
          <div className="compbody">
            <CompanyBody />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
