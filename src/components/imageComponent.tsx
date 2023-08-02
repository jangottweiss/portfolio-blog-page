import Image from 'next/image'

export default function ImageComponent({ src = "placeholder.png", width = 500, height = 500, alt = "image" }) {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
        />
    )
}