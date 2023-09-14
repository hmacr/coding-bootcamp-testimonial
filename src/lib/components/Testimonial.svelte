<script lang="ts">
  export let pic: string;
  export let content: string;
  export let username: string;
  export let userRole: string;
</script>

<div
  class="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-0 p-4"
>
  <!-- Image -->
  <div
    class="h-[400px] md:h-[600px] md:w-[600px] flex justify-center items-center md:-ml-16 bg-pattern-img bg-no-repeat bg-contain md:bg-center"
  >
    <img
      src={pic}
      alt="profile-img"
      class="w-3/4 shadow-md"
    />
  </div>

  <!-- Content -->
  <div
    class="flex flex-col md:w-[600px] z-20 items-center gap-6 bg-pattern-quotes bg-no-repeat bg-[center_top] md:bg-[left_70px_top] py-8 md:py-20"
  >
    <p
      class="text-xl md:text-3xl text-dark-blue font-light text-center md:text-left leading-normal"
    >
      &#8220; {content} &#8221;
    </p>
    <div class="text-center">
      <p class="text-dark-blue font-bold">{username}</p>
      <p class="text-grayish-blue">{userRole}</p>
    </div>
  </div>
</div>
