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
.table {
  width: 100%;
  overflow-x: scroll;
}

table {
  display: table;
  width: 100%;
}

tr, th, td {
  background: none !important;
}

th, td {
  border: none;
  padding: 8px;
}

td.description {
  min-width: 240px;
}

td ul, td li {
  margin: 0;
  padding: 0;
}

li:only-child {
  list-style: none;
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
        border: 1px solid var(--vp-c-border);
    }
}
</style>

<template>
    <div class="table">
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
                        <td :class="col.name">
                            <template v-if="col.name === 'name'">
                                <code v-if="row[col.name]">{{ row[col.name] }}</code>
                                <i v-else>none</i>
                            </template>
                            <code v-else-if="col.name === 'type' && !!row?.type?.text">{{ row.type.text }}</code>
                            <ul v-else-if="col.name === 'default' && !!row.default">
                                <li v-for="val in row.default.split('|')">
                                    <template v-if="row?.type?.text === 'color' && val.startsWith('#')">
                                        <div class="color">
                                            <div :style="{backgroundColor: val}"></div>
                                            <div>{{ val.slice(1).toUpperCase() }}</div>
                                        </div>
                                    </template>
                                    <code v-else-if="val.startsWith('--')">{{ val }}</code>
                                    <span v-else>{{ val || "-"}}</span>
                                </li>
                            </ul>
                            <template v-else>{{ row[col.name] || "-" }}</template>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>