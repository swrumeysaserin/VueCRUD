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
                        <label>Full Name</label>
                        <input v-model="userData.fullName" type="text" class="form-control" placeholder="Full Name">
                    </div>
                    <div class="form-group">
                        <label>User Name</label>
                        <input v-model="userData.userName" type="text" class="form-control" placeholder="User Name">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input v-model="userData.password" type="password" class="form-control" placeholder="Password">
                    </div>
                    <button @click="onSave" type="submit" class="btn btn-black">Save</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import CryptoJs from "crypto-js"
import axios from 'axios';

export default {
    name: 'register',
    data() {
        return {
            userData: {
                fullName: '',
                userName: '',
                password: ''
            }
        }

    },
    methods: {
        onSave() {
            const password = this.userData.password
            const key = "rumeysa12!"
            const cryptedPassword = CryptoJs.HmacSHA1(password, key).toString();
            axios.post('https://localhost:44355/api/login',{...this.userData, password : cryptedPassword} ).then(
                this.$router.push('/')
            )
            // const decryptedPassword=CryptoJs.AES.decrypt(cryptedPassword,key).toString(CryptoJs.enc.Utf8)
            // console.log("decryptedPassword:>>",decryptedPassword)
            // console.log(this.userData)
            //cryptolanmış şifreyi geri çözmek için 
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
    background-color: #2ebf59 !important;
    color: #fff;
}
</style>
 