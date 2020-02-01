import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];

  render() {


   const {filter, onFilterChange} = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActiveBtn = filter === name;
      const classBtn = isActiveBtn ? 'btn-info' : 'btn-outline-secondaru';
      return (
        <button type="button" className={`btn ${classBtn}`} key={name}
        onClick={() => onFilterChange(name)}>
          {label}
        </button>
      )
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
