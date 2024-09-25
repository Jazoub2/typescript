<script>
    export let data; 
</script>
<h1>Welcom to market</h1>

<main>
    <div id="form_container">
        <h1 style="color:blueviolet;">Create listign</h1>
        <form method="POST" action="?/create_listing">
            <div>
                <label for="listing_name_input">Listing name</label>
                <input placeholder="Name...."id="listing_name_input" name="listing_name" type="text" required>
            </div>
            <div>
                <label for="listing_description_input">Listing description</label>
                <textarea placeholder="description...."id="listing_description_input" name="listing_description" style="height: 100px;" required></textarea >
            </div>
            <div>
                <label for="listing_price_input">Listing price [$]</label>
                <input placeholder="Price...."id="listing_price_input" name="listing_price" type="number" min="100" max="100000" step="500" required>
            </div>
            <button type="submit">POST</button>
        </form>
    </div>
    
    <div class="listing_container">
        <h1>listings</h1>
        {#each data.listings as listing}
            <div style="width: 300px; height: 200px; background-color: red;">
                <h1>{listing.name}</h1>
                <p>Starting Price {listing.price} $</p>
                <p>Description: {listing.description}</p>
            </div>
            
        {/each}
    </div>
</main>

<style>
    .listing_container button{
        width: inherit;
        background-color: greenyellow;
    }
    .listing_container{
        display: grid;
        grid-template-rows: 1;
        grid-template-columns: repeat(5,1fr);
        gap: 10px;
        margin: 10px;

    }
    form {
        width: inherit;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    h1 {
        font-family: monospace;
    }

    #form_container {
        background-color: rgb(255, 123, 248);
        width: 500px;
        border: 5px solid cornflowerblue;
        border-radius: 10px;
    }

    input, textarea {
        color: rgb(17, 0, 255);
        background-color: aquamarine;
        overflow-wrap: break-word;
    }
</style>
