
<script>
    export let data;
</script>
<nav>
    {#if data.user}
    <a href="/forums"><em>Forum</em></a>
    <a href="/market"><em>Market</em></a>
    <a href="/charachters"><em>Characters</em></a>
    <a href="/charachters/games"><em>Games</em></a>
    <a href="/persons"><em>Persons</em></a>
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
z-index: 5;
border: 2px solid red;
display: flex;
 background-color: #626262;
 border-radius: 4px;
 color: #fff;
 cursor: pointer;
 padding: 15px 30px;
 font-size: 18px;
 font-weight: bold;
 letter-spacing: 1px;
 height: 30px;
justify-content: center;
align-items: center;
}

button:hover {
 background: linear-gradient(90deg, #ff0000 0%, rgb(179, 255, 0) 50%, rgb(0, 255, 191) 75%, #ff0033c2 100%);
 animation: slidernbw 5s cubic-bezier(0, 0.5, 0, 1);
 animation-delay: 300ms;
}   

@keyframes slidernbw {
 to {
  background-position: 20vw;
 }
}
    nav{
        position: fixed;
        top: 0px;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 30px;
        background-image: linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 45%, rgb(0, 0, 0) 45%, rgb(255, 255, 255) 100%);


        }
        button{
            position: fixed;
            z-index: 5;
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
        color:rgba(173, 173, 173, 0.311)
    }
</style>