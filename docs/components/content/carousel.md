<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "carousel");
</script>

# Carousel Element

{{ element.description }}

## Usage