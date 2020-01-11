<template>
    <div class="quote card-body border rounded col-md-2">
        {{ quoteText }} {{ index }}!
    </div>
</template>

<script>
export default {
    props: ['index', 'quoteText']
}
</script>