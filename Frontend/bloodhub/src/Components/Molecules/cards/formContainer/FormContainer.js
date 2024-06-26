import React from 'react'
import "./FormContainer.css"
import ButtonT2 from 'Components/Atoms/Buttons/ButtonT2'



export default function FormContainer({btnTxt,FormHeading,FormElements,style,onClick , formMsg}) {

     
  return (
    <>
    <form id='form' >
          <div className='formContainer py-4 col-md-8  m-auto d-flex flex-column'  style={style}>

               <div className='formHeader text-center'>
                    <h2>{FormHeading}</h2>
               </div>
               <div className='formElements pb-3'>
                    {FormElements}
               </div>
               <div className='formFooter text-center'  >
                    <ButtonT2 text={btnTxt} type={"submit"} onClick={onClick} />
               </div>
               <div className=' text-center formMsg'>
                    {formMsg}
               </div>

          </div>
    </form> 
    </>
  )
}
