<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-lg-12">
        <div class="item">
          <h3>تواصل معانا</h3>
          <div class="contact-Us">
            <form @submit.prevent="Submit">
              <div class="row">
                <div class="col-lg-4">
                  <input type="text" placeholder="الاسم" />
                </div>
                <div class="col-lg-4">
                  <input type="email" placeholder="الايميل" />
                </div>
                <div class="col-lg-4">
                  <input type="text" placeholder="العنوان" />
                </div>
                <div class="col-lg-12 pt-3">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="الرساله"
                  ></textarea>
                </div>
                <button>ارسال</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.item {
  h3 {
    background-color: #444;
    color: #fff;
    padding: 10px;
  }
}
.contact-Us {
  input {
    height: 100%;
    padding: 10px;
    width: 100%;
    border-radius: 50px;
    margin-bottom: 5px;
    transition: all 1s ease-in-out;
    border: 1px solid rgba(0, 0,0 ,  0.5);
    &:hover{
    border: 2px solid #2a114c;
    }
  }
  textarea{
    margin-bottom: 5px;
    transition: all 1s ease-in-out;
    width: 100%;
    padding: 10px;
    resize: none;
    border-radius: 10px;
    &:hover{
    border: 2px solid #2a114c;
    }
  }
  button{
    border: none;
    border-radius: 50px;
    width: 50%;
    margin:auto;
    padding:10px;
    color:#fff;
    background:#2a114c;
  }
}
</style>
