import { style } from 'framer-motion/client'
import React from 'react'

const Asus_page=()=> {
  const product=[
    {img:"https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/9DSm4DygGTSzCPUc0gsWS3VG8UUS6PUDWcFMt4xe.png",discount:"20",note:"ASUS ROG Strix G16 G615JMR-RV163W I7-14650HX-16GB-1TB G4SSD-NV RTX5060-16",price:"1000"},
    {img:"https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/TOwEmEzEj0vcU4tT2gS9EKGHNHvv9HEOJ7B11h7q.png",discount:"20",note:"ASUS Zenbook 14 UM3406GA-QD028W Ryzen™ AI 7",price:"1000"},
    {img:"https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/9DSm4DygGTSzCPUc0gsWS3VG8UUS6PUDWcFMt4xe.png",discount:"20",note:"ASUS ROG Strix G18 G815JMR-S9071W I7-14650HX-16GB-1TB G4-",price:"1000"},
    {img:"https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/NhNPN4PKTuaVXw5CzxSs39Ru2GJsaXBo8EBECU2C.png",discount:"20",note:"ASUS Vivobook S14 S3407CA-LY071W-Core 7 255H -16GB-1TB-",price:"1000"},
  ]
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-7'>
          {
            product.map((item,index)=>(
              <div className='w-[280px] h-[370px] rounded-2xl overflow-hidden shadow-2xl p-[10px] hover:border-2 duration-200 border-2'>
                <div className='w-[100%] h-[60%]'>
                      <img className=' hover:scale-105' src={item.img} alt="" />
                </div>
                <div className='w[100%] h-[30%] font-bold'>
                      <p className='note w-[100%] h-[30px] overflow-hidden text-[20px]'>{item.note}</p>
                      <p className=''>{item.price}</p>
                      <button className='bg-emerald-700 w-[80%] mt-5 text-white font-bold h-[40px] rounded-[5px]'>Add to card</button>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Asus_page
