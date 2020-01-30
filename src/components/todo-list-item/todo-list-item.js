import React, { Component } from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {

  constructor() {
    super();

    this.state = {
      done: false,
      important: false,
    };

    this.onMarkImportant = () => {
      this.setState((state) => {
        return {
          important: !state.important
        }
      })
    };

    this.onLabelClick = () => {
      this.setState((state) => {
        return {
          done: !state.done
        }
      })
    };
  }

  render() {

    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>
      <span
        className="todo-list-item-label"
        onClick={ this.onLabelClick }>
        {label}
      </span>

      <button type="button"     // Important button
              className="btn btn-outline-success btn-sm float-right"
              onClick={ this.onMarkImportant } >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"     // Deleted button
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
  }
}

