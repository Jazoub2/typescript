<script>
    export let data;
    export let form;
</script>
<body>
    
    <main>
        <h1>HELLO THIS IS GAMES</h1>
        <div class="form_container" id="games_container">
            <h1 id="result_label">Match result</h1>
            <form method="post" action="?/add_match">
                <div>
                    <label for="select_p1">Character 1</label>
                    <select name="select_p1" id="p1_select_char" placeholder="player">
                        {#each data.characters as characters}
                            <option value="{characters.name}">{characters.name}</option>
                        {/each}
                    </select>
                    <label for="select_p2">Character 2</label>
                    <select name="select_p2" id="p2_select_char" placeholder="player">
                        {#each data.characters as characters}
                            <option value="{characters.name}">{characters.name}</option>
                        {/each}
                    </select>
                </div>
                <div>
                    <label for="winner">Winner</label>
                    <select name="winner" id="winner">
                        <option value="player 1">player 1</option>
                        <option value="player 2">player 2</option>
                    </select>
                </div>
                <div class="button_container">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
                {#if form}
                <p style="
                color: white; 
                text-shadow: 
                  3px 3px 10px red, 
                  0 0 15px yellow, 
                  0 0 10px orange, 
                  -3px -3px 5px red;
                font-weight: bold; 
                font-size: 1.2em;">
                        <span>
                            <strong>{form.errorcode}</strong>
                        </span>
                    </p>
                {/if}
            </form>
        </div>
        <div class="winrate_container">
            <h1>Character winrate</h1>
            {#each data.characters as char}
            <div class="info_container">
                {#if char.image}
                <img style = "width: 50x; height: 50px"
                        src="data:image/jpeg;base64,{char.image
                            .encoding}"
                        alt="googly"
                    />
                {/if}
                <p><strong>name</strong>:{char.name}</p>
                <p><strong>wins</strong>:{char.wins}</p>
                <p><strong>currentstreak</strong>:{char.currentstreak}</p>
                <p><strong>games played</strong>:{char.games}</p>
                {#if char.wins != 0 || char.games != 0}
                <p>winrate:{(char.wins/char.games)*100}%</p>
                {/if}
            </div>
        {/each}
        </div>

        <div class="recent_matched_container">
            <h1>Recent Matches</h1>
            {#each data.recentGames as rg}
                <div class="recentgames">
                    <p>winner:{rg.win.name}</p>
                    <img style = "width: 50x; height: 50px"
                        src="data:image/jpeg;base64,{rg.win.image?.encoding}"
                        alt="googly"
                    />
                    <p>loser:{rg.loss.name}</p>
                    <img style = "width: 50x; height: 50px"
                    src="data:image/jpeg;base64,{rg.loss.image?.encoding}"
                    alt="googly"
                />
                </div>
            {/each}
        </div>
    </main>
</body>

<style>

    .recent_matched_container{
        display: flex;
    }
    .recentgames{
        border: 5px solid rgb(255, 51, 0);
        margin: 10px;

    }
    .info_container{
        margin: 10px;
        border: 5px solid red;
        display: flex;
    }
    h1{
        color:yellow
    }
    /* General Body Styles */
    body {
        font-family: 'Arial', sans-serif;
        background-color: #2e0a0a;  /* Dark background for the overall page */
        color: white;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    /* Form Container */
    .form_container {
        background-color: #8b0000; /* Dark red background */
        width: 100%;
        max-width: 500px;
        padding: 30px;
        border: 5px solid #d40000;  /* Bright red border */
        border-radius: 15px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        text-align: center;
    }

    /* Result Label */
    #result_label {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5rem;
        color: #ffd700;  /* Bright golden color for contrast */
        margin-bottom: 20px;
    }

    /* Labels */
    label {
        font-size: 1rem;
        color: #ffd700;
        margin-bottom: 5px;
        display: inline-block;
        text-align: left;
    }

    /* Select Inputs */
    select {
        width: 100%;
        padding: 10px;
        background-color: #d40000;  /* Bright red background */
        color: white;
        border: 2px solid #900;  /* Dark red border */
        border-radius: 5px;
        margin-bottom: 15px;
        font-size: 1rem;
        box-sizing: border-box;
        appearance: none; /* Removes default dropdown arrow */
    }

    /* Focus effect on select */
    select:focus {
        outline: none;
        border: 2px solid #ffd700;  /* Golden border on focus */
    }

    /* Button Container */
    .button_container {
        border: 4px solid #d40000;  /* Dark red border */
        padding: 10px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 15px;
        border-radius: 25px;
        background-color: #900;  /* Darker red for the button container */
    }

    /* Buttons */
    button {
        background-color: #d40000;  /* Bright red for buttons */
        color: white;
        border: none;
        padding: 12px 25px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    /* Button Hover Effects */
    button:hover {
        background-color: #ff4500;  /* Lighter red on hover */
        transform: scale(1.05);
    }

    /* Reset Button - Soft red for Reset */
    button[type="reset"] {
        background-color: #900;  /* Dark red for reset button */
    }

    /* Reset Button Hover */
    button[type="reset"]:hover {
        background-color: #ff6347;  /* Lighter red for reset button hover */
    }

    /* Placeholder Text for Select Inputs */
    option {
        color: #8b0000;  /* Dark red placeholder text */
    }
</style>
