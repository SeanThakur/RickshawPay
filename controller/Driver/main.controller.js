import main from '../../service/Driver/main.service.js'

export default {
    driverRide: (req,res) => {
        const data = req.params;
        main.driverRideQuery(data, (err, result) =>{
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
    driverBookRide: (req,res) => {
        const data = req.body;
        main.driverRideBookedQuery(data, (err, result) =>{
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
    driverLocation: (req,res) => {
        const data = req.params;
        main.driverLocationQuery(data, (err, result) =>{
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