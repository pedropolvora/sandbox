// Simple app that renders a to-do list based on react components

  var item_data = [
      {
          id:1,
          text:'item1'
      },
      {
          id:2,
          text:'item 2'
      }
  ];
  var ToDoList = React.createClass({
    render: function () {
      return (
        <ul> <ToDoItem body = {this.props.data[0].text} />  </ul>
      );
    }
  });

  var ToDoItem = React.createClass({
    render: function () {
      return (
         <li> {this.props.body} </li>
      );
    }
  });


  ReactDOM.render(
    <ToDoList data={item_data}/>,
    document.getElementById('todo-list')
  );
