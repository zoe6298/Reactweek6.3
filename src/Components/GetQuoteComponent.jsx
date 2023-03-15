import {useEffect, useState} from 'react';
import axios from 'axios';
import useGetQuote from '../Hooks/useGetQuote';

function GetQuoteComponent() {
    
    const currentQuote = useGetQuote();

    // useEffect(()=> {
    // //    (async () => {
    // //     try {
    // //         const quoteData = await axios.get("https://api.api-ninjas.com/v1/quotes",{
    // //             params: {
    // //                 'limit':1,
    // //             },
    // //             headers: {
    // //                 'X-Api-Key':"N8JE7xM/wBCaEWXcKzOt6Q==OLqbL8f3AnVhHPB5"
    // //             }
    // //         })

    // //         setCurrentQuote(quoteData.data[0])

    // //     } catch(error) {
    // //         console.log(error);
    // //     }
    // // })()
    // // }
    // //     , [])
    
    //     axios.get("https://api.api-ninjas.com/v1/quotes",{
    //         params: {
    //             'limit':1,
    //         },
    //         headers: {
    //             'X-Api-Key': import.meta.env.VITE_API_KEY
    //         }
    //     }).then(res => {
    //         setCurrentQuote(res.data[0])
    //     })

    
    // }
    //  , [])
    return (
        <>
        {
            currentQuote &&
            <>

        <h1>{currentQuote.quote}</h1>
        <h2>Spoken by {currentQuote.author}</h2>
        </>
    }
        </>
    );

}
export default GetQuoteComponent;