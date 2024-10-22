
<script>
    export let data;
</script>
<nav>
    {#if data.user}
    <a href="/forums"><em><strong>FORUMS</strong></em></a>
    <a href="/market"><em><strong>MARKET</strong></em></a>
    <span>
        <form action="/login?/logout">
            <button>LOGOUT</button>
        </form>
    </span>
    {/if}

</nav>  
<slot>

</slot>

<style>
    nav{
        width: 2000px;
        height: 30px;
        margin-left: -50;
        background-image: linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 0, 111) 45%, rgb(255, 0, 111) 45%, rgb(255, 255, 255) 100%);


        }
    span{
        max-width:100px;
    }
    form{
        max-width: inherit;
    }

    a{
        font-size: 20px;
        margin: 50px;
        color:rgb(255, 0, 162)
    }
</style>