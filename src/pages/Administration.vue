<template>
<div>
    <q-card-section>
        <div>
          <q-btn label="User registration" to="/users" color="primary" />
          <q-btn label="Patient registration" to="/patients" color="primary" class="q-ml-sm" />
        </div>
      </q-card-section>
</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>