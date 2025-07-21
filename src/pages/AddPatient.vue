<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="addPatient" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="firstName"
        label="First name *"
        hint="Fill in the patient's first name"
        lazy-rules
        :rules="[(val) => !!val || 'Please type something']"
      />
      <q-input
        filled
        v-model="lastName"
        label="Last name *"
        hint="Fill in the patient's last name"
        lazy-rules
        :rules="[(val) => !!val || 'Please type something']"
      />
      <q-input
        filled
        v-model="dateOfBirth"
        type="date"
        label="Date of birth *"
        hint="Fill in the date of birth"
        lazy-rules
        :rules="[
          (val) => !!val || 'Please fill in the date of birth',
          (val) =>
            new Date(val) <= new Date() ||
            'Date of birth cannot be in the future',
        ]"
      />
      <q-select
        filled
        v-model="selectedSex"
        :options="sexOptions"
        label="Sex"
        hint="Select patient's sex"
        emit-value
        map-options
        option-value="value"
        option-label="label"
      />
      <q-input
        filled
        v-model="addressStreet"
        label="Street Name"
        hint="Fill in the patient's street name"
        lazy-rules
        :rules="[(val) => !!val || 'Please type something']"
      />
      <q-input
        filled
        v-model="addressStreetNumber"
        label="Street Number"
        hint="Fill in the patient's street number"
        lazy-rules
        :rules="[(val) => !!val || 'Please type something']"
      />
      <q-input
        filled
        v-model="addressTown"
        label="Town"
        hint="Fill in the patient's town"
        lazy-rules
        :rules="[(val) => !!val || 'Please type something']"
      />
      <q-input
        filled
        v-model="email"
        type="email"
        label="E-mail *"
        hint="Fill in the patient's email"
        :rules="[(val) => !!val || 'Please type something']"
      />
      <q-input
        filled
        v-model="phoneNumber"
        type="tel"
        label="Mobile phone *"
        hint="Fill in the patient's mobile number"
        :rules="[(val) => !!val || 'Please type something']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Zmienne formularza
const firstName = ref("");
const lastName = ref("");
const dateOfBirth = ref("");
const selectedSex = ref(null);
const addressStreet = ref("");
const addressStreetNumber = ref("");
const addressTown = ref("");
const email = ref("");
const phoneNumber = ref("");

// Opcje płci
const sexOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

// Resetowanie pól formularza
function onReset() {
  firstName.value = "";
  lastName.value = "";
  dateOfBirth.value = "";
  selectedSex.value = null;
  addressStreet.value = "";
  addressStreetNumber.value = "";
  addressTown.value = "";
  email.value = "";
  phoneNumber.value = "";
}

// Obsługa wysłania formularza
function addPatient() {
  console.log("Submitted patient data:", {
    firstName: firstName.value,
    lastName: lastName.value,
    dateOfBirth: dateOfBirth.value,
    sex: selectedSex.value,
    addressStreet: addressStreet.value,
    addressStreetNumber: addressStreetNumber.value,
    addressTown: addressTown.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
  });

  onReset();
}
</script>
