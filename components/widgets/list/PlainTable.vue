<template>
  
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title class="hidden-xs-only"><h4>업무</h4></v-toolbar-title>
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
        <div>
        <v-data-table
          :headers="headers"
          :items="projects"
          :search="search"
          :expand="expand"
          no-data-text="데이터가 없습니다."
          no-results-text="검색 결과가 없습니다."
          class="elevation-0"
          item-key="id"
        >
        <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
          <template slot="items" slot-scope="props" >
            <tr @click="props.expanded = !props.expanded">
              <td class="pr-0 text-xs-left">
                <v-avatar size="36px">
                  <img :src="props.item.avatar" :alt="props.item.username" />
                </v-avatar>
                {{ props.item.name }}
              </td>
              <td class="pr-0 text-xs-left  text-xs-left">{{ props.item.title }}</td>
              <td class="pl-0 text-xs-left text-xs-right nowrap">{{ props.item.date }}</td>
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

<script>
import { Projects } from '@/api/project';
import 'assets/style/components/plain_table.styl';

export default {
  data () {
    return {
      search: '',
      expand: false,
      headers: [
        {
          text: '이름',
          align: 'left',
          value: 'name',
          class:'pr-0'
        },
        { text: '업무', value: 'title', align: 'left', class:'pr-0' },
        { text: '날짜', value: 'date', align: 'right', class:'pl-0' }
      ],
    };
  },
  computed: {
    projects () {
      return Projects;
    }
  }
};
</script>
