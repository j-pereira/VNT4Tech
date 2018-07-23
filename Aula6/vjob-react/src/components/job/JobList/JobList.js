import React, { Component } from 'react';
import Card from '../Card/Card';
import jobsConfig from '../../../assets/jobs';
import Loading from '../../navigation/Loading/Loading';
import axios from 'axios';

class JobList extends Component {
    
    state = {
        jobs: []
    }

    constructor () { 
        super();
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
        
        //this.setState({ jobs: jobsConfig });

    }

    jobRemoveHandler = (id, title) => {
        if (window.confirm(`Deseja realmente excluir a vaga ${title}?`)) {
            axios.delete('/jobs/'+ id, {params: { id: id }})
                .then( () => {
                    window.alert("Excluído com sucesso");
                    //this.state.setState(jobs);
                })
                .catch( error => {
                    window.alert(error);
                });
        }
    } 

    jobEditHandler = (id, title) => {
        window.alert(`A vaga ${title} foi atualizada`);
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
            <div className="row">
                {render}
            </div>
        )
    }

}


export default JobList;
