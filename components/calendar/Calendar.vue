<template>
  <v-layout>

    <v-flex>
      <v-sheet height="750">
        <v-calendar
          locale="ko-kr"
          :now="today"
          :value="today"
          color="primary"
          first-interval="12"
          interval-count="32"
          interval-minutes="30"
          type="day">
                     <template v-slot:dayHeader="{ present }">
                        <template
                          v-if="present"
                          class="text-xs-center">Today</template>
                        </template>
                        
              <template v-slot:interval="{ time }">
              <template v-for="event in eventsMap[time]">
                                    
              <v-menu
                :key="event.title"
                v-model="event.open"
                full-width
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <div
                    v-if="!event.time"
                    v-ripple
                    class="my-event"
                    v-on="on"
                    v-html="event.title"
                  ></div>
                </template>
                <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                >
                  <v-toolbar
                    color="primary"
                    dark
                  >
                    <v-btn icon>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="event.title"></v-toolbar-title>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-title primary-title>
                    <span v-html="event.details"></span>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="secondary"
                    >
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
            <v-flex></v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      today: '2019-04-03',
      events: [
        {
          title: '일정1',
          details: '일정1 details',
          date: '2019-04-03',
          hour: '09:00',
          open: false
        },
        {
          title: '일정2',
          date: '2019-04-03',
          details: '일정2 details',
          hour: '11:00',
          open: false
        },
        {
          title: '일정2',
          date: '2019-04-03',
          details: '일정2 details',
          hour: '11:00',
          open: false
        },
        {
          title: '일정3',
          date: '2019-04-03',
          details: '일정3 details',
          hour: '12:00',
          open: false
        }
      ]
    }),
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.hour] = map[e.hour] || []).push(e))
        return map
      }
    },
    methods: {
      open (event) {
        alert(event.title)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>