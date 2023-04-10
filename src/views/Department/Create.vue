<template>
    <div class="containet mt-5">
        <div class="card">
            <div class="card-header">
                <h4> Add Department</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for=" ">Name</label>
                    <input type="text" v-model="department.name" class="form-control">
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveDepartment()" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'departmentCreate',
    data() {
        return {
            department: {
                name: ''
            }
        }

    },


    methods: {


        saveDepartment() {
            axios.post('https://localhost:44355/api/department', this.department)
                .then(
                    this.resetData()
                    // this.$router.push('/department')
                )
        },
        resetData() {
            Object.keys(this.department).forEach(key => (this.department[key] = null));
            // kaydetme isleminden sonra textlerin icini resetlemek için yazilan bir fonksiyon
        }
    },
}
</script>