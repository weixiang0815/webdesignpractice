<template>
  <h2>{{ name }}</h2>
  <div>
    <button @click="changeName($event), increment(1, $event)">Change name</button>
  </div>
  <h2>{{ count }}</h2>
  <div>
    <button @click="increment(1, $event)">Increment 1</button>
    <button @click="increment(5, $event)">Increment 5</button>
    <button @click="decrement(1, $event)">Decrement 1</button>
    <button @click="decrement(5, $event)">Decrement 5</button>
  </div>
  <hr>
  <h2>{{ 5 + 2 + 3 }}</h2>
  <h2>{{ 10 + 5 + 15 }}</h2>
  <h2>Add method - {{ add(2, 3, 5) }}</h2>
  <h2>Add method - {{ add(10, 15, 20) }}</h2>
  <h2>Multiply method - {{ multiply(baseValue) }}</h2>
  <hr>
  <template v-for="name in names" :key="name">
    <h2 v-if="name === 'Bruce'">{{ name }}</h2>
  </template>
  <hr>
  <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>
  <h2 v-for="name in fullNames" :key="name">{{ name.first }} {{ name.last}}</h2>
  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>
  <h2 v-for="(value, key, index) in myInfo" :key="value">{{ index }}. {{ key }}: {{value }}</h2>
  <template v-for="name in names" :key="name">
    <h2>{{ name }}</h2>
    <hr>
  </template>
  <hr>
  <h2 v-if="num === 0">The number is zero</h2>
  <h2 v-else-if="num < 0">The number is negative</h2>
  <h2 v-else-if="num > 0">The number is positive</h2>
  <h2 v-else>Not a number</h2>
  <template v-if="display">
    <h2>Henry</h2>
    <h2>You're the most handsome guy in the world!</h2>
    <h2>Vue</h2>
  </template>
  <h2 v-show="showElement">Using v-show</h2>
  <h2 v-if="showElement">Using v-if</h2>
  <hr>
  <div>{{ greet }} {{ name }}</div>
  <div v-html="channel"></div>
  <div v-html="hack"></div>
  <h2 :id="headingId">Heading</h2>
  <button :disabled="isDisabled">Bind</button>
  <h2 class="underline">Underlined text</h2>
  <h2 class="underline" :class="status">Status</h2>
  <h2 :class="isPromoted && 'promoted'">Promoted Movies</h2>
  <h2 :class="isSoldout ? 'sold-out' : 'new'">Soldout? Movies</h2>
  <h2 :class="['new', 'promoted']">Newly promoted movies</h2>
  <h2 :class="[isPromoted && 'promoted', isSoldout ? 'sold-out' : 'new']">
    Array conditional movies
  </h2>
  <h2 :class="{
    promoted: isPromoted,
    new: !isSoldout,
    'sold-out': isSoldout,
  }">Object conditional movies</h2>
  <h2 :style="{
    color: highlightColor,
    fontSize: headerSize + 'px',
    padding: '20px',
  }">Inline Style</h2>
  <h2 :style="headerStyleObject">Style Object</h2>
  <div :style="[baseStyleObject, successStyleObject]">Success Style</div>
  <div :style="[baseStyleObject, dangerStyleObject]">Danger Style</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      greet: "Hello",
      name: "Henry",
      channel: "<b>You're the most handsome guy in the world!</b>",
      hack: `<a href="#" onclick="alert('You have been hacked!')">Win a prize!</a>`,
      headingId: "heading",
      isDisabled: false,
      status: "success",
      isPromoted: true,
      isSoldout: true,
      highlightColor: "orange",
      headerSize: 50,
      headerStyleObject: {
        color: 'orange',
        fontSize: '50px',
        padding: '20px',
      },
      baseStyleObject: {
        fontSize: '50px',
        padding: '10px',
      },
      successStyleObject: {
        color: 'green',
        backgroundColor: 'lightgreen',
        border: '1px solid green',
        padding: '20px',
      },
      dangerStyleObject: {
        color: 'darkred',
        backgroundColor: 'red',
        border: '1px solid red',
      },
      num: "Hi",
      display: true,
      showElement: false,
      names: ["Henry", "Bruce", "Clark", "Diana"],
      fullNames: [
        { first: "Henry", last: "Wang" },
        { first: "Bruce", last: "Wayne" },
        { first: "Clark", last: "Kent" },
        { first: "Princess", last: "Diana" },
      ],
      actors: [
        {
          name: "Christian Bale",
          movies: ["The Batman", "The Prestige"],
        },
        {
          name: "Di Caprio",
          movies: ["Titanic", "Inception"],
        },
      ],
      myInfo: {
        name: "Henry",
        channel: "You're the most handsome guy in the world!",
        course: "Vue 3",
      },
      baseMultiplier: 5,
      baseValue: 2,
      count: 0,
    };
  },
  methods: {
    changeName(event) {
      if(this.name === "Henry")
        this.name = "Batman";
      else if(this.name === "Batman"){
        this.name = "Henry";
      }
      console.log("Event", event);
    },
    add(a, b, c) {
      return a + b + c;
    },
    multiply (num) {
      return num * this.baseMultiplier;
      // don't use arrow functions
    },
    increment(num, event) {
      this.count += num;
      console.log("Event", event)
    },
    decrement(num, event) {
      this.count -= num;
      console.log("Event", event)
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: olivedrab;
}

.sold-out {
  color: red;
}
</style>
