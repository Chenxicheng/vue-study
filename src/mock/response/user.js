import Mock from 'mockjs'
const Random = Mock.Random
export const getUserInfo = (options) => {
	const template = {
		'str|3-5': 'cxc',
		'name|2': 'cxc',
		'age|+1': 18,
		'num|4-10': 0,
		'float|3-10.2-5': 0,
		'bool|1': true,
		'bool2|1-9': true, // min/(min+max)
		'obj|2': {
			a: 'aa',
			b: 'bb',
			c: 'cc'
		},
		'obj2|1-2': {
			a: 'aa',
			b: 'bb',
			c: 'cc'
		},
		'arr|2-4': [1,2,3,4],
		'arr2|2': ['a','b'],
		'func': () => {
			return 'this is function'
		},
		'reg': /[1-9][a-z]/,
		'email': Mock.mock('@email'),
		'range': Random.range(3, 10, 2),
		'date': Random.date('yyyy-MM-dd'),
		'time': Random.time('hh:mm:ss'),
		'dateTime': Random.datetime('yyyy-MM-dd HH:mm:ss'),
		'now': Random.now('hour', 'yyyy-MM-dd HH:mm:ss'),
		'img': Random.image('100x200', '#00ff00', '#fff', 'png','cxc'),
		'img_base64': Random.dataImage(),
		'color': Random.color(),
		cword: Random.cword('九分裤第十六届分开了撒旦教弗兰克', 2, 10),
		cname: Random.cname(),
		email2: Random.email('163.com'),
		region: Random.region(),
		province: Random.province(),
		city: Random.city(true),
		county: Random.county(true),
		zip: Random.zip(),
		upperFirstLetter: Random.capitalize('cxc'),
		pick: Random.pick([1, 2, 3]),
		shuffle: Random.shuffle([1, 2, 3, 4]),
		guid: Random.guid(),
		fruit: Random.fruit()
	}
	// let arr = []
	// let i = 3
	// while (i--) {
	// 	arr.push(template)
	// }

	return Mock.mock(template)
}