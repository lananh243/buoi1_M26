<script setup>
import AddJob from "./AddJob.vue"
import AllJob from "./AllJob.vue"
</script>
<template>
          <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center
                    h-100">
                    <div class="col col-xl-10">
                        <div class="card">
                            <div class="card-body p-5">
                                <h3 style="text-align: center; margin-bottom:
                                    40px;">Quản lý công việc</h3>
                                    <AddJob/>

                                <AllJob/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
</template>


<style>

</style>