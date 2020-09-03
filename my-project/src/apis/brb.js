import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    
    //添加
    insert(brbVO) {
        return axios({
            method: 'post',
            url: '/api/Brb/insert',
            data: {
                "jzkh": brbVO.jzkh,
                "sfzh": brbVO.sfzh,
                "hzxm": brbVO.hzxm,
                "hzxb": brbVO.hzxb,
                "hznl":brbVO.hznl,
                "lxdh": brbVO.lxdh,
                "jtzz": brbVO.jtzz,

                }

        })
    },

	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/Brb/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(brbVO) {
        return axios({
            method: 'post',
            url: '/api/Brb/update',
            // data:supporterData
            data: {
                "jzkh": brbVO.jzkh,
                "sfzh": brbVO.sfzh,
                "hzxm": brbVO.hzxm,
                "hzxb": brbVO.hzxb,
                "hznl":brbVO.hznl,
                "lxdh": brbVO.lxdh,
                "jtzz": brbVO.jtzz,
            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/Brb/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/Brb/selectByName/' + name
        })
    },
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/Brb/listALL'
        })
    },
 
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/Brb/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    login(usersVO){
        return axios({
            method: 'post',
            url: '/api/Brb/login',
            data: {
                    "name": usersVO.name,
                    "pwd": usersVO.pwd,
            },
        
        })
    },
}
        
          

