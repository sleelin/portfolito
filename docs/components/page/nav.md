<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "nav");
</script>

# Nav Element

{{ element.description }}

## Usage

