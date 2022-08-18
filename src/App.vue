<template>
  <header>
    <div class="wrapper" text-blue-900>
      <div i-carbon-close />
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
