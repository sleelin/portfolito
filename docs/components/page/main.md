<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "main");
</script>

# Main Element

{{ element.summary }}

## Usage

