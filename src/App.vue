<template>
  <div id="app" class="flex">
    <div class="flex output">
        <TranslateOutput :translatedText="translatedText"></TranslateOutput>
    </div>
    <div class="flex">
        <TranslateInput v-on:transTrigger="fetchTransText"></TranslateInput>
    </div>
    
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
        async fetchTransText(text, fromLang, toLang) {
            let result = await this.$http.get(
                `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181110T142154Z.ade6b56e86bc8bbf.84a546abec3e91c7f4e8b499d6afb3beb491ccf9&lang=${fromLang}-${toLang}&text=${text}`
            );
            if(result.data) {
                this.$Message.success('翻译成功')
                this.translatedText = result["data"]["text"][0];
            }
            
        }
    }
};
</script>

<style>
html,body {
    height:100%;
    min-height:100%;
    margin:0;
    padding:0;
}
#app {
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.flex {
    display:flex;
}
.output {
    font-size: 48px;
}
</style>
