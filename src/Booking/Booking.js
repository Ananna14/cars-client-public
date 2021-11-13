
// import { useEffect, useState } from 'react';
// import UseFirebase from '../../../Hooks/UseFirebase'

// const Orders = () => {
//     const {user} = UseFirebase();
//     // const [services, setService] = useState([]);

//     useEffect(()=>{
//         fetch(`https://limitless-reef-15821.herokuapp.com/myOrder/${user?.email}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//     },[user?.email])

// //    const loadData = (data) =>{
// //     //    data.email = email
// //     fetch('https://limitless-reef-15821.herokuapp.com/confirmOrder',{
// //         method: 'POST',
// //         headers: {
// //           'content-type':'application/json'
// //         },
// //         body:JSON.stringify(data)
// //       })
// //    .then(res => res.json())
// //    .then(result => console.log(result))

// //    console.log(data)
// //    }
  

    
//     return (
//         <div>
//             <h2>Order page</h2>
//             {/* <img className="img" src={services?.img} alt="" />
//             <h1>{services?.price}</h1>
//            <h2>{services?.name}</h2>
//            <p>{services?.description}</p>
//            <button>Buy Now</button> */}
//         </div>
//     )
// }

// export default Orders
