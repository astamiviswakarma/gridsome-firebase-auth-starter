<template>
  <Layout>
  <div class="columns is-vcentered" v-if="!isUserAuth">
    <div class="column is-one-third">
      <FirebaseLogin />
    </div>
    <div class="column">
      <LoginCarausel />
    </div>
  </div>
  </Layout>
</template>

<script>
import FirebaseLogin from '~/components/FirebaseLogin.vue';
import LoginCarausel from '~/components/LoginCarausel.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers("auth") ;

export default {
  components: {
    FirebaseLogin,
    LoginCarausel
  },
  computed: {
    ...mapGetters(["isUserAuth"])
  },
}
</script>