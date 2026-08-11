const names=[  "Bo", "Maximillian",  "Kai",  "Genevieve",  "Mia",  "Bartholomew",  "Leo",  "Alexandria",  "Ian",  "Christopher",  "Eva",  "Evangeline",  "Ned",  "Penelope",  "Ray",  "Wilhelmina",  "Zoe",  "Sebastian",  "Joy",  "Alexander"
]
function RenderingList1(){
    return(
        <div className="p-5">
            {names.map((name, index)=>(
                <p key={names}>{index + 1}.{name}</p>
            ))}
        </div>
    )
}
export default RenderingList1;