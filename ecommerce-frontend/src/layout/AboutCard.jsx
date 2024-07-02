import React from 'react';

function AboutCard(props) {
  return (
    <div className={`col-md-4 ${props.customClass}`}>
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
          alt="Thumbnail [100%x225]"
          src={props.image}
          data-holder-rendered="true"
        />
        <div className="card-body">
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;