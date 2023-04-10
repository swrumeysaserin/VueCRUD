<template>
    <div class="containet mt-5">
        <div class="card">
            <div class="card-header">
                <h4> Edit Department</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for=" ">Name</label>
                    <input type="text" v-model="department.name" class="form-control">
                </div>
                <div class="mb-3">
                    <button type="button" @click="updateDepartment()" class="btn btn-primary">Update</button>
                </div>
                <div class="mb-3">
                    <button type="button" @click="updateStatusDepartment()" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'departmentEdit',
    data() {
        return {
            department: {
                name: ''
            }
        }

    },
    mounted() {
        this.getDepartmentData(this.$route.params.id)
    },

    methods: {
        getDepartmentData(departmentId) {
            axios.get(`https://localhost:44355/api/department/${departmentId}`).then(res => {
                console.log(res.data.department);
                this.department = res.data

            });
        },
        updateStatusDepartment() {
            axios.patch('https://localhost:44355/api/department', this.department)
                .then(

                    this.$router.push('/department')
                )
        },
        updateDepartment() {
            axios.put('https://localhost:44355/api/department', this.department)
                .then(

                    this.$router.push('/department')
                )
        }
    },
}
</script>