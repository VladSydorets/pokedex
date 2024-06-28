<script setup lang="ts">
import Mail from '@/assets/icons/mail.svg?raw'
import Telegram from '@/assets/icons/telegram.svg?raw'
import Linkedin from '@/assets/icons/linkedin.svg?raw'
import Github from '@/assets/icons/github.svg?raw'

interface SocialLink {
  name: string
  icon: string
  link: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'Mail',
    icon: Mail,
    link: 'mailto: sidorecvv@gmail.com'
  },
  {
    name: 'Telegram',
    icon: Telegram,
    link: 'https://t.me/xddfffdsds'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/vlad-sydorets//'
  },
  {
    name: 'Github',
    icon: Github,
    link: 'https://github.com/VladSydorets'
  }
]
</script>

<template>
  <footer>
    <div class="p">
      Made with
      <a href="https://vuejs.org/" alt="vue.js website"> ❤️‍🔥</a>
    </div>
    <div>
      © Vlad Sydorets | <span>{{ new Date().getFullYear() }}</span>
    </div>
    <div class="socials">
      <a
        v-for="socialLink in socialLinks"
        :key="socialLink.name"
        v-bind:href="socialLink.link"
        v-bind:alt="socialLink.name"
      >
        <div v-html="socialLink.icon" class="socials-icon"></div>
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: white;
  color: black;
  font-family: 'Red Hat Mono';
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0;
  margin-top: 3rem;
  border-radius: 1rem;
  z-index: 1;
}

footer div,
footer span {
  font-weight: 500;
}

.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

a:hover {
  background-color: transparent;
}

.socials-icon {
  width: 2.125rem;
  transition: all 0.3s ease-in;
}

.socials-icon:hover {
  scale: 110%;
}
</style>
