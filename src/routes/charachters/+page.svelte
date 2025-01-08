<script>
    //@ts-nocheck

    export let data;
    export let form;
    let name_input_value = "";
    let desc_input_value = "";
    let img_input = ""; // url
    let img_preview = "";

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                img_preview = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }
</script>

<body>
    <nav>
        <h1>Character</h1>
    </nav>
    <main>
        <div class="form_container">
            <label for="char_form">Create Character</label>
            <form
                action="?/add_char"
                method="POST"
                id="char_form"
                enctype="multipart/form-data"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name..."
                    bind:value={name_input_value}
                />
                <input
                    type="text"
                    name="desc"
                    placeholder="Description..."
                    bind:value={desc_input_value}
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    on:change={handleFileUpload}
                />
                <button type="submit">Submit</button>
                <button type="reset">Clear</button>
                {#if form}
                    <p style="color:red">
                        <span>
                            <strong>{form.errorcode}</strong>
                        </span>
                    </p>
                {/if}
            </form>
        </div>
        <div class="preview_container">
            <label for="char_preview">Characters Preview</label>
            <div class="char_preview">
                <h3 id="char_name">
                    {name_input_value ? name_input_value : "Name"}
                </h3>
                <img src={img_preview} alt="" />
                <p
                    style={desc_input_value ? "color=black" : "color:grey"}
                    id="preview_desc"
                >
                    {desc_input_value ? desc_input_value : "Description..."}
                </p>
            </div>
        </div>
        <label id="character_list_label" for="character_list_container"
            >Character List</label
        >
        <div id="character_list_container" class="character_list_container">
            {#each data.characters as character}
                <div class="character_item">
                    <h3>{character.name}</h3>
                    {#if character.image}
                        <img
                            src="data:image/jpeg;base64,{character.image
                                .encoding}"
                            alt="googly"
                        />
                    {/if}
                    <p style="color: rgb(50,50,50)">
                        Description : {character.desc}
                    </p>
                </div>
            {/each}
        </div>
    </main>
</body>

<style>
    label {
        justify-self: center;
        align-self: center;
        font-size: larger;
        text-align: center;
    }
    #character_list_label {
        grid-row: 3;
        grid-column: 2;
    }
    .character_item {
        background-color: rgba(120, 120, 120, 0.418);
        border: 3px solid rgba(73, 71, 54, 0.854);
        margin: 10px;
        padding: 10px;
        border: 10px ridge rgb(223, 225, 225);
    }
    .character_item img {
        max-width: 200px;
    }
    .character_list_container {
        grid-area: 4/ 1/ 4/ 4;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    body {
        background: linear-gradient(
            red 0%,
            orange 15%,
            yellow 25%,
            lime 40%,
            green 50%,
            blue 75%,
            pink 100%
        );
    }
    nav {
        position: sticky;
        top: 35px;
        background: linear-gradient(#606060, #c2c2c2);
        display: flex;
        justify-content: center;
    }
    main {
        margin-top: 50px;
        background: radial-gradient(#606060 0.1%, #c2c2c2);
        height: 90vh;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 1fr 0.2fr 0.8fr;
    }
    main,
    nav {
        width: 95vw;
    }
    .form_container,
    .preview_container {
        margin-top: 20px;
        grid-column: 2;
        justify-self: center;
    }
    .char_preview h3,
    p {
        margin: auto;
    }
    .char_preview img {
        height: 75px;
        width: 150px;
        align-self: center;
    }
    form,
    .char_preview {
        background-color: lightgray;
        border: 2px solid grey;
        display: flex;
        flex-direction: column;
        column-count: 1;
        width: 200px;
    }
    form {
        padding: 20px;
    }
</style>
