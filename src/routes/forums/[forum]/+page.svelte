<script>
export let data; 

import { browser } from '$app/environment';
import { onDestroy } from 'svelte';
import { invalidateAll } from '$app/navigation';
if (browser) {
const intervall = setInterval(() => {
invalidateAll();
}, 1000); // Justera intervall efter behov
onDestroy(() => {
clearInterval(intervall);
});
} 

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
        <p><span style="text-transform:uppercase"><strong>{data.user?.username}</strong></span>:  ,{message.content}</p>
    {/each}


</div>