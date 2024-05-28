<script setup lang="ts">
const props = defineProps<{
    rows: Array<{
        name: string;
        description: string;
        default?: string;
    }>;
}>();

const columns = [
    {name: "name", label: "Name"},
    {name: "description", label: "Description"},
    ...(props.rows?.some((r) => !!r.type) ? [{name: "type", label: "Type"}] : []),
    ...(props.rows?.some(({default: d}) => d !== undefined) ? [{name: "default", label: "Default"}] : [])
];
</script>

<style scoped>
table {
  display: table;
  width: 100%;
}

tr, th, td {
  background: none !important;
}

th, td {
  border: none;
}

code {
  white-space: nowrap;
}
</style>

<template>
    <table>
        <thead>
            <tr>
                <th v-for="col in columns" :key="col.name">
                    {{ col.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in $props.rows" :key="row.name">
                <template v-for="col in columns" :key="col.name">
                    <template v-if="col.name === 'name'">
                        <th v-if="extended">
                            {{ row[col.name] || "-" }}
                        </th>
                        <td v-else>
                            <code v-if="row[col.name]">{{ row[col.name] }}</code>
                            <i v-else>none</i>
                        </td>
                    </template>
                    <td v-else>
                        <code v-if="col.name === 'type'">{{ row.type.text }}</code>
                        <template v-else>{{ row[col.name] || "-" }}</template>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
</template>