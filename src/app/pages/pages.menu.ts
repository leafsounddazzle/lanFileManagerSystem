export const PAGES_MENU = [
  {
    id: 1,
    name: '文件',
    alias: 'file',
    icon: 'folder',
    children: [
      { id: 2, name: 'child1' },
      { id: 3, name: 'child2' }
    ]
  },
  {
    id: 4,
    name: '最近访问',
    alias: 'recents',
    icon: 'history',
    children: [
      { id: 5, name: 'child2.1' },
      {
        id: 6,
        name: 'child2.2',
        children: [
          { id: 7, name: 'subsub' }
        ]
      }
    ]
  },
  {
    id: 8,
    name: '共享',
    alias: "share",
    icon: "share"
  },
  {
    id: 9,
    name: '关于',
    alias: "about",
    icon: "help"
  }
];
