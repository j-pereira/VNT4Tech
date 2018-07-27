//let jobs = require('../../config/jobs.js');
const Job = require('../../model/Job.js');

const auth = require('../../config/security/tokenValidator');

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

    app.post('/jobs', auth, async (req, res, next) => {
        /*
        //react
        jobsCollection.add(req.body)
        .then (ref => {
            return res.send(ref.id);
        })
        .catch(error => {
            return res.status(500).send(error);
        });
        */
        try {
            let job = {
                "name": req.body.name, 
                "salary": req.body.salary,
                "area": req.body.area,
                "description": req.body.description,
                "skills": req.body.skills,
                "differentials": req.body.differentials,
                // "isPcd": req.body.isPcd,
                // "isActive": req.body.isActive
            }
            const fbReturn = await jobsCollection.add(job);
            if (fbReturn) {
                return res.send(`Vaga ${fbReturn.id} adicionada com sucesso`);
            } else {
                throw Error;
            }
        } catch (error) {
            return res.status(500).send(error);        
        }
    });



    app.put('/jobs/:id', async (req, res) => {
        try {
            if (!req.body) {
                return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
            }
            const jobDoc = await jobsCollection.doc(req.params.id).update(req.body);
            if (jobDoc) {
                return res.send(`Vaga ${req.params.id} foi atualizada com sucesso!`);
            } else {
                return res.send(`A vaga ${req.params.id} não foi encontrada`);
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    })


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
