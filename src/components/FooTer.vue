<template>
  <div class="footer">
    <div class="links">
      <ul>
        <li>
            <a href="https://www.facebook.com/profile.php?id=100089320060679">
                <font-awesome-icon icon="fab fa-facebook" />
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/naql_afsh_gamalco">
                <font-awesome-icon icon="fab fa-instagram" />
            </a>
        </li>
        <li>
            <a href="https://wa.me/message/VHVC5OHESKRJP1?src=qr">
                <font-awesome-icon icon="fab fa-whatsapp" />
            </a>
        </li>
        <li>
          <a href="https://t.snapchat.com/JACcVqt0">
            <font-awesome-icon icon="fab fa-snapchat" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/alshafyahmdbda1">
            <font-awesome-icon icon="fab fa-twitter" />
          </a>
        </li>
      </ul>
    </div>
    <div class="p">
      <p>Copy Rights © 2023 — Gmalco Powerd By <span>Dr-Code</span></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background: #212529;
  padding: 10px;
  display: flex;
  justify-content: space-around;

  p {
    text-align: center;
    color: #fff;
    font-size: 20px;
    span {
      color: #c397ff;
      font-weight: bold;
    }
  }
  .links {
    ul {
      display: flex;
      list-style: none;
      li {
        margin-right: 20px;
      }
      svg {
        color: #fff;
        font-size: 40px;
        transition: all 1s ease-in-out;
        border: none;
        &:hover {
          padding: 5px;
          background-color: #2a114c;
          color: #fff;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
