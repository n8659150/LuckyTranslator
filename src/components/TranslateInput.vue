<template>
    <div>
        <input type="text" v-model="inputText" placeholder="请输入需要翻译的内容">
        <select v-model="language">
            <option value="en">English</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="zh">Chinese</option>
        </select>
        <button type="button" @click="formSubmit">翻译</button>
    </div>
</template>

<script>
export default {
    name: "TranslateInput",
    data() {
        return {
            inputText: "",
            language: "zh"
        };
    },
    methods: {
        formSubmit() {
            this.$emit("transTrigger", this.inputText, this.language);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
