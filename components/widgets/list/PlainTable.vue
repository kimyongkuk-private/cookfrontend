<template>
  <v-card class="plaintable">
    <v-toolbar card dense color="transparent">

      <v-toolbar-title class="hidden-xs-only">
        <h4>{{titleData}}</h4>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="search"
        label="검색"
        single-line
        hide-details>
      </v-text-field>

    </v-toolbar>
    
    <v-divider></v-divider>

    <v-card-text class="pa-0">
      <template>
        <div>
          <v-data-table 
            :headers="headerData"
            :items="data"
            :search="search"
            :expand="expand"
            no-data-text="데이터가 없습니다."
            no-results-text="검색 결과가 없습니다."
            class="elevation-0  table-striped"
            item-key="id">
          <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props" >
              <tr @click="props.expanded = !props.expanded">
                <td class="pr-0 text-xs-left">
                  <v-avatar size="36px">
                    <img :src="props.item.avatar" :alt="props.item.username" />
                  </v-avatar>
                  {{ props.item.name }}
                </td>

                <td class="pr-0 text-xs-left nowrap">{{ props.item.date }}</td>
                  <td class="pa-0 text-xs-left  text-xs-left">
                  <v-textarea
                  no-resize
                  solo
                  hide-details
   
            v-model="props.item.title"
            :value="props.item.title"
                  :readonly="readonly">
                  </v-textarea></td>
              </tr>
            </template>
            
            <template v-slot:expand="props">
                    <v-textarea
                      class="pa-3"
                      name="input-7-1"
                      :solo="readonly ?true :false"
                      label="수정"
                      :readonly="readonly"
                      v-model="props.item.memo"
                      :value="props.item.memo"
                      auto-grow>
                      </v-textarea>
              <div>
                  <v-card flat>
                    <v-btn flat icon color="grey"
                    @click="change">
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn flat icon color="grey"
                    @click="del">
                      <v-icon>delete</v-icon>
                    </v-btn>   
                    <v-btn flat icon color="grey">
                      <v-icon>event_note</v-icon>
                    </v-btn>  
                  </v-card>
              </div>

            </template>

          </v-data-table>
        </div>
      </template>

      <v-divider></v-divider>

    </v-card-text>
  </v-card>
</template>
<style lang="stylus">

.plaintable thead tr
        display flex
        flex-direction column

.plaintable tbody tr
        display flex
        flex-direction column
.plaintable tbody tr td
        height auto !important

</style>

<script>
export default {
  props: ['titleData','headerData','data'],
  data () {
    return {
      search: '',
      expand: false,
      readonly: true,
      type:'box'
    };
  },
  methods:{
        change () {
       this.readonly = !this.readonly;
    },
        del () {
    
    }
  },
  computed: {
  }
};
</script>
