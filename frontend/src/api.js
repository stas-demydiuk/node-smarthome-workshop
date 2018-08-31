const devices = [{
    id: 1,
    name: 'Device #1',
    address: '192.168.1.50',
    port: 90,
    state: 'on'
}, {
    id: 2,
    name: 'Device #2',
    address: '192.168.1.60',
    port: 80,
    state: 'off'
}];

export async function getDevices() {
    return devices;
}

export async function getDeviceById(id) {
    return devices.find(device => device.id === id);
}

export async function addDevice(device) {
    devices.push({
        id: devices.length + 1,
        ...device,
    });
}

export async function removeDevice(id) {
    const device = devices.find(device => device.id === id);
    devices.splice(devices.indexOf(device), 1);
}

export async function updateDevice(id, data) {
    const device = devices.find(device => device.id === id);
    Object.assign(device, data);
}