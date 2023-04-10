<template>
    <div class="container">
        <div>
            <input class="form-control form-cnt" @keydown.enter="filteredEmployee(searchQuery)" type="searchQuery"
                name="searchQuery" placeholder="Search.." v-model="searchQuery">
            <button type="button" @click="filteredEmployee(searchQuery)" class="btn btn-primary">Search</button>
        </div>
        <div class="card">
            <div class="card-header">
                <h4> Employee</h4>
                <h4>
                    <RouterLink to="/employeeCreate" class="btn btn-primary float-end">
                        Add Employee
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Identity Number</th>
                            <th>Start Work</th>
                            <th>Leave Work</th>
                            <th>Department</th>

                        </tr>
                    </thead>

                    <tbody v-if="this.employees.length > 0">
                        <tr v-for="(employee, index) in this.employees" :key="index">
                            <td>{{ employee.id }}</td>
                            <td>{{ employee.name }}</td>
                            <td>{{ employee.city }}</td>
                            <td>{{ employee.identityNumber }}</td>
                            <td>{{ employee.startWork }}</td>
                            <td>{{ employee.leaveWork }}</td>
                            <td v-if="employee.departmentId = this.departments.id">{{ this.departments.name }}</td>

                            <td>
                                <RouterLink :to="{ path: '/employees/' + employee.id }" class="btn btn-success float-end">
                                    Edit
                                </RouterLink>
                                <button type="button" @click="showAlert(employee.id)"
                                    class="btn btn-danger float-end">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="8"> Loading..</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { setBlockTracking } from 'vue';
export default {
    name: 'employees',
    data() {
        return {
            employees: [],
            departments: [],
            search: '',
            searchQuery: ''
        }
    },
    mounted() {
        this.getEmployee();
        this.getDepartment();
        //console.log('i am here ');
    },
    methods: {
        showAlert(employeeId) {
            this.$swal({
                title: 'Are you sure?',
                text: 'You can\'t revert your action',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    this.deleteEmployee(employeeId)
                    this.$swal('Deleted', 'You successfully deleted this file', 'success')
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },

        getEmployee() {
            axios.get('https://localhost:44355/api/employee').then(res => {
                this.employees = res.data
                console.log(this.employees)
            });
        },
        getDepartment() {
            axios.get('https://localhost:44355/api/department').then(res => {
                this.departments = res.data
                console.log(this.departments)
            });
        },
        deleteEmployee(employeeId) {
            axios.delete(`https://localhost:44355/api/employee/${employeeId}`).then(res => {
                 // silme isleminden sonra sayfayı yenilemeden silinenlerin gitmesi için yazilan fonksiyon
                if (res.status == 200) {
                    this.employees = this.employees.filter(b => b.id != employeeId);
                }
                // this.$router.push('/employee')
            });
        },

        filteredEmployee(searchQuery) {
            axios.get((`https://localhost:44355/api/employee/searchQuery?search=` + searchQuery)).then(res => {
                this.employees = res.data
                console.log(this.employees)

            });
        }

    },




}
</script>
<style> .btn-edit {
     background-color: darkgreen !important;
 }

 .form-cnt {
     border-color: brown !important;
 }
</style>
  