<template>
  <div>
      <img alt="Vue logo" src="../assets/banner.png" style="width:100%; height:400px">
    <div class="ui vertical segment">
      <div class="flexbox">
        <div class="flex-content">
         <div class="button-group">
            <button type="button" @click="" class="small ui button">reset</button>
            <button type="button" @click="showplayerfilter" class="small ui button">option select from parent</button>
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
})

    }
  },
  components: {
    ModelListSelect
  }
}
</script>
