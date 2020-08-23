/**
 *
 * @param {object} object - Object that holds the value.
 * @param {string} key - Key of the value
 * @param {number} target - Target of the animation
 * @param {{spring: number, damping: number, friction: number, snapThreshold: number  }} options
 */
export function springu(object, key, target, options) {
	let current = object[key];
	let currentVelocity = object[key + "Velocity"];
	if (currentVelocity == null) {
		currentVelocity = 0;
	}
	// Don't use lerpy bc I prings needs the flooring after.
	let acceleration = (target - current) * options.spring;
	let velocity =
		(currentVelocity * options.damping + acceleration) * options.friction;

	if (Math.abs(velocity) < options.snapThreshold) {
		velocity = target - current;
	}
	object[key + "Velocity"] = velocity;
	return velocity;
}

export default springu;
