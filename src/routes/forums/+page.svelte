<script>
    export let data;
</script>

<main>
    <h1>WELCOME TO FORUMS</h1>
    
    <div class="forum-section">
        <h2>Available Forums</h2>
        <ol>
            {#each data.forums as forum}
                <li>
                    <a href="/forums/{forum.id}">{forum.name}</a>
                </li>
            {/each}
        </ol>
    </div>

    <form method="POST" action="?/create" class="new-forum-form">
        <label for="nameinput">Create New Forum</label>
        <input id="nameinput" type="text" name="name" placeholder="Enter forum name..." required>
        <button type="submit">Add Forum</button>
    </form>

</main>

<style>
    /* Font settings */
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');
    
    :root {
        --pink: rgb(255, 0, 162);
        --gradient-pink: linear-gradient(135deg, rgb(255, 0, 162) 0%, rgb(255, 0, 222) 100%);
        --background-color: #f7f7f7;
        --text-color: #333;
        --button-hover-color: rgba(255, 0, 162, 0.8);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Fira Sans', sans-serif;
        background: var(--background-color);
        color: var(--text-color);
        line-height: 1.6;
        overflow-x: hidden;
        position: relative;
    }

    /* Parallax Background Effect */
    body::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 200%;
        background: linear-gradient(135deg, rgba(255, 0, 162, 0.1) 0%, rgba(255, 0, 222, 0.1) 100%), 
                    url('https://www.transparenttextures.com/patterns/cubes.png');
        background-size: cover;
        z-index: -1;
        animation: parallax 10s infinite linear;
        opacity: 0.8;
    }

    @keyframes parallax {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-50%);
        }
    }

    /* Matrix-like Pink Circles Animation */
    body::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 0, 162, 0.2) 0%, rgba(255, 0, 222, 0.3) 30%, transparent 80%);
        background-size: 200px 200px;
        z-index: -2;
        animation: matrix 15s infinite linear;
        opacity: 0.6;
    }

    @keyframes matrix {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 800px 1200px;
        }
    }

    main {
        max-width: 900px;
        margin: 60px auto;
        padding: 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0px 4px 15px rgba(255, 0, 162, 1);
        text-align: center;
        position: relative;
        z-index: 1;
    }

    h1 {
        margin-bottom: 30px;
        font-size: 2.5rem;
        background: var(--gradient-pink);
        -webkit-background-clip: text;
        color: transparent;
    }

    .forum-section h2 {
        color: var(--pink);
        margin-bottom: 20px;
        font-size: 1.8rem;
    }

    ol {
        list-style-type: none;
        padding: 0;
    }

    ol li {
        margin: 10px 0;
        font-size: 1.2rem;
    }

    ol li a {
        color: var(--pink);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    ol li a:hover {
        color: #ff55c8;
    }

    .new-forum-form {
        margin-top: 40px;
        text-align: left;
    }

    .new-forum-form label {
        display: block;
        font-size: 1.1rem;
        margin-bottom: 8px;
        color: var(--pink);
    }

    .new-forum-form input {
        width: 100%;
        padding: 10px;
        border: 2px solid var(--pink);
        border-radius: 6px;
        margin-bottom: 20px;
        font-size: 1rem;
    }

    .new-forum-form button {
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        background: var(--gradient-pink);
        color: white;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .new-forum-form button:hover {
        background: var(--button-hover-color);
    }

    /* Extra modern touch for metro style */
    .forum-section ol li {
        background: #fff;
        border: 1px solid rgba(255, 0, 162, 0.3);
        padding: 10px 20px;
        border-radius: 8px;
        transition: transform 0.2s ease, box-shadow 0.3s ease;
    }

    .forum-section ol li:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(255, 0, 162, 0.6);
    }
</style>
