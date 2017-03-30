var Input = React.createClass({
  getInitialState: function(){
    return({editting: false})
  },
  toggleEdit: function(){
    val = this.ref.newText.value
    this.setState({editting: !this.state.editting})
  },
  renderEditting: function(){
    return(
      <input ref="newText" onClick={this.toggleEdit} type="text" defaultValue={this.props.title} />
    )
  },
  renderStatic: function(){
    return(
      <h1 onClick={this.toggleEdit}>{this.props.title}</h1>
    )
  },
  render: function(){
    if(this.state.editting){
        return(this.renderEditting())
    }
    else{
      return(this.renderStatic())
    }
  }
})

var Movie = React.createClass({
  createAlert: function(){
    console.log("You just clicked the movie")
  },
  getInitialState: function(){
    return({checked: true})
  },
  toggleChecked: function(){
    this.setState({checked: !this.state.checked})
  },
  render: function(){
    var msg;
    if(this.state.checked){
      msg = "The checked state is true"
    }
    else{
      msg = "The checked state is false"
    }
    return(
        <div onClick={this.createAlert} className="movie-container">
          <Input></Input>
          <h2>{this.props.genre}</h2>
          <h3>{this.props.children}</h3>
          <h3><input type="checkbox" onChange={this.toggleChecked} defaultChecked={this.state.checked}/> <span>{msg}</span></h3>
       </div>
     )
 }
})
ReactDOM.render(<Movie title="Star Wars" genre="Sci-Fi">I really liked it</Movie>, document.getElementById('example'))
