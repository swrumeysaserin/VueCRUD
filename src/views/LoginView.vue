<template>
   <div class="sidenav">
      <div class="login-main-text">
         <h2>Application<br> Login Page</h2>
         <p>Login or register from here to access.</p>
      </div>
   </div>
   <div class="main">
      <div class="col-md-6 col-sm-12">
         <div class="login-form">
            <form>

               <div class="form-group">
                  <label>User Name</label>
                  <input v-model="userLogin.userName" type="text" class="form-control" placeholder="User Name">
               </div>
               <div class="form-group">
                  <label>Password</label>
                  <input v-model="userLogin.password" type="password" class="form-control" placeholder="Password">
               </div>
               <button @click="onSubmit" type="submit" class="btn btn-black">Login</button>
               <button @click="$router.push({ name: 'register' })" type="submit"
                  class="btn btn-secondary">Register</button>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
import axios from 'axios';
export default {
   name: 'login',
   data() {
      return {
         userLogin: {

            userName: '',
            password: '',
            status: ''
         }
      }

   },
   methods: {
      onSubmit() {
         //const password = CryptoJs.HmacSHA1(this.userLogin.password, this.$store.getters._saltKey).toString();
         // axios.get('https://localhost:44355/api/login?username=' + this.userLogin.username & password + this.userLogin.password).then(login_response => {
         //    if (login_response?.data?.length > 0) {
         //       this.$store.commit("setUser", login_response?.data[0])
         //    } else {
         //       alert("Giris basarisiz")
         //    }
         // })
         axios.get('https://localhost:44355/api/login').then(login_response => {
          //  this.userLogin=login_response.data
            if (login_response.data!=null) {
               this.$router.push('/home')
            } else {
               alert("Giris basarisiz")
            }

         }

         )
      }
   }


}

</script>
<style>
body {
   font-family: "Lato", sans-serif;
}



.main-head {
   height: 150px;
   background: #FFF;

}

.sidenav {
   height: 100%;
   background-color: #000;
   overflow-x: hidden;
   padding-top: 20px;
}


.main {
   padding: 0px 10px;
}

@media screen and (max-height: 450px) {
   .sidenav {
      padding-top: 15px;
   }
}

@media screen and (max-width: 450px) {
   .login-form {
      margin-top: 10%;
   }

   .register-form {
      margin-top: 10%;
   }
}

@media screen and (min-width: 768px) {
   .main {
      margin-left: 40%;
   }

   .sidenav {
      width: 40%;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
   }

   .login-form {
      margin-top: 80%;
   }

   .register-form {
      margin-top: 20%;
   }
}


.login-main-text {
   margin-top: 20%;
   padding: 60px;
   color: #fff;
}

.login-main-text h2 {
   font-weight: 300;
}

.btn-black {
   background-color: #120808 !important;
   color: #fff;
}
</style>
