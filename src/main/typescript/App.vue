<template>
    <nav>
        <h1>{{title}}</h1>
    </nav>

    <!-- <section id="content">
        <ui-label text="test label"></ui-label>
    </section> -->
</template>

<script lang="ts">
    import { App } from "./App.ts";
    let app = new App();
    // let app = {
    //     data: function () {
    //         return {
    //             title: "test"
    //         }
    //     }
    // };

    export default app;
</script>

<style>
    nav {
        background-color: purple;
        color: white;
        padding: 1px;
        padding-left: 30px;
    }

</style>
