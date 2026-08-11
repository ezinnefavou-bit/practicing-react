const names=[  "Bo", "Maximillian",  "Kai",  "Genevieve",  "Mia",  "Bartholomew",  "Leo",  "Alexandria",  "Ian",  "Christopher",  "Eva",  "Evangeline",  "Ned",  "Penelope",  "Ray",  "Wilhelmina",  "Zoe",  "Sebastian",  "Joy",  "Alexander"
]

function ConditionalRenderingno1(){
    return( 
        <div>
            {names.map((name) => (
                <div key={name}>
                    <span className="text-green-500">
                        {name.slice(0, 3)}
                    </span>
                    <span className="text-yellow-500">
                        {name.slice(4, 6)}
                    </span>
                    <span className="text-red-500">
                        {name.slice(6)}
                    </span>
                </div>
            ))}
        </div>
    )
}
export default ConditionalRenderingno1;