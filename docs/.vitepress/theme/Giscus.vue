<template>
  <div ref="el" class="giscus-wrapper" />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const el = ref(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'wangzhenxi/wangzhenxi.github.io')
  script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkyODgwNTE3OTM=')
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-category-id', 'general')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  el.value.appendChild(script)
})
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
