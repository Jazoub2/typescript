
<script>
    export let data;
</script>
<nav>
    {#if data.user}
    <a href="/forums"><em><strong>FORUMS</strong></em></a>
    <a href="/market"><em><strong>MARKET</strong></em></a>
    <span style="position: fixed; top:10; left: 10px    ;">
        <form action="/login?/logout">
            <button>LOGOUT</button>
        </form>
    </span>
    {/if}

</nav>  
<slot>

</slot>

<style>
    /* From Uiverse.io by gksckt */ 
button {
display: flex;
 background-color: #626262;
 border-radius: 4px;
 color: #fff;
 cursor: pointer;
 padding: 15px 30px;
 font-size: 18px;
 font-weight: bold;
 letter-spacing: 1px;
 border: none;
 height: 30px;
justify-content: center;
align-items: center;
}

button:hover {
 background-image: linear-gradient(90deg, #626262 0%, rgb(255, 0, 0) 50%, rgb(113, 18, 18) 75%, #626262 100%);
 animation: slidernbw 5s cubic-bezier(0, 0.5, 0, 1);
 animation-delay: 300ms;
 color: #ffffff;
}

@keyframes slidernbw {
 to {
  background-position: 20vw;
 }
}
    nav{
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 30px;
        background-image: linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 45%, rgb(0, 0, 0) 45%, rgb(255, 255, 255) 100%);


        }
    span{
        max-width:100px;
    }
    form{
        max-width: inherit;
    }

    a{
        font-size: 20px;
        margin: 0 25px;
        color:rgb(255, 0, 162)
    }
</style>