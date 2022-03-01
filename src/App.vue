<template>
    <Navbar1 />
    <!-- <SearchBar /> -->
    <!-- <TestCom /> -->
    <!-- <TesCom /> -->
    <div>
        <router-view />
    </div>
</template>
<script>
import Navbar1 from './components/Navbar1.vue'
// import SearchBar from './components/SearchBar.vue'
// import TestCom from './components/TestCom.vue'
// import TesCom from './components/TesCom.vue'
export default {
    components: {
        Navbar1,
        // SearchBar,
        // TestCom,
        // TesCom,
    },
}
</script>
<style>
* {
    box-sizing: border-box;
}
</style>
