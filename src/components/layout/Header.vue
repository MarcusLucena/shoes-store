<script setup lang="ts">
import WishListHeader from '@/components/wishlist/WishListHeader.vue'
import UserIcon from '@/components/icons/UserIcon.vue'

const logo: string =
  'https://static.netshoes.com.br/vue-components/6.69.0/netshoesbr/images/7ba374555872e98c911690fa95eae162.svg'
</script>

<template>
  <header class="header-container">
    <el-row class="container">
      <el-col :xs="24" :sm="8" :md="12">
        <RouterLink to="/">
          <el-image :src="logo" style="width: 100px; height: 50px"></el-image>
        </RouterLink>
      </el-col>
      <el-col :xs="16" :md="12">
        <el-row justify="end">
          <el-col :md="4">
            <WishListHeader />
          </el-col>
          <el-col :md="4">
            <div class="user-container">
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
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </header>
</template>

<style scoped lang="scss">
.header-container {
  width: 100%;
  min-height: 60px;
  background-color: $default-color;
  color: white;

  .user-container {
    display: flex;
    justify-content: end;
    justify-items: center;
    height: 60px;

    .el-dropdown-link {
      cursor: pointer;
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
    }
  }
}
</style>
