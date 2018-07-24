//let jobs = require('../../config/jobs.js');
const Job = require('../../model/Job.js');

module.exports = app => {
    
    const jobsCollection = app.config.firebase.collection('jobs');

    app.get('/jobs', async (req, res) => {
        try {
            const docs = await jobsCollection.get();
            let jobs = [];
            docs.forEach( doc => {
                jobs.push(extractJob(doc));
            })
            return res.send(jobs);
        } catch (error) {
            return res.status(500).send('error');
        }
    });

    app.get('/jobs/:id', async (req, res) => {
        try {
            const doc = await jobsCollection.doc(req.params.id).get();
            if (doc) {
                return res.send(extractJob(doc));
            } else {
                throw Error;
            }

        } catch (error) {
            return res.status(500).send('errooooor');
        }
    });

    app.post('/jobs', async (req, res) => {
        jobsCollection.add(req.body)
        .then (ref => {
            return res.send(ref.id);
        })
        .catch(error => {
            return res.status(500).send(error);
        });
        /*try {
            let job = {
                "name": req.body.name, 
                "salary": req.body.salary,
                "area": req.body.area,
                "description": req.body.description,
                "skills": req.body.skills,
                "differentials": req.body.differentials,
                "isPcd": req.body.isPcd,
                "isActive": req.body.isActive
            }
            const fbReturn = jobsCollection.add(job);
            if (fbReturn) {
                return res.send(fbReturn.id);
            } else {
                throw Error;
            }
        } catch (error) {
            return res.status(500).send(error);        
        }*/
    });



    app.put('/jobs/:id', async (req, res) => {
        try {
            if (!req.body) {
                return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
            }
            let index = await jobs.findIndex(job => job.id === req.params.id);
            if (index >= 0) {
                Object.keys(req.body).forEach(job => {
                    jobs[index][job] = req.body[job]
                })
                return res.send(`job com o id ${req.params.id} alterada com sucesso`);
            }
            return res.send("nao foi encontrado job com esse id");
        } catch (error) {
            return res.status(500).send(error);
        }
    });


    app.delete('/jobs/:id', (req, res) => {
        try {
            const deletedJob = jobsCollection.doc(req.params.id).delete();
            if (deletedJob) {
                return res.send(`Vaga excluída com successo`);
            } else {
                throw Error;
            }
        } catch (error) {
            return res.status(500).send(error);        
        }
    });
    
    const extractJob = (job) => {
        let v = job.data();
        return {
            id: job.id,
            name: v.name,
            salary: v.salary,
            description: v.description,
            skills: v.skills,
            area: v.area,
            differentials: v.differentials,
            isPcd: v.isPcd,
            isActive: v.isActive
        }
    }
    
    const createJob = (obj) => new Job (
        obj.id, obj.name, obj.salary , obj.description,
        obj.skills, obj.area, obj.differentials, obj.isPcd, obj.isActive
    );

}
