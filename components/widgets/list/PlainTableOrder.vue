<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title class="hidden-xs-only"><h4>{{titleData}}</h4></v-toolbar-title>
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
          :headers="headerData"
          :items="data"
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
export default {
  props: ['titleData','headerData','data','colors'],
  data: function () {
    return {
      search: '',
      expand: false
    };
  },
  computed: {
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
