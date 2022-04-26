/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '校园粒度统计分析',
    icon: 'component'
  },
  children: [

    
    
     {
      path: 'sticky1',
      component: () => import('@/views/components-demo/sticky1'),
      name: 'StickyDemo1',
      meta: { title: '可信度及影响因素统计分析' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: '细粒度建议词组统计分析' }
    }
    
    
  ]
}

export default componentsRouter
