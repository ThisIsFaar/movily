import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
  //_(items) is for creating lodash wrapper obj
  //.take() is for taking some specific items from obj
  //value() is for convert lodash wrapper obj to regular array
}
