import React from 'react';
import {Input} from 'antd';

const Search = Input.Search;

const UserSearch = ({dispatch, resourceName}) => {
  const handleSearch = (value) => {
    if (value) {
      dispatch({type: 'user/query', payload: {"search_dict": JSON.stringify({"id": value}), "name": resourceName}})
    } else {
      dispatch({type: 'user/query', payload: {"name": resourceName}})
    }

  };
  return (
    <div>
      <Search placeholder="input search text" onSearch={handleSearch} enterButton style={{width: '100%'}}/>
    </div>
  )
};
export default UserSearch;
