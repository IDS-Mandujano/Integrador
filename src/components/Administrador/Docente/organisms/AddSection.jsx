import Title from "../atoms/Title"
import Text from "../atoms/Text"
import FormAlumno from "../molecules/FormAlumno"

function AddSection(){
    return (
        <div>
            <div>
                <Title/>
                <Text/>
            </div>
            <div> 
                <FormAlumno/>
            </div>
        </div>
    )
}

export default AddSection