

async function test() {
	return new Promise((resolve, reject) => {
		try {
			return new Promise((resolve, reject) => {
				try {
					n;
				} catch (b) {
					reject('a');
				}
			}).catch((e) => reject('b'));
		} catch (e) {
			reject('b');
		}
	});
}

test();
