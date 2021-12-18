<template>
    <li
        class="content-tabs-item"
        v-bind="tabItemData">
        <button
            class="content-tabs-item__head"
            @click="buttonClickHandler">
            <slot name="tabHead">
                <span>{{ tabName }} {{ tabType }}</span><br>
            </slot>
        </button>
    </li>
</template>

<script>
export default {
    name: 'ContentTabsItem',
    props: {
        tabName: {
            type: String,
            default: '',
        },
        tabType: {
            type: String,
            default: '',
        },
        tabId: {
            type: String,
            default: '',
        },
        activeTabId: {
            type: String,
            default: '',
        },
    },
    emits: ['tab:click'],
    computed: {
        isTabActive() {
            return this.tabId === this.activeTabId;
        },
        tabItemData() {
            return {
                class: {
                    active: this.isTabActive,
                },
            };
        },
    },
    methods: {
        buttonClickHandler() {
            this.$emit('tab:click', this.tabId);
        },
    },
};
</script>

<style lang="scss">
.content-tabs-item {
    &.active {
        background-color: #0000ff;
    }
}
</style>
