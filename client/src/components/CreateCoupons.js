//TODO - createCoupon, show success

import React from "react";

class CreateCoupons extends React.Component {
  constructor() {
    super();
    this.state = {
      coupon: {
          username: "",
          bizName: "",
          bizQR: "",
          bizLogo: "",
          heading: "",
          couponDesc: "",
          restrictions: "",
          subject: "Eat Now",
          subtopics: "",
          searchWords: "",
          bizAddress:
            {
              streetAndNum: "",
              city: "",
              zip: 0
            },
          bizPhone: ""
        }
    };
  }

  render() {
    // Dropdown list of Subjects
    var showSubjectList = "";
    // map subjects to show in dropdown
    showSubjectList = this.props.category.map((c,i) => {
      return <option key={i} value={c.subject}>{c.subject}</option>
    })

    // Dropdown list of Subtopics
    var showSubtopics = "generic";
    // map category to find matching subject
    showSubtopics = this.props.category.map((c,i) => {
      var st = "";
      if(c.subject === this.state.coupon.subject) {
        // map types to show in dropdown
        st = c.types.map((t,i) => {
          return <option key={i} value={t}>{t}</option>
        })
      } return st;
    })

    //if 'Create New Coupon' NOT clicked, show nothing
    if (this.props.showCreateCoupon === false) {
      return (<div></div>);
    //if 'Create New Coupon' clicked, show form
    } else {
      return (
        <div>
          <div>
            <button
              className="backButton"
              onClick={this.props.toggleShow}>back
            </button>
            <h1>Create New Coupon</h1>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (this.props.createCoupon) {
                this.props.createCoupon(this.state.coupon);
              };
              this.props.toggleShow();
            }}>
              <div>
                Business Name: <br /><input onChange={(e) => {
                  const coupon = {bizName: e.target.value};
                  this.setState({
                    coupon: Object.assign(this.state.coupon,coupon)
                  });
                }} /><br />
              </div>
              <div>
                Business QR Link: <br /><input onChange={(e) => {
                  const coupon = {bizQR: e.target.value};
                  this.setState({
                    coupon: Object.assign(this.state.coupon,coupon)
                  });
                }} /><br />
              </div>
              <div>
                Business Logo Link: <br /><input onChange={(e) => {
                  const coupon = {bizLogo: e.target.value};
                  this.setState({
                    coupon: Object.assign(this.state.coupon,coupon)
                  });
                }} /><br />
              </div>
              <div>
                Buy One: <br /><input onChange={(e) => {
                  const coupon = {heading: e.target.value};
                  this.setState({
                    coupon: Object.assign(this.state.coupon,coupon)
                  });
                }} /><br /><small>Get One Free</small>
              </div>
              <div>
                Coupon Description: <br /><input onChange={(e) => {
                  const coupon = {couponDesc: e.target.value};
                  this.setState({
                    coupon: Object.assign(this.state.coupon,coupon)
                  });
                }} /><br />
              </div>
              <div>
                Restrictions: <br /><input onChange={(e) => {
                  const coupon = {restrictions: e.target.value};
                  this.setState({
                    coupon: Object.assign(this.state.coupon,coupon)
                  });
                }} /><br />
              </div>
              <div>Business Address:<br />
                <div>
                  Number and Street Name:<br /><input onChange={(e) => {
                    const coupon = {streetAndNum: e.target.value};
                    this.setState({
                      coupon: Object.assign(this.state.coupon,coupon)
                    });
                  }} /><br />
                </div>
                <div>
                  City:<br /><input onChange={(e) => {
                    const coupon = {city: e.target.value};
                    this.setState({
                      coupon: Object.assign(this.state.coupon,coupon)
                    });
                  }} /><br />
                </div>
                <div>
                  Zipcode:<br /><input onChange={(e) => {
                    const coupon = {zip: e.target.value};
                    this.setState({
                      coupon: Object.assign(this.state.coupon,coupon)
                    });
                  }} /><br />
                </div>
              </div>
              <div>
                Phone#: <br /><input onChange={(e) => {
                  const coupon = {phone: e.target.value};
                  this.setState({
                    coupon: Object.assign(this.state.coupon,coupon)
                  });
                }} /><br /><br />
              </div>
              <div>
                Subject: <br />
                <select onChange={(e) => {
                  const coupon = {subject: e.target.value};
                  this.setState({
                    coupon: Object.assign(this.state.coupon,coupon)
                  });
                }}>{showSubjectList}
                </select>
                <br /><br />
              </div>
              <div>
                Subtopic: <br />
                <select onChange={(e) => {
                  const coupon = {searchWords: e.target.value};
                  this.setState({
                    coupon: Object.assign(this.state.coupon,coupon)
                  });
                }}>{showSubtopics}
                </select>
                <br /><br />
              </div>
              <button
                className="backButton"
                onClick={this.props.toggleShow}>back
              </button>
              <button className="chosenCat bigText">Create</button>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default CreateCoupons;
