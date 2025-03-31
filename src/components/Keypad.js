// Code Keypad Component Here



function Keypad (){

let password;

function onType(pass) {
    password = pass
       console.log('Entering password...')
       return password
}

    return (
        <>
        <div>
            <input type='password' value={password} onChange={(e) => onType(e.target.value)} />
        </div>
        </>
    )
}

export default Keypad;