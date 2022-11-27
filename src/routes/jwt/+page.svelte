<script>
</script>

<div class="decoderContainer">
	<div class="sidebar">
		<div class="sidebar-menu"><p>History</p></div>
		<div class="sidebar-content"><p>Content</p></div>
	</div>
	<div class="left-side">
		<div class="left-side-menu"><p>Encoded</p></div>
		<div class="left-side-content"><p>Content</p></div>
	</div>
	<div class="right-side">
		<div class="right-side-menu"><p>Decoded</p></div>
		<div class="right-side-content"><p>Content</p></div>
	</div>
</div>

<style>
	.decoderContainer {
		display: flex;
		flex-direction: row;
		height: 80vh;
		border: 1px solid black;
		border-radius: 1.5em;
	}

	.sidebar,
	.left-side,
	.right-side {
		display: flex;
		flex-direction: column;
	}

	.sidebar {
		flex-grow: 1;
	}

	.left-side,
	.right-side {
		flex-grow: 3;
	}

	.sidebar-menu,
	.left-side-menu,
	.right-side-menu {
		flex-grow: 1;
	}

	.sidebar-content,
	.left-side-content,
	.right-side-content {
		flex-grow: 19;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			color: rgba(255, 255, 255, 0.87);
			background-color: #242424;
		}

		.decoderContainer {
			border: 1px solid white;
		}
	}
</style>
