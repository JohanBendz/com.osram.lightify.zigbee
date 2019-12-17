'use strict';

const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;

class LightifyGardenspotMiniRGBZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Gardenspot RGB': {
				approximation: {
					usageOff: 0.5,
					usageOn: 40.5,
				},
			}
		};
	}
}

module.exports = LightifyGardenspotMiniRGBZigBee;