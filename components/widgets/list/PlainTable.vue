<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>업무</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="projects"
          hide-actions
          class="elevation-0"
        >
          <template slot="items" slot-scope="props">
            <td>
              <v-avatar size="36px">
                <img :src="props.item.avatar" :alt="props.item.username" />
              </v-avatar>
            </td>
            <td class="pa-0">{{ props.item.name }}</td>
            <td class="pa-0 text-xs-left nowrap">{{ props.item.date }}</td>
            <td class="pa-0 text-xs-left">{{ props.item.memo }}</td>
            <td class="pa-0 text-xs-right">
              <v-btn flat icon color="grey">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn flat icon color="grey">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
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
      headers: [
        {
          text: '',
          align: 'center',
          sortable: false,
          value: 'avatar',
          class:'pr-0'
        },
        {
          text: '이름',
          align: 'left',
          value: 'name',
          class:'pa-0'
        },
        { text: '날짜', value: 'date', align: 'left', class:'pr-0' },
        { text: '업무내용', value: 'memo', class:'pa-0' },
        { text: 'Action', value: 'action', align: 'right', class:'pl-0' },

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
