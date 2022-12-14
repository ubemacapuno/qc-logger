import supabase from '../config/supabaseClient'
import { Link } from 'react-router-dom'

const ReportCard = ({ report, onDelete }) => {

    //Logic for Pass/Fail
    let qcResult = "Fail"
    if(report.ph > 5 && report.ph < 7.5 && report.etoh <= 5 && report.acn <=0.4 && report.sterility === "Pass" && report.kryptofix === "Pass" && report.endotoxin <= 0.5){
        qcResult = "Pass"
    }

    //Delete function in supabase:
    const handleDelete = async () => {
        const { data, error } = await supabase
            .from('reports')
            .delete()
            .eq('id', report.id)
            .select()

        if(error){
            console.log(error)
        }

        if(data){
            console.log(data)
            onDelete(report.id)
        }
    }

    return (
        <div className="smoothie-card">
            <h3>{report.batch}</h3>
            <p>EOS Date {report.date}</p>
            <div className={qcResult}>{qcResult}</div>
            
            {/* Edit and Delete buttons: */}
            <div className="buttons">
                <Link to={'/' + report.id}>
                    <i className="material-icons edit">edit</i>
                </Link>
                <i className="material-icons delete" onClick={handleDelete}>delete</i>
                <Link to={'/view/' + report.id}>
                    <i className="material-icons open-in-new">open_in_new</i>
                </Link>
            </div>
        </div>
    )
}
export default ReportCard