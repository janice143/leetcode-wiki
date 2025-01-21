import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Leetcode Wiki',
  // description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        // text: 'Examples',
        items: [
          { text: '01 数组', link: '/array' },
          { text: '02 前缀和', link: '/prefix' },
          { text: '03 排序', link: '/sort' },
          { text: '04 二分查找', link: '/binary-search' },
          { text: '05 滑动窗口和双指针', link: '/slide-window' },
          { text: '06 递归和分治', link: '/recursion' },
          { text: '07 哈希', link: '/hashing-technique' },
          { text: '08 链表', link: '/link' },
          { text: '09 二叉树', link: '/binary-tree' },
          { text: '10 队列与栈', link: '/queue-and-stack' },
          { text: '11 贪心算法讲解', link: '/greedy' },
          { text: '12 线性&区间问题', link: '/range' },
          { text: '13 回溯', link: '/traverse' },
          { text: '14 深度优先搜索', link: '/deep-search' },
          { text: '15 广度优先搜索', link: '/breadth-search' },
          { text: '16 图', link: '/graph' },
          { text: '17 动态规划算法讲解', link: '/dynamic-programming' },
          { text: '18 状态压缩', link: '/state' },
          { text: '19 树形、图上、概率&博弈问题', link: '/possibility' },
          { text: '20 并查集', link: '/union-find' },
          { text: '21 堆', link: '/heap' },
          { text: '22 数学技巧', link: '/math' },
          { text: '23 位运算', link: '/bit' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/janice143/leetcode-wiki' }
    ]
  }
});
