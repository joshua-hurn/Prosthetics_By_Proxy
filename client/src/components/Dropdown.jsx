import React, {Component} from 'react';


class Dropdown extends Component {
    render () {
        return (
<select class="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option value="1">Arms</option>
  <option value="2">Feet</option>
  <option value="3">Hands</option>
  <option value="4">Legs</option>
</select>

        );
    }
}


export default Dropdown;