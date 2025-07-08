<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="firstName"
        label="First name *"
        hint="Fill in your first name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="lastName"
        label="Last name *"
        hint="Fill in your last name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        v-model="dateOfBirth"
        filled type = "date"
        label="Date of birth *"
        hint="Fill in your date of birth"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please fill in your date of birth',
          val => new Date(val) <= new Date() || 'Date of birth cannot be in the future'
        ]"
      />
      <q-input 
        v-model="email" 
        filled type="email" 
        label="E-mail *"
        hint="Fill in your e-mail address" 
        :rules="[
          val => val && val.length > 0 || 'Please type something',
        ]"
      />
      <q-input v-model="password" label="Password *" filled :type="isPwd ? 'password' : 'text'" hint="Fill in your password">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input 
        v-model="tel" 
        filled type="tel" 
        label="Mobile phone *"
        hint="Fill in your mobile phone number" 
        :rules="[
          val => val && val.length > 0 || 'Please type something',
        ]"
      /> 
      <q-select 
        filled 
        v-model="speciality" 
        :options="options" 
        label="User role" 
        hint="Fill in your user role"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const dateOfBirth = ref('')
const email = ref('')
const password = ref('')
const isPwd = ref(true) 
const tel = ref('')
const speciality = ref('')

const model = ref(null)

const options = [
  'Doctor',
  'IT Specialist',
  'Administrator',
  'Receptionist',
]

function onReset () {
  firstName.value = ''
  lastName.value = ''
  dateOfBirth.value = ''
  email.value = ''
  password.value = ''
  tel.value = ''
  speciality.value = ''
}
</script>