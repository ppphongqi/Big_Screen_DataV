<template>
  <div id="app">
    <dv-decoration-3 class="bg1" />
    <dv-decoration-1 class="bg2" />
    <img class="App-logo" src="./assets/app-logo.png" />
    <router-view class="router-view"/>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  width:100vw;
  position: relative;
  z-index: 1;
  background: url('./assets/bg.png') no-repeat;
  // background: url('../../assets/bg.png') no-repeat;
  background-size: 100% 100%;
  overflow-y: hidden;
}
.router-view{
  height:100vh;
  width:100vw;
  position: fixed;
  top:0;
  z-index: 10;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.bg1{
  width:2rem;
  height:.5rem;
  margin-left: 1rem;
}
.bg2{
  width:2rem;
  height:.5rem;
  position: fixed;
  right: 5.5rem;
  top:.7rem;
  z-index: 5;
}
.App-logo{
  position: fixed;
  z-index: 5;
  left: 2rem;
  top: 3rem;
}
// html, body{
//   height:100%;
//   width:100%;
// }
 /* 宽 1920  设计稿 1rem = 100px; */
:root {
  font-size: 5.208333333333334vw;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
