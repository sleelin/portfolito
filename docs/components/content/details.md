<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "details");
</script>

# Details Element

{{ element.description }}

## Usage
