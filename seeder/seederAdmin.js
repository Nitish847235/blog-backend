const User = require('../model/user');
const {USER_TYPES} = require('../constants/authConstant');

const seederAdmin = () => {

  const admins = [
    new User({
        email:'admin@blog.com',
        password:'123456',
        userType: USER_TYPES.Admin
    })
]
      admins.map(async (p, index) => {
        const result = await p.save()
      })
    
    }

module.exports = seederAdmin