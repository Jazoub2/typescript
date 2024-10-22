<script>
    import { enhance } from "$app/forms";
    export let form

</script>

<h1>LOGGLE BOGGLE</h1>

<main>
    <form use:enhance action="?/login"method="post">
        <div class="form_container">
            <div>
                <input type="text" name="username">
                <input type="password" name="password">
                <button type="submit">LOGIN MAYBE?</button>
            </div>  
            <span>{form?form.login_fail:""}</span>
        </div> 
    </form>
</main>

<style>
    span {
        color: red;
        font-weight: 900;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>