// Simple app that renders a to-do list based on react components

  var item_data = [
      {
          id:1,
          text:'Load all the items and not just the first one.'
      },
      {
          id:2,
          text:'Do it with a button'
      },
      {
          id:3,
          text:'Add a button to remove items'
      },
      {
          id:4,
          text:'Say when you reached the end of the file'
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
