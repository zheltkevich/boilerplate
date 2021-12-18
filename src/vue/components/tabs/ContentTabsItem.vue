<template>
    <li
        class="content-tabs-item"
        v-bind="tabItemData">
        <button
            class="content-tabs-item__button"
            @click="buttonClickHandler">
            <slot name="tabHead">
                <span>{{ tabName }}</span><br>
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
    &__button {
        .content-tabs-item.active & {
            background-color: #f5e76a;
        }
    }
}
</style>
