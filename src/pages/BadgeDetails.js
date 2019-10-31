import React, { Component } from "react";
import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";

export default class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount(){
      this.fetchData()
  }

  fetchData= async () => {
      this.setState({ loading:true, error:null})

      try{
          const data=await api.badges.read(
              this.props.match.params.badgeId
          )
          this.setState({loading:false,data:data})
      }catch(error){
          this.setState({loading:false,error:error})
      }
  }


  render() {
      if(this.state.loading){
          return <PageLoading />
      }
      if(this.state.error){
          return <PageError error={this.state.error} />
      }
      const badge = this.state.data
    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant">{badge.firstName} {badge.lastName}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
