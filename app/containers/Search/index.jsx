import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'

class Search extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
         <SearchHeader value={this.props.params.keywords} />
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.params);
  }
}



export default Search
