import React from 'react'

const Asus=()=> {
  const product=[
    {img:"https://i.pinimg.com/1200x/a8/31/88/a83188b85f65590a9c4a2faa73017f9d.jpg",descrip:"Description",note:"Naturally Refreshing, Naturally Healthy 💜🍑"},
    {img:"https://i.pinimg.com/1200x/a8/31/88/a83188b85f65590a9c4a2faa73017f9d.jpg",descrip:"Description",note:"Naturally Refreshing, Naturally Healthy 💜🍑"},
    {img:"https://i.pinimg.com/1200x/a8/31/88/a83188b85f65590a9c4a2faa73017f9d.jpg",descrip:"Description",note:"Naturally Refreshing, Naturally Healthy 💜🍑"},
    {img:"https://i.pinimg.com/1200x/a8/31/88/a83188b85f65590a9c4a2faa73017f9d.jpg",descrip:"Description",note:"Naturally Refreshing, Naturally Healthy 💜🍑"},
    {img:"https://i.pinimg.com/1200x/a8/31/88/a83188b85f65590a9c4a2faa73017f9d.jpg",descrip:"Description",note:"Naturally Refreshing, Naturally Healthy 💜🍑"},
    {img:"https://i.pinimg.com/1200x/a8/31/88/a83188b85f65590a9c4a2faa73017f9d.jpg",descrip:"Description",note:"Naturally Refreshing, Naturally Healthy 💜🍑"},
    {img:"https://i.pinimg.com/1200x/a8/31/88/a83188b85f65590a9c4a2faa73017f9d.jpg",descrip:"Description",note:"Naturally Refreshing, Naturally Healthy 💜🍑"},
    {img:"https://i.pinimg.com/1200x/a8/31/88/a83188b85f65590a9c4a2faa73017f9d.jpg",descrip:"Description",note:"Naturally Refreshing, Naturally Healthy 💜🍑"},
  ]
  return (
    <div>
      <div className='product_card flex flex-wrap justify-center pl-[7%] pr-[7%] gap-6'>
          <div className='w-[300px] h-[430px] rounded-2xl overflow-hidden shadow-2xl p-[15px]'>
            <div className='w-[100%] h-[70%]'>
                  <img className='w-[100%] h-[100%]' src="https://i.pinimg.com/1200x/cf/a3/00/cfa300f0bc32a5158bb9f5bdabb228aa.jpg" alt="" />
            </div>
            <div className='w[100%] h-[30%]'>
                  <p className='text-[15px] text-gray-500'>Description</p>
                  <p className='note w-[100%] h-[30px] overflow-hidden text-[20px]'>Pure Refreshing Delight ❤️🍃 Indulge in the sweet</p>
                  <button className='bg-emerald-700 w-[100%] mt-5 text-white font-bold p-[10px] hover:rotate-3 rounded-[5px]'>Add to card</button>
            </div>
          </div>
          {
            product.map((item,index)=>(
              <div className='w-[300px] h-[430px] rounded-2xl overflow-hidden shadow-2xl p-[15px]'>
            <div className='w-[100%] h-[70%]'>
                  <img className='w-[100%] h-[100%]' src={item.img} alt="" />
            </div>
            <div className='w[100%] h-[30%]'>
                  <p className='text-[15px] text-gray-500'>{item.descrip}</p>
                  <p className='note w-[100%] h-[30px] overflow-hidden text-[20px]'>{item.note}</p>
                  <button className='bg-emerald-700 w-[100%] mt-5 text-white font-bold p-[10px] hover:rotate-3 rounded-[5px]'>Add to card</button>
            </div>
          </div>
            ))
          }
      </div>
    </div>
  )
}

export default Asus
