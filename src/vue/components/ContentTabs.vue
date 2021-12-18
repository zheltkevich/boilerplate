<template>
    <section class="content-tabs">
        <ul class="content-tabs__list">
            <ContentTabsItem
                v-for="(tab, i) of tabs"
                :key="i"
                class="content-tabs__item"
                v-bind="getTabsData(tab)"
                @click="tabClickHandler(i)">
                <template #type1Content>
                    <h4>Name: {{ tab.name }}</h4>
                    <h5>Type: {{ tab.type }}</h5>
                    <input type="number">
                </template>

                <template #type2Content>
                    <h4>Name: {{ tab.name }}</h4>
                    <h5>Type: {{ tab.type }}</h5>
                    <input type="text">
                </template>
            </ContentTabsItem>
        </ul>
    </section>
</template>

<script>
import ContentTabsItem from '@/vue/components/ContentTabsItem.vue';
const TABS_DATA = [
    {
        name: 'Title1',
        type: 'Type1',
        text: 'ahdvhbkr',
    },
    {
        name: 'Title2',
        type: 'Type1',
        text: 'jhbsghdc',
    },
    {
        name: 'Title3',
        type: 'Type2',
        text: 'bgkscjbv',
    },
    {
        name: 'Title4',
        type: 'Type2',
        text: 'bgkscjbv',
    },
    {
        name: 'Title5',
        type: 'Type2',
        text: 'bgkscjbv',
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
        };
    },
    computed: {

    },
    methods: {
        getTabsData(item) {
            return {
                tabName: item.name,
                tabType: item.type,
            };
        },
    },
};
</script>
