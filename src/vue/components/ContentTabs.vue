<template>
    <section class="content-tabs">
        <ul class="content-tabs__list">
            <ContentTabsItem
                v-for="(tab, i) of tabs"
                :key="i"
                class="content-tabs__item"
                v-bind="getTabsData(tab)"
                @tab:click="tabClickHandler" />
        </ul>
        <div class="content-tabs__content">
            <div v-show="activeTabName === 'Title1'">
                <h4>Tab 1 content</h4>
                <input
                    type="text"
                    :placeholder="tabs[0].text">
                <input
                    type="number"
                    value="1">
            </div>
            <div v-show="activeTabName === 'Title2'">
                <h4>Tab 2 content</h4>
                <input
                    type="text"
                    :placeholder="tabs[1].text">
                <input
                    type="number"
                    value="2">
            </div>
            <div v-show="activeTabName === 'Title3'">
                <h4>Tab 3 content</h4>
                <input
                    type="text"
                    :placeholder="tabs[2].text">
                <input
                    type="number"
                    value="3">
            </div>
            <div v-show="activeTabName === 'Title4'">
                <h4>Tab 4 content</h4>
                <input
                    type="text"
                    :placeholder="tabs[3].text">
                <input
                    type="number"
                    value="4">
            </div>
            <div v-show="activeTabName === 'Title5'">
                <h4>Tab 5 content</h4>
                <input
                    type="text"
                    :placeholder="tabs[4].text">
                <input
                    type="number"
                    value="5">
            </div>
        </div>
    </section>
</template>

<script>
import ContentTabsItem from '@/vue/components/ContentTabsItem.vue';
const TABS_DATA = [
    {
        name: 'Title1',
        id: 'sjgyeol',
        type: 'Type1',
        text: 'ahdvhbkr',
    },
    {
        name: 'Title2',
        id: 'kditqrr',
        type: 'Type1',
        text: 'jhbsghdc',
    },
    {
        name: 'Title3',
        id: 'sigyvbb',
        type: 'Type2',
        text: 'bgkscjbv',
    },
    {
        name: 'Title4',
        id: 'ldifuee',
        type: 'Type2',
        text: 'adsdgbb',
    },
    {
        name: 'Title5',
        id: 'ovnsspl',
        type: 'Type2',
        text: 'wrwqerp',
    },
];
export default {
    name: 'ContentTabs',
    components: {
        ContentTabsItem,
    },
    data() {
        return {
            tabs: TABS_DATA,
            activeTabId: TABS_DATA[0].id,
            activeTabName: TABS_DATA[0].name,
        };
    },
    computed: {
        isTabActive() {
            return this.activeTabId === this.tabs.id;
        },
    },
    methods: {
        tabClickHandler(id) {
            this.getActiveTabName(id);
            this.activeTabId = id;
        },
        getActiveTabName(id) {
            const activeItem = (this.tabs.find(tab => tab.id === id));
            this.activeTabName = activeItem.name;
        },
        getTabsData(tab) {
            return {
                tabName: tab.name,
                tabType: tab.type,
                tabId: tab.id,
                activeTabId: this.activeTabId,
                class: {
                    active: this.isTabActive,
                },
            };
        },
    },
};
</script>

<style lang="scss">
input {
    display: block;
}
</style>
