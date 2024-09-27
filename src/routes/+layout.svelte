<script>
    import '../app.css';
</script>

<nav>
	<a class="text-3xl font-bold underline" href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

<slot></slot>

<style lang="css">
    @import '/static/style/navbar.css';
</style>