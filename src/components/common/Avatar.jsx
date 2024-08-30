const Avatar = ({ src, alt = "", size = "4rem" }) => {
    return (
        <figure style={{ height: size }} title={alt} className='m-0'>
            <img src={src || `https://api.dicebear.com/9.x/thumbs/png?seed=${alt}`} alt={alt} className='h-100 object-fit-cover rounded-circle' style={{ aspectRatio: "1/1" }} />
        </figure>
    )
}

export default Avatar