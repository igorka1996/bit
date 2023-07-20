import jwt from 'jsonwebtoken'
export default async (req, res, next) => {
    const str = req.headers.authorization
    // let result;
    // if (str && str.includes('token')) {
    //     result = str.match(/token=([^;]*)/)[1];
    // }
    if (str) {
        try {
            const decoded = await jwt.verify(str, 'secret123')
            req.userId = decoded._id
            next();
        } catch (err) {
            return res.status(403).json({
                message: 'Нет доступа'
            })
        }
    } else {
        return res.status(403).json({
            message: 'Нет доступа'
        })
    }
}