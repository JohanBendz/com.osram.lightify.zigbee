'use strict';

const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;

class LightifyRGBWZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Classic A60 RGBW': {
				approximation: {
					usageOff: 0.5,
					usageOn: 10,
				},
			},
			'CLA60 RGBW OSRAM': {
				approximation: {
					usageOff: 0.5,
					usageOn: 10,
				},
			},
			'CLA60 RGBW Z3': {
				approximation: {
					usageOff: 0.5,
					usageOn: 10,
				},
			},
		};
	}
}

module.exports = LightifyRGBWZigBee;