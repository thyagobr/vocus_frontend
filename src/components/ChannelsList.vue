<template>
  <div id="channels_list">
    <ChannelsSearch></ChannelsSearch>
  </div>
</template>

<script>
import ChannelsSearch from '@/components/ChannelsSearch'

export default {
  name: 'channels_list',
  components: {
    ChannelsSearch
  },
  data () {
    return {}
  }
}
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
