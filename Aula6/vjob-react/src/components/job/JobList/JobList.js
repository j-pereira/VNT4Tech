import React, { Component } from 'react';
import Card from '../Card/Card';
import jobsConfig from '../../../assets/jobs';

class JobList extends Component {
    
    state = {
        jobs: []
    }

    constructor () { 
        super();
    }

    componentDidMount() {
        this.setState({ jobs: jobsConfig });
    }

    jobRemoveHandler = (id, title) => {
        if (window.confirm(`Deseja realmente excluir a vaga com id ${title}?`)) {
            window.alert("Excluído com sucesso");
        }
    } 

    jobEditHandler = (id, title) => {
        window.alert(`A vaga ${title} foi atualizada`);
    }


    render () {

        let jobsFound = this.state.jobs.map(job => {
            return (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <Card 
                        area={job.area} 
                        title={job.name}
                        description={job.description}
                        salary={job.salary}
                        removeHandler={() => this.jobRemoveHandler(job.id, job.title)}
                        editHandler={() => this.jobEditHandler(job.id, job.title)}
                    />
                </div>
            )
        });


        return (
            <div className="row">
                {jobsFound}
            </div>
        )
    }

}


export default JobList;
