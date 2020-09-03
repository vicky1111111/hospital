import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    
    //添加
    insert(usersVO) {
        return axios({
            method: 'post',
            url: '/api/users/insert',
            data: {
                "id": usersVO.id,
                "name": usersVO.name,
                "sex": usersVO.sex,
                "age": usersVO.age,
                "phone":usersVO.phone
                
            }

        })
    },

	//根据id删除用户信息
    deleteById(id) {
        return axios({
            method: 'get',
            url: '/api/users/deleteById/' + id
        })
    },
    
    //修改用户信息
    update(usersVO) {
        return axios({
            method: 'post',
            url: '/api/users/update',
            // data:supporterData
            data: {
                    "id": usersVO.id,
                    "name": usersVO.name,
                    "sex": usersVO.sex,
                    "age": usersVO.age,
                    "phone":usersVO.phone
            }
        })
    },
   
    //根据id查询用户信息
    selectById(id) {
        return axios({
            method: 'get',
            url: '/api/users/selectById/' +id
        })
    },
    //根据姓名查询用户信息
    selectByName(name) {
        return axios({
            method: 'get',
            url: '/api/users/selectByName/' + name
        })
    },
    //查询所有用户信息
    listALL() {
        return axios({
            method: 'get',
            url: '/api/users/listALL'
        })
    },
 
    //分页
    UserList(pageVo) {
        return axios({
            method: 'get',
            url: '/api/users/UserList/' +  pageVo.pageNum + '/' + pageVo.pageSize
            
        })
    },
    login(usersVO){
        return axios({
            method: 'post',
            url: '/api/users/login',
            data: {
                    "name": usersVO.name,
                    "pwd": usersVO.pwd,
            },
        
        })
    },
}
        
          

