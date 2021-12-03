import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="form">
        <h3>Quản lý nhân viên</h3>
        <form method="POST" id="Main_Form_ID">
          <div className="form-group">
            <label for="">ID: </label>
            <input type="number" required="true" className="form-control" id="ID_ID" value="" />
          </div>
          <div className="form-group">
            <label for="">Email: </label>
            <input
              type="email"
              required="true"
              className="form-control"
              id="Email_ID"
              value=""
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label for="">Username: </label>
            <input
              type="text"
              required="true"
              className="form-control"
              id="Username_ID"
              value=""
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label for="">Fullname: </label>
            <input
              type="text"
              required="true"
              className="form-control"
              id="Fullname_ID"
              value=""
              placeholder="Enter Fullname"
            />
          </div>
          <div className="form-group">
            <label for="sel1">Select a Department:</label>
            <select className="form-control" id="Department_ID">
              <option>--Select a Department--</option>

              {/* <!--  Comment đoạn code này lại, sẽ thực hiện load và fill dữ liệu API lấy trực tiếp từ Server
             //      <option>Accounting</option>
              //     <option>Business Development</option>
               //   <option>Engineering</option>
                //  <option>Human Resources</option>
                //  <option>Research and Development</option>   --> */}
            </select>
          </div>
          <div className="form-group">
            <label for="sel1">Select a Position:</label>
            <select className="form-control" id="Position_ID">
              <option>--Select a Position--</option>

              {/* <!  -- Comment đoạn code này lại, sẽ thực hiện load và fill dữ liệu API lấy trực tiếp từ Server
                //  <option>Developer</option>
                //  <option>Tester</option>
                //  <option>Scrum Master</option>
                //  <option>PM</option> --> */}
            </select>
          </div>
          <div className="form-group">
            <label for="">Cretate Date: </label>
            <input
              type="date"
              required="true"
              className="form-control"
              id="Cretate_Date_ID"
              value=""
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-success" value="Save" />
            <input type="button" className="btn btn-success" id="update_btn" value="Update" />
            <input type="button" className="btn btn-success" id="reset_btn" value="Reset" />
          </div>
          <br />
          <br />
        </form>
      </div>

      <div className="container">
        <div className="row">
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded"
              id="input-search-department"
              placeholder="Search by Email, FullName, Department"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primary">
              search
            </button>
          </div>
        </div>

        <div className="row">
          <div className="form">
            <br />
            <br />
            <h3>Thông tin nhân viên trên hệ thống</h3>
            <table className="table table-hover" id="Detail_Staff_ID">
              <thead>
                <tr>
                  <th>
                    ID
                    <i
                      className="fa fa-fw fa-sort"
                      // onclick="changeSort('id')"
                    ></i>
                  </th>
                  <th>
                    Email
                    <i
                      className="fa fa-fw fa-sort"
                      // onclick="changeSort('email')"
                    ></i>
                  </th>
                  <th>
                    Username
                    <i className="fa fa-fw fa-sort"></i>
                  </th>
                  <th>
                    Fullname
                    <i
                      className="fa fa-fw fa-sort"
                      // onclick="changeSort('fullname')"
                    ></i>
                  </th>
                  <th>
                    Department
                    <i
                      className="fa fa-fw fa-sort"
                      // onclick="changeSort('department')"
                    ></i>
                  </th>
                  <th>
                    Position
                    <i
                      className="fa fa-fw fa-sort"
                      // onclick="changeSort('position')"
                    ></i>
                  </th>
                  <th>
                    Cretate Date
                    <i
                      className="fa fa-fw fa-sort"
                      // onclick="changeSort('createDate')"
                    ></i>
                  </th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody id="Result_TB"></tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul className="pagination" id="pagination">
                {/* <!-- <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li> --> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
