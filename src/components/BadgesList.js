import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../components/styles/BadgesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Gravatar from "./Gravatar";

export default class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badge were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            {" "}
            Create new Badge{" "}
          </Link>
        </div>
      );
    }
    return (
      <div className="BadgeList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className="Badge__section-name-list">
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <Gravatar
                    className="Badge__avatar-list"
                    email={badge.email}
                    alt={`${badge.firstName} ${badge.lastName}`}
                  />
                  <div>
                    {badge.firstName} {badge.lastName}
                    <br />
                    {badge.jobTitle}
                    <br />
                    <a
                      href={"https://twitter.com/" + badge.twitter}
                      style={{ color: "#00acee" }}
                    >
                      <FontAwesomeIcon icon={faTwitter} />@{badge.twitter}
                    </a>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
