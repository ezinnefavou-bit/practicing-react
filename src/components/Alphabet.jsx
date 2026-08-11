const letters = Array.from({length: 26}, (_, i) => String.fromCharCode(65 +i))
function Alphabet() {
    return(
       <div>
{letters.map((letter)=>(
    <p key={letter}>
        {letter}
        </p>
))}

       </div>
    )
}

export default Alphabet