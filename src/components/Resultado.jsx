import "../css/global.css"
import "../css/resultado.css"

const TabelaIMC = ({ resultado }) => {
    if (resultado < 18) {
        return (
            <tr>
                <td>Abaixo do Peso</td>
                <td>Menor que 18</td>
            </tr>
        )
    } else if (resultado >= 18 && resultado < 25) {
        return (
            <tr>
                <td>Peso Normal</td>
                <td>18 - 24.9</td>
            </tr>
        )
    } else if (resultado >= 25 && resultado < 30) {
        return (
            <tr>
                <td>Sobrepeso</td>
                <td>25 - 29.9</td>
            </tr>
        )
    } else if (resultado >= 30 && resultado < 35) {
        return (
            <tr>
                <td>Obesidade</td>
                <td>30 - 34.9</td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>Obesidade Mórbida</td>
                <td>Maior ou igual a 35</td>
            </tr>
        )
    }
}

// componente principal
function Resultado({ resultado }) {
    return (
        <div>
            <div className="resultado">
                <h2>
                    Seu IMC é de <span>{resultado}</span>
                </h2>
            </div>
            <table>
                <thead className="tabelaheader">
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    <TabelaIMC resultado={resultado} />
                </tbody>
            </table>
        </div>
    )
}

export default Resultado
