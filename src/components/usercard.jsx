// write the component code here

function Usercard(){
    
    const name='Claudia Jerome'
    const email='cladzz@gmail.com'
    const phone='1234567890'
    const address='christ college,kanmanike,Bengaluru'
    const image ='https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg'
    
    return(
        <>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-sm text-center">
                <img src={image} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <div className="text-gray-700">
                    <h2 className="text-xl font-semibold mb-2">{name}</h2>
                    <p className="text-sm mb-1">Email: <span className="text-gray-500">{email}</span></p>
                    <p className="text-sm mb-1">Phone: <span className="text-gray-500">{phone}</span></p>
                    <p className="text-sm">Address: <span className="text-gray-500">{address}</span></p>
                </div>
            </div>
        </>
    )
}

export default Usercard;