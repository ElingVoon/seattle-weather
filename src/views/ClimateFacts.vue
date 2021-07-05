<template>
  <div class="main">
    <h1>Climate Facts</h1>
      <div id="climatefacts" class="flex-container">
        <div class="flex-left">
          <h3>{{ factsList[factIndex].title }} </h3>
          <p>{{ factsList[factIndex].descr }}</p>
        </div>

        <div class="flex-right">
          <button v-on:click="randomize"><font-awesome-icon class="fas fas-spin-hover"  :icon="['fas', 'sync-alt']" /> Next Fact</button>
          <a v-bind:href="url">credit</a>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'climatefacts',
    data(){
      return {
        url: 'https://www.noaa.gov/climate',
        // imageSrc: 'require(@/assets/img/next_icon.png)',
        // imageAlt: "image alt description",
        factIndex: 0,
        factsList:
        [
          { title: "2020 was Earth’s 2nd-hottest year, just behind 2016",
            descr: "2020 ranks as the second-hottest year on record for the planet, knocking 2019 down to third hottest, according to an analysis by NOAA scientists. The average land and ocean surface temperature across the globe in 2020 was 1.76° F (0.98° C) above average."
          },

          { title: "6 inches of water",
            descr: "A mere 6 inches of fast-moving flood water can knock over an adult. It takes just 12 inches of rushing water to carry away a small car, while 2 feet of rushing water can carry away most vehicles. It is NEVER safe to drive or walk into flood waters."
          },

          { title: "$1.16 trillion in damages",
            descr: "Over the past 15 years (2005-2019), there have been 156 separate billion-dollar weather or climate disasters in the U.S that have cost a combined $1.16 trillion in damages."
          },

          { title: "A month-long cyclone?",
            descr: "The longest-lived tropical cyclone (hurricane) on record was the Pacific’s Hurricane John, which lasted 31 days in 1994, from August 10–September 10."
          },
          { title: "50,000° Fahrenheit",
            descr: "Lightning can heat the air to 50,000° Fahrenheit -- about 5 times hotter than the surface of the sun."
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
  .flex-container {
    display: flex;
    flex-direction: row;
  }
  .flex-left {
      width: 75%;
      height: auto; /*fixed height */
      border-right: 1px solid #999;
      padding-right: 2rem;
  }
  .flex-right {
      width: 25%;
      padding-left: 2rem;
  }

  img {
    -webkit-filter: hue-rotate(180deg);
    filter: hue-rotate(180deg);
  }

  h3 {
    font-size: 2.5rem;
    font-weight: lighter;
    color: #e96e50;
    margin-top: -.75rem;
  }

  p {
    line-height: 2rem;
    font-weight: lighter;
    margin-top: -2rem;
  }

  a {
    padding-left: 1rem;
    text-decoration: none;
    font-size: .8rem;
    color: #0b6dff;
  }

  button {
    background-color: DodgerBlue; /* Blue background */
    border: none; /* Remove borders */
    color: white; /* White text */
    padding: 12px 16px; /* Some padding */
    font-size: .75rem; /* Set a font size */
    font-weight: lighter;
    border-radius: 5%;
    cursor: pointer; /* Mouse pointer on hover */
  }

  .fas {
    font-size: 1.5rem; /* Set a font size */
  }
  .fas-spin-hover:hover {
    animation: fas-spin 1s linear; /* infinite is opposite */
  }

  @-webkit-keyframes
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

  @keyframes fas-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

  /* button:hover {
  transform: scale(1.05, 1.05);
  } */




  /* button {
    background: #0b6dff;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 10px;
  } */
</style>
