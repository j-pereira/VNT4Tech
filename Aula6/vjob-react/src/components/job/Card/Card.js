import React from 'react';
import imgDeveloper from '../../../assets/images/developer.png';
import imgDesigner from '../../../assets/images/designer.png';
import imgTester from '../../../assets/images/tester.png';

const card = (props) => {
    
    let image = null;

    switch (props.area) {
        case 'Desenvolvimento':
            image = imgDeveloper;
            break;
        case 'Designer':
            image = imgDesigner;
            break;
        case 'Testes':
            image = imgTester;
            break;
        default :
            image = null;
            break;
    }

    return (
        <div className="card">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p>
                    <strong>Salário base:</strong>
                    <br/>{props.salary}
                </p>
                <button onClick={props.editHandler} className="btn btn-warning mr-2"><i className="fas fa-edit"></i> Editar</button>
                <button onClick={props.removeHandler} className="btn btn-danger"><i className="fas fa-trash-alt"></i> Excluir</button>
            </div>
        </div>
)};

export default card;