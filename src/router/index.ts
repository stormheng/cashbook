import Vue from 'vue'
import VueRouter from 'vue-router'
import Bill from '@/views/Bill.vue';
import Money from '@/views/Money.vue';
import Charts from '@/views/Charts.vue';
import Exception from '@/views/Exception.vue';
import Tags from '@/views/Tags.vue';
import EditRecord from '@/views/EditRecord.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/money',
    meta: { title: "记一笔" }
  },
  {
    path: '/bill',
    name: 'Bill',
    meta: { title: "收支明细" },
    component: Bill
  },
  {
    path: '/money',
    name: 'Money',
    meta: { title: "记一笔" },
    component: Money
  },
  {
    path: '/tags',
    name: 'Tags',
    meta: { title: "添加类别" },
    component: Tags
  },
  {
    path: '/charts',
    name: 'Charts',
    meta: { title: "图表统计" },
    component: Charts
  },
  {
    path: '/record/edit/:id',
    name: 'EditRecord',
    meta: { title: "编辑记录" },
    component: EditRecord
  },
  {
    path: '*',
    meta: { title: "404" },
    component: Exception
  }
]

const router = new VueRouter({
  routes
})

export default router
