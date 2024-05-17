<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "logo");
</script>

# Logo Element

{{ element.summary }}

## Usage

<demo>
  <page-logo>
    <h1>PortfoLitO</h1>
  </page-logo>
</demo>