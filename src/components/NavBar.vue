<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <div class="navbar-brand">
          <img src="../assets/logoNa.png" style="max-width: 100px" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon icon="fas fa-bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >الصفحة الرئيسه</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">من نحن</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                خدمات
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link class="dropdown-item" to="/services">خدمة نقل العفش</router-link></li>
                
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/privacy-policy"> سياسيه الخصوصيه</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">تواصل معانا</router-link>
            </li>
          </ul>
          <div class="d-flex me-auto">
            <a href="tel:+96598981013">
              <font-awesome-icon icon="fas fa-phone" />
            </a>
            <a href="https://wa.me/96598981013" target="_blank">
              <font-awesome-icon icon="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  background: #ddd;
  direction: rtl;
}
button {
  border: none;
}
svg {
  color: #fff;
  margin-left: 10px;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: none !important;
}
.nav-link {
  background: #2a114c;
  color: #fff !important;
  margin: auto 10px;
  padding: 10px !important;
}
svg {
  background: #2a114c;
  padding: 10px;
  border-radius: 50%;
  font-size: 30px;
  cursor: pointer;
}
.router-link-exact-active {
  background: #fff;
  color: #24c !important;
  font-weight: bold;
}
@media (min-width: 1200px) {
  .nav-link {
    width: 150px;
    text-align: center;
  }
}
</style>
