'use strict';

const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;

class LightifyGardenpoleMiniRGBWZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Gardenpole Mini RGBW-Lightify': {
				approximation: {
					usageOff: 0.5,
					usageOn: 21,
				},
			},
		};
	}
}

module.exports = LightifyGardenpoleMiniRGBWZigBee;
