import React, { useEffect, useState } from 'react'




export default function foms() {

    const [forms, setforms] = useState([])

    async function getForms() {

        const rawResponse = await fetch('https://clownfish-app-jn7w9.ondigitalocean.app/codeoutsform',)
        const content = await rawResponse.json();
        console.log(content);
        setforms(content.data)
    }



    useEffect(() => {

        getForms()

    }, [])


    return (
        <div className='flex flex-col space-y-8 p-6'>

            {forms.map(form => {
                return (
                    <div>
                        <h1 className='font-inter'>{form.FirstName + " " + form.LastName}</h1>
                        <h1 className='font-inter'>{form.Email}</h1>
                        <h1 className='font-inter'> {form.phoneNumber}</h1>
                        <h1 className='font-bold text-lg'>{form.createdAt.substring(0, 10)}</h1>
                    </div>

                )
            })}

        </div>
    )
}
