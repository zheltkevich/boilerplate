<template>
    <li class="content-tabs__item">
        <h4>{{ tabName }}</h4>
        <p>{{ tabType }}</p>

        <div
            v-if="tabType === 'Type1'"
            class="content-tabs__item-content">
            <slot

                name="type1Content">
                <input type="text">
            </slot>
        </div>

        <div
            v-else-if="tabType === 'Type2'"
            class="content-tabs__item-content">
            <slot

                name="type2Content">
                <input type="text">
            </slot>
        </div>
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
    },
};
</script>
