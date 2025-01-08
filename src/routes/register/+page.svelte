<script>
    import { enhance } from "$app/forms";
    export let form; 
</script>

<main>
    <form use:enhance action="?/register" method="post">
        <div class="form_container">
            <h2>Register Account</h2>
            <div class="input_group">
                <input type="text" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <button type="submit">Register</button>
                <a href="/login">Got an account? Login here</a>
                <span>
                    {form ? form.register_fail: ""}
                    {form ? form.username_in_use_fail:""}
                </span>
            </div>
        </div>
    </form>
</main>

<style>

    main {
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        height: 100%; /* Full height */
    }

    .form_container {
        margin-top: 200px;
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        width: 300px;
        text-align: center;
    }

    h2 {
        margin-bottom: 20px;
        color: #555;
    }

    .input_group {
        display: flex;
        flex-direction: column;
    }

    input[type="text"],
    input[type="password"] {
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: border-color 0.3s;
    }

    input[type="text"]:focus,
    input[type="password"]:focus {
        border-color: #007bff;
        outline: none;
    }

    button {
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }

    span {
        color: red;
        font-weight: 900;
        margin-top: 10px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>
