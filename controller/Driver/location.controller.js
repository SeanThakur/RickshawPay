import location from '../../service/Driver/location.service.js'

export default {
    location: (req,res) => {
        const body = req.body;
        location.locationQuery(body, (err, result) => {
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