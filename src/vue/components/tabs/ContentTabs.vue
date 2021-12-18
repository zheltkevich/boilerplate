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
            <TabItem1 v-show="activeTabName === 'Tab 1'" />
            <TabItem2 v-show="activeTabName === 'Tab 2'" />
            <TabItem3 v-show="activeTabName === 'Tab 3'" />
        </div>
    </section>
</template>

<script>
import ContentTabsItem from '@/vue/components/tabs/ContentTabsItem.vue';
import TabItem1 from '@/vue/components/tabs/tabsContent/TabItem1.vue';
import TabItem2 from '@/vue/components/tabs/tabsContent/TabItem2.vue';
import TabItem3 from '@/vue/components/tabs/tabsContent/TabItem3.vue';
const TABS_DATA = [
    {
        name: 'Tab 1',
        id: 'sjgyeol',
        text: 'ahdvhbkr',
    },
    {
        name: 'Tab 2',
        id: 'kditqrr',
        text: 'jhbsghdc',
    },
    {
        name: 'Tab 3',
        id: 'sigyvbb',
        text: 'bgkscjbv',
    },
];
export default {
    name: 'ContentTabs',
    components: {
        ContentTabsItem,
        TabItem1,
        TabItem2,
        TabItem3,
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
            this.activeTabId = id;
            this.getActiveTabName(id);
        },
        getActiveTabName(id) {
            const activeItem = (this.tabs.find(tab => tab.id === id));
            this.activeTabName = activeItem.name;
        },
        getTabsData(tab) {
            return {
                tabName: tab.name,
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

.rect {
    width: 100px;
    height: 100px;

    &.blue {
        background-color: #0000ff;
    }

    &.red {
        background-color: #ff0000;
    }

    &.green {
        background-color: #008000;
    }

    &.yellow {
        background-color: #ffff00;
    }

    &.brown {
        background-color: #a52a2a;
    }
}
</style>
