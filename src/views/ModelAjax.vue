<template>

  <div>
    <img alt="Vue logo"  src="../assets/blurbg_v2_min.png" style="width:100vw; height:100vh"/>
    <div class="ui vertical segment" style="position: fixed;display: block;top: 0;width: 100%;max-width: 500px;height: 100vh;background: #fff;left: calc((100vw - 500px)/2);">
      <img alt="Vue logo" src="../assets/banner.png" style="width: 100%;">
      <div class="flexbox">
        <div class="flex-content"  style="width: 80%;">
         <div class="button-group">
          <button type="button" @click="showteamfilter" style="padding: 8px 12px;" >Team</button>
          <button type="button" @click="showplayerfilter" style="padding: 8px 12px; margin-left:8px">Players</button>
          <button type="button" @click="showmostrunfilter" style="padding: 8px 12px; margin-left:8px">Most Runs</button>
        </div>
        <div id="conatiner1"  v-bind:class="[isActive ? show : 'hide']">
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
      <div id="conatiner2"  v-bind:class="[isActive2 ? show : 'hide']">
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
    <div id="conatiner3"  v-bind:class="[isActive3 ? show : 'hide']">
      <h3>Search Most Run Data</h3>
      <div>
        <model-list-select
        :list="mostruns"
        option-value="batsman"
        option-text="batsman"
        v-model="selectedMostRunPlayer"
        placeholder="Search Player"
        @searchchange="searchPlayerWithMostRun"
        >
      </model-list-select>
    </div>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
import { ModelListSelect } from '../lib'
import { ajaxFindCountry } from '../data/countriesApi'
import { ajaxFindPlayer } from '../data/playersApi'
import { ajaxFindMostRun } from '../data/mostrunsApi'

export default {
  data () {
    return {
      countries: [],
      players: [],
      mostruns: [],
      isActive: true,
      isActive2: false,
      isActive3: false,
      selectedCountry: {},
      selectedPlayer: {},
      selectedMostRunPlayer: {}
    }
  },
  methods: {
    searchPlayer (searchText) {
      this.searchText = searchText
      ajaxFindPlayer(searchText).then(response => {
        this.players = response
      })
    },
    searchPlayerWithMostRun (searchText) {
      this.searchText = searchText
      ajaxFindMostRun(searchText).then(response => {
        this.mostruns = response
      })
    },
    searchCountry (searchText) {
      this.searchText = searchText
      ajaxFindCountry(searchText).then(response => {
        this.countries = response
      })
    },
    showplayerfilter () {
      this.isActive = false
      this.isActive2 = true
      this.isActive3 = false
    },
    showteamfilter () {
      this.isActive = true
      this.isActive2 = false
      this.isActive3 = false
    },
    showmostrunfilter () {
      this.isActive = false
      this.isActive2 = false
      this.isActive3 = true
    }
  },
  components: {
    ModelListSelect
  }
}
</script>
