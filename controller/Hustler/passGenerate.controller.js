import passGeneration from '../../service/Hustler/passGenerate.service.js'

export default {
    setPass: (req,res) => {
        const data = req.body;
        passGeneration.GeneratePass(data, (err, result) =>{
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Error :- ${err}`
                });
            } else if(result) {
                return res.status(200).json({
                    success: true,
                    data: result
                });
            }
        });
    },
    getPass: (req,res) => {
        const data = req.params;
        passGeneration.GetPass(data, (err, result) =>{
            if(err) {
                return res.status(500).json({
                    success: false,
                    message: `Error :- ${err}`
                });
            } else if(result) {
                return res.status(200).json({
                    success: true,
                    data: result
                });
            }
        });
    }
}