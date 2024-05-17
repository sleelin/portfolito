<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "section");
</script>

# Section Element

{{ element.description }}

## Usage
