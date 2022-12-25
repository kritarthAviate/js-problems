// write your own test cases

import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
	test('reverses the passed args', () => {
		const flipped = flipArgs((el) => el);
		expect(flipped('1', '2', '3', '4')).toEqual([ '4', '3', '2', '1' ]);
	});
	test('reverses the passed args', () => {
		const flipped = flipArgs((el) => el);
		expect(flipped('a', 'b', 'c', 'd')).toEqual([ 'd', 'c', 'b', 'a' ]);
	});
});
