<script>
export let data; 
</script>

<div>
    <h1>
        Messages Here: 
    </h1>
    <form  method="POST" action="?/createmessage">
    <label for="msginput">Input here: </label>
    <input type="text" name="blop" id="msginput">
    <button class="btn" type="submit">Send</button>
</form>
    {#each data.messages as message}
        <p>{message.content}</p>
    {/each}


</div>