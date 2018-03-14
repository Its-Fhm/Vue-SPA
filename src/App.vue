<template>
  <div id="app">
    <b-navbar toggleable="md" type="light"  fixed="top" class="indy-blue">
      <b-navbar-brand v-bind:to="'/'"><icon-base /></b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="mx-auto">
            <b-nav-item v-bind:to="'/products'">Products</b-nav-item>
            <b-nav-item v-bind:to="'/bounty'">Bounty</b-nav-item>
            <b-nav-item v-bind:to="'/contact'">Contact</b-nav-item>
            <b-nav-item v-bind:to="'/about'">About Indie</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav left>

          <b-nav-form>
            <b-button size="lg" class="my-2 my-sm-0 purple-btn" v-b-modal.modal1><icon-arrow />Get cover</b-button>
          </b-nav-form>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <router-view></router-view>
    <b-modal id="modal1" title="IndieFin">
        <p class="my-4">Let's get a quote!</p>
    </b-modal>
  </div>
</template>

<script>
import IconBase from './components/icons/IconBase'
import IconArrow from './components/icons/IconArrow'

export default {
  name: 'app',
  components: {
    IconBase,
    IconArrow
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
  color: #42b983;
}
.nav-item {
  a{
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
    color: #637381;
  }
}

.indy-blue {
  background: linear-gradient(90deg, #fff 50%, #DCEBFF 50%);
  box-shadow: 0 2px 0 0 #f8f9fa;
  border-width: .2rem;

}

.purple-btn {
  background-color: #8b55eb;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
  svg {
    position: relative;
    top: 4px;
    left: -6px;
  }
}
/* Portrait and Landscape */
@media only screen and (min-device-width: 314px) and (max-device-width: 736px)  {
  .indy-blue{
    background:#fff;
    border-bottom: solid #fff;
    .navbar-toggler{
      border:none;
    }
  }

}
</style>
