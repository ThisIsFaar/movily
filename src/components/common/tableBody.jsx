import React from "react";
import _ from "lodash";
//interface:
//data for rows: array of obj, here we havelist of movies
//onLike func
//onDelete

class TableBody extends React.Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  createKeys = (item, column) => {
    return item._id + (column.content || column.path);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              {columns.map((column) => (
                <td key={this.createKeys(item, column)}>
                  {this.renderCell(item, column)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
