const names=[  "Bo", "Maximillian",  "Kai",  "Genevieve",  "Mia",  "Bartholomew",  "Leo",  "Alexandria",  "Ian",  "Christopher",  "Eva",  "Evangeline",  "Ned",  "Penelope",  "Ray",  "Wilhelmina",  "Zoe",  "Sebastian",  "Joy",  "Alexander"
]
function Sameletters(){
    return(
        <div>
            {names.map((name)=>(
             <div 
             key={name}
             >
                {name} {name[0].toLowerCase() === 
                name[name.length -1].toLowerCase() &&
                 (
                <span className="text-green-500">✓Same</span>
                )
                }
                </div>   
            ))}

        </div>
    )
}
export default Sameletters