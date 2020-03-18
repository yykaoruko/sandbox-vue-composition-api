<template>
  <main class="signup">
    <h1>Sign up</h1>
    <form @submit.prevent>
      <div>
        <label for="username">name</label>
        <input type="text" id="username" v-model="user.username" />
      </div>
      <div>
        <label for="email">email</label>
        <input type="email" id="email" v-model="user.email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="user.password" />
      </div>
      <button type="button" @click="onClick">register</button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from '@vue/composition-api';
import { register as registerService } from '@/gateways';

const SignUp = defineComponent({
  setup(_: never, context: SetupContext) {
    const user = reactive({
      username: '',
      email: '',
      password: '',
    });

    const onClick = () => {
      const params = {
        user,
      };
      registerService(params).then(async (response: Response) => {
        if (response.ok) {
          context.root.$router.push('/sign-in');
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

export default SignUp;
</script>
