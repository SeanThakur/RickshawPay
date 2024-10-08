import profile from '../../service/Driver/profile.service.js'

export default {
    profile: (req,res) => {
        const data = req.body;
        profile.profileQuery(data, (err, result) =>{
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
    getProfile: (req,res) => {
        const data = req.params;
        profile.getProfileQuery(data, (err, result) =>{
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