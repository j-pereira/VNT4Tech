import React, { Component } from 'react';
import Card from '../Card/Card';
import jobsConfig from '../../../assets/jobs';
import Loading from '../../navigation/Loading/Loading';
import axios from 'axios';
import JobForm from '../JobForm/JobForm';
import Collapse from '../../../hoc/Collapse/Collapse';
import Dialog from '../Dialog/Dialog';

class JobList extends Component {
    
    state = {
        jobs: [],
        buttonName: "Criar vaga",
        dialog: false 
    }

    constructor () { 
        super();
    }

    addJobToList = (newItem) => {
        let currentJobs = this.state.jobs;
        currentJobs.push(newItem);
        this.setState( { jobs: currentJobs } );
    }

    componentDidMount() { 
        axios.get('/jobs')  //para enviar com param, colocar '/job/' + id
            .then( response => {
                this.setState({ jobs: response.data });
                console.log(response.data);
            })
            .catch( error => {
                console.error(error);
            });

    }

    jobRemoveHandler = (id, name) => {
        if (window.confirm(`Deseja realmente excluir a vaga ${name}?`)) {
            axios.delete(`/jobs/${id}`)
                .then( response => {
                    let updatedJobList = this.state.jobs;
                    const index = updatedJobList.findIndex(job => job.id == id);
                    updatedJobList.splice(index, 1);
                    this.setState({ jobs: updatedJobList })
                    window.alert(`${name} ${response.data}`);
                })
                .catch( error => {
                    window.alert(error);
                });
        }
    } 

    jobEditHandler = (id, name) => {
        //window.alert(`A vaga ${name} foi atualizada`);
        this.setState( { dialog: true });
    }



    render () {

        let render;

        let jobsFound = this.state.jobs.map(job => {
            return (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3 mt-3">
                    <Card 
                        area={job.area} 
                        title={job.name}
                        description={job.description}
                        salary={job.salary}
                        removeHandler={() => this.jobRemoveHandler(job.id, job.name)}
                        editHandler={() => this.jobEditHandler(job.id, job.name)}
                    />
                </div>
            )
        });

        render = (this.state.jobs != undefined && this.state.jobs.length > 0) ? jobsFound : <Loading />;

        return (
            <div>
                <Collapse innerText={this.state.buttonName}>
                    < JobForm addJobToList={this.addJobToList}/>
                </Collapse>
                <div className="row">
                    {render}
                </div>
            </div>
        )
    }

}


export default JobList;
