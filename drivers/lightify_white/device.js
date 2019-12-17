'use strict';

const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;

class LightifyWhiteZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Classic A60 TW': {
				approximation: {
					usageOff: 0.5,
					usageOn: 9.5,
				},
			},
			'CLA60 TW OSRAM': {
				approximation: {
					usageOff: 0.5,
					usageOn: 9.5,
				},
			},
		};
	}
}

module.exports = LightifyWhiteZigBee;