<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "hero");
</script>

# Hero Element

{{ element.description }}

## Usage
