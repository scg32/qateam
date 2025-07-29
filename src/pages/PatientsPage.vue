<template>
<div>Patient registration form</div>
<div class="q-pa-md" style="max-width: 400px">

  
    <q-form
      @submit="addPatient"
      @reset="onReset"
      class="q-gutter-md"
    >
     <q-input
        filled
        v-model="patientNumber"
        label="PESEL *"
        hint="Fill in your pesel number"
        lazy-rules
        :rules="[ val => !!val || 'Please type something, the field should not be empty',
                  val => val.length <= 11 || 'Please use less than 11 digits']"
        :dense="dense"
      />
      <q-input
        filled
        v-model="firstName"
        label="First name *"
        hint="Fill in your first name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        :dense="dense"
      />
       <q-input
        filled
        v-model="lastName"
        label="Last name *"
        hint="Fill in your last name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        :dense="dense"
      />
      
     <q-input
        v-model="birthDate"
        mask="DD-MM-YYYY"
        filled type = "date"
        label="Date of birth *"
        hint="Fill in your date of birth"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please fill in your date of birth',
          val => new Date(val) <= new Date() || 'Date of birth cannot be in the future'
        ]"
        :dense="dense"
      />
       <q-select 
        filled 
        v-model="gender" 
        :options="pSex" 
        label="Gender"  
        :dense="dense"   
      />
       <q-input
        filled
        v-model="email"
        label="Email *"
        hint="Fill in your email address"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        :dense="dense"
      />
       <q-input
        filled
        v-model="phoneNumber"
        label="Phone *"
        hint="Fill in your mobile phone number"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type numbers only']"
        :dense="dense"
      />
      <q-select 
        filled 
        v-model="country" 
        :options="country2" 
        label="Country" 
        :dense="dense"    
      />
       <q-input
        filled
        v-model="address"
        label="Address *"
        hint="Fill in your street and house number"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        :dense="dense"
      />

        <q-input
            filled
            v-model="city"
            label="City"
            hint="Fill in your city"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            :dense="dense"
        />

        
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { country2 } from '@/data/country';
import { pSex } from '@/data/patientSex';

const dense = ref(true)

const patientNumber = ref('')
const firstName = ref('')
const lastName = ref('')
const birthDate = ref('')
const gender = ref('')
const email = ref('')
const phoneNumber = ref('')
const country = ref('')
const address = ref('')
const city = ref('')

const router = useRouter();

const addPatient = () => {
  console.log('Patient added:', {
    patientNumber: patientNumber.value,
    firstName: firstName.value,
    lastName: lastName.value,
    birthDate: birthDate.value,
    gender: gender.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    country: country.value,
    address: address.value,
    city: city.value
  }
);
}
const onReset = () =>{
   patientNumber.value = '',
   firstName.value = '',
   lastName.value = '',
   birthDate.value = '',
   gender.value = '',
   email.value ='',
   phoneNumber.value = '',
   country.value = '',
   address.value = '',
   city.value = ''
  }

</script>