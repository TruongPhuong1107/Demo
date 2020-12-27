import React, { Component} from "react";
export default class Create extends Component{
    render(){
        return(
            <div className="create-container">
                <h3>
                    Thêm mới mặt hàng
                </h3>
                <form> 
                    <div  className="form-group">  
                      <label>Tên mặt hàng:</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label>Loại:</label>
                      <select name="categories" id="categories">
                      <option value="nuoc">Nước giải Khát</option>
                      
                        </select>
                    </div>
                    <div className="form-group">
                      <label>Giá:</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-danger">Thêm</button>
                    </div>
                </form>
            </div>
        );
    }
}
//export default Create;