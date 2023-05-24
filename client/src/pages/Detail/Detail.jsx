import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id}=useParams()
  const [item,setItem]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/product/${id}`).then(res=>{
      setItem(res.data)
    })
  })
  return (
  <>
<p>{item.name}</p>
  </>
  )
}

export default Detail