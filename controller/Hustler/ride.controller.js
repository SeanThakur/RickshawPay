import ride from '../../service/Hustler/ride.service.js';

export default {
    allDrivers: (req,res) => {
        ride.getAllDrivers((err,  result) => {
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
    setLocation: (req,res) => {
        const body = req.body;
        ride.setLocations(body, (err, result) => {
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
    updateLocation: (req,res) => {
        const body = req.body;
        ride.updateUserLocations(body, (err, result) => {
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
    fetchUserLocation: (req,res) => {
        const params = req.params;
        ride.getUserLocations(params, (err, result) => {
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
    setRide: (req,res) => {
        const body = req.body;
        ride.setRide(body, (err, result) => {
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
    getRideConfirmationDetails: (req,res) => {
        const body = req.params;
        ride.rideConfirmation(body, (err, result) => {
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
    getBookingCheckedInfo: (req,res) => {
        const body = req.params;
        ride.rideBookingCheckedQuery(body, (err, result) => {
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
    getDriverPosition: (req,res) => {
        const body = req.params;
        ride.getDriverPositionQuery(body, (err, result) => {
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
