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
            const jobsDoc = app. config.firebase.collection('jobs').doc(req.params.id);

            //const docs = await jobsCollection.get();
            //const doc = jobsCollection.doc(req.params.id);
            //let job = await doc.get();
            
            const doc = await jobsDoc.get();
            //console.log(job);
            return res.send(extractedJob(doc));
    
            /*
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.id, '=>', doc.data());
                });
            });
            */

        } catch (error) {
            return res.status(500).send('errooooor');
        }
    });

    app.post('/jobs', async (req, res) => {
        try {
            const fbReturn = await jobsCollection.doc().set(req.body);
            if (fbReturn) {
                return res.send('Adicionado com sucesso!');
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
            let length = jobs.length;
            jobs.splice(jobs.findIndex(el => el.id === req.params.id), 1);
            if (jobs.length < length) return res.send(`A job com o id ${req.params.id} com successo`);
            else return res.status(500).send(`Não foi possível deletar a job ${req.params.id}`);
        } catch (error) {
            return res.status(500).send(error);        
        }
    });
    
    const extractJob = (job) => {
        let v = job.data();
        return {
            id: job.id,
            name: v.name,
            description: v.description,
            skills: v.skills,
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
