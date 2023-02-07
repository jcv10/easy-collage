function downloadImage(data){
    var element = document.createElement("a");
    var file = new Blob(data);
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
}
function CollagePreview(props){
    return(
        <div style={{
            width:'800px',
            height:'600px',
            marginLeft:'10px',
            border:'1px solid black',
            borderRadius:'10px'
        }}>
            <div style={{
                backgroundColor:'#E4E5E8',
                margin:'20px',
                width:'760px',
                height:'400px'
            }}>
                <img src={props.url} alt="collage preview"/>

            </div>
            <button onClick={
                () => {
                    fetch('/collage')
                    .then(data => data.blob())
                    .then(info => {
                        console.log(info);
                        const url = window.URL.createObjectURL(info);
                        const link = document.createElement('a');

                        link.href = url;
                        link.setAttribute('download', 'img.png');
                        link.click();

                    })
                    .catch(err => console.log('error',err))
                } 
            }>Download</button>
        </div>
    );
}

export default CollagePreview;