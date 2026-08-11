const names=[  "Bo", "Maximillian",  "Kai",  "Genevieve",  "Mia",  "Bartholomew",  "Leo",  "Alexandria",  "Ian",  "Christopher",  "Eva",  "Evangeline",  "Ned",  "Penelope",  "Ray",  "Wilhelmina",  "Zoe",  "Sebastian",  "Joy",  "Alexander"
]
function Reverselists(){
    return(
        <div className="p-5">
            {names.map((name) => (
                <p key={name}>
                    {name.split("").reverse().join("")}
                </p>
            ))}
        </div>
    )
}
export default Reverselists;