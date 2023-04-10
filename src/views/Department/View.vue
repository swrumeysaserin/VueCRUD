<template>
    <div class="container">
        <div>
            <input class="form-control form-cnt" @keydown.enter="filteredDepartment(searchQuery)" type="search"  name="searchQuery" placeholder="Search.." v-model="searchQuery">
            <button type="button" @click="filteredDepartment(searchQuery)" class="btn btn-primary">Search</button>
        </div>
        <div class="card">
            <div class="card-header">
                <h4> Department
                    <RouterLink to="/departmentCreate" class="btn btn-primary float-end">
                        Add Department
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>


                        </tr>
                    </thead>
                    <tbody v-if="this.departments.length > 0">
                        <tr v-for="(department, index) in this.departments" :key="index">
                            <td>{{ department.id }}</td>
                            <td>{{ department.name }}</td>
                            <td>
                                <RouterLink :to="{ path: '/department/' + department.id }"
                                    class="btn btn-edit btn-lg float-end">
                                    Edit
                                </RouterLink>
                                <!-- <button type="button" @click="updateStatusDepartment()"  class="btn btn-danger float-end">Delete</button> -->
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
export default {
    name: 'department',
    data() {
        return {
            departments: [],
            searchQuery: ''

        }
    },
    mounted() {
        this.getDepartment();
        //this.filteredDepartment(this.searchQuery)
    },
    methods: {

        getDepartment() {
            axios.get('https://localhost:44355/api/department').then(res => {
                this.departments = res.data
                console.log(this.departments)
            });
        },

        getDepartmentData(departmentId) {
            axios.get(`https://localhost:44355/api/department/${departmentId}`).then(res => {
                console.log(res.data.departments);
                this.departments = res.data

            });
        },
        filteredDepartment(searchQuery) {
           
           // return this.departments.filter(
           //     (entry) => this.departments.length
           //         ? Object.keys(this.departments[0])
           //             .some(key => ('' + entry[key]).toLowerCase().includes(this.search.toLowerCase()))
           //         :true
           // );
           axios.get((`https://localhost:44355/api/department/searchQuery?search=`+searchQuery)).then(res => {
               this.departments = res.data
               console.log(this.departments)
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