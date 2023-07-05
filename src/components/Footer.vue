<template>
    <footer>
        <div class="footer-content">
            <div class="footer-message">&copy; 2023 Allen Kagle. All rights reserved.</div>
        </div>
</footer>

</template>

<script>
    export default {
        name: 'Foot',
        components: {},
        computed: {
            isRootPage() {
                return this.$route.path === '/';
            }
        }
    }

</script>

<style>

    footer {
        background-color: #000000;
        color: #FFFFFF;
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-content {
        text-align: center;
    }

    .footer-message {
        border: 1px solid #6E387D;
        padding: 10px;
    }

</style>