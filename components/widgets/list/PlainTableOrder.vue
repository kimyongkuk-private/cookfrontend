<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title class="hidden-xs-only"><h4>주문</h4></v-toolbar-title>
      <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="search"
        label="검색"
        single-line
        hide-details
        ></v-text-field>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>      
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :expand="expand"
          no-data-text="데이터가 없습니다."
          no-results-text="검색 결과가 없습니다."
          class="elevation-0 table-striped"
        >
          <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
            <td class="pr-0">{{ props.item.manager }}</td>
            <td class="pr-0">{{ props.item.staff |capitalize }}</td>
            <td class="pa-0 text-xs-left"><a :href="'http://xn--9m1bl55c.kr/shop/search.php?q='+props.item.product">{{ props.item.product }}</a></td>
            <td class="pa-0 text-xs-left">{{ props.item.standard }}</td>

            <td class="pa-0 text-xs-left"><a :href="'https://www.google.co.kr/maps/search/'+props.item.location">{{ props.item.location }}</a></td>
            <td class="pa-0 text-xs-left" >{{ props.item.price }}</td>
            <td class="pa-0 text-xs-left" >
              <v-chip label small :color="getColorByStatus(props.item.payment)" text-color="white" >{{ props.item.payment }}</v-chip></td>
            <td class="pa-0 text-xs-left"><v-chip label small :color="getColorByStatus(props.item.status)" text-color="white" >{{ props.item.status }}</v-chip></td>
            </tr>
          </template>
                    
          <template v-slot:expand="props">
            <div class="pa-3">
              {{ props.item.memo }}
            </div>
            <div>
                <v-card flat>
                <v-btn flat icon color="grey">
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn flat icon color="grey">
                  <v-icon>event_note</v-icon>
                </v-btn>  
                </v-card>
            </div>

          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import items from '@/api/order';
export default {
  data () {
    return {
      search: '',
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
      items: items,
      colors: {
        '미결제': 'red',
        '메모참고': 'yellow',
        '결제완료': 'green',
        '배송중': 'blue',
        '대기': 'red',
        '배송완료': 'green'
      }
    };
  },
  computed: {
    randomColor () {
      let item = Math.floor(Math.random() * this.colors.length);
      return this.colors[item];
    },
  },
  methods: {
    getColorByStatus (status) {
      return this.colors[status];
    },
  },
    filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
};
</script>
