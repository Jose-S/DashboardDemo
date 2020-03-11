import React, { Component } from "react";
import PostFilter from "./PostFilter";

const FilterContext = React.createContext();

export class SharedFilterProvider extends Component {
  constructor(props) {
    super(props);
    console.log("CONTEXT", props);
    this.state = {
      filterProps: props
    };
  }

  render() {
    return (
      <FilterContext.Provider
        value={{
          filterProps: this.state.filterProps
        }}
      >
        <PostFilter />
      </FilterContext.Provider>
    );
  }
}

export const SharedFilterConsumer = FilterContext.Consumer;
