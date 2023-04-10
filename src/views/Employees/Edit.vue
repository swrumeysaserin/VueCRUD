<template>
    <div class="containet mt-5">
        <div class="card">
            <div class="card-header">
                <h4> Edit Employee</h4>
            </div>
            <div class="card-body">
                <!-- <div class="mb-3">
                    <label  for=" ">Id</label>
                    <input type="text" v-model="employee.id" class="form-control">
                </div> -->
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
                    <button type="button" @click="updateEmployee()" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    
    name: 'employeeEdit',

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
        this.getEmployeeData(this.$route.params.id);
        // console.log(this.$route.params.id)
    },

    methods: {
        getEmployeeData(employeeId) {
            axios.get(`https://localhost:44355/api/employee/${employeeId}`).then(res => {
                console.log(res.data.employee);
                this.employee = res.data

            });
        },
        getDepartment() {
            axios.get('https://localhost:44355/api/department').then(res => {
                this.departments = res.data
                console.log(this.departments)
            });
        },


        updateEmployee() {
            axios.put(`https://localhost:44355/api/employee`, this.employee)
                .then(

                    this.$router.push('/employee')
                )
        }
    },
}

</script>
