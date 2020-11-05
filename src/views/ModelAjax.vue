<template>

  <div>
    <img alt="Vue logo"  src="../assets/blurbg_v2_min.png" style="width:100vw; height:100vh"> </img>
    <div class="ui vertical segment" style="position: fixed;display: block;top: 0;width: 100%;max-width: 500px;height: 100vh;background: #fff;left: calc((100vw - 500px)/2);">
    <img alt="Vue logo" src="../assets/banner.png" style="width: 100%;">
      <div class="flexbox">
        <div class="flex-content">
         <div class="button-group">
            <button type="button" @click="showteamfilter" class="small ui button">Team</button>
            <button type="button" @click="showplayerfilter" class="small ui button">Players</button>
            <button type="button" @click="showmostrunfilter" class="small ui button">Most Runs</button>
          </div>
          <div id="conatiner1">
          <h3>Search Team Name</h3>
          <div>
            <model-list-select
              :list="countries"
              option-value="name"
              option-text="name"
              v-model="selectedCountry"
              placeholder="select team"
              @searchchange="searchCountry"
            >
            </model-list-select>
          </div>
          </div>
          <div id="conatiner2">
<h3>Search Player Data</h3>
          <div>
            <model-list-select
              :list="players"
              option-value="A"
              option-text="A"
              v-model="selectedPlayer"
              placeholder="select player"
              @searchchange="searchPlayer"
            >
            </model-list-select>
          </div>
        </div>
           <div id="conatiner3">
<h3>Search Most Run Data</h3>
          <div>
          
          </div>
        </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ModelListSelect } from '../lib'
import axios from 'axios'
 import Vue from 'vue';
import { ajaxFindCountry } from '../data/countriesApi'
import { ajaxFindPlayer } from '../data/playersApi'

export default {
  data () {
    return {
      countries: [],
      players: [],
      selectedCountry: {},
      selectedPlayer: {}
    }
  },
  methods: {
  searchPlayer (searchText) {
      this.searchText = searchText
      ajaxFindPlayer(searchText).then(response => {
        this.players = response
      })
    },
    searchCountry (searchText) {
      this.searchText = searchText
      ajaxFindCountry(searchText).then(response => {
        this.countries = response
      })
    },
    showplayerfilter () {
    new Vue({
 el: '#conatiner1',
 data () {
   return {
     isHidden: true
   }
 },
}, {
 el: '#conatiner2',
 data () {
   return {
     isHidden: false
   }
 },
}, {
 el: '#conatiner3',
 data () {
   return {
     isHidden: false
   }
 },
})

    },
     showteamfilter () {
    new Vue({
 el: '#conatiner1',
 data () {
   return {
     isHidden: false
   }
 },
}),
   new Vue({
 el: '#conatiner2',
 data () {
   return {
     isHidden: true
   }
 },
}),
  new Vue({
 el: '#conatiner3',
 data () {
   return {
     isHidden: false
   }
 },
})
    },
     showmostrunfilter () {
    new Vue({
 el: '#conatiner1',
 data () {
   return {
     isHidden: true
   }
 },
})
   new Vue({
 el: '#conatiner2',
 data () {
   return {
     isHidden: true
   }
 },
})
  new Vue({
 el: '#conatiner3',
 data () {
   return {
     isHidden: false
   }
 },
})

    }
  },
  components: {
    ModelListSelect
  }
}
</script>
