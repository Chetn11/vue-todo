<template>
    <div class="container">
        <form class="form-inline text-center">
            <div class="form-group mx-sm-3 mb-2 text-center">
              <input type="text" class="form-control" id="todoInput" placeholder="Enter Todo">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Add Todo</button>
            
        </form>
    </div>
</template>
<script>
export default {
    
}

</script>
<style scoped>
#todoInput{
    width: 300px;
    text-align: center;
}

.container {
    display: flex;
    justify-content: center;
    height: 100vh;
}

.form-inline {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-control {
    width: 300px;
}

.form-group {
    margin-bottom: 1rem;
}

.btn {
    margin-top: 0.5rem;
}

</style>
