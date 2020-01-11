<template>
    <div class="col mb-4">
        <div class="card h-100">
            <div class="card-body">
                {{ quoteText }} {{ index }}!
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['index', 'quoteText']
}
</script>