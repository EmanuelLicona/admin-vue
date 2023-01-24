<script>
export default {

  methods: {
    loginSubmit() {
      window.location.href = '/home'
    }
  }

}
</script>

<template>
  <div class="login-page">
    <div class="login-box">

      <div class="card card-outline card-primary">

        <div class="card-header text-center">
          <a href="/" class="h1"><b>{{ $store.getters.nameApp }}</b></a>
        </div>

        <div class="card-body">

          <p class="login-box-msg">Inicio de Sesion</p>

          <form action="/login" method="post" @submit.prevent="loginSubmit()">

            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>

            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <button type="submit" class="btn btn-primary btn-block">Iniciar Sesion</button>
              </div>
            </div>

          </form>


          <p class="my-1 text-center">
            <a href="forgot-password.html">He olvidado mi contraseña</a>
          </p>

        </div>
      </div>
    </div>
  </div>
</template>