<template>
    <p>
        <span>{{text}}</span>
        <input ref="text-input" :value="text" @input="onChange"></input>
    </p>

</template>

<script lang="ts">
    import { UILabel } from "./UILabel.ts";
    export default UILabel;
</script>

<style>

</style>
