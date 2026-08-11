const names=[  "Bo", "Maximillian",  "Kai",  "Genevieve",  "Mia",  "Bartholomew",  "Leo",  "Alexandria",  "Ian",  "Christopher",  "Eva",  "Evangeline",  "Ned",  "Penelope",  "Ray",  "Wilhelmina",  "Zoe",  "Sebastian",  "Joy",  "Alexander"
]
function Vowels(){
    return(

         <div>
            {names.map((name) => (
                <div key={name}>
                   {name.split("").map((letter,index)=>(
                    <span 
                    key= {index} className={
                        "aeiou".includes(letter.toLowerCase()) ? "text-green-500" : ""
                    }
                    >
                        {letter}
                    </span>
                   ))}
                </div>
            ))}
        </div>
    )
}
export default Vowels;