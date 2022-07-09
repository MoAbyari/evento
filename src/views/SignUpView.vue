<template>
  <div class="centered-child elevation-24">
    <v-card width="400" height="650" class="mx-auto pa-6 d-flex flex-column elevation-24">
      <v-card-title>
        <h2>Register</h2>
        <LoaderLinear :loading-stat="loading" width="160px" />
      </v-card-title>
      <v-card-text class="pa-0 mt-8">
        <v-form @submit.prevent="register">
          <v-text-field 
            v-model="userName" 
            label="Username"
            prepend-inner-icon="mdi-account mr-2" 
            :rules="[rules.required]"  
          />
          <v-text-field 
            v-model="email" 
            label="Email"
            prepend-inner-icon="mdi-home mr-2" 
            :rules="[rules.required, rules.email]"
          />
          <v-text-field 
            v-model="password"
            :type="showPassword ? 'text' : 'password'" 
            label="Password" 
            prepend-inner-icon="mdi-lock mr-2"
            :append-inner-icon="showPassword ? 'mdi-eye ' : 'mdi-eye-off '" 
            @click:append-inner="showPassword = !showPassword" 
            :rules="[rules.required, rules.password]" 
          />
          <v-text-field 
            v-model="confirmedPassword" 
            :type="showConfirmedPassword ? 'text' : 'password'" 
            label="Confirm Password"
            prepend-inner-icon="mdi-lock mr-2" 
            :append-inner-icon="showConfirmedPassword ? 'mdi-eye ' : 'mdi-eye-off '" 
            @click:append-inner="showConfirmedPassword = !showConfirmedPassword" 
            :rules="[rules.required, rules.confirmedPassword]" 
          />
          <v-btn 
            type="submit" 
            variant="outlined" 
            color="blue" 
            block
          >Register</v-btn>
        </v-form>
      </v-card-text>
      <footer>
        <div>
          <span>Sign up with Google</span>
        </div>
        <div>
          Have an account?
          <span>Login</span>
        </div>
      </footer>
    </v-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import LoaderLinear from '../components/basecomponents/LoaderLinear.vue'
const loading = ref(false)
const userName = ref('')
const email = ref('')
const password = ref('')
const confirmedPassword = ref('')
const showPassword = ref(false)
const showConfirmedPassword = ref(false)

const register = function(userName, password, confirmedPassword, email) {
  console.log(userName, password, confirmedPassword, email);
}
const rules = reactive({
  required: (value) => !!value || "Required.",
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
  password: (value) => {
    const pattern =
      /^(?=.*[0-9])(?=.*[- ?!@#$%^&*/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*/\\]{8,30}$/;
    return (
      pattern.test(value) ||
      "8 characters minimum, One number, One uppercase character"
    );
  },
  confirmedPassword: (value) => {
    return value === this.password || "Passwords must match";
  },
})


</script>

<style lang="scss" scoped>
h2 {
  margin: 0 auto;
  padding: 1rem;
  font-size: 2rem;
}
.v-card .v-card-text {
  line-height: 1.75rem;
}
footer {
  margin-top: 2rem;
  text-align: left;
  flex: 1;
}
footer span {
  color: $blue;
}
footer span:hover {
  cursor: pointer;
}
.v-card .v-card-title {
  display: flex;
  flex-direction: column;
}
</style>