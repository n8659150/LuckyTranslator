<template>
  <div id="app">
    <TranslateInput v-on:transTrigger="fetchTransText"></TranslateInput>
    <TranslateOutput :translatedText="translatedText"></TranslateOutput>
  </div>
</template>

<script>
import TranslateInput from "./components/TranslateInput";
import TranslateOutput from "./components/TranslateOutput";
export default {
    name: "App",
    components: {
        TranslateInput,
        TranslateOutput
    },
    data() {
        return {
            translatedText: ""
        };
    },
    methods: {
        async fetchTransText(text, language) {
            let result = await this.$http.get(
                `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181110T142154Z.ade6b56e86bc8bbf.84a546abec3e91c7f4e8b499d6afb3beb491ccf9&lang=${language}&text=${text}`
            );
            this.translatedText = result["data"]["text"][0];
        }
    }
};
</script>

<style>
</style>
