// import BasicLayout from "@/layout/BasicLayout.vue";
import DemoLayout from "@/layout/DemoLayout.vue";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: DemoLayout,
    children: [
      {
        path: "/test",
        name: "测试构建",
        component: () =>
          import(/* webpackChunkName: "Test" */ "@/views/test/Index.vue"),
      },
      // {
      //   path: "/echarts",
      //   name: "echarts 图表",
      //   component: DemoLayout,
      //   children: [
      //     {
      //       path: "/line",
      //       name: "折线图",
      //       component: () =>
      //         import(
      //           /* webpackChunkName: "LineChart" */ "@/views/echarts/LineChart.vue"
      //         ),
      //     },
      //     {
      //       path: "/bar",
      //       name: "柱状图",
      //       component: () =>
      //         import(
      //           /* webpackChunkName: "BarChart" */ "@/views/echarts/BarChart.vue"
      //         ),
      //     },
      //     {
      //       path: "/pie",
      //       name: "饼图",
      //       component: () =>
      //         import(
      //           /* webpackChunkName: "PieChart" */ "@/views/echarts/PieChart.vue"
      //         ),
      //     },
      //   ],
      // },
      // {
      //   path: "/pro-table",
      //   name: "ProTable 高级表格",
      //   component: DemoLayout,
      //   children: [
      //     {
      //       path: "/basic1",
      //       name: "基本使用1",
      //       component: () =>
      //         import(
      //           /* webpackChunkName: "ProTableData" */ "@/views/pro-table/ProTableData.vue"
      //         ),
      //     },
      //     {
      //       path: "/basic2",
      //       name: "基本使用2",
      //       component: () =>
      //         import(
      //           /* webpackChunkName: "ProTableRequest" */ "@/views/pro-table/ProTableRequest.vue"
      //         ),
      //     },
      //     {
      //       path: "/slot",
      //       name: "表格插槽",
      //       component: () =>
      //         import(
      //           /* webpackChunkName: "ProTableSlot" */ "@/views/pro-table/ProTableSlot.vue"
      //         ),
      //     },
      //     {
      //       path: "/edit",
      //       name: "表格编辑",
      //       component: () =>
      //         import(
      //           /* webpackChunkName: "ProTableEdit" */ "@/views/pro-table/ProTableEdit.vue"
      //         ),
      //     },
      //   ],
      // },
    ],
  },
];

export default routes;
