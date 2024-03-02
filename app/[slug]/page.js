"use client"
import { redirect } from "next/dist/server/api-utils"
import { useEffect } from "react"

 
export default function page({params}) {

  useEffect(() => {
    if(params.slug >= 1000000000 && params.slug <= 9999999999 )
      window.location.assign(`tel:${params.slug}`)
    else{
      alert("Not a valid number please try with another number")
    }
  
    
  }, [])
  

  return <p>Post: {params.slug}</p>
}