<template>
  <div id="app">
    <div id="navbar_main">
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper purple darken-3">
            <div class="container">
              <ul id="nav-mobile" class="left">
                <li>Hallo, {{ current_user.nickname }}</li>
              </ul>
              <ul id="nav-mobile" class="right">
                <li><%= link_to "Disconnect", logout_path, method: :delete %></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      current_user: {
        nickname: 'Thyago'
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
