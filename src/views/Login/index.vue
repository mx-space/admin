<template>
  <div class="full bg">
    <div
      class="wallpaper"
      :class="{ loading }"
      :style="{ '--bg': 'url(' + WP + ')' }"
    ></div>
    <div class="dialog">
      <Avatar :size="100" :src="avatar"></Avatar>
      <BlurInput
        type="password"
        :value="password"
        @keyup.enter.native="onSubmit"
        @blur="$refs.input.$el.querySelector('input').focus()"
        ref="input"
        @change="(e) => (password = e)"
      />
      <footer style="text-align: center">
        <Button
          style="margin-top: 12px"
          @click="onSubmit"
          title="登陆"
        ></Button>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/ParallaxButton'
import Avatar from '@/components/Avatar'
import BlurInput from '@/components/Input/BlurInput'
import { mapGetters } from 'vuex'
import client from '../../socket'

const WP =
  'https://gitee.com/xun7788/my-imagination/raw/master/uPic/1615516941397.jpg'
export default {
  name: 'Login',
  components: { Button, Avatar, BlurInput },
  data() {
    return {
      loading: true,
      error: '',
      // remberPassword: true,
      password: '',
      WP,
    }
  },
  computed: {
    ...mapGetters(['username', 'avatar']),
  },
  created() {
    // preload iamge
    const image = new Image()
    image.src = WP
    image.onload = (e) => {
      this.loading = false
    }

    document.onkeydown = (e) => {
      try {
        const $input = this.$refs.input.$el.querySelector('input')
        $input.focus()
      } catch {}
    }
  },
  beforeDestroy() {
    document.onkeydown = null
  },
  methods: {
    handleChange(e) {
      this.password = e
    },
    onSubmit() {
      if (!this.password) {
        this.$message.error('密码不正确哦')
        throw new Error('wrong password')
      }

      this.logging = true
      this.$store
        .dispatch('user/login', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.logging = false
          // if (this.remberPassword) {
          // localStorage.setItem('focus_username', this.user.username)
          // localStorage.setItem('focus_password', this.password)
          // }
          this.$message.success('欢迎回来!')
          client.reconnect()
          this.$router.push({ path: this.redirect || '/' })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.full {
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  padding: 0;
  position: relative;
}
.bg {
  background: $deepBg;
  position: relative;
  overflow: hidden;
}
.wallpaper-placeholder {
  opacity: 0;
  z-index: -99;
  height: 0;
  width: 0;
  position: absolute;
}
.dialog {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // box-shadow: 6px 9px 24px -8px #3a3737d1;
  overflow: hidden;
  border-radius: 24px;
}
.card {
  width: 300px;
}
.form {
  padding: 0 0.5rem;
}
.wallpaper {
  opacity: 1;
  transition: opacity 0.5s;

  &.loading {
    opacity: 0;
  }
  &::before {
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-position: center;
    background-image: var(--bg);
    background-size: cover;
    filter: blur(10px);
    transform: scale(1.2);
  }
}
</style>
