<template>
    <section>
        <hr>
        <b-pagination
            :total="total"
            v-model="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <template #default="props">
                <b-pagination-button
                    :page="props.page"
                    :id="`page${props.page.number}`"
                    tag="router-link"
                    :to="`/documentation/pagination#page${props.page.number}`">
                    {{ (props.page.number) }}
                </b-pagination-button>
            </template>


            <!-- <template #previous="props">
                <b-pagination-button
                    :page="props.page"
                    tag="router-link"
                    :to="`/documentation/pagination#page${props.page.number}`">
                    Previous
                </b-pagination-button>
            </template>

            <template #next="props">
                <b-pagination-button
                    :page="props.page"
                    tag="router-link"
                    :to="`/documentation/pagination#page${props.page.number}`">
                    Next
                </b-pagination-button>
            </template> -->

        </b-pagination>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                total: 200,
                current: 10,
                perPage: 10,
                rangeBefore: 1,
                rangeAfter: 1,
                order: 'is-centered',
                size: '',
                isSimple: false,
                isRounded: true,
                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right'
            }
        },
        methods: {
        },
        watch: {
            $route: {
                immediate: true,
                handler(newVal, oldVal) {
                    if (newVal.hash) {
                        this.current = parseInt(newVal.hash.replace(/\#page/g, ''))
                    }
                },
            },
        }
    }
</script>