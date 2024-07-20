import Attendence from "../models/attendence.js";
import { Op } from 'sequelize';

export const attendenceChecking=async(req,res)=>{
try {
    console.log("attendence Checking");
// console.log(req.token);
const today = new Date();
const startOfDay = new Date(today.setHours(0, 0, 0, 0));
const endOfDay = new Date(today.setHours(23, 59, 59, 999));
const userId=req.token.id

const attendanceRecord = await Attendence.findOne({
    where: {
        user_id: userId,
        createdAt: {
            [Op.between]: [startOfDay, endOfDay]
        }
    }
});

if (attendanceRecord) {
    console.log("attendence marked",attendanceRecord.dataValues);
    res.status(200).json({  message: 'Attendance marked today', data: attendanceRecord });
} else {
    console.log("attendence not marked",attendanceRecord);
    res.status(404).json({ message: 'Attendance not marked today' });
}

} catch (error) {
    console.error("error from login post section",error);
        res.status(500).json({ message: 'Server error',error });  
}
}


export const attendenceMarking=async(req,res)=>{
    try {
        console.log("attendence Marking ");
        console.log(req.token);
        const response=await Attendence.create({user_id:req.token.id,is_present:true})
        console.log(response);
        res.status(200).json({message: 'Attendance marked successfully', data: response });
    } catch (error) {
        console.error("error from login post section",error);
        res.status(500).json({ message: 'Server error',error });
    }
   

}