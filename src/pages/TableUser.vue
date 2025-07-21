<template>
  <q-page padding>
    <q-table
      title="User List"
      :rows="users"
      :columns="columns"
      row-key="id"
      separator="horizontal"
      flat
      bordered
      :filter="search"
    >
      <!-- Search input -->
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="search"
          placeholder="Search user..."
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <!-- Action buttons column -->
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="text-right">
          <q-btn
            dense
            flat
            icon="edit"
            color="primary"
            @click="editUser(props.row)"
            title="Edit"
          />
          <q-btn
            dense
            flat
            icon="delete"
            color="negative"
            @click="deleteUser(props.row)"
            title="Delete"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");

const users = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
]);

const columns = [
  { name: "id", label: "ID", align: "left", field: "id", sortable: true },
  {
    name: "firstName",
    label: "First Name",
    align: "left",
    field: "firstName",
    sortable: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    align: "left",
    field: "lastName",
    sortable: true,
  },
  {
    name: "dateOfBirth",
    label: "Date of Birth",
    align: "left",
    field: "dateOfBirth",
    sortable: true,
  },
  {
    name: "email",
    label: "Email",
    align: "left",
    field: "email",
    sortable: true,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    align: "left",
    field: "phoneNumber",
    sortable: true,
  },
  {
    name: "roleIds",
    label: "Roles",
    align: "left",
    field: "roleIds",
    sortable: true,
  },
  { name: "actions", label: "Actions", align: "right" },
];

// Function to handle editing a user
function editUser(user) {
  console.log("Edit user:", user);
  // You could open a dialog or navigate to an edit page
}

// Function to handle deleting a user
function deleteUser(user) {
  if (confirm(`Are you sure you want to delete user: ${user.name}?`)) {
    users.value = users.value.filter((u) => u.id !== user.id);
  }
}
</script>
