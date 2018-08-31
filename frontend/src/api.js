let index = 3;
let devices = {
    1: {
        id: 1,
        name: 'Device #1',
        address: '192.168.1.50',
        port: 90,
        state: 'on'
    },
    2: {
        id: 2,
        name: 'Device #2',
        address: '192.168.1.60',
        port: 80,
        state: 'off'
    }
};

export async function getDevices() {
    return Object.values(devices);
}

export async function getDeviceById(deviceId) {
    return devices[deviceId];
}

export async function addDevice(device) {
    index += 1;
    devices[index] = {
        id: index,
        state: 'off',
        ...device
    };
}

export async function removeDevice(deviceId) {
    devices = {
        ...devices,
        [deviceId]: undefined
    };

    delete devices[deviceId];
}

export async function updateDevice(deviceId, data) {
    devices = {
        ...devices,
        [deviceId]: {
            ...devices[deviceId],
            ...data
        }
    };
}

export async function switchOn(deviceId) {
    await updateDevice(deviceId, {
        state: 'on'
    });
}

export async function switchOff(deviceId) {
    await updateDevice(deviceId, {
        state: 'off'
    });
}