<template>
    <div class="output">{{translatedText}}</div>
</template>

<script>
export default {
    name: "TranslateOutput",
    data() {
        return {
            msg: "TranslateOutput"
        };
    },
    props: ["translatedText"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
