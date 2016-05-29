import test from 'ava';

import findObjFromProp from './index';

test('Works with single letters', t => {
	const result = findObjFromProp(
		[
			{a: 1, b: 2},
			{a: 1},
			{a: 1, b: 2, c: 2}
		], {a: 1, c: 2}
	);

	t.deepEqual(result, [{a: 1, b: 2, c: 2}]);
});
