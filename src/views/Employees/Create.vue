<template>
    <div class="containet mt-5">
        <div class="card">
            <div class="card-header">
                <h4> Add Employee</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for=" ">Name</label>
                    <input type="text" v-model="employee.name" class="form-control">
                </div>
                <div class="mb-3">
                    <label for=" ">City</label>
                    <input type="text" v-model="employee.city" class="form-control">
                </div>
                <div class="mb-3">
                    <label for=" ">Identity Number</label>
                    <input type="text" v-model="employee.identityNumber" class="form-control">
                </div>
                <div class="mb-3">
                    <label for=" ">Start Work </label>
                    <input type="datetime-local" v-model="employee.startWork" class="form-control">
                </div>
                <div class="mb-3">
                    <label for=" ">Leave Work</label>
                    <input type="datetime-local" v-model="employee.leaveWork" class="form-control">
                </div>
                <div class="mb-3">
                    <label for=" ">Department</label>
                    <select class="form-control" v-model="employee.departmentId">
                        <option v-for="dp in departments" :value="dp.id">{{ dp.name }}</option>
                    </select>

                </div>
                <div class="mb-3">
                    <button type="button" @click="saveEmployee()" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'employeeCreate',
    data() {

        return {

            departments: [],
            employee: {

                name: '',
                city: '',
                identityNumber: '',
                startWork: '',
                leaveWork: '',
                departmentId: ''
            }

        }

    },
    mounted() {
        this.getDepartment();
    },

    methods: {

        getDepartment() {
            axios.get('https://localhost:44355/api/department').then(res => {
                this.departments = res.data
                console.log(this.departments)
            });
        },


        saveEmployee() {
            axios.post('https://localhost:44355/api/employee', this.employee)
                .then(
                    this.resetData()
            // this.$router.push('/employee')
                )
        },
        resetData() {
            Object.keys(this.employee).forEach(key => (this.employee[key] = null));
            // kaydetme isleminden sonra textlerin icini resetlemek için yazilan bir fonksiyon
        }
    },
}

</script>
