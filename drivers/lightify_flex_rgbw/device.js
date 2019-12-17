'use strict';

const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;

class LightifyRGBWFlexZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Flex RGBW': {
				approximation: {
					usageOff: 0.5,
					usageOn: 15,
				},
			},
		};
	}
}

module.exports = LightifyRGBWFlexZigBee;
