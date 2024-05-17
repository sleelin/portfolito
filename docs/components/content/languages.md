<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "languages");
</script>

# Languages Element

{{ element.description }}

## Usage
