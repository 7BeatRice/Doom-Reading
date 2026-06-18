import {pool} from '../config/database.js'

const getBooks = async(req, res) => {
    try{
         res.status(200).json(results.rows)
    }
    catch(error){
        res.status(409).json({error: error.message})
    }
   

}

export default {getBooks}