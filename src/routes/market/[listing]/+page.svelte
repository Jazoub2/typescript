<script>
    import { page } from '$app/stores';
    export let data;
    let listing = data.listing;
    
</script>




<main>
    <h1>You are looking at listing: {data.listing?.name}</h1>
    <div class="listing_container">
        <div class="listing_divider" style="width: 700px; height: 400px; background-color: red;">
            <div>
                <h1>{listing?.name}</h1>
                <p>Starting Price {listing?.price} $</p>
                <p>Description: {listing?.description}</p>
                <form action="?/place_bid"method="POST">
                    <input name="bid_value" type="number" required placeholder="{listing?.price}" min="{listing?.price}">
                    <button type="submit">Place bid</button>
                </form>
                <div class="bids_wrapper">
                {#each listing.bids as bid }
                    <div class="bid_container">
                        <p>{bid.value}$</p>
                        {#if bid.status==null}
                        <form action="?/reject_bid"method="post">
                            <input type="text" hidden value="{bid?.id}" name="id">
                            <button>Reject</button>
                        </form>
                        <form action="?/accept_bid"method="post" >
                            <input type="text" hidden value="{bid?.id}" name="id">
                            <button>Accept</button>
                        </form>
                        {:else}
                            <p>{(bid.status)?"ACCEPTED":"REJECTED"}</p>
                        {/if}
                    </div>   
                {/each}
            </div>
            </div>
        </div>
    </div>
</main>

<style>
.listing_divider {
    display: flex;
    flex-direction: column;
    width: 700px;
    height: auto; /* Change to auto to fit content */
    background-color: red;
    padding: 10px; /* Add some padding for aesthetics */
}

.bid_container {
    background-color: aliceblue;
    display: flex;
    max-width: 150px; /* Set a max width for each bid */
    margin: 5px;
    flex-shrink: 0; /* Prevents shrinking */
    border-radius: 5%;
}
.bid_container button{
    max-height: 35px;
    align-self: center;
}

.bids_wrapper {
    display: flex;
    flex-wrap: wrap; /* Allow bids to wrap */
    max-width: 100%; /* Prevent overflow */
}

.listing_container {
    height: fit-content;
}

</style>