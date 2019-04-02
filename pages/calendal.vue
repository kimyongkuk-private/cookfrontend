<template>
 <Calendar></Calendar>
</template>

<script>
  import API from '@/api';
  import Calendar from '@/components/calendar/Calendar';

  export default {
    layout: 'dashboard',
    components: {
      Calendar
    },
    data: () => ({
        }),
    computed: {

    },

  };
</script>
