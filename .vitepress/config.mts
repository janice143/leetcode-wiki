import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Leetcode Wiki',
  // description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/leetcode-concepts/' },
    //   { text: 'Examples', link: '/leetcode-concepts/markdown-examples' }
    // ],

    sidebar: [
      {
        // text: 'Examples',
        items: [
          {
            text: '算法概念',
            items: [
              { text: '01 数组', link: '/leetcode-concepts/array' },
              { text: '02 前缀和', link: '/leetcode-concepts/prefix' },
              { text: '03 排序', link: '/leetcode-concepts/sort' },
              { text: '04 二分查找', link: '/leetcode-concepts/binary-search' },
              {
                text: '05 滑动窗口和双指针',
                link: '/leetcode-concepts/slide-window'
              },
              { text: '06 递归和分治', link: '/leetcode-concepts/recursion' },
              { text: '07 哈希', link: '/leetcode-concepts/hashing-technique' },
              { text: '08 链表', link: '/leetcode-concepts/link' },
              { text: '09 二叉树', link: '/leetcode-concepts/binary-tree' },
              {
                text: '10 队列与栈',
                link: '/leetcode-concepts/queue-and-stack'
              },
              { text: '11 贪心算法讲解', link: '/leetcode-concepts/greedy' },
              { text: '12 线性&区间问题', link: '/leetcode-concepts/range' },
              { text: '13 回溯', link: '/leetcode-concepts/traverse' },
              {
                text: '14 深度优先搜索',
                link: '/leetcode-concepts/deep-search'
              },
              {
                text: '15 广度优先搜索',
                link: '/leetcode-concepts/breadth-search'
              },
              { text: '16 图', link: '/leetcode-concepts/graph' },
              {
                text: '17 动态规划算法讲解',
                link: '/leetcode-concepts/dynamic-programming'
              },
              { text: '18 状态压缩', link: '/leetcode-concepts/state' },
              {
                text: '19 树图、概率&博弈问题',
                link: '/leetcode-concepts/possibility'
              },
              { text: '20 并查集', link: '/leetcode-concepts/union-find' },
              { text: '21 堆', link: '/leetcode-concepts/heap' },
              { text: '22 数学技巧', link: '/leetcode-concepts/math' },
              { text: '23 位运算', link: '/leetcode-concepts/bit' },
              { text: '24 N 皇后问题', link: '/leetcode-concepts/n-queen' }
            ]
          },
          {
            text: 'JavaScript 33个概念',
            items: [{ text: '33个概念', link: '/js-33/index' }]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/janice143/leetcode-wiki' }
    ]
  }
});
