<template>
  <main class="signup">
    <h1>Sign in</h1>
    <form @submit.prevent>
      <div>
        <label for="email">email</label>
        <input type="email" id="email" v-model="user.email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="user.password" />
      </div>
      <button type="button" @click="onClick">sign in</button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from '@vue/composition-api';
import { signIn as signInService } from '@/gateways';

const SignIn = defineComponent({
  setup(_: never, context: SetupContext) {
    const user = reactive({
      email: '',
      password: '',
    });

    const onClick = () => {
      const params = {
        user,
      };
      signInService(params).then(async (response: Response) => {
        if (response.ok && response.body) {
          const data = await response.json();
          context.root.$store.commit('user/set', data.user);
          context.root.$router.push('/');
        } else if (response.body) {
          const data = await response.json();
          console.log('Error', data);
          window.alert('error');
        } else {
          console.log('Unexpected error');
        }
      });
    };

    return {
      user,
      onClick,
    };
  },
});

export default SignIn;
</script>
