<template>
    <div class="inputWrapper">
        <select v-model="fromLang" size="large" class="languageSelect">
            <option value="en">English</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="zh">Chinese</option>
        </select>
        <span class="divider">To</span>
        <select v-model="toLang" size="large" class="languageSelect">
            <option value="en">English</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="zh">Chinese</option>
        </select>
        <!-- <at-input type="text" v-model="inputText" size="normal" placeholder="请输入需要翻译的内容"></at-input>
        <at-button type="button" @click="formSubmit">翻译</at-button> -->
        <at-input type="text" v-model="inputText" size="large" class="textInput" placeholder="请输入需要翻译的内容" append-button>
            <template slot="append">
                <span @click="formSubmit">搜索</span>
            </template>
        </at-input>
    </div>
</template>

<script>
export default {
    name: "TranslateInput",
    data() {
        return {
            inputText: "",
            fromLang: "en",
            toLang: "zh"
        };
    },
    methods: {
        formSubmit() {
            this.$emit("transTrigger", this.inputText, this.fromLang, this.toLang);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
}
.textInput {
    width: 440px;
    margin-left: 7px;
}
.languageSelect {
    height: 32px;
    width: 80px;
}
.divider {
    display:inline-block;
    margin:0 9px 0 9px;
}
</style>
