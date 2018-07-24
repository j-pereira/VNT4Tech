import React, { Component } from 'react';
import axios from 'axios';

class JobForm extends Component {

    state = {
        newJob: {}
    }


    postDataHandler = (event) => {
        let newJob = {
            ...this.state.newJob
        };

        axios.post('/jobs/', newJob)
            .then((response) => {
                newJob.id = response.data;
                this.props.addJobToList(newJob);
            })
            .catch(() => {

            });
        event.preventDefault();
        event

    }

    changeValueHandler = (attributeName, value) => {
        let currentJob = this.state.newJob;
        currentJob[attributeName] = value;
        this.setState({ newJob: currentJob });
    }

    render() {

        return (
            <form>
                <div className="form-group">
                    <label for="Name">Nome</label>
                    <input 
                        id="name"
                        onChange={(event) => {this.changeValueHandler('name', event.target.value)}} 
                        type="text" 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label for="Description">Descrição</label>
                    <textarea 
                        id="description"
                        onChange={(event) => {this.changeValueHandler('description', event.target.value)}} 
                        className="form-control" 
                        rows="3">
                    </textarea>
                </div>
                <div className="form-row">
                    <div className="col form-group ">
                        <label for="Skills">Habilidades necessárias</label>
                        <textarea 
                            id="skills"
                            onChange={(event) => {this.changeValueHandler('skills', event.target.value)}} 
                            className="form-control" 
                            rows="3">
                        </textarea>
                    </div>
                    <div className="col form-group">
                        <label for="differentials">Diferenciais</label>
                        <textarea 
                            id="differentials"
                            onChange={(event) => {this.changeValueHandler('differentials', event.target.value)}} 
                            className="form-control" 
                            rows="3">
                        </textarea>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col form-group">
                        <label for="sallary">Salário Base</label>
                        <input 
                            id="sallary"
                            onChange={(event) => {this.changeValueHandler('salary', event.target.value)}} 
                            type="sallary" 
                            className="form-control"/>
                    </div>
                    <div className="col form-group">
                        <label for="area">Área</label>
                        <select className="custom-select" onChange={(event) => {this.changeValueHandler('area', event.target.value)}} >
                            <option selected>Selecione uma área</option>
                            <option value="Desenvolvimento">Desenvolvimento</option>
                            <option value="Designer">Designer</option>
                            <option value="Testes">Testes</option>
                        </select>
                    </div>
                </div>

                <div className="form-group form-check">
                    <input 
                        id="pcd" 
                        onChange={(event) => {this.changeValueHandler('pcd', event.target.value)}}
                        type="checkbox" 
                        className="form-check-input" 
                    />
                    <label className="form-check-label" for="exampleCheck1">Vaga para PCD</label>
                </div>
                <button type="submit" className="btn btn-success float-right" onClick={this.postDataHandler} >Salvar</button>          
            </form>
        )
    }

}


export default JobForm;
