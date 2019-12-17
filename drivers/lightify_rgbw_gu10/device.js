'use strict';

const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;

class LightifyRGBWZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'PAR 16 50 RGBW - LIGHTIFY': {
				approximation: {
					usageOff: 0.5,
					usageOn: 6,
				},
			},
			'PAR16 RGBW Z3': {
				approximation: {
					usageOff: 0.5,
					usageOn: 6,
				},
			}
		};
	}
}

module.exports = LightifyRGBWZigBee;