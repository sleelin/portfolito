<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "article");
</script>

# Article Element

{{ element.description }}

## Usage
