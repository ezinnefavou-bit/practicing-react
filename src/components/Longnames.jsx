const names=[  "Bo", "Maximillian",  "Kai",  "Genevieve",  "Mia",  "Bartholomew",  "Leo",  "Alexandria",  "Ian",  "Christopher",  "Eva",  "Evangeline",  "Ned",  "Penelope",  "Ray",  "Wilhelmina",  "Zoe",  "Sebastian",  "Joy",  "Alexander"
]
function Longnames(){
    return(
        <div>
            {names.map((name)=>(
                <div 
                key={name} 
                title={name}>
                    {name.length > 8
                     ? name.slice(0, 8) + "..." 
                     : name }
                    </div>
            ))}
        </div>
    )
}
export default Longnames;