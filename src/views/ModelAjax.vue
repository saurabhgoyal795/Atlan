<template>
  <div>
      <img alt="Vue logo" src="../assets/banner.png" style="width:100%; height:400px">
    <div class="ui vertical segment">
      <div class="flexbox">
        <div class="flex-content">
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
        <div class="flex-result">
          <h4>input text(searchText)</h4>
          <p>{{searchText}}</p>
          <table class="ui celled table">
            <thead>
            <tr>
              <th>code</th>
              <th>name</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{selectedCountry.code}}</td>
              <td>{{selectedCountry.name}}</td>
            </tr>
            </tbody>
          </table>
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
    }
  },
  components: {
    ModelListSelect
  }
}
</script>
