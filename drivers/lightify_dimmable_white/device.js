'use strict';

const ZigBeeLightDevice = require('homey-meshdriver').ZigBeeLightDevice;

class LightifyDimmableWhiteZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Classic A60 W clear - LIGHTIFY': {
				approximation: {
					usageOff: 0.5,
					usageOn: 9.5,
				},
			},
			'Classic A60 W clear - LIGHTYFY': {
				approximation: {
					usageOff: 0.5,
					usageOn: 9.5,
				},
			},
		};
	}
}

module.exports = LightifyDimmableWhiteZigBee;
