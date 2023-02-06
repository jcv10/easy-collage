function Form() {
    return(
        <form onSubmit={(e) => e.preventDefault()}
            style={{width:'250px', border:'1px solid black', borderRadius:'10px', padding:'10px'}}>
            <input type="file" accept=".jpg"/>
            <hr/>
            <input type="radio" 
                id="horizontal" 
                name="direction" 
                value="horizontal"/>
            <label htmlFor="horizontal">Horizontal Collage</label>
            <br/>
            <input type="radio"
                id="vertical"
                name="direction"
                value="vertical"/>
            <label htmlFor="vertical">Vertical Collage</label>
            <hr/>
            <label htmlFor="color">Border Color</label>
            <input type="color" id="color" style={{marginLeft:'5px', width:'100px'}}/>
            <hr/>
            <label htmlFor="thickness">Border Thickness</label>
            <input type="range" 
                id="thickness"
                min="1"
                max="10"/>
            <button>Make Collage</button>
        </form>
    )
}

export default Form;