<script lang="ts">
  import Testimonial from './lib/components/Testimonial.svelte';
  import { Testimonial as TestimonialData } from './lib/data_loader';
  import { loadTestimonials } from './lib/data_loader';

  import IconPrev from './assets/images/icon-prev.svg';
  import IconNext from './assets/images/icon-next.svg';
  import { onMount, tick } from 'svelte';

  const testimonials: TestimonialData[] = loadTestimonials();

  let curr: number = 1;
  let total: number = testimonials.length;

  let prevBtn: HTMLButtonElement;
  let nextBtn: HTMLButtonElement;

  $: activeTestimonial = testimonials[curr - 1];

  onMount(() => handleBtnStatus(curr));

  async function handlePrev() {
    curr = curr - 1;
    handleBtnStatus(curr);
  }

  function handleNext() {
    curr = curr + 1;
    handleBtnStatus(curr);
  }

  function handleBtnStatus(curr: number) {
    prevBtn.disabled = curr === 1;
    nextBtn.disabled = curr === total;
  }
</script>

<!-- Container -->
<div
  class="relative flex justify-center items-center w-[400px] md:w-[1100px] mt-12 h-full mx-auto font-inter"
>
  <!-- Card -->
  <div class="w-full">
    <Testimonial
      pic={activeTestimonial.pic}
      content={activeTestimonial.content}
      username={activeTestimonial.name}
      userRole={activeTestimonial.role}
    />
  </div>
  <!-- Slider -->
  <div
    class="absolute w-[80px] h-[40px] md:bottom-20 md:right-64 flex justify-between p-3 -mt-16 bg-white rounded-full shadow-lg"
  >
    <button
      class="hover:cursor-pointer disabled:cursor-not-allowed"
      on:click={handlePrev}
      bind:this={prevBtn}
    >
      <img
        src={IconPrev}
        alt="icon-prev"
        class="h-[90%]"
      />
    </button>

    <button
      class="hover:cursor-pointer disabled:cursor-not-allowed"
      on:click={handleNext}
      bind:this={nextBtn}
    >
      <img
        src={IconNext}
        alt="icon-next"
        class="h-[90%]"
      />
    </button>
  </div>
</div>
