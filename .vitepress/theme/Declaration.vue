<script setup lang="ts">
const props = defineProps<{
    rows: Array<{
        name: string;
        description: string;
        default?: string;
        type?: {
            text: string;
        };
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

.color {
    display: flex;
    align-items: center;
    column-gap: 4px;
    
    & > div:first-child {
        width: 16px;
        height: 16px;
        border-radius: 4px;
    }
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
                    <td v-if="col.name === 'name'">
                        <code v-if="row[col.name]">{{ row[col.name] }}</code>
                        <i v-else>none</i>
                    </td>
                    <td v-else-if="col.name === 'default' && row?.type?.text === 'color' && row?.[col.name]?.startsWith('#')">
                        <div class="color">
                            <div :style="{backgroundColor: row[col.name]}"></div>
                            <div>{{ row[col.name].slice(1).toUpperCase() }}</div>
                        </div>
                    </td>
                    <td v-else>
                        <code v-if="col.name === 'type' && !!row?.type?.text">{{ row.type.text }}</code>
                        <template v-else>{{ row[col.name] || "-" }}</template>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
</template>