'use strict';

const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;

class LightifyGardenpoleRGBWZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Gardenpole RGBW-Lightify': {
				approximation: {
					usageOff: 0.5,
					usageOn: 43.5,
				},
			},
			'Gardenpole Mini RGBW OSRAM': {
				approximation: {
					usageOff: 0.5,
					usageOn: 21,
				},
			},
		};
	}
}

module.exports = LightifyGardenpoleRGBWZigBee;
