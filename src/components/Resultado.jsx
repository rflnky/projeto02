import "../css/global.css"
import "../css/resultado.css"

const TabelaIMC = ({ resultado }) => {
    if (resultado < 18) {
        return (
            <>
                <h1>Abaixo do Peso</h1>
                <h2>Menor que 18</h2>
            </>
        )
    } else if (resultado >= 18 && resultado < 25) {
        return (
            <>
                <h1>Peso Normal</h1>
                <h2>18 - 24.9</h2>
            </>
        )
    } else if (resultado >= 25 && resultado < 30) {
        return (
            <>
                <h1>Sobrepeso</h1>
                <h2>25 - 29.9</h2>
            </>
        )
    } else if (resultado >= 30 && resultado < 35) {
        return (
            <>
                <h1>Obesidade</h1>
                <h2>30 - 34.9</h2>
            </>
        )
    } else {
        return (
            <>
                <h1>Obesidade Mórbida</h1>
                <h2>Maior ou igual a 35</h2>
            </>
        )
    }
}



//destruct destruturando  = acesso propriedades de outro componentes
function Resultado({resultado}){
    return (
        <div>
            <div className="resultado">
                <h2>
                    Seu IMC é de <span>(resultado)</span>
                </h2>
            </div>
            <table>
                <head className="tabelaheader">
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </head>
                <tbody className="tableBody">
                    <tr>(TabelaIMC(resultado))</tr>
                </tbody>
            </table>
        </div>
    )
}

export default Resultado
