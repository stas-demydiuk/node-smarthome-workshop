import React from 'react';

export default function() {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Groups</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-3 offset-9">
                    <a href="#/groups/add" className="btn btn-primary float-right">Add group</a>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}