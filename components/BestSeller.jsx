import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const BestSeller = ({ data: { attributes: p, id } }) => {
  return (
    <>
        <Link
            href={`/product/${p.slug}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <div className="contentest">
                <div className="card" >
                    <div className="img-box">
                        <Image
                            width={500}
                            height={500}
                            src={p.thumbnail.data.attributes.url}
                            alt={p.name}
                        />
                    </div>
                    <div className="content">
                        <h2>{p.name}</h2>
                        <p>${p.price} </p>
                        <a href="">See Details</a>
                    </div>
                </div>
            </div>
        </Link>
    </>
    )
}

export default BestSeller