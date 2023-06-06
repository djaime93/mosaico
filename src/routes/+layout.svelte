<script>
  import "../app.css";
  import Nav from "../components/Nav/Nav.svelte";
  import Footer from "../components/Footer/Footer.svelte";
</script>

<div class="font-poppins text-mblue">
  <Nav />
  <slot />
  <Footer />
</div>