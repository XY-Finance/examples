<script setup>
import { ref } from 'vue'
import queryString from 'query-string'

const config = {
  // The address '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' stands for the native token.
  fromTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  sourceChainId: '1',
  toTokenAddress: '0x77777777772cf0455fB38eE0e75f38034dFa50DE',
  targetChainId: '1',
  amount: 1,
  slippage: '1',
  theme: 'dark',
  lockmode: 'none',
  referrer: '0x856ebdc948afFCc6E24FCe08458051B19de652F6',
  commissionRate: 2000
}

const baseUrl = 'https://widget.xy.finance?'
const searchParams = queryString.stringify(config)
const iframeSrc = ref(baseUrl + searchParams)
</script>

<template>
  <div class="container">
    <iframe :width="480" :height="700" :src="iframeSrc" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
