/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '课程粒度查询',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: '评论可信度查询' }
    },
    
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: '细粒度建议挖掘结果查询' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/sticky'),
      name: 'ComplexTable',
      meta: { title: '细粒度建议分析' }
    }
  ]
}
export default tableRouter
