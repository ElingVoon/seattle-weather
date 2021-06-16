<template>
  <div id="climatefacts">
    <h1>Climate Facts page</h1>
      <p>{{ factsList[factIndex] }}</p>
      <button v-on:click="randomize">Show me another fact</button>
      <p><a v-bind:href="url">credit</a></p>
  </div>
</template>

<script>
  export default {
    name: 'climatefacts',
    data(){
      return {
        url: 'https://www.noaa.gov/climate',
        factIndex: 0,
        factsList: [
            '2019 was second-warmest year on record - Earth’s global average surface temperature was 1.71°F (0.95°C) above the 20th-century average in 2019. Nine of the 10 warmest years on record have occurred since 2005.',

            '6 inches of water - A mere 6 inches of fast-moving flood water can knock over an adult. It takes just 12 inches of rushing water to carry away a small car, while 2 feet of rushing water can carry away most vehicles. It is NEVER safe to drive or walk into flood waters.',

            '$1.16 trillion in damages - Over the past 15 years (2005-2019), there have been 156 separate billion-dollar weather or climate disasters in the U.S that have cost a combined $1.16 trillion in damages.',

            'A month-long cyclone? - The longest-lived tropical cyclone (hurricane) on record was the Pacific’s Hurricane John, which lasted 31 days in 1994, from August 10–September 10.'
        ]
      }
    }
  }
</script>
