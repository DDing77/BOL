export const UploadImage =(req) => {
    console.log(req.image);

    const formData = new FormData();
    formData.append('title',req.title)
    formData.append('description', req.description)

    // for( let i = 0; i< req.image.length; i++){
    //     formData.append('image',req.image[i])
    // }
    for(const image of req.image){
        formData.append('image',image);
    }

    for (let key of formData.keys()) {

        console.log(key);
      
    }
    for (let value of formData.values()) {

        console.log(value);
      
    }
}