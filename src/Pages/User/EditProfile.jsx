import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function EditProfile() {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avtar: undefined,
        userId: useSelector((state)=> state?.auth?.data?._id)
    });


    const handleImageUpload(e){
        e.preventDefault();
        const uploadImage = e.target.files[0];
        if(uploadImage){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load", function(){
                setData({
                    ...data,
                    previewImage: this.result,
                    avtar: uploadImage
                })
            })
        }
    }

    function handleInputChange(e){
        const [name, value] = e.target;
        setData({
            ...data,
            [name]: value,
        })
    }
  return (
    <div>EditProfile</div>
  )
}

export default EditProfile