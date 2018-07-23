import React from 'react';


const jobForm = () => {

    return (

        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Descrição</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-row">
                <div className="col form-group ">
                    <label for="exampleFormControlTextarea1">Habilidades necessárias</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col form-group">
                    <label for="exampleFormControlTextarea1">Diferenciais</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>

            <div className="form-row">
                <div className="col form-group">
                    <label for="exampleInputEmail1">Salário Base</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                </div>
                <div className="col form-group">
                    <label for="exampleInputEmail1">Área</label>
                    <select className="custom-select">
                        <option selected>Selecione uma área</option>
                        <option value="1">Desenvolvimento</option>
                        <option value="2">Designer</option>
                        <option value="3">Testes</option>
                    </select>
                </div>
            </div>

            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Vaga para PCD</label>
            </div>
            <button type="submit" className="btn btn-success float-right">Criar vaga</button>
            
        </form>

    )
};

export default jobForm;
