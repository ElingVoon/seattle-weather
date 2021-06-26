<template>
  <div id="climatefacts"  class="main">
    <h1>Climate Facts</h1>
    <h3>{{ factsList[factIndex].title }} </h3>
    <p>{{ factsList[factIndex].descr }}</p>
      <button v-on:click="randomize">Show me another fact</button>
      <a v-bind:href="url">credit</a>
  </div>
</template>

<script>
  export default {

    name: 'climatefacts',
    data(){
      return {
        url: 'https://www.noaa.gov/climate',
        factIndex: 0,
        factsList:
        [
          { title: "2019 was second-warmest year on record",
            descr: "Earth’s global average surface temperature was 1.71°F (0.95°C) above the 20th-century average in 2019. Nine of the 10 warmest years on record have occurred since 2005."
          },

          { title: "6 inches of water",
            descr: "A mere 6 inches of fast-moving flood water can knock over an adult. It takes just 12 inches of rushing water to carry away a small car, while 2 feet of rushing water can carry away most vehicles. It is NEVER safe to drive or walk into flood waters."
          },

          { title: "$1.16 trillion in damages",
            descr: "Over the past 15 years (2005-2019), there have been 156 separate billion-dollar weather or climate disasters in the U.S that have cost a combined $1.16 trillion in damages."
          },

          { title: "A month-long cyclone?",
            descr: "The longest-lived tropical cyclone (hurricane) on record was the Pacific’s Hurricane John, which lasted 31 days in 1994, from August 10–September 10."
          }
        ]
      }
    },
    // Return a random fact in the factIndex
    methods: {
        randomize: function() {
            this.factIndex = Math.floor(Math.random() * (this.factsList.length));
        }
    }
  }
</script>

<style lang="css" scoped>

h3 {
  font-size: 3rem;
  font-weight: lighter;
  color: #e96e50;
}

p {
  line-height: 2rem;
  font-weight: lighter;
  margin-top: -2rem;
}


a { padding-left: 1rem;
  text-decoration: none;
  font-size: .8rem;
  color: #0b6dff;
}

button {
  background: #0b6dff;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 10px;
}
</style>
