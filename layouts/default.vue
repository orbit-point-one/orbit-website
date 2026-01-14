<template>
  <div class="min-h-screen flex flex-col font-sans">
    <!-- Navbar -->
    <nav :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'glass-morphism py-4 shadow-2xl' : 'bg-transparent py-6'
    ]">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <img 
            src="https://i.imgur.com/vmbl33j.png" 
            alt="Orbit Point One Logo" 
            class="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span class="text-xl font-black tracking-tighter text-orbit-beige uppercase font-serif italic">
            ORBIT<span class="text-orbit-primary">POINTONE</span>
          </span>
        </NuxtLink>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-10">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[
              'text-sm font-bold tracking-widest uppercase transition-colors',
              route.path === link.path ? 'text-orbit-primary' : 'text-orbit-beige/70 hover:text-orbit-primary'
            ]"
          >
            {{ link.name }}
          </NuxtLink>
          <button
            @click="openEnrollModal"
            class="px-6 py-2.5 bg-orbit-primary text-orbit-beige font-black rounded-full text-sm hover:bg-orbit-primary/80 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orbit-primary/40 uppercase italic"
          >
            Daftar Sekarang
          </button>
        </div>

        <!-- Mobile Toggle -->
        <button @click="isOpen = !isOpen" class="md:hidden text-orbit-beige">
          <Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden glass-morphism absolute top-full left-0 w-full p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="isOpen = false"
          :class="[
            'text-lg font-bold border-b border-orbit-beige/10 pb-2 uppercase tracking-tighter italic font-serif',
            route.path === link.path ? 'text-orbit-primary' : 'text-orbit-beige'
          ]"
        >
          {{ link.name }}
        </NuxtLink>
        <button
          @click="() => { isOpen = false; openEnrollModal() }"
          class="w-full text-center px-6 py-4 bg-orbit-primary text-orbit-beige font-black rounded-xl uppercase italic shadow-xl shadow-orbit-primary/20"
        >
          Daftar Sekarang
        </button>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-orbit-black pt-24 pb-12 border-t border-orbit-beige/5">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <img 
              src="https://i.imgur.com/vmbl33j.png" 
              alt="Orbit Point One Logo" 
              class="w-12 h-12 object-contain"
            />
            <span class="text-2xl font-black text-orbit-beige tracking-tighter uppercase font-serif italic">ORBIT POINT ONE</span>
          </div>
          <p class="text-orbit-beige/60 max-w-sm mb-6 leading-relaxed text-sm font-sans font-light">
            Inkubator kepemimpinan elit terbaik untuk generasi CEO global berikutnya. 
            Menjembatani kesenjangan antara inovasi dan warisan bisnis.
          </p>
          <div class="flex gap-6 mt-4">
            <a 
              v-for="social in socials" 
              :key="social.name"
              href="#" 
              class="text-orbit-beige/40 hover:text-orbit-primary transition-all duration-300 hover:scale-125" 
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-orbit-beige font-bold mb-6 text-xs uppercase tracking-[0.2em] font-sans opacity-50">Tautan Cepat</h4>
          <ul class="space-y-4 text-sm text-orbit-beige/60 font-sans font-light">
            <li><NuxtLink to="/" class="hover:text-orbit-primary transition-colors">Seminar</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-orbit-primary transition-colors">Kisah Kami</NuxtLink></li>
            <li><a href="#" class="hover:text-orbit-primary transition-colors">Kebijakan Privasi</a></li>
            <li><a href="#" class="hover:text-orbit-primary transition-colors">Syarat & Ketentuan</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-orbit-beige font-bold mb-6 text-xs uppercase tracking-[0.2em] font-sans opacity-50">Kontak</h4>
          <ul class="space-y-4 text-sm text-orbit-beige/60 font-sans font-light">
            <li class="hover:text-orbit-primary transition-colors cursor-pointer">concierge@orbitpointone.com</li>
            <li class="hover:text-orbit-primary transition-colors cursor-pointer">+1 (888) ORBIT-CEO</li>
            <li>Silicon Valley, CA</li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-6 pt-12 border-t border-orbit-beige/5 text-center text-xs text-orbit-beige/20 tracking-widest uppercase font-sans">
        &copy; {{ new Date().getFullYear() }} Orbit Point One. Seluruh hak cipta dilindungi undang-undang.
      </div>
    </footer>

    <!-- Enrollment Modal -->
    <EnrollmentModal v-model="isEnrollModalOpen" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const isOpen = ref(false)
const scrolled = ref(false)
const isEnrollModalOpen = ref(false)

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/about' },
]

const socials = [
  { name: 'LinkedIn', icon: 'mdi:linkedin' },
  { name: 'Twitter', icon: 'mdi:twitter' },
  { name: 'Instagram', icon: 'mdi:instagram' },
]

const openEnrollModal = () => {
  isEnrollModalOpen.value = true
}

// Provide enrollment modal trigger for child components
provide('openEnrollModal', openEnrollModal)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
