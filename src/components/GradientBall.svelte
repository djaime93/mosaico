<script>
    const delay = 3000; // 3 seconds
  </script>
  
  <div class="-z-10 absolute flex justify-center items-center w-full h-full">
    <div id="circle" class="h-full w-full rounded-full bg-gray-300 transform scale-100 animate-grow"></div>
  </div>
  
  <style>
    @keyframes grow {
      0% {
        transform: scale(0.1);
      }
      100% {
        transform: scale(1);
      }
    }
  
    .animate-grow {
      animation: grow 3s ease-out forwards;
      animation-delay: 3000;
    }

    #circle {
    /* position: absolute; */

    background: radial-gradient(50% 50% at 50% 50%, #2E37FF 0%, #FFFFFF 100%);
    }
  </style>