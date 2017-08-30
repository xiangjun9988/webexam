export default [
	{
		key: 'questions',
		icon: 'book',
		title: '题库管理',
		item: [
			{
				key: 'unit',
				icon: 'paper-clip',
				title: '单元管理',
				item: [
					{
						key: 'add',
						icon: 'paper-clip',
						title: '单元添加',
						route: '/questions/unit/add'
					}
				]
			},
			{
				key: 'question',
				icon: 'file-text',
				title: '题目列表',
				route: '/questions/question'
			}
		]
	},
	{
		key: 'format',
		icon: 'tool',
		title: '格式化',
		item: [
			{
				key: 'text',
				icon: 'file-text',
				title: '文本',
				route: '/format/text'
			},
			{
				key: 'download',
				icon: 'file-text',
				title: '下载',
				route: '/format/download'
			}
		]
	},
	{
		key: 'user',
		icon: 'solution',
		title: '我',
		route: '/user/me'
	}
]