import React, { PureComponent } from 'react';
import { getDevices } from '../api';

export default class Devices extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            devices: []
        }
    }

    componentDidMount() {
        this.refreshDevices();
    }

    refreshDevices = async () => {
        this.setState({
            devices: await getDevices()
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Devices</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-3 offset-9">
                        <a href="#/devices/add" className="btn btn-primary float-right">Add device</a>
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
                            {this.state.devices.map((device, index) => (
                                <tr key={device.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{device.name}</td>
                                    <td>{device.address}:{device.port}</td>
                                    <td className="text-right">
                                        <div className="btn-group btn-group-toggle mr-2" role="group" data-toggle="buttons">
                                            <label className={`btn btn-outline-primary ${device.state === 'on' ? 'active' : ''}`}>
                                                <input type="radio"
                                                       name="state"
                                                       id="on"
                                                       autoComplete="off"
                                                       checked={device.state === 'on'} /> On
                                            </label>

                                            <label className={`btn btn-outline-primary ${device.state === 'off' ? 'active' : ''}`}>
                                                <input type="radio"
                                                       name="state"
                                                       id="off"
                                                       autoComplete="off"
                                                       checked={device.state === 'off'}/> Off
                                            </label>
                                        </div>

                                        <a href={`#/devices/edit/${device.id}`} className="btn btn-secondary mr-2">Edit</a>
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}