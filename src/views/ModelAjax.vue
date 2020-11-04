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
          <h3>Dynamic Search with ajax (country name)</h3>
          <div>
            <model-list-select
              :list="countries"
              option-value="code"
              option-text="name"
              v-model="selectedCountry"
              placeholder="select item"
              @searchchange="searchCountry"
            >
            </model-list-select>
          </div>
          </div>
                    <div id="conatiner2">
                              <h3>fffjf</h3>

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

export default {
  data () {
    return {
      countries: [],
      selectedCountry: {}
    }
  },
  methods: {
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
