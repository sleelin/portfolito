<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "technologies");
</script>

# Technologies Element

{{ element.description }}

## Usage
