<script setup lang="ts">
import WishListHeader from '@/components/wishlist/WishListHeader.vue'
import UserIcon from '@/components/icons/UserIcon.vue'

const logo: string =
  'https://static.netshoes.com.br/vue-components/6.69.0/netshoesbr/images/7ba374555872e98c911690fa95eae162.svg'
</script>

<template>
  <header class="header-container">
    <div class="logo-container">
      <RouterLink to="/">
        <el-image :src="logo" style="width: 100px; height: 50px"></el-image>
      </RouterLink>
    </div>
    <div class="right-container">
      <WishListHeader />
      <el-dropdown placement="bottom-end">
        <span class="el-dropdown-link">
          <UserIcon width="32" height="32" fill="#FFFFFF" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Entrar</el-dropdown-item>
            <el-dropdown-item>Minha Conta</el-dropdown-item>
            <el-dropdown-item>Endereços</el-dropdown-item>
            <el-dropdown-item>Minha Netshoes</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-container {
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: $default-color;
  color: white;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }
}
@media (min-width: 568px) {
  .header-container {
    justify-content: space-between;
    padding: 0 1rem;
  }
}

@media (min-width: 1080px) {
  .header-container {
    padding: 0 2rem;
  }
}

@media (min-width: 1200px) {
  .header-container {
    padding: 0 calc(calc(100% - 1200px) / 2);
  }
}
</style>
