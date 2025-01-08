<script>
export let data;
let person = data.persons 
export let form; 
let selectedPerson={
    name:"",age:0,adress:"",id:""
}
</script>
<body>
    <main>
        <h1>Welcome to persons</h1>
        <div class="grid">
            <div class="form_c">
                <h2>Create New Person</h2>
                <form method="post"action="?/create_person">
                    <div class="input_container">   
                        <label for="name">name</label>
                        <input name="name"type="text">
            
                        <label for="age">age</label>
                        <input name="age"type="number">
            
                        <label for="adress">adress</label>
                        <input name="adress"type="text">
                    </div>
                    <div class="buttons">
                        <button type="submit">Confirm</button>
                        <button type="reset">Clear</button>
                    </div>
                </form>
                <div class="error_cont">
                    {#if form}
                        <p class="form_message">{form.formmessage}</p>
                    {/if}
                </div>
            </div>
            <div class="edit_p">
                <h2>Edit Person</h2>
                <form method="post"action="?/edit">
                    <div class="select_c">
                        <label for="person">Select person</label>
                        <select name="person" id="person" bind:value={selectedPerson}>
                            <option disabled selected>Select your option</option>
                            {#each person as p}
                                <option value="{p}">{p.name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="edit_c">
                        <div class="curr_info">
                        {#if selectedPerson != null}
                            <p>{selectedPerson.name}</p>
                            <p>{selectedPerson.age}</p>
                            <p>{selectedPerson.adress}</p>

                        {/if}
                        </div>
                        <div class="edit_container">
                                <input name="toedit"type="hidden" value="{selectedPerson.id}">
                                <label for="name">name</label>
                                <input name="e_name"type="text">
                    
                                <label for="age">age</label>
                                <input name="e_age"type="number">
                    
                                <label for="adress">adress</label>
                                <input name="e_adress"type="text">
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="submit">Confirm</button>
                        <button type="reset">Clear</button>
                    </div>                
                </form>
            </div>
            <div class="p_list">
                <h2>Recent Persons</h2>
                {#each person as p}
                    <div class="person">
                        <ul>
                            <li>
                                <h3><span style="color: red;">Name:</span> {p.name}</h3>
                            </li>
                            <li>
                                <p><span style="color:darkmagenta;">Age:</span> {p.age}</p>
                            </li>
                            <li>
                                <p><span style="color: yellow;">Adress:</span> {p.adress}</p>
                            </li>
                        </ul>
                    </div>
                {/each}
            </div>
        </div>
    </main>
</body>

<style>
    .select_c{
        align-self: center;
        justify-self: center;
    }
    h2{
        font-family: 'Courier New', Courier, monospace;
        color: rgb(40, 80, 67);
    }
    .person{
        font-family: 'Courier New', Courier, monospace;
    }
    .form_message{
        color: red;
        font-weight: 900;
        font-family: 'Courier New', Courier, monospace;
    }
    .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .edit_c{
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    .buttons, .input_container, .form_c,.person, .edit_p,.curr_info, .edit_container{
        border: 2px solid aquamarine;
        padding: 10px;
        margin: 10px;
        width: fit-content;
        background-color:rgba(67, 116, 139, 0.267);
        box-shadow: 3px 2px 2px rgb(52, 102, 85);
    }
    .edit_container, .input_container{
        display: grid;
        grid-template-rows: repeat(3,1fr);
    }
    .buttons{
        justify-self: center;
    }
    .curr_info{
        width: inherit;
        height: 120px;
    }
    button{
        box-shadow: 3px 2px 2px rgb(52, 102, 85);
        background-color: rgb(190, 255, 233);
    }
    body{
        background-color: rgb(122, 146, 138);
    }
</style>