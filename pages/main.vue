<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12 sm12 xs12>
          <plain-table :title-data="planTable.title" :header-data="planTable.headers" :data="getTableData"></plain-table>
        </v-flex>
        <v-flex lg12 sm12 xs12>
          <plain-table-order  :title-data="planTableOrder.title" :header-data="planTableOrder.headers"  :data="getTableOrderData"
          :colors="planTableOrder.colors"></plain-table-order>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import API from '@/api';
  import PlainTable from '@/components/widgets/list/PlainTable';
  import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';


  export default {
    layout: 'dashboard',
    components: {
      PlainTable,
      PlainTableOrder
    },
    data: () => ({
      planTable:{
      title:'업무',
      headers:[
        { text: '이름', align: 'left',value: 'name', class:'pr-0' },
        { text: '날짜', value: 'date', align: 'left', class:'pr-0' },
        { text: '제목', value: 'title', align: 'left', class:'pr-0' }
      ]},
      planTableOrder:{
      title:'주문',
      headers: [
        { text: '담당자', value: 'manager' },
        { text: '배송사원', value: 'staff' },
        { text: '물품', value: 'product' },
        { text: '규격', value: 'standard' },
        { text: '위치', value: 'location' },
        { text: '가격', value: 'price' },
        { text: '결제', value: 'payment' },
        { text: '상태', value: 'status' },
      ],
      colors: {
        '미결제': 'red',
        '메모참고': 'yellow',
        '결제완료': 'green',
        '배송중': 'blue',
        '대기': 'red',
        '배송완료': 'green'
      }
      }}),
    computed: {
      getTableData() {
      return API.getProject();
      },
      getTableOrderData() {
      return API.getOrder();
      }
    },

  };
</script>
